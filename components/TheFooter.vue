<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <div class="footer__right">
          <a href="#!" class="footer__logo">
            <img
              src="../assets/images/main-page/edupartner-footer.svg"
              alt="footer_logo"
            >
          </a>
          <div class="footer__column col-1">
            <nuxt-link to="/courses/business-and-management" class="footer__title">
              Обучение
            </nuxt-link>
            <ul class="footer__links">
              <li>
                <nuxt-link to="/courses/business-and-management/business-strategy" class="footer__link">
                  Бизнес-стратегия
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/courses/business-and-management/strategic-analysis" class="footer__link">
                  Стратегический анализ
                </nuxt-link>
              </li>
              <li>
                <a href="#!" class="footer__link"> IT-курсы </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer__column col-2">
          <a href="#!" class="footer__title"> Управление </a>
          <ul class="footer__links">
            <li>
              <nuxt-link to="/business-diagnostics" class="footer__link">
                Диагностика бизнеса
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/business-consulting" class="footer__link">
                Бизнес-консультация
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/site-development" class="footer__link">
                Разработка сайтов
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/internet-marketing" class="footer__link">
                Интернет-маркетинг
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="footer__column col-3">
          <a href="#!" class="footer__title"> О компании </a>
          <ul class="footer__links">
            <li>
              <a href="#!" class="footer__link"> О компании </a>
            </li>
            <li>
              <a href="#!" class="footer__link"> Команда </a>
            </li>
            <li>
              <a href="#!" class="footer__link"> Вакансии </a>
            </li>
          </ul>
        </div>
        <div class="footer__column col-4">
          <nuxt-link to="/contacts" class="footer__title">
            Контакты
          </nuxt-link>
          <ul class="footer__links">
            <li>
              <div class="footer__link">
                E-mail: edupartner@edupartner.ru
              </div>
            </li>
            <li>
              <div class="footer__link">
                <a href="tel:+78001011945">Тел.: +7 (800)-101-19-45 </a>
              </div>
            </li>
            <li>
              <div class="footer__link">
                г. Уфа, ул. Бульвар Ибрагимова 37/1
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style scoped>
.footer {
  background-color: #181816;
  margin-top: -1px;
}

.footer__inner {
  padding: 80px 0 30px 0;
  display: flex;
  justify-content: space-between;
  column-gap: 20px;
  flex-shrink: 1;
}

.footer__right {
  display: flex;
  gap: 50px;
  width: 340px;
  flex-shrink: 0;
}

.footer__logo {
  max-width: 156px;
  height: fit-content;
}

.footer__title {
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  color: #ffffff;
  text-decoration: none;
}

.footer__links {
  list-style-type: none;
  display: table;
  margin-top: 20px;
}

.footer__links>li {
  padding-bottom: 10px;
}

.footer__link,
.footer__link>a {
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: rgba(228, 228, 228, 0.8);
  text-decoration: none;
}

.footer__link>img {
  padding-top: 10px;
  padding-right: 19px;
  max-width: 29px;
  max-height: 23px;
  vertical-align: middle;
}

.col-1>a {
  white-space: nowrap;
}

.col-2 {
  width: 180px;
}

.col-3 {
  width: 183px;
}

.col-4 {
  width: 380px;
}
@media (max-width: 1024px) {
  .footer>.container {
    padding: 0 23px;
  }

  .footer__inner {
    flex-wrap: wrap;
    justify-content: flex-start;
    column-gap: 38px;
    row-gap: 30px;
  }

  .footer__right {
    width: 336px;
  }

  .col-4 {
    width: 380px;
    margin-left: 186px;
  }
}
@media (max-width: 820px) {
  .col-4 {
    margin-left: 0;
  }
}
@media (max-width: 768px) {
  .footer__inner {
    padding: 50px 0 40px 0;
  }

  .footer__right {
    width: 368px;
    justify-content: space-between;
    column-gap: 10px;
  }

  .col-3 {
    margin-left: 185px;
  }

  .col-1 {
    width: 183px;
  }

  .col-4 {
    width: 176px;
  }
}
@media (max-width: 655px) {
.footer__inner {
  flex-wrap: wrap;
}
}
@media (max-width: 480px) {
  .footer__inner {
    padding: 80px 0 20px 0;
  }

  .footer>.container {
    padding: 0 20px;
  }

  .footer__title {
    font-size: 18px;
    line-height: 25px;
  }

  .footer__link,
  .footer__link>a {
    font-size: 14px;
    line-height: 17px;
  }

  .footer__right {
    width: 100%;
    justify-content: flex-start;
    column-gap: 38px;
  }

  .col-2 {
    width: 156px;
  }

  .col-1,
  .col-3 {
    margin-left: 0;
    width: 173px;
  }

  .col-4 {
    width: 220px;
  }
}
@media (max-width: 360px) {
  .footer__inner {
    padding-top: 70px;
    column-gap: 15px;
    justify-content: space-between;
  }
  .footer__right{
    column-gap: 15px;
  }
  .footer__title {
    font-size: 16px;
    line-height: 20px;
  }

  .footer__link {
    font-size: 14px;
    line-height: 17px;
  }
  .footer__logo {
    max-width: 147px;
  }

  .footer__links {
    margin-top: 25px;
  }

  .col-1,
  .col-3 {
    width: 150px;
  }

  .col-2 {
    width: 147px;
  }

  .col-4 {
    width: 229px;
  }
}
</style>
