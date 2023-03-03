<template>
  <div>
    <header class="header">
      <div class="container">
        <div class="header__inner">
          <div class="header__left">
            <div class="header__left-eduexp header-show">
              <p class="header__left-txt">
                Учись и преподавай!
              </p>
              <img
                src="../../assets/images/logo.png"
                alt="logo"
                class="header__left-img"
              >
              <a href="https://eduexp.ru/" class="header__left-btn">Перейти на платформу</a>
            </div>
          </div>
          <div class="header__right">
            <div class="header__slider">
              <div class="header__list">
                <div class="header__right-blocks">
                  <div
                    id="header__right-center"
                    class="header__right-block"
                    :class="{'animated pulse': isHovering && hoveringItem === 1}"
                    @mouseover="hoveringOnItem(1)"
                    @mouseout="noHovering"
                  >
                    <nuxt-link to="/license">
                      <div class="header__rb-inner center">
                        <p class="header__right-text">
                          У нас есть лицензия
                        </p>
                        <p class="header__right-txt">
                          Приуральский центр образования
                        </p>
                      </div>
                    </nuxt-link>
                  </div>
                  <div
                    id="header__right-sert"
                    class="header__right-block"
                    :class="{'animated pulse': isHovering && hoveringItem === 2}"
                    @mouseover="hoveringOnItem(2)"
                    @mouseout="noHovering"
                  >
                    <nuxt-link to="/certification">
                      <div class="header__rb-inner sert">
                        <p class="header__right-text">
                          Сертификат за 10 минут
                        </p>
                        <p class="header__right-txt">
                          Сертификация экспертов
                        </p>
                      </div>
                    </nuxt-link>
                  </div>
                  <div
                    id="header__right-main"
                    class="header__right-block"
                    :class="{'animated pulse': isHovering && hoveringItem === 3}"
                    @mouseover="hoveringOnItem(3)"
                    @mouseout="noHovering"
                  >
                    <nuxt-link to="/">
                      <div class="header__rb-inner edu">
                        <p class="header__right-txt">
                          EduPartner
                        </p>
                      </div>
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="header__arrows">
              <div class="header-arrow__prev" />
              <div class="header-arrow__next" />
            </div>
          </div>
        </div>
      </div>
    </header>

    <section class="platform first">
      <div class="container">
        <div class="platform__inner">
          <div class="platform__left animated fadeInLeftBig slower">
            <img
              src="../../assets/images/platform-page/notebook_eduexp.png"
              alt="notebook"
              class="platform__left-img"
            >
          </div>
          <div class="platform__right">
            <h2 class="platform__right-title">
              О платформе
            </h2>
            <p class="platform__right-text">
              Платформы — глобальный феномен. Платформа даёт возможность
              обмениваться ценностями, а в нашем случае знаниями и опытом.
              EduExp объединяет людей, где каждый может найти себе клиентов,
              преподавать или получить образование.
            </p>
            <p class="platform__right-text">
              Благодаря нашей платформе можно открыть новый канал продаж
              и уменьшить издержки бизнеса.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="opportunities first">
      <div class="container">
        <div class="opportunities__inner">
          <h3 class="opportunities-title">
            Возможности платформы
          </h3>
          <hr class="opportunities-line">
          <div class="opportunities-block">
            <div class="opportunities__left">
              <p class="opportunities__left-text">
                Оплата
              </p>
            </div>
            <div class="opportunities__right">
              <p class="opportunities__right-text">
                К платформе EduExp подключены платежные системы, благодаря
                которым можно проводить оплаты
              </p>
            </div>
          </div>
          <hr class="opportunities-line">
          <div class="opportunities-block">
            <div class="opportunities__left">
              <p class="opportunities__left-text">
                Продвижение
              </p>
            </div>
            <div class="opportunities__right">
              <p class="opportunities__right-text">
                Для продвижения вашего продукта предусмотрена отдельная услуга
                email-рассылок. В услугу входит работа дизайнера, верстальщика,
                маркетолога
              </p>
            </div>
          </div>
          <hr class="opportunities-line">
          <div class="opportunities-block">
            <div class="opportunities__left">
              <p class="opportunities__left-text">
                Доступ из любой точки мира
              </p>
            </div>
            <div class="opportunities__right">
              <p class="opportunities__right-text">
                Зарегистрироваться на платформе может пользователь из любой
                точки мира. В разработке подключение платежей для жителей других
                стран
              </p>
            </div>
          </div>
          <hr class="opportunities-line">
          <div class="opportunities-block">
            <div class="opportunities__left">
              <p class="opportunities__left-text">
                Возможность создания курса
              </p>
            </div>
            <div class="opportunities__right">
              <p class="opportunities__right-text">
                На платформу можно опубликовывать письменные лекции и
                видеоуроки, назначать цену со скидкой, указывать количество
                часов
              </p>
            </div>
          </div>
          <hr class="opportunities-line">
          <div class="opportunities-block">
            <div class="opportunities__left">
              <p class="opportunities__left-text">
                Анализ бизнес-процесса
              </p>
            </div>
            <div class="opportunities__right">
              <p class="opportunities__right-text">
                Учебного процесса, статистику продаж
              </p>
            </div>
          </div>
          <hr class="opportunities-line">
          <div class="opportunities-block opportunities-block-pt">
            <div class="opportunities__left">
              <p class="opportunities__left-text">
                Конструктор курса
              </p>
            </div>
            <div class="opportunities__right">
              <p class="opportunities__right-text">
                Создадите свой курс в конструкторе, где можно добавлять разделы,
                модули, уроки, тесты
              </p>
            </div>
          </div>
          <hr class="opportunities-line">
          <div class="opportunities-block">
            <p class="opportunities-comment">
              *Скоро! Мобильное приложение, Турция, Ближний Восток
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="try first">
      <div class="container">
        <a href="#" class="try-btn">Попробовать 14 дней бесплатно</a>
      </div>
    </section>

    <section class="reviews" style="display: none">
      <div class="container">
        <div class="reviews__inner">
          <h3 class="reviews-title">
            Отзывы партнеров
          </h3>
          <div class="reviews-block">
            <div class="reviews-card">
              <div class="reviews__side-content">
                <div class="reviews_img">
                  <img
                    src="../../assets/images/platform-page/emty.png"
                    alt="review"
                  >
                </div>
                <div class="reviews_arrow">
                  <img
                    class="review_circle-right"
                    src="../../assets/images/platform-page/yellow_circle.svg"
                    alt="yellow_circle"
                  >
                  <img
                    class="review_yellow-arrow-right animated shake infinite slower"
                    src="../../assets/images/platform-page/yellow_arrow_right.svg"
                    alt="yellow_arrow_right"
                  >
                </div>
              </div>
              <div class="reviews_desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas, nobis pariatur perspiciatis, quasi voluptatum corporis
                qui dolorem labore maiores libero ut laborum quae quod
                quibusdam. Ipsum laboriosam maxime pariatur optio.
              </div>
            </div>
            <div class="reviews-card">
              <div class="reviews_desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas, nobis pariatur perspiciatis, quasi voluptatum corporis
                qui dolorem labore maiores libero ut laborum quae quod
                quibusdam. Ipsum laboriosam maxime pariatur optio.
              </div>
              <div class="reviews__side-content">
                <div class="reviews_arrow">
                  <img
                    class="review_yellow-arrow-left animated shake infinite slower"
                    src="../../assets/images/platform-page/yellow_arrow_left.svg"
                    alt="yellow_arrow_right"
                  >
                  <img
                    class="review_circle-left"
                    src="../../assets/images/platform-page/yellow_circle.svg"
                    alt="yellow_circle"
                  >
                </div>
                <div class="reviews_img">
                  <img
                    src="../../assets/images/platform-page/emty.png"
                    alt="review"
                  >
                </div>
              </div>
            </div>
            <div class="reviews-card">
              <div class="reviews__side-content">
                <div class="reviews_img">
                  <img
                    src="../../assets/images/platform-page/emty.png"
                    alt="review"
                  >
                </div>
                <div class="reviews_arrow">
                  <img
                    class="review_circle-right"
                    src="../../assets/images/platform-page/yellow_circle.svg"
                    alt="yellow_circle"
                  >
                  <img
                    class="review_yellow-arrow-right animated shake infinite slower"
                    src="../../assets/images/platform-page/yellow_arrow_right.svg"
                    alt="yellow_arrow_right"
                  >
                </div>
              </div>
              <div class="reviews_desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas, nobis pariatur perspiciatis, quasi voluptatum corporis
                qui dolorem labore maiores libero ut laborum quae quod
                quibusdam. Ipsum laboriosam maxime pariatur optio.
              </div>
            </div>
          </div>
          <a href="#!" class="reviews__link">
            <div class="reviews__btn">
              <div class="btn__text">Стать частью платформы</div>
              <div class="btn__img">
                <img
                  src="../../assets/images/platform-page/tariffs-arrow-right.svg"
                  alt="tariffs-arrow-right"
                >
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>

    <section class="tariffs">
      <div class="container">
        <div class="tariffs__inner">
          <h3 class="tariffs-title">
            Основные тарифы
          </h3>
          <div class="slider-one">
            <div class="slider-two">
              <div class="tariffs-block">
                <div class="tariffs-card">
                  <div class="card_title">
                    40% комиссия
                  </div>
                  <div class="card_desc">
                    Вы занимаетесь образовательной деятельностью, но у вас
                    нет лицензии или её срок действия истекает? Мы готовы помочь
                    пролицензировать ваш курс, составить методическую часть
                    или провести повышение квалификации преподавателей
                    и спикеров. Подробнее: ЧОУ ДПО «Приуральский центр
                    образования»
                  </div>
                </div>
                <div class="tariffs-card active">
                  <div class="card_title">
                    30% комиссия
                  </div>
                  <div class="card_desc">
                    Вы лицензированная компания с собственными курсами, откройте
                    для себя еще один канал продаж - платформа EduExp.
                    <br><br>
                    *От нас выгодные комиссионые продвижения Ваших курсов
                  </div>
                </div>
                <div class="tariffs-card">
                  <div class="card_title">
                    30% комиссия
                  </div>
                  <div class="card_desc">
                    Вы эксперт/преподаватель и уже имеете свой авторский курс,
                    начните сотрудничество уже сегодня!
                  </div>
                  <div class="card_link">
                    <a href="https://www.youtube.com/watch?v=-FX-RVKvnAw">Инструкция по добавлению курса</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tariffs-arrows">
            <div class="tariffs-arrow-left">
              <svg
                class="tariffs-arrows-svg"
                width="81"
                height="87"
                viewBox="0 0 47 91"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M45 2L4 45.5L45 89"
                  stroke="#C4C4C4"
                  stroke-opacity="0.37"
                  stroke-width="5"
                />
              </svg>
            </div>
            <div class="tariffs-arrow-right">
              <svg
                class="tariffs-arrows-svg"
                width="41"
                height="87"
                viewBox="0 0 47 91"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 2L43 45.5L2 89"
                  stroke="#C4C4C4"
                  stroke-opacity="0.37"
                  stroke-width="5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import hoveringMixin from '@/components/mixins/hoveringMixin'
