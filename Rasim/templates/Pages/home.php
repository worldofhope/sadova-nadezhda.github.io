<main>
    <section class="rasim">
        <div class="container">
            <div class="rasim__container">
                <h1 class="rasim__title caption"><?=$comps[4]['body']?></h1>
                <div class="rasim__buttons">
                    <a class="button-light button"
                        href="https://wa.me/+<?= preg_replace('/[^0-9]/', '', $comps[1]['body']) ?>"
                        target="_blank">Оставить заявку →</a>
                    <a class="button-dark button" href="/services">Ритуальные услуги →</a>
                </div>
                <div class="rasim__footer">
                    <a class="rasim__down-contact connection__link" href="#footer">Контакты</a>
                    <p class="rasim__down-address"><?=$comps[3]['body']?></p>
                </div>
            </div>
        </div>
    </section>
    <section class="services">
        <div class="container">
            <div class="services__container">
                <div class="services__header">
                    <h2 class="services__title caption"><span>Наши услуги</span>
                        <?=$comps[5]['body']?></h2>
                    <a class="button-light button btn-txt" href="/services">Смотреть все →</a>
                </div>
                <?php if( isset($services) && $services): ?>
                    <div class="services__cards cards js-slick-slider">
                        <?php foreach( $services as $index => $item ): ?>
                            <a class="services__card" href="/service/<?= $item['alias'] ?>">
                                <div class="services__card__img">
                                    <img src="/img/services/thumbs/<?= $item['img'] ?>">
                                </div>
                                <h4 class="services__card__title caption"><?= $item['title'] ?></h4>
                                <p class="services__card__text"><?= $item['text'] ?></p>
                                <object class="services__card__button card__button">Узнать больше</object>
                            </a>
                        <?php endforeach; ?>
                    </div>
                <?php endif; ?>
            </div>
        </div>
    </section>
    <section class="steps">
        <div class="container">
            <div class="steps__container">
                <div class="steps__description">
                    <h2 class="steps__title caption"><?=$comps[6]['body']?></h2>
                    <p class="steps__text"><?=$comps[7]['body']?></p>
                </div>
                <?php if( isset($steps) && $steps): ?>
                    <ol class="steps__list">
                        <?php foreach( $steps as $index => $item ): ?>
                            <li class="steps__list__item"><?=$item['title']?></li>
                        <?php endforeach; ?>
                    </ol>
                <?php endif; ?> 
                <div class="steps__button"><a class="button-light button" href="tel:+<?= preg_replace('/[^0-9]/', '', $comps[1]['body']) ?>">Позвонить нам →</a></div>
            </div>
        </div>
    </section>
    <section id="advantages" class="advantages">
        <div class="container">
            <div class="advantages__container">
                <h2 class="advantages__title caption"><span>Преимущества</span>
                    Почему стоит выбрать нас</h2>
                <?php if( isset($advans) && $advans): ?>
                    <div class="advantages__cards">
                        <?php foreach( $advans as $index => $item ): ?>
                            <div class="advantages__card">
                                <div class="advantages__card__img"><img src="/img/advans/thumbs/<?=$item['img']?>"></div>
                                <p class="advantages__card__title"><?=$item['title']?></p>
                            </div>
                        <?php endforeach; ?>
                    </div>
                <?php endif; ?> 
            </div>
            <div class="quality__container">
                <h2 class="quality__title caption"><span>Для нас важно качество</span>
                    Остерегайтесь мошенников</h2>
                <p class="quality__text"><?=$comps[8]['body']?></p>
                <div class="quality__cards">
                    <div class="quality__card">
                        <div class="quality__item">
                            <div class="quality__item__img"><img src="/img/qualities/thumbs/<?=$qualities[0]['img']?>"></div>
                            <p class="quality__item__text"><?=$qualities[0]['title']?></p>
                        </div>
                        <div class="quality__item displacement">
                            <div class="quality__item__img"><img src="/img/qualities/thumbs/<?=$qualities[1]['img']?>"></div>
                            <p class="quality__item__text"><?=$qualities[1]['title']?></p>
                        </div>
                        <div class="quality__item">
                            <div class="quality__item__img"><img src="/img/qualities/thumbs/<?=$qualities[2]['img']?>"></div>
                            <p class="quality__item__text"><?=$qualities[2]['title']?></p>
                        </div>
                    </div>
                    <div class="quality__card center">
                        <div class="quality__card__logo"><img src="/image/rasim.png"></div>
                        <div class="quality__item">
                            <div class="quality__item__img"><img src="/img/qualities/thumbs/<?=$qualities[3]['img']?>"></div>
                            <p class="quality__item__text"><?=$qualities[3]['title']?></p>
                        </div>
                    </div>
                    <div class="quality__card">
                        <div class="quality__item displacement">
                            <div class="quality__item__img"><img src="/img/qualities/thumbs/<?=$qualities[4]['img']?>"></div>
                            <p class="quality__item__text"><?=$qualities[4]['title']?></p>
                        </div>
                        <div class="quality__item">
                            <div class="quality__item__img"><img src="/img/qualities/thumbs/<?=$qualities[5]['img']?>"></div>
                            <p class="quality__item__text"><?=$qualities[5]['title']?></p>
                        </div>
                        <div class="quality__item displacement">
                            <div class="quality__item__img"><img src="/img/qualities/thumbs/<?=$qualities[6]['img']?>"></div>
                            <p class="quality__item__text"><?=$qualities[6]['title']?></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="consultation">
        <div class="container">
            <div class="consultation__container">
                <h2 class="consultation__title caption"><span>Консультация</span>
                    Вызов менеджера</h2>
                <p class="consultation__text"><?=$comps[9]['body']?></p>
                <h4 class="consultation__title caption">Назначьте встречу с менеджером, позвонив по номеру:</h4>
                <p class="consultation-tel"><a href="tel:+<?= preg_replace('/[^0-9]/', '', $comps[1]['body']) ?>"><?=$comps[1]['body']?></a></p>
            </div>
        </div>
    </section>
    <section class="catalog">
        <div class="container">
            <div class="catalog__container">
                <div class="catalog__header">
                    <h2 class="catalog__title caption"><span>Каталог</span>
                        Ритуальные принадлежности</h2>
                    <a class="button-light btn-txt button" href="/catalogs">Смотреть все →</a>
                </div>
                <?php if( isset($catalogs) && $catalogs): ?>
                <div class="catalog__cards cards js-slick-slider">
                    <?php foreach( $catalogs as $index => $item ): ?>
                        <a class="catalog__card" href="https://api.whatsapp.com/send?phone=<?= preg_replace('/[^0-9]/', '', $comps[1]['body']) ?>" target="_blank">
                            <div class="catalog__card__img"><img src="/img/catalogs/thumbs/<?=$item['images']?>"></div>
                            <h4 class="catalog__card__title caption"><?=$item['title']?></h4>
                            <p class="catalog__card__text">от <?=$item['price']?>₸</p>
                            <object class="catalog__link"><a class="catalog__card__button card__button"
                                    href="https://api.whatsapp.com/send?phone=<?= preg_replace('/[^0-9]/', '', $comps[1]['body']) ?>"
                                    target="_blank">Заказать</a></object>
                        </a>
                    <?php endforeach; ?>
                </div>
                <?php endif; ?> 
            </div>
        </div>
    </section>
</main>
