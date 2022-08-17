<?php 

namespace App\Model\Table;

use Cake\ORM\Table;
use Cake\Validation\Validator;
use Cake\ORM\RulesChecker;

class AdvansTable extends Table{

	public function initialize(array $config): void{
		$this->setTable('advans');

	}

	public function validationDefault(Validator $validator): Validator{
		$validator
		->requirePresence('title')
		->notEmptyString('title', 'Заполните название')
		->add('title', [
			'length' => [
				'rule' => ['minLength', 2],
				'message' => 'Название не может быть короче 2 символов'
			]
		]);

		return $validator;
	}
}


 ?>