export default {
  name: 'PlatformPage',
  mixins: [hoveringMixin],
  layout: 'emptyLt',
  data () {
    return {
      isHovering: false,
      hoveringItem: null
    }
  }
}
</script>

<style scoped>
.header {
  margin: 0;
  width: 100%;
  height: 850px;
  background-image: url("../../assets/images/platform-page/notebook-bg.webp");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}

.header__left,.header__right{
    z-index: 2;
  }

.header__inner{
  display: flex;
  justify-content: space-between;
  padding-top: 230px;
}
.header__left-edupartner{
  display: none;
  transition: 1s;
  transform: translateY(70%);
  opacity: 0;
  height: 300px;
}

.header__left-title{
  font-weight: 500;
  font-size: 92px;
  line-height: 112px;
  margin-top: 65px;
}

.header__left-text{
  font-weight: 700;
  font-size: 41.5px;
  line-height: 51px;
  background: linear-gradient(270deg, #FAFF00 37.78%, #383819 107.4%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  scrollbar-color: transparent;

}
.header__left-image{
  position: relative;
  top: -225px;
  left: 96px;
  z-index: -1;
}
.header__left-center{
  display: none;
  transition: 1s;
  transform: translateY(70%);
  opacity: 0;
}
.header__left-center-top{
  display: flex;
  align-items: center;
}
.header__left-center-text,.header__left-sert-text{
  max-width: 420px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 31px ;
  color: rgba(255, 255, 255, 0.8);
}
.header__left-center-top .header__left-center-text,.header__left-sert-text{
  width: 263px;
  position: relative;
}
.header__left-sert-text{
  width: auto;
}
.header__left-sert{
  margin-top: 13px;
  display: none;
  transition: 1s;
  transform: translateY(70%);
  opacity: 0;
}
/* .header__left-center-top .header__left-center-text::after{
  position: absolute;
  content:'';
  width: 80px;
  height: 5px;
  background-color: white;
  left: 0;
  top: -30px;
} */
.header__left-center-title,.header__left-sert-title{
  margin-bottom: 30px;
  width: 427px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 49px;
  color: #FFFFFF;
}
.header__left-sert-title{
  margin-top: 65px;
  margin-bottom: 50px;
}

.header__right{
  margin-top: 125px;
}

.header__right-top{
  height: 95px;
  width: fit-content;
}

/* ========================================================================= */
.header__slider {
  max-width: 580px;
  /* Чтобы во время перетаскивания слайда ничего не выделить внутри него */
  user-select: none;
  /* Чтобы запретить скролл страницы, если мы начали двигать слайдер по оси X */
  touch-action: pan-y;
  }

  /* Если где-то внутри слайдера будут изображения,
  то нужно задать им pointer-events: none,
  чтобы они не перетаскивались мышью */

  .header__slider img {
  pointer-events: none;
  }

  .header__list {
    padding: 20px 10px;
    width: 620px;
    height: 320px;
    overflow: hidden;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .header__list::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .header__list.grab {
  cursor: grab;
  }

  .header__list.grabbing{
  cursor: grabbing;
  }
/* ========================================================================= */

.header__right-blocks{
  display: flex;
  transition: 1s;
  width: fit-content;
  justify-content: flex-end;
}
.header__right-block {
  padding-right: 20px;
}
.header__rb-inner{
  width: 180px;
  height: 280px;
  border-radius:20px;
  padding-top: 160px;
  position: relative;
  background-repeat: no-repeat;
  background-size: 150%;
  background-position: center center;
  transition: 0.5s;
  z-index: 4;
  padding-left: 10px;
}
.header__right-block>a{
  color: #FFFFFF;
}

.header__right-block:hover{
  cursor: pointer;
}

.header__rb-inner.center{
  background-image: url('../../assets/images/main-page/projects-slider/book.png');
}
.header__rb-inner.sert{
  background-image: url('../../assets/images/main-page/projects-slider/sert_1.png');
}
.header__right-block:nth-child(4),.header__right-block:nth-child(5),.header__right-block:nth-child(6){
  width: 0;
  opacity: 0;
  overflow: hidden;
  margin-right: 0;
  padding-left: 0;
}
.header__rb-inner.edu{
  background-image: url('../../assets/images/main-page/projects-slider/edupartner.png');
}

#header__right-main, #header__right-sert, #header__right-center, #header__right-platform{
  background-size: auto;
}

#header__right-main .header-bg{
  background: #1D1D1D;
}
.transition_zero{
  transition: 0s;
}
.header__right-text{
  margin-left: 5px;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  margin-bottom: 10px;
  margin-right: 10px;
}
.header__right-txt{
  margin-left: 5px;
  width: 80%;
  font-weight: 700;
  font-size: 17px;
  line-height: 21px;
}

