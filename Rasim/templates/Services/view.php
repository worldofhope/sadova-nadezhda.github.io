<main>
  <section class="domestic-services">
    <div class="container">
      <div class="domestic-services__container">
        <div class="domestic-services__image"><img src=""></div>
        <h1 class="domestic-services__title caption"><?= $data['title'] ?></h1>
        <ol class="breadcrumbs__list"> 
          <li class="breadcrumbs__item"> 
              <a href="/" class="breadcrumbs__link">Главная</a> 
          </li> 
          <li class="breadcrumbs__item"> 
              <a href="/services" class="breadcrumbs__link">Услуги</a> 
          </li> 
          <li class="breadcrumbs__item"> 
            <a href="javascript:;" class="breadcrumbs__link active"><?= $data['title'] ?></a> 
        </li> 
        </ol>
      </div>
    </div>
  </section>
  <section class="about-service">
    <div class="container">
      <div class="about-service__container">
        <h2 class="about-service__title caption"><span><?= $data['title'] ?></span>
          Об услуге</h2>
            <div class="about-service__description">
              <div class="about-service__text">
              <?= $data['body'] ?>
              </div>
              <div class="about-service__img"><img src="/img/rasim.png"></div>
            </div>
            <a class="button-light button" href="https://api.whatsapp.com/send/?phone=77011227172" target="_blank">Оставить заявку →</a>
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
                <div class="steps__button"><a class="button-light button" href="tel:<?= preg_replace('/[^0-9]/', '', $comps[1]['body']) ?>">Позвонить нам →</a></div>
            </div>
        </div>
    </section>
  <section class="documents">
    <div class="container">
      <div class="documents__container">
        <h2 class="documents__title caption"><span>Документы</span>
          Какие документы нужны</h2>
          <div class="documents__cards cards js-slick-slider">
            <div class="documents__card">
              <div class="documents__card__img"><img src="../image/doc.png"></div>
              <p class="documents__card__text">Свидетельство о смерти</p>
            </div>
            <div class="documents__card">
              <div class="documents__card__img"><img src="../image/doc.png"></div>
              <p class="documents__card__text">Удостоверение личности покойного</p>
            </div>
            <div class="documents__card">
              <div class="documents__card__img"><img src="../image/doc.png"></div>
              <p class="documents__card__text">Удостоверение личности заявителя</p>
            </div>
            <div class="documents__card">
              <div class="documents__card__img"><img src="../image/doc.png"></div>
              <p class="documents__card__text">Свидетельство о смерти ранее захороненных в случае подзахоронения</p>
            </div>
          </div>
      </div>
    </div>
  </section>
  <section class="price">
    <div class="container">
      <div class="price__container">
        <div class="price__description">
          <h2 class="price__title caption"><span>Стоимость</span>
          От чего зависит стоимость услуги</h2>
          <p class="price__text"><?=$comps[10]['body']?> </p>
        </div>
        <div class="price__card">
          <div class="price__card__item">
            <div class="price__card__image"><img src="../image/doc.png"></div>
            <div class="price__card__text">
              <h4 class="price__card__title caption"><?=$data['title']?></h4>
              <p>Стоимость: <span class="price-orange"> от <?=$data['price']?> ₸</span></p>
            </div>
          </div>
          <div class="price__card__buttons">
            <a class="button-light button" href="https://api.whatsapp.com/send?phone=<?= preg_replace('/[^0-9]/', '', $comps[1]['body']) ?>" target="_blank">Оставить заявку →</a>
            <a href="tel:<?= preg_replace('/[^0-9]/', '', $comps[1]['body']) ?>" class="button-dark button">Позвонить нам →</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="recommendations">
    <div class="container">
      <div class="recommendations__container">
        <h2 class="recommendations__title caption"><span>Рекомендации</span>
          Часто вместе с этим ищут</h2>
          <?php if( isset($other_catalogs) && $other_catalogs): ?>
          <div class="services__cards cards js-slick-slider">
            <?php foreach( $other_catalogs as $index => $item ): ?>
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
</main>