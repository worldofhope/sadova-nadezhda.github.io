<?php 

namespace App\Model\Table;

use Cake\ORM\Table;
use Cake\Validation\Validator;
use Cake\ORM\RulesChecker;

class ServicesTable extends Table{

	public function initialize(array $config): void{
		$this->setTable('services');

	}

	public function validationDefault(Validator $validator): Validator{

		$validator
            ->notEmptyString('title', __('Название не может быть пустым'));

		return $validator;
	}
}


 ?>