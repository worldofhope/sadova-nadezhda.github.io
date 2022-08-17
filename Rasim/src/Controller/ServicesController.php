<?php
declare(strict_types=1);

/**
 * CakePHP(tm) : Rapid Development Framework (https://cakephp.org)
 * Copyright (c) Cake Software Foundation, Inc. (https://cakefoundation.org)
 *
 * Licensed under The MIT License
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright Copyright (c) Cake Software Foundation, Inc. (https://cakefoundation.org)
 * @link      https://cakephp.org CakePHP(tm) Project
 * @since     0.2.9
 * @license   https://opensource.org/licenses/mit-license.php MIT License
 */
namespace App\Controller;

use Cake\Core\Configure;
use Cake\Http\Exception\ForbiddenException;
use Cake\Http\Exception\NotFoundException;
use Cake\Http\Response;
use Cake\View\Exception\MissingTemplateException;

use Cake\Cache\Cache;



/**
 * Static content controller
 *
 * This controller will render views from templates/Pages/
 *
 * @link https://book.cakephp.org/4/en/controllers/pages-controller.html
 */
class ServicesController extends AppController
{

    public function initialize(): void{
        parent::initialize();
        
        $this->loadModel('Services');
        $this->loadModel('Pages');
        
        $this->loadModel('Steps');
        $this->loadComponent('Paginator');
    }

    public function index(): void{
        $model = 'Services';


        $cur_page = 1;
        if( isset($_GET['page']) && is_int(intval($_GET['page'])) ){
            $cur_page = $_GET['page'];
        }
        $per_page = 8;
        $offset = ($cur_page * $per_page) - $per_page;
        $pag_settings = [
            'limit' => $per_page,
        ];

        $data = $this->$model->find('all')
            ->order(['item_order' => 'DESC'])
            
            ->toList();

        $this->set('pagination', $this->paginate(
            $this->$model->find('all')
                ->order(['item_order' => 'DESC'])
                ->limit($per_page), 
            $pag_settings
        ));

        $page = $this->Pages->get(2);
        if( $page ){
            $meta['title'] = $page['meta_title'];
            if( !$meta['title'] ){
                $meta['title'] = $page['title'];
            }
            $meta['desc'] = $page['meta_description'];
            $meta['keys'] = $page['meta_keywords'];
        }

        $this->set( compact('data', 'meta') );
    }

    public function view($alias){
        $model = 'Services';

        $data = $this->$model->findByAlias($alias)
            ->first();
        $item_id = $data['id'];

        if( is_null($item_id) || !(int)$item_id || !$this->$model->get($item_id) ){
            throw new NotFoundException(__('Запись не найдена'));
        }

        $steps = Cache::read('steps', 'long');
        if( !$steps ){
            $all_steps = $this->Steps->find('all')
                ->orderDesc('item_order')
                ->toList();

            Cache::write('steps', $all_steps, 'long');
            $steps = Cache::read('steps', 'long');
        }

        $other_catalogs = '';
        $other_catalogs = $this->$model->find('all')
            ->where([$model.'.id !=' => $item_id])
            ->order([$model.'.item_order' => 'DESC'])
            ->limit(5)
            ->toList();
        

        $meta['title'] = $data['meta_title'];
        if( !$meta['title'] ){
            $meta['title'] = $data['title'];
        }
        $meta['desc'] = $data['meta_description'];
        $meta['keys'] = $data['meta_keywords'];

        $this->set( compact('data', 'meta','brands', 'steps','other_catalogs') );
    }
}
