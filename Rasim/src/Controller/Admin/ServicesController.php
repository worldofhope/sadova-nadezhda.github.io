<?php

namespace App\Controller\Admin;

use App\Controller\AppController; 
use Cake\Validation\Validator;
use Cake\I18n\I18n;

use Cake\Utility\Text;
use Cake\Cache\Cache;

class ServicesController extends AppController{

    public function initialize(): void{
        parent::initialize();
        $this->loadModel('Services');
        
        $this->loadComponent('Paginator');
    }

    public function index(){
        $model = 'Services';

        $cur_page = 1;
        if( isset($_GET['page']) && is_int(intval($_GET['page'])) ){
            $cur_page = $_GET['page'];
        }
        $per_page = 10;
        $offset = ($cur_page * $per_page) - $per_page;
        $pag_settings = [
            'limit' => $per_page,
        ];

        $data = $this->$model->find('all')
            ->limit($per_page)->offset($offset)
            ->toList();

        $this->set( compact('data') );

        $this->set('pagination', $this->paginate(
            $this->$model->find('all')
            ->orderDesc('item_order')
            ->limit($per_page), 
            $pag_settings
        ));
    }

    public function add(){
        $model = 'Services';


        if( $this->request->is('post') ){
            $data = $this->request->getData();

            $data['alias'] = Text::slug($data['title']);
            $data['alias'] = mb_strtolower($data['alias']);

            $created = $this->$model->find()
                ->where(['alias' => $data['alias']])->first();

            if( $created ){
                $data['alias'] = $this->_slug_render($data['alias']);

                $created = $this->$model->find()
                    ->where(['alias' => $data['alias']])->first();

                if( $created ){
                    $this->Flash->error( __('Запись с таким названием уже существует') );
                    return $this->redirect( $this->referer() );
                }
            }

            if( isset($data['img']) && $data['img'] ){
                $imageObject = $data['img'];
                $fileName = $imageObject->getClientFilename();
                unset($data['img']);
            }

            $entity = $this->$model->newEntity($data);

            if( isset($fileName) && $fileName ){
                $entity->img = $imageObject;
                if( $entity->get('img') == false ){
                    $entity->setError('img', [__('Ошибка валидации изображения для Главной')]);
                }
            }

            if( $entity->getErrors() ){
                $errors = $entity->getErrors();
                foreach( $errors as $index => $err ){
                    $this->Flash->error( $err[array_key_first($err)] );
                }
                return $this->redirect( $this->referer() );
            }


            if( $this->$model->save($entity) ){
                $this->Flash->success(__('Данные успешно сохранены'));
                $this->_cacheDelete();
                return $this->redirect( $this->referer() );
            } else{
                $this->Flash->error(__('Ошибка сохранения данных'));
            }
        }

        // $this->set( compact($errors) );
    }

    public function edit($item_id = null){
        $model = 'Services';


        $data = $this->$model->get($item_id);

        if ($this->request->is(['post', 'put'])) {
            $data1 = $this->request->getData();

            if( isset($data1['img']) && $data1['img'] ){
                $imageObject = $data1['img'];
                $fileName = $imageObject->getClientFilename();
                unset($data1['img']);
            }

            $entity = $this->$model->newEntity($data1);

            if( isset($fileName) && $fileName ){
                $entity->img = $imageObject;
                if( $entity->get('img') == false ){
                    $entity->setError('img', [__('Ошибка валидации изображения для Главной')]);
                }
            }

            if( $entity->getErrors() ){
                $errors = $entity->getErrors();
                foreach( $errors as $index => $err ){
                    $this->Flash->error( $err[array_key_first($err)] );
                }
                return $this->redirect( $this->referer() );
            }

            $new_data = $entity->toArray();
            $this->$model->patchEntity($data, $new_data);

            if ($this->$model->save($data)) {
                $this->Flash->success(__('Изменения сохранены'));
                $this->_cacheDelete();
                return $this->redirect( $this->referer() );
            }
            $this->Flash->error(__('Ошибка сохранения'));
        }

        $this->set( compact('data') );
    }

    public function delete($item_id = null){
        $model = 'Services';

        $this->request->allowMethod(['post', 'delete']);
        $data = $this->$model->get($item_id);

        $img_del = [];
        $img_del[] = $data['img'];

        if ($this->$model->delete($data)) {
            $this->Flash->success(__('Элемент успешно удален'));
            $this->_cacheDelete();
            $this->_imgDelete($img_del);
            return $this->redirect( $this->referer() );
        } else{
            $this->Flash->error(__('Ошибка удаления'));
        }
    }

    protected function _cacheDelete(){
        Cache::delete('services', 'long');
        
    }

    protected function _imgDelete($img_del = null){
        if( $img_del ){
            foreach( $img_del as $img_name ){
                if( $img_name ){
                    $fileName = WWW_ROOT.'img'.DS.'services'.DS.$img_name;
                    $fileNameThumbs = WWW_ROOT.'img'.DS.'services'.DS.'thumbs'.DS.$img_name;
                    if( file_exists($fileName) ){
                        unlink($fileName);
                    }
                    if( file_exists($fileNameThumbs) ){
                        unlink($fileNameThumbs);
                    }
                    clearstatcache();
                }
            }
        }
    }

    protected function _slug_render($slug){
        $slug_date = date('YmdHis');
        $slug = $slug . '_' . $slug_date;
        return $slug;
    }
}


 ?>