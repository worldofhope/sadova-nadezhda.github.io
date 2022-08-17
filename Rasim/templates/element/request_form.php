<section class="order section_sec" id="order">
    <div class="container">
        <div class="order__wrapper">
            <div class="order__title section-title"><?=__('Хотите связаться с нами?')?></div>
            <div class="order__subtitle"><?=__('Оставьте свои контактные данные в форме ниже, мы обязательно вам перезвоним и ответим на ваши вопросы.')?> </div>
            <?php echo $this->Form->create(null, ['url' => '/requests/send', 'class' => 'form', 'onsubmit' => 'submitForm()']); ?>
                <div class="name-form">
                    <input class="order_input" type="text" name="name" required="" placeholder="<?=__('Ваше имя')?>">
                </div>
                <div class="phone-form">
                    <input class="order_input" type="tel" name="phone" required="" placeholder="+7 ( ___ ) ___ ___ __">
                </div>
                <div class="form-btn-bg">
                    <p class="form-request_text"><input type="checkbox" name="option5" value="a5"><?=__('Согласие на')?> <a class="pol" href="#" target="_blank"><?=__('Политику<br> конфиденциальности')?> </a></p>
                    <div class="btn-form">
                        <button type="submit"  class="btn-line"><?=__('Оставить заявку')?></button>
                    </div>
                </div>
            <?php echo $this->Form->end(); ?>
        </div>
    </div>
</section>