.platform{
  background-image: url('../../assets/images/platform-page/black-white.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 800px;
  margin-bottom: 150px;
}

.platform__inner{
  display: flex;
  justify-content: space-between;
  height: 800px;
}

.platform__left{
  max-width: 595px;
  padding-left: 5px;
    align-self: center;
}
.platform__left-img{
  width: 100%;
}
.platform__right{
  width: 480px;
    align-self: center;
}
.platform__right-title{
  font-weight: 700;
  font-size: 40px;
  line-height: 49px;
  color: #FAFF00;
  margin-bottom: 30px;
}
.platform__right-text{
  font-weight: 500;
  font-size: 20px;
  line-height:30px ;
  color: rgba(229, 229, 229, 0.85);
  margin-bottom: 15px;
}

.header__left-eduexp{
  position: relative;
  display: none;
  transition: 1s;
  transform: translateY(30%);
  opacity: 0;
}
.header__left-txt{
  font-weight: 500;
  font-size: 24px;
  line-height: 31px;
  margin-bottom: 30px;
}
.header__left-img{
  margin-bottom: 55px;
  max-height: 280px;
  width: auto;
}
.header__left-btn{
  display: block;
  font-weight: 600;
  font-size: 20px;
  line-height:  26px;
  color: #FFFFFF;

  width: 382px;
  height: 66px;
  padding: 20px 40px;

  border: 2px solid #FAFF00;
  border-radius: 20px;
  position: relative;
  transition: 0.5s;
}
.header__left-btn::after{
  position: absolute;
  content: '⟶';
  width: 41px;
  font-size: 30px;
  right: 32px;
}
.header__left-btn:hover{
  cursor: pointer;
  background: #FAFF00;
  border: 2px solid #FAFF00;
  box-shadow: 0px 0px 20px #FAFF00;
  border-radius: 20px;
  color: #1D1D1D;
}

.opportunities{
  background-image: url('../../assets/images/platform-page/yellow-white.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  margin-bottom: 100px;
}
.opportunities-title{
  font-weight: 700;
  font-size: 40px;
  line-height: 49px;
  color: #1D1D1D;
  padding-top: 100px;
  padding-bottom: 65px;
  position: relative;
}
.opportunities-line{
  height: 2px;
  background-color: rgba(0, 0, 0, 0.25);
  padding: 0;
  margin: 0;
}
.opportunities-block{
  display: flex;
  padding-top: 20px;
}
.opportunities-block-pt{
  padding-top: 44px;
}
.opportunities__left{
}
.opportunities__left-text{
  font-weight: 500;
  font-size: 32px;
  line-height: 39px;
  color: #1D1D1D;
  width: 680px;
}
.opportunities__right-text{
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: rgba(29, 29, 29, 0.85);
  max-width: 480px;
  margin-left: 20px;
  margin-bottom: 20px;
}
.opportunities-comment{
  font-weight: 500;
  font-size: 32px;
  line-height: 39px;
  color: rgba(43, 43, 43, 0.55);
  width: 680px;
  margin-bottom: 80px;
}

.try{
  margin-bottom: 100px;
}

.try-btn{
  display: block;
  font-weight: 600;
  font-size: 20px;
  line-height:  26px;
  color: #1D1D1D;

  width: 479px;
  height: 66px;
  padding: 20px 40px;

  border: 2px solid #1D1D1D;
  border-radius: 20px;
  position: relative;
  transition: 0.5s;
  margin-left: auto;
  margin-right: auto;
}

.try-btn::after{
  position: absolute;
  content: '⟶';
  width: 41px;
  font-size: 30px;
  right: 32px;
}

.try-btn:hover{
  background: #1D1D1D;
  border: 2px solid #1D1D1D;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  color: #fff;
}

/* Всплыв текста */

.header-show{
  display: block;
  transform: translateY(0%);
  opacity: 1;

}
.header__right-block-zero{
  width: 0;
}

.reviews{
  background-color: #06080A;
  background-repeat: no-repeat;
  background-size: cover;
}
.reviews-title {
  width: 480px;
  font-weight: 700;
  font-size: 40px;
  line-height: 49px;
  color: #FAFF00;
  padding: 120px 65px 100px 0;
  position: relative;
  margin-right: 0;
  margin-left: auto;
  text-align: right!important;
}

.reviews .container {
  max-width: 1180px;
  height: 100%;
  padding: 0;
}

.reviews-card {
  display: flex;
  justify-content: space-between;
  margin-bottom: 100px;
}

.reviews__side-content {
  max-width: fit-content;
  vertical-align: middle;
}

.reviews_img{
  max-width: 380px;
  max-height: 229px;
}

.review_circle-left,  .review_circle-right{
  margin: 20px;
}

.reviews_img, .reviews_arrow, .review_circle-left, .review_circle-right, .review_yellow-arrow-right {
  display: inline;
  vertical-align: middle;
}
.review_circle-right, .review_circle-left {
  max-width: 80px;
}
.review_yellow-arrow-right, .review_yellow-arrow-left {
  max-width: 150px;
}

.review_yellow-arrow-right {
  margin-left: -60px;
}
.review_circle-left {
  margin-left: -40px;
}
.reviews-block{
  padding-bottom: 50px;
}

.reviews_desc {
  max-width: 480px;
  align-content: right;
  color: #FFFFFF;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
}

.reviews__btn {
  text-decoration: none;
  margin: 0 auto;
  max-width: fit-content;
  height: fit-content;
  border: 2px solid #FAFF00;
  border-radius: 20px;
  padding: 20px 40px 20px 40px;
}
.reviews__inner{
  padding-bottom: 150px;
}

.reviews__btn:hover {
  cursor: url('../../assets/images/platform-page/Cursor.png') 4 1,
  pointer;
}

.reviews__btn a {
  width: max-content;
  height: max-content;
}

.reviews__btn .btn__text {
  color: #FAFF00;
  font-weight: 600;
  font-size: 20px;
  line-height: 130%;
  display: inline;
  padding-right: 10px;
}

.reviews__btn .btn__img {
  display: inline;
  max-width: 41px;
}

.reviews__btn .btn__img img{
  max-width: 41px;
}

.tariffs{
  background-color: #06080A;
  background-repeat: no-repeat;
  background-size: cover;
  height: 1080px;
  margin-top: -1px;
}
.tariffs-title {
  max-width: 1180px;
  margin: 0 auto;
  font-weight: 700;
  font-size: 40px;
  line-height: 49px;
  color: #FAFF00;
  padding-top: 20px;
  padding-bottom: 100px;
  position: relative;
}

.tariffs .container {
  max-width: 1920px;
  height: 100%;
  padding: 0;
  background-image: url('../../assets/images/platform-page/fern.png');
  background-repeat: no-repeat;
  background-position: left bottom;
  background-size: 1478px 474px;
}

.tariffs__inner{
  max-width: 1180px;
  margin: 0 auto;
}

.tariffs-block{
  display: flex;
  align-items: stretch;
  justify-content: center;
  min-height: 620px;
}

.tariffs-card {
  width: 380px;
  min-height: 565px;
  transition: 300ms;
  margin: 0 10px 0 10px;
  padding: 45px 34px 39px 34px;
  border-radius: 30px;
  background: linear-gradient(339.46deg, rgba(29, 29, 29, 0.3854) 8.31%, rgba(29, 29, 29, 0.94) 95.53%);
  opacity: .3;
}

.tariffs-card.active{
  margin-top: -55px;
  margin-bottom: 55px;
  background: linear-gradient(337.52deg, rgba(244, 244, 244, 0.4606) -24.51%, rgba(244, 244, 244, 0) 119.94%);
  opacity: 1;
}

.card_title {
  color: #FAFF00;
  width: fit-content;
  font-weight: 600;
  font-size: 24px;
  line-height: 130%;
  margin: 0 auto;
}

.card_desc {
  padding-top: 30px;
  color: rgba(255, 255, 255, 0.95);
  font-weight: 500;
  font-size: 20px;
  line-height: 150%;
  margin: 0 auto;
}

.card_link a {
  padding-top: 15px;
  color: #FAFF00;
  text-decoration: underline;
  font-weight: 500;
  font-size: 20px;
  line-height: 150%;
  margin: 0 auto;
}

.tariffs-arrows{
  display: flex;
  gap: 98px;
}
.tariffs-arrow-left{
  margin-left: auto;

}
.tariffs-arrow-right{
  margin-right: auto;
}
.tariffs-arrows-svg:hover{
  cursor: url('../../assets/images/platform-page/Cursor.png') 4 1,
  pointer;
}
.tariffs-arrows-svg:hover path{
  opacity: 1;
  stroke: #FAFF00;
  stroke-opacity: 1;
}

.slider-one {
  max-width: 1180px;
  /* Чтобы во время перетаскивания слайда ничего не выделить внутри него */
  user-select: none;
  /* Чтобы запретить скролл страницы, если мы начали двигать слайдер по оси X */
  touch-action: pan-y;
  }

  /* Если где-то внутри слайдера будут изображения,
  то нужно задать им pointer-events: none,
  чтобы они не перетаскивались мышью */

  .slider-one img {
  pointer-events: none;
  }

  .slider-two {
  max-width: 1180px;
  overflow: hidden;
  padding-top: 55px;
  }

  .slider-two.grab {
  cursor: grab;
  }

  .slider-two.grabbing{
  cursor: grabbing;
  }

@media (max-width: 1024px) {
  .header__right{
    margin-top: 66px;
  }
  .header__inner {
    padding-top: 190px;
    justify-content: flex-start;
  }

  .header__left-btn{
    padding: 20px 20px;
    width: 350px;
  }
  .header__rb-inner {
    width: 176px;
    height: 280px;
  }
  .platform{
    margin-bottom: 140px;
  }
  .platform__left{
    max-width: 393px;
  }
  .platform__right-title{
    font-size: 36px;
    line-height: 44px;
  }
  .opportunities-title{
    font-size: 36px;
    line-height: 44px;
  }
  .opportunities__left-text{
    width: 580px;
  }
  .opportunities__right-text{
    margin-left: 0;
  }
  .try{
    margin-bottom: 80px;
  }
  .reviews-title {
    font-size: 36px;
    line-height: 44px;
  }
  .reviews_img, .reviews_img>img{
    max-width: 372px;
  }
  .reviews-card {
    margin-left: 20px;
    margin-right: 20px;
  }
  .review_circle-right, .review_circle-left {
    max-width: 58px;
  }
  .review_yellow-arrow-right, .review_yellow-arrow-left {
    max-width: 90px;
  }
  .reviews_desc{
    max-width: 370px;
  }
  .reviews-block{
    padding-bottom: 0;
  }
  .reviews__inner{
    padding-bottom: 130px;
  }
  .tariffs-title {
    padding-left: 20px;
  }
  .tariffs-block{
    justify-content: left;
    align-items: flex-start;

  }
  .tariffs-card{
    width: 372px;
    height: 557px;
    padding-left: 33px;
    padding-right: 33px;
    margin-top: -55px;
    margin-bottom: 55px;
    background: linear-gradient(337.52deg, rgba(244, 244, 244, 0.4606) -24.51%, rgba(244, 244, 244, 0) 119.94%);
    opacity: 1;
    flex-shrink: 0;
  }
  .slider-one{
    margin: 0 auto;
  }
  .slider-two{
    margin: 0 auto;
    max-width: 95%;
  }
  .card_desc {
    font-size: 19px;
  }
  .tariffs-arrows {
    display: none;
  }
}

@media (max-width: 768px) {
  .header__inner {
    padding-top: 180px;
  }
  .header__right{
    max-width: 380px;
  }
  .header__slider{
    max-width: 380px;
  }
  .header__list{
    max-width: 380px;
  }
  .platform__left{
    max-width: 354px;
  }
  .platform__right{
    padding-left: 54px;
  }
  .opportunities-title{
    max-width: 354px;
    padding: 54px 0 65px 20px;
  }
  .opportunities{
    background-position: 57% center;
  }
  .opportunities__left{
    margin-left: 10px;
  }
  .opportunities__left-text {
    max-width: 374px;
  }
  .opportunities-comment{
    max-width: 326px;
  }
  .reviews-title{
    padding: 140px 20px 105px 0;
    font-size: 30px;
    line-height: 37px;
  }
  .reviews_arrow{
    display: none;
  }
  .reviews_img, .reviews_img>img{
    max-width: 354px;
  }
  .reviews-card {
    gap: 51px;
  }
}
/* потом удалить */
@media (max-width: 480px) {
  html, body{
    overflow-x: hidden;
  }
  .header{
    height: auto;
  }
  .header__rb-inner {
    max-width: 150px;
    max-height: 238px;
    padding: 141px 10px 20px 10px;
  }
  .container{
    padding: 0 20px;
  }
  .header__inner {
    padding-top: 73px;
    padding-bottom: 52px;
    flex-wrap: wrap;
  }
  .header__left, .header__right, .header__slider, .header__list{
    width: 100%;
    max-width: none;
  }
  .header__list{
    padding-left: 0;
    padding-right: 0;
  }
  .header__left-img {
    max-height: 270px;
    margin-bottom: 35px;
  }
  .header__left-btn{
    font-weight: 600;
    font-size: 16px;
    line-height:  130%;

    width: 320px;
    height: 41px;
    padding: 8px 10px 10px 20px;
    margin-bottom: 40px;
  }
  .header__left-btn::after{
    width: 32px;
    font-size: 25px;
    right: 25px;
    top: 5px;
  }
  .header__right{
    margin: 0;
  }
  .header__right-top{
    display: none;
  }
  .header__right-text{
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    margin: 0 0 5px 0;
  }
  .header__right-txt{
    margin: 0;
    font-size: 16px;
    line-height: 20px;
  }
  .platform {
    margin-bottom: 0;
  }
  .platform__inner {
    flex-wrap: wrap;
    padding-bottom: 35px;
  }
  .platform__left {
    padding: 0;
    margin-top: 50px;
  }
  .platform__right{
    padding-left: 0;
  }
  .platform__right-title{
    margin: 40px 0 15px 0;
    font-size: 30px;
    line-height: 37px;
  }
  .platform__right-text{
    font-size: 18px;
    line-height: 27px;
    margin: 0;
  }
  .opportunities {
    background-position: left center;
    margin-bottom: 40px;
  }
  .opportunities-title{
    padding: 50px 0 40px 0;
    font-size: 30px;
    line-height: 37px;
  }
  .opportunities-block{
    padding-top: 11px;
    flex-wrap: wrap;
  }
  .opportunities__left{
    max-width: 318px;
    margin: 0;
  }
  .opportunities__left-text{
    width: fit-content;
    font-size: 24px;
    line-height: 29px;
  }
  .opportunities__right{
    margin-top: 15px;
  }
  .opportunities-comment{
    width: 100%;
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 50px;
  }
  .try{
    margin-bottom: 50px;
  }
  .try-btn{
    max-width: 97%;
    font-size: 15px;
    padding: 5px;
    padding-left: 13px;
    max-height: 39px;
  }
  .try-btn::after{
    width: 22px;
    font-size: 12px;
    right: 5px;
    top: 15%;
  }
  .reviews>.container {
    padding: 0 20px;
  }
  .reviews__inner{
    padding-bottom: 100px;
  }
  .reviews-title{
    padding: 50px 0 40px 0;
    text-align: left!important;
    width: 100%;
  }
  .reviews-card{
    margin: 0;
    flex-wrap: wrap;
    row-gap: 30px;
  }
  .reviews_img, .reviews_img>img{
    max-width: 320px;
  }
  .reviews_desc{
    order: 2;
    margin-bottom: 30px
  }
  .reviews__side-content{
    order: 1;
  }
  .reviews__btn{
    padding: 10px 20px;
  }
  .reviews__btn>.btn__img img{
    width: 22px;
  }
  .reviews__btn .btn__text{
    font-size: 15px;
  }
  .tariffs {
    height: fit-content;
  }
  /* .tariffs>.container{
    padding: 0 20px;
  } */
  .tariffs-block{
    gap: 10px;
    min-height: 10px;
  }
  .tariffs-card{
    width: 269px;
    padding: 45px 25px 0 25px;
    margin-top: -55px;
    margin-bottom: 55px;
    margin-left: 0;
    margin-right: 0;
    background: linear-gradient(337.52deg, rgba(244, 244, 244, 0.4606) -24.51%, rgba(244, 244, 244, 0) 119.94%);
    flex-shrink: 0;
    opacity: 1;
    box-sizing: content-box;
  }
  .tariffs-title{
    padding: 0;
    margin-bottom: 85px;
    margin-top: 50px;
    padding-top: 50px;
    font-size: 30px;
    line-height: 37px;
    text-align: center;
  }
  .card_desc{
    font-size: 18px;
  }
  .tariffs>.container{
    padding: 0;
  }
}
</style>
