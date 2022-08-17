<main>
<section class="accessories">
  <div class="container">
    <div class="accessories__container">
      <h1 class="accessories__title caption">Каталог принадлежностей</h1>
      <ol class="breadcrumbs__list"> 
        <li class="breadcrumbs__item"> 
            <a href="/" class="breadcrumbs__link">Главная</a> 
        </li> 
        <li class="breadcrumbs__item"> 
            <a href="javascript:;" class="breadcrumbs__link active">Принадлежности</a> 
        </li> 
      </ol>
    </div>
  </div>
</section>
<section class="accessories-catalog">
  <div class="container">
    <div class="accessories-catalog__container">
      <h2 class="accessories-catalog__title caption">Каталог</h2>
      <div class="accessories-catalog__cards cards">
      <?php if( isset($catalogs) && $catalogs): ?>
        <?php foreach( $catalogs as $index => $item ): ?>
          <a class="accessories-catalog__card" href="https://api.whatsapp.com/send?phone=<?= preg_replace('/[^0-9]/', '', $comps[1]['body']) ?>" target="_blank">
            <div class="accessories-catalog__card__img"><img src="./img/catalogs/thumbs/<?=$item['img']?>"></div>
            <h4 class="accessories-catalog__card__title caption"><?=$item['title']?></h4>
            <p class="accessories-catalog__card__text">от <?=$item['price']?> ₸</p>
            <object class="catalog__link"><a class="accessories-catalog__card__button card__button" href="https://api.whatsapp.com/send?phone=<?= preg_replace('/[^0-9]/', '', $comps[1]['body']) ?>" target="_blank">Оставить заявку</a></object>
          </a>
        <?php endforeach; ?>
      <?php endif; ?> 
      </div>
    </div>
  </div>
</section>


</main>  