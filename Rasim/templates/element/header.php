<header class="header">
    <div class="container">
        <div class="header__container">
            <a href="/" class="header__logo">
                <img src="/img/svg/Rasim.kz.svg">
            </a>
            <nav class="header__nav">
                <ul class="header__list">
                    <li class="header__list__item"><a href="/">Главная</a></li>
                    <li class="header__list__item"><a href="/services">Услуги</a></li>
                    <li class="header__list__item"><a href="/catalogs">Принадлежности</a></li>
                    <li class="header__list__item"><a href="/#advantages">Преимущества</a></li>
                </ul>
                <div class="header__connection">
                  <div class="header__card phone">
                    <div class="header__image"><img src="/img/svg/phone.svg"></div>
                    <div class="connection__text">
                      <p class="connection__text-orange">Телефон</p>
                      <p><a class="connection__link" href="tel:+<?= preg_replace('/[^0-9]/', '', $comps[1]['body']) ?>"><?=$comps[1]['body']?></a></p>
                    </div>
                  </div>
                  <div class="header__card mail">
                    <div class="header__image"><img src="/img/svg/email.svg"></div>
                    <div class="connection__text">
                      <p class="connection__text-orange">E-mail</p>
                      <p><a class="connection__link" href="mailto:<?=$comps[2]['body']?>"><?=$comps[2]['body']?></a></p>
                    </div>
                  </div>
                  <div class="header__card address">
                    <div class="header__image"><img src="/img/svg/location.svg"></div>
                    <div class="connection__text">
                      <p class="connection__text-orange">Адрес</p>
                      <p><?=$comps[3]['body']?></p>
                    </div>
                  </div>
                </div>
            </nav>
            <a href="tel:+<?= preg_replace('/[^0-9]/', '', $comps[1]['body']) ?>" class="header__phone"><?=$comps[1]['body']?></a>
            <div class="header__mobile-menu">
                <div class="nav_icon">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    </div>
  </header>