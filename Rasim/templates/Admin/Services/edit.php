<section class="content-header">
	<div class="container-fluid">
		<div class="row mb-2">
			<div class="col-sm-6">
				<h1>Редактирование</h1>
			</div>
		</div>
	</div><!-- /.container-fluid -->
</section>

<?php echo $this->Form->create($data, ['type' => 'file', 'onsubmit' => 'submitForm()']); ?>

<section class="content">
	<div class="row">
		<div class="col-md-12">
			<div class="card card-primary">
				<div class="card-header">
					<h3 class="card-title">Данные</h3>
					<div class="card-tools">
						<a href="/admin/services" type="button" class="btn btn-tool">
							<i class="fas fa-arrow-left"></i>
						</a>
					</div>
				</div>
				<div class="card-body">
					<div class="form-group">
						<label for="inputOrder">Приоритет</label>
						<?= $this->Form->number('item_order', array('id' => 'inputOrder', 'class' => 'form-control', 'value' => 0)); ?>
					</div>
					<div class="form-group">
						<label for="inputTitle">Название</label>
						<?= $this->Form->text('title', array('id' => 'inputTitle', 'class' => 'form-control', 'required')); ?>
					</div>
					<div class="form-group">
						<label for="WorkText">Краткое описание</label>
						<?= $this->Form->textarea('text', array('id' => 'WorkText', 'class' => 'form-control')); ?>
					</div>
					<div class="form-group">
						<label for="inputPrice">Цена</label>
						<?= $this->Form->number('price', array('id' => 'inputPrice', 'class' => 'form-control',)); ?>
					</div>
					<div class="form-group">
						<label for="inputBody">Описание</label>
						<?= $this->Form->textarea('body', array('id' => 'inputBody', 'class' => 'form-control')); ?>
					</div>

					<div class="form-group">
                        <label for="reviewimg">Картинка </label>
                        <?php if(!empty($data['img'])): ?>
                        <div class="model_info_img">
                            <div class="model_item_container">
                                <div class="model_item">
                                    <img src="/img/services/thumbs/<?=$data['img']?>">
                                </div>
                            </div>
                        </div>
                        <?php endif ?>
                        <div class="input-group">
                            <div class="custom-file">
                                <?= $this->Form->input('img', array('class' => 'custom-file-input', 'id' => 'reviewimg', 'type' => 'file', 'accept' => 'image/jpeg, image/png, image/jpg, image/gif')); ?>
                                <label class="custom-file-label" for="reviewimg"></label>
                            </div>
                        </div>
                    </div>


					<div class="submit_row">
						<?php echo $this->Form->button('Добавить', array('class' => 'btn btn-success')); ?>
				    </div>
				</div>
			</div>
		</div>

		<div class="col-md-12">
	        <div class="card card-secondary">
	            <div class="card-header">
	                <h3 class="card-title">SEO</h3>
	                <div class="card-tools">
	                    <button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
	                        <i class="fas fa-minus"></i>
	                    </button>
	                </div>
	            </div>
	            <div class="card-body">
	                <div class="form-group">
	                    <label for="seoMetaTitle">Мета заголовок</label>
	                    <?php echo $this->Form->text('meta_title', array('class' => 'form-control', 'id' => 'seoMetaTitle')); ?>
	                </div>
	                <div class="form-group">
	                    <label for="seoKeywords">Ключевые слова</label>
	                    <?php echo $this->Form->text('meta_keywords', array('class' => 'form-control', 'id' => 'seoKeywords')); ?>
	                </div>
	                <div class="form-group">
	                    <label for="seoDescription">Описание</label>
	                    <?php echo $this->Form->textarea('meta_description', array('class' => 'form-control', 'id' => 'seoDescription')); ?>
	                </div>
		            
		            <div class="submit_row">
						<?php echo $this->Form->button('Добавить', array('class' => 'btn btn-success')); ?>
				    </div>
	            </div>
	        </div>
	    </div>
	</div>
</section>
<?php echo $this->Form->end(); ?>

<script type="text/javascript">
    CKEDITOR.replace( 'inputBody' );
</script>