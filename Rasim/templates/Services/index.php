<main>
  <section class="services-catalog">
    <div class="container">
      <div class="services-catalog__container">
        <div class="services-catalog__image"><img src=""></div>
        <h1 class="services-catalog__title caption">Каталог услуг</h1>
        <ol class="breadcrumbs__list"> 
          <li class="breadcrumbs__item"> 
              <a href="/" class="breadcrumbs__link">Главная</a> 
          </li> 
          <li class="breadcrumbs__item"> 
              <a href="javascript:;" class="breadcrumbs__link active">Услуги</a> 
          </li> 
        </ol>
      </div>
    </div>
  </section>
  <section class="services services-page">
    <div class="container">
      <div class="services__container">
        <div class="services__header">
          <h2 class="services__title caption"><span>Наши услуги</span>
            Предлагаем различные виды ритуальных услуг</h2>
        </div>
        <div class="services__cards cards services-list">
          <?php if( isset($data) && $data): ?>
            <?php foreach( $data as $index => $item ): ?>
              <a class="services__card" href="/service/<?= $item['alias'] ?>">
                <div class="services__card__img">
                  <img src="/img/services/thumbs/<?= $item['img'] ?>">
                </div>
                <h4 class="services__card__title caption"><?= $item['title'] ?></h4>
                <p class="services__card__text"><?= $item['text'] ?></p>
                <object class="services__card__button card__button">Узнать больше</object>
              </a>
            <?php endforeach; ?>
          <?php endif; ?>
        </div>
      </div>
    </div>
  </section>
</main>