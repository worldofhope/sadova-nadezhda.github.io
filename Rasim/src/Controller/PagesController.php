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

use Cake\ORM\Query;



/**
 * Static content controller
 *
 * This controller will render views from templates/Pages/
 *
 * @link https://book.cakephp.org/4/en/controllers/pages-controller.html
 */
class PagesController extends AppController
{
    /**
     * Displays a view
     *
     * @param string ...$path Path segments.
     * @return \Cake\Http\Response|null
     * @throws \Cake\Http\Exception\ForbiddenException When a directory traversal attempt.
     * @throws \Cake\View\Exception\MissingTemplateException When the view file could not
     *   be found and in debug mode.
     * @throws \Cake\Http\Exception\NotFoundException When the view file could not
     *   be found and not in debug mode.
     * @throws \Cake\View\Exception\MissingTemplateException In debug mode.
     */

    public function initialize(): void{
        parent::initialize();
        
        $this->loadComponent('Paginator');
        $this->loadModel('Steps');
        $this->loadModel('Advans');
        $this->loadModel('Qualities');
        $this->loadModel('Catalogs');
        $this->loadModel('Services');
    }
    
    public function home(): void{

        $services = Cache::read('services', 'long');
        if( !$services ){
            $all_services = $this->Services->find('all')
                ->orderDesc('item_order')
                ->limit(10)
                ->toList();

            Cache::write('services', $all_services, 'long');
            $services = Cache::read('services', 'long');
        }

        $qualities = Cache::read('qualities', 'long');
        if( !$qualities ){
            $all_qualities = $this->Qualities->find('all')
                ->orderDesc('item_order')
                ->toList();

            Cache::write('qualities', $all_qualities, 'long');
            $qualities = Cache::read('qualities', 'long');
        }

        $steps = Cache::read('steps', 'long');
        if( !$steps ){
            $all_steps = $this->Steps->find('all')
                ->orderDesc('item_order')
                ->toList();

            Cache::write('steps', $all_steps, 'long');
            $steps = Cache::read('steps', 'long');
        }

        $advans = Cache::read('advans', 'long');
        if( !$advans ){
            $all_advans = $this->Advans->find('all')
                ->orderDesc('item_order')
                ->toList();

            Cache::write('advans', $all_advans, 'long');
            $advans = Cache::read('advans', 'long');
        }

        $catalogs = Cache::read('catalogs', 'long');
        if( !$catalogs ){
            $all_catalogs = $this->Catalogs->find('all')
                ->orderDesc('item_order')
                ->toList();

            Cache::write('catalogs', $all_catalogs, 'long');
            $catalogs = Cache::read('catalogs', 'long');
        }

        $page = $this->Pages->get(1);
        if( $page ){
            $meta['title'] = $page['meta_title'];
            if( !$meta['title'] ){
                $meta['title'] = $page['title'];
            }
            $meta['desc'] = $page['meta_description'];
            $meta['keys'] = $page['meta_keywords'];
        }

        $this->set( compact('meta', 'steps', 'advans', 'qualities', 'catalogs','services') );
    }

    public function catalogs(): void{

        $catalogs = Cache::read('catalogs', 'long');
        if( !$catalogs ){
            $all_catalogs = $this->Catalogs->find('all')
                ->orderDesc('item_order')
                ->toList();

            Cache::write('catalogs', $all_catalogs, 'long');
            $catalogs = Cache::read('catalogs', 'long');
        }

        $page = $this->Pages->get(3);
        if( $page ){
            $meta['title'] = $page['meta_title'];
            if( !$meta['title'] ){
                $meta['title'] = $page['title'];
            }
            $meta['desc'] = $page['meta_description'];
            $meta['keys'] = $page['meta_keywords'];
        }
    
        $this->set( compact('meta','catalogs') );
    }

}
