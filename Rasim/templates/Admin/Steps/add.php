<section class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1>Добавление</h1>
            </div>
        </div>
    </div><!-- /.container-fluid -->
</section>

<?php echo $this->Form->create(null, ['type' => 'file', 'onsubmit' => 'submitForm()']); ?>

<!-- Main content -->
<section class="content">
    <div class="row">
        <div class="col-md-12">
            <div class="card card-primary">
                <div class="card-header">
                    <h3 class="card-title">Данные</h3>
                    <div class="card-tools">
                        <a href="/admin/steps" type="button" class="btn btn-tool">
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
					<div class="submit_row">
					<?php echo $this->Form->button('Добавить', array('class' => 'btn btn-success')); ?>
				</div>
                </div>
				
            </div>
        </div>
    </div>
</section>

<?php echo $this->Form->end(); ?>
