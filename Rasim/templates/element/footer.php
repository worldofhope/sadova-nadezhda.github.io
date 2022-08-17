<div class="sticky__telephone">
      <a class="telephone__img" href="tel:+<?= preg_replace('/[^0-9]/', '', $comps[1]['body']) ?>"><img src="img/phone-2.svg"></a>
</div>

<footer id="footer" class="footer">
  <div class="container">
    <div class="footer__connection">
      <div class="footer__card phone">
        <div class="footer__image"><img src="/img/svg/phone.svg"></div>
        <div class="connection__text">
          <p class="connection__text-orange">Телефон</p>
          <p><a class="connection__link" href="tel:+<?= preg_replace('/[^0-9]/', '', $comps[1]['body']) ?>"><?=$comps[1]['body']?></a></p>
        </div>
      </div>
      <div class="footer__card mail">
        <div class="footer__image"><img src="/img/svg/email.svg"></div>
        <div class="connection__text">
          <p class="connection__text-orange">E-mail</p>
          <p><a class="connection__link" href="mailto:<?=$comps[2]['body']?>"><?=$comps[2]['body']?></a></p>
        </div>
      </div>
      <div class="footer__card address">
        <div class="footer__image"><img src="/img/svg/location.svg"></div>
        <div class="connection__text">
          <p class="connection__text-orange">Адрес</p>
          <p class="connection__address"><?=$comps[3]['body']?></p>
        </div>
      </div>
    </div>
    <div class="footer__container">
      <div class="footer__description">
        <h4 class="footer__title caption">Похоронное бюро "Rasim"</h4>
        <p class="footer__text">Достойные проводы в последний путь. Мы готовы полностью взять на себя заботы об организации похорон и обустройстве могилы.</p>
      </div>
      <div class="footer__menu">
        <h4 class="footer__title caption">Меню</h4>
        <ul class="footer__list">
          <li class="footer__list__item"><a href="/">Главная</a></li>
          <li class="footer__list__item"><a href="/services">Услуги</a></li>
          <li class="footer__list__item"><a href="/catalogs">Принадлежности</a></li>
          <li class="footer__list__item"><a href="/#advantages">Преимущества</a></li>
        </ul>
      </div>
      <div class="footer__time">
        <h4 class="footer__title caption">Часы работы</h4>
        <p class="footer__text">Круглосуточный выезд агента. Работаем в выходные и праздничные дни.</p>
        <a class="button-dark button" href="tel:+<?= preg_replace('/[^0-9]/', '', $comps[1]['body']) ?>">Позвонить нам →</a>
      </div>
    </div>
    <div class="footer__down">
      <p><a href="https://astanacreative.kz/" target="_blank">Разработка сайтов в Астане</a></p>
      <p>Copyright © 2022. All rights reserved.</p>
    </div>
  </div>
</footer>