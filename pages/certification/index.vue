<template>
  <div>
    <header class="header">
      <div class="container">
        <div class="header__inner">
          <div class="header__left">
            <div class="header__left-sert header-show">
              <p class="header__left-sert-text">
                Сертификат за 10 минут
              </p>
              <h1 class="header__left-sert-title">
                Сертификация негосударственных судебных экспертов
              </h1>
              <a
                href="https://eduexp.ru/stm_lms_course_category/сертификация-негосударственных-суде/"
                class="header__left-btn"
              >Выбрать сертификацию</a>
            </div>
          </div>
          <div class="header__right">
            <div class="header__slider">
              <div class="header__list">
                <div class="header__right-blocks">
                  <div
                    id="header__right-main"
                    class="header__right-block"
                    :class="{'animated pulse': isHovering && hoveringItem === 1}"
                    @mouseover="hoveringOnItem(1)"
                    @mouseout="noHovering(), selectDefaultItem()"
                  >
                    <nuxt-link to="/">
                      <div class="header__rb-inner edu">
                        <p class="header__right-txt">
                          EduPartner
                        </p>
                      </div>
                    </nuxt-link>
                  </div>
                  <div
                    id="header__right-platform"
                    class="header__right-block"
                    :class="{'animated pulse': isHovering && hoveringItem === 2}"
                    @mouseover="hoveringOnItem(2)"
                    @mouseout="noHovering(), selectDefaultItem()"
                  >
                    <nuxt-link to="/platform">
                      <div class="header__rb-inner platform">
                        <p class="header__right-text">
                          Учись и преподавай
                        </p>
                        <p class="header__right-txt">
                          Платформа EduExp
                        </p>
                      </div>
                    </nuxt-link>
                  </div>
                  <div
                    id="header__right-center"
                    class="header__right-block"
                    :class="{'animated pulse': isHovering && hoveringItem === 3}"
                    @mouseover="hoveringOnItem(3)"
                    @mouseout="noHovering(), selectDefaultItem()"
                  >
                    <nuxt-link to="/license">
                      <div class="header__rb-inner license">
                        <p class="header__right-text">
                          У нас есть лицензия
                        </p>
                        <p class="header__right-txt">
                          Приуральский центр образования
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
    <section class="system third">
      <div class="container">
        <div class="license-inner">
          <div class="license-left">
            <img
              src="../../assets/images/certification-page/sert_eduexp_min.png"
              alt="Лицензия"
              class="license-image"
            >
          </div>
          <div class="license-right">
            <h2 class="license-title">
              Автоматизированная Система Сертификации
            </h2>
            <p class="license-text">
              Автоматизированная Система Сертификации для негосударственных
              судебных экспертов разработана в 2020 в период пандемии
              для уменьшения стоимости и сокращения сроков сертификации
              от 10 мин до 2 часов с учётом оплаты, загрузки документов
              и формирования сертификата для скачивания в личном кабинете
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="sert_about third">
      <div class="container">
        <div class="reasons__inner">
          <h3 class="reasons-title">
            О сертификации
          </h3>
          <hr class="reasons-line">
          <div class="reasons-block">
            <div class="reasons__left">
              <p class="reasons__left-text">
                Кто может пройти сертификацию и получить сертификат
              </p>
            </div>
            <div class="reasons__right">
              <p class="reasons__right-text">
                Только <span class="reasons__right-text-bold">эксперты</span> ,
                обладающие опытом и соответствующим образованием
              </p>
            </div>
          </div>
          <hr class="reasons-line">
          <div class="reasons-block">
            <div class="reasons__left">
              <p class="reasons__left-text">
                Необходимо высшее профильное образование
              </p>
            </div>
            <div class="reasons__right">
              <p class="reasons__right-text">
                Для проходения сертификации необходимо высшее профильное
                образование, соответствующее заявленной эксперной специальности,
                подтвержденное документом государственного образца
              </p>
            </div>
          </div>
          <hr class="reasons-line">
          <div class="reasons-block">
            <div class="reasons__left">
              <p class="reasons__left-text">
                Высшее не профильное образование и профессиональная
                переподготовка
              </p>
            </div>
            <div class="reasons__right">
              <p class="reasons__right-text">
                Для проходения сертификации необходимо высшее не профильное
                образование и профессиональная переподготовка по профилю
                заявленной экспертной специальности
              </p>
            </div>
          </div>
          <hr class="reasons-line">
          <div class="reasons-block">
            <div class="reasons__left">
              <p class="reasons__left-text">
                Опыт работы не менее одного года
              </p>
            </div>
            <div class="reasons__right">
              <p class="reasons__right-text">
                Опыт работы по заявленной экспертной специальности не менее
                одного года, подтвержденный трудовой книжкой или иным документом
                и прохождение курса повышения квалификации по заявленной
                экспертной специальности при наличии любого образования из
                представленных экспертных специальностей.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="clients second third">
      <div class="container">
        <h2 class="clients-title">
          Наши клиенты
        </h2>
        <div class="clients_inner">
          <div class="clients_block">
            <img
              src="../../assets/images/corp_icons/gasprom-icon.svg"
              alt=""
              class="clients-image"
            >
          </div>
          <div class="clients_block">
            <img
              src="../../assets/images/corp_icons/bashneft.svg"
              alt=""
              class="clients-image"
            >
          </div>
          <div class="clients_block">
            <img
              src="../../assets/images/corp_icons/rosneft.svg"
              alt=""
              class="clients-image"
            >
          </div>
          <div class="clients_block">
            <img
              src="../../assets/images/corp_icons/bashavto.svg"
              alt=""
              class="clients-image"
            >
          </div>
          <div class="clients_block">
            <img
              src="../../assets/images/corp_icons/transneft.svg"
              alt=""
              class="clients-image"
            >
          </div>
          <div class="clients_block">
            <img
              src="../../assets/images/corp_icons/gasprom.svg"
              alt=""
              class="clients-image"
            >
          </div>
          <div class="clients_block">
            <img
              src="../../assets/images/corp_icons/ufavoda.svg"
              alt=""
              class="clients-image"
            >
          </div>
          <div class="clients_block">
            <img
              src="../../assets/images/corp_icons/BTA.svg"
              alt=""
              class="clients-image"
            >
          </div>
          <div class="clients_block">
            <img
              src="../../assets/images/corp_icons/Alecond.svg"
              alt=""
              class="clients-image"
            >
          </div>
          <div class="clients_block">
            <img
              src="../../assets/images/corp_icons/incomoc.svg"
              alt=""
              class="clients-image"
            >
          </div>
          <div class="clients_block">
            <img
              src="../../assets/images/corp_icons/akspert.svg"
              alt=""
              class="clients-image"
            >
          </div>
          <div class="clients_block">
            <img
              src="../../assets/images/corp_icons/concern.svg"
              alt=""
              class="clients-image"
            >
          </div>
          <div class="clients_block">
            <img
              src="../../assets/images/corp_icons/PAPC.svg"
              alt=""
              class="clients-image"
            >
          </div>
          <div class="clients_block">
            <img
              src="../../assets/images/corp_icons/ufaaro.svg"
              alt=""
              class="clients-image"
            >
          </div>
        </div>
      </div>
    </section>
    <section class="docs second third">
      <div class="container">
        <h2 class="docs-title">
          Лицензии, аккредитации, соглашения, благодарственные письма
        </h2>
        <div class="docs_inner">
          <div class="docs_left">
            <button
              class="docs_left-btn"
              @mouseover="hoveringOnItem(11)"
              @mouseout="noHovering"
            >
              Образовательная лицензия
            </button>
            <button
              class="docs_left-btn"
              @mouseover="hoveringOnItem(12)"
              @mouseout="noHovering"
            >
              Аккредитация РосНефть
            </button>
            <button
              class="docs_left-btn"
              @mouseover="hoveringOnItem(13)"
              @mouseout="noHovering"
            >
              Аккредитация Минтранса
            </button>
            <button
              class="docs_left-btn"
              @mouseover="hoveringOnItem(14)"
              @mouseout="noHovering"
            >
              Система добровольной сертификации
            </button>
          </div>
          <div class="docs_right">
            <img
              v-show="hoveringItem == 11"
              src="../../assets/images/license-page/lic_center.png"
              alt="Лицензия"
              class="docs_right-img"
            >
            <img
              v-show="hoveringItem == 12"
              src="../../assets/images/license-page/accredit_rosneft.png"
              alt="РосНефть"
              class="docs_right-img"
            >
            <img
              v-show="hoveringItem == 13"
              src="../../assets/images/license-page/accredit_mintrans.jpg"
              alt="Минтранс"
              class="docs_right-img"
            >
            <img
              v-show="hoveringItem == 14"
              src="../../assets/images/license-page/letter_rosstandart.jpg"
              alt="Росстандарт"
              class="docs_right-img"
            >
          </div>
        </div>
      </div>
    </section>
    <section class="diplom second third">
      <div class="container">
        <div class="slider">
          <div class="slider-list">
            <div class="slider-track">
              <div class="slide">
                <img
                  src="../../assets/images/license-page/diplom-slider/diplom-slider-6.webp"
                  alt="diplom-slider-6"
                  class="diplom-image"
                >
              </div>
              <div class="slide">
                <img
                  src="../../assets/images/license-page/diplom-slider/diplom-slider-1.webp"
                  alt="diplom-slider-1"
                  class="diplom-image"
                >
              </div>
              <div class="slide">
                <img
                  src="../../assets/images/license-page/diplom-slider/diplom-slider-2.webp"
                  alt="diplom-slider-2"
                  class="diplom-image"
                >
              </div>
              <div class="slide">
                <img
                  src="../../assets/images/license-page/diplom-slider/diplom-slider-3.webp"
                  alt="diplom-slider-3"
                  class="diplom-image"
                >
              </div>
              <div class="slide">
                <img
                  src="../../assets/images/license-page/diplom-slider/diplom-slider-4.webp"
                  alt="diplom-slider-4"
                  class="diplom-image"
                >
              </div>
            </div>
          </div>
          <div class="slider-arrows">
            <button type="button" class="prev disabled">
              <svg
                class="diplom-arrows-svg prev"
                width="47"
                height="91"
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
            </button>
            <button type="button" class="next">
              <svg
                class="diplom-arrows-svg next"
                width="47"
                height="91"
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
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { dragDropSlider } from '../../assets/js/slider.js'
import hoveringMixin from '@/components/mixins/hoveringMixin'
export default {
  name: 'CertificationPage',
  mixins: [hoveringMixin],
  layout: 'emptyLt',
  head () {
    return {
      title: 'EduPartner✅Система Сертификации для негосударственных судебных экспертов',
      meta: [
        {
          name: 'description',
          content: 'Автоматизированная Система Сертификации для негосударственных судебных экспертов разработана в 2020 в период пандемии для уменьшения стоимости и сокращения сроков сертификации от 10 мин до 2 часов с учётом оплаты, загрузки документов и формирования сертификата для скачивания в личном кабинете'
        },
        {
          name: 'keywords',
          content: 'Сертификация негосударственных судебных экспертов'
        }
      ]
    }
  },
  mounted () {
    try {
      dragDropSlider('.header__slider', '.header__list', '.header__right-blocks', '.header__right-block', '.header__arrows', 3)
    } catch (error) {}
    try {
      dragDropSlider('.slider', '.slider-list', '.slider-track', '.slide', '.slider-arrows', 5)
    } catch (error) {}
  }
}
</script>

<style scoped>
header {
  margin: 0;
  width: 100%;
  height: 850px;
  background-image: url("../../assets/images/certification-page/sert-header.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}

.header__left,
.header__right {
  z-index: 2;
}

.header__inner {
  display: flex;
  justify-content: space-between;
  padding-top: 273px;
}
.header__left-edupartner {
  display: none;
  transition: 1s;
  transform: translateY(70%);
  opacity: 0;
  height: 300px;
}
.header__left-title {
  font-weight: 500;
  font-size: 92px;
  line-height: 112px;
  margin-top: 65px;
}
.header__left-text {
  font-weight: 700;
  font-size: 41.5px;
  line-height: 51px;
  background: linear-gradient(270deg, #faff00 37.78%, #383819 107.4%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  scrollbar-color: transparent;
}
.header__left-image {
  position: relative;
  top: -225px;
  left: 96px;
  z-index: -1;
}
.header__left-center {
  display: none;
  transition: 1s;
  transform: translateY(70%);
  opacity: 0;
}
.header__left-center-top {
  display: flex;
  align-items: center;
}
.header__left-center-text,
.header__left-sert-text {
  max-width: 420px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 31px;
  color: rgba(255, 255, 255, 0.8);
}
.header__left-center-top .header__left-center-text,
.header__left-sert-text {
  width: 263px;
  position: relative;
}
.header__left-sert-text {
  width: auto;
}
.header__left-sert {
  display: none;
  transition: 1s;
  transform: translateY(70%);
  opacity: 0;
}
.header__left-center-title,
.header__left-sert-title {
  margin-bottom: 30px;
  width: 427px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 49px;
  color: #ffffff;
}
.header__left-sert-title {
  margin-top: 65px;
  margin-bottom: 50px;
}
.header__right {
  margin-top: 82px;
  margin-bottom: 215px;
}
.header__right-top {
  height: 95px;
}
.header__right-title {
  font-weight: 700;
  font-size: 25px;
  line-height: 30px;
  text-transform: uppercase;
  margin-bottom: 65px;
  margin-left: 16px;
  display: none;
  transition: 1s;
  transform: translateY(200%);
  opacity: 0;
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

.header__list.grabbing {
  cursor: grabbing;
}
/* ========================================================================= */

.header__right-blocks {
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
  border-radius: 20px;
  padding-top: 160px;
  position: relative;
  background-repeat: no-repeat;
  background-size: 150%;
  background-position: center center;
  transition: 0.5s;
  border-radius: 20px;
  z-index: 4;
  padding-left: 10px;
}
.header__right-block>a{
  color: #FFFFFF;
}
.header__right-block:hover {
  cursor: pointer;
}

.header__rb-inner.platform {
  background-image: url('../../assets/images/main-page/projects-slider/notebook_1.png');
}
.header__rb-inner.license {
  background-image: url('../../assets/images/main-page/projects-slider/book.png');
}
#header__right-sert .header-bg {
  background-image: url('../../assets/images/certification-page/sert-header.jpg');
}
.header__rb-inner.edu {
  background-image: url('../../assets/images/main-page/projects-slider/edupartner.png');
}
#header__right-main .header-bg {
  background: #1d1d1d;
}

.transition_zero {
  transition: 0s;
}
.header__right-text {
  margin-left: 5px;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  margin-bottom: 10px;
  margin-right: 10px;
}
.header__right-txt {
  margin-left: 5px;
  width: 80%;
  font-weight: 700;
  font-size: 17px;
  line-height: 21px;
}
.header__left-eduexp {
  position: relative;
  display: none;
  transition: 1s;
  transform: translateY(30%);
  opacity: 0;
}
.header__left-txt {
  font-weight: 500;
  font-size: 24px;
  line-height: 31px;
  margin-bottom: 30px;
}
/* .header__left-txt::before{
  width: 80px;
  height: 5px;
  position: absolute;
  content: '';
  background-color: #FAFF00;
  top: -30px;
} */
.header__left-img {
  margin-bottom: 55px;
}
.header__left-btn {
  display: block;
  font-weight: 600;
  font-size: 20px;
  line-height: 26px;
  color: #ffffff;
  width: 392px;
  height: 66px;
  padding: 20px 40px;
  border: 2px solid #faff00;
  border-radius: 20px;
  position: relative;
  transition: 0.5s;
}
.header__left-btn::after {
  position: absolute;
  content: "⟶";
  width: 41px;
  font-size: 30px;
  right: 32px;
}
.header__left-btn:hover {
  cursor: pointer;
  background: #faff00;
  border: 2px solid #faff00;
  box-shadow: 0px 0px 20px #faff00;
  border-radius: 20px;
  color: #1d1d1d;
}

.system {
  background-image: url('../../assets/images/license-page/license_center.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 864px;
  margin-bottom: 150px;
  padding-top: 111px;
  padding-bottom: 111px;
}

.license-inner {
  display: flex;
  justify-content: space-between;
}
.license-right {
  width: 480px;
  margin-top: 123px;
}
.license-left {
  max-width: 454px;
  max-height: 640px;
}
.license-image {
  width: 100%;
  height: 100%;
}
.license-title {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 49px;
  color: #ffffff;
  margin-bottom: 30px;
}
.license-text {
  margin-bottom: 15px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: rgba(236, 248, 255, 0.8);
}
.reasons,
.sert_about {
  background-image: url('../../assets/images/license-page/white-blue.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  margin-bottom: 150px;
  padding-bottom: 80px;
  padding-top: 100px;
}
.sert_about {
  background-image: url('../../assets/images/certification-page/sert-black.png');
}
.reasons-title {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 49px;
  position: relative;
  color: #ffffff;
  margin-bottom: 65px;
}
.reasons-line {
  border: 1px solid rgba(9, 103, 161, 0.5);
  margin-bottom: 20px;
  margin-top: 20px;
}
.reasons-block {
  display: flex;
  justify-content: space-between;
}
.reasons__left-text {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 39px;
  color: #ffffff;
}
.reasons__right-text {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #154069;
  width: 480px;
}

.reasons__right-text-bold {
  font-weight: 700;
}
.clients {
  background-color: #0967a1;
  padding-top: 122px;
  padding-bottom: 120px;
}
.clients-title {
  text-align: right;
  margin-left: auto;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 49px;
  color: #ffffff;
  margin-bottom: 110px;
  position: relative;
  width: 326px;
}
/* .clients-title::after{
  position: absolute;
  content:'';
  width: 293px;height: 7px;
  background-color:white;
  left: 0;
  top: -30px;
} */
.clients_inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.clients_block {
  margin-bottom: 46px;
}
.clients-image {
  display: flex;
  align-items: center;
}

.docs {
  padding-top: 172px;
  padding-bottom: 100px;
}
.docs-title {
  position: relative;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 49px;
  color: #0967a1;
  margin-bottom: 50px;
}
.docs_inner {
  display: flex;
  justify-content: space-between;
}
.docs_left-btn {
  display: block;
  padding: 20px 50px;
  border: 1px solid #0967a1;
  border-radius: 30px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  background-color: white;
  margin-bottom: 20px;
  color: #0967a1;
  cursor: pointer;
  transition: 0.5s;
}
.docs_left-btn:hover {
  color: #ffffff;
  background-color: #0967a1;
}
.docs_right {
  max-width: 371px;
  max-height: 523px;
}
.docs_right-img {
  width: 100%;
  height: 100%;
}
.active {
  display: block;
}
.diplom {
  background: #202020;
  padding-bottom: 130px;
  padding-top: 80px;
}
.diplom-inner {
  height: 544px;
  display: flex;
  justify-content: space-between;
}
.diplom-block {
  width: 380px;
  max-height: 544px;
  transition: 0.5s;
  overflow: hidden;
}
.diplom-block-shadow {
  width: 0;
}
.diplom-image {
  width: 100%;
}
.diplom-arrows {
  display: flex;
  gap: 98px;
  margin-top: 50px;
}
.diplom-arrow-left {
  margin-left: auto;
}
.diplom-arrow-right {
  margin-right: auto;
}
.diplom-arrows-svg path {
  stroke-opacity: 1;
  stroke: white;
}
.diplom-arrows-svg:hover {
  cursor: pointer;
}
.diplom-arrows-svg:hover path {
  stroke: #faff00;
  opacity: 1;
  stroke-opacity: 1;
}

.slider {
  position: relative;
  width: 100%;
  margin: 0 auto;
  /* Чтобы во время перетаскивания слайда ничего не выделить внутри него */
  user-select: none;
  /* Чтобы запретить скролл страницы, если мы начали двигать слайдер по оси X */
  touch-action: pan-y;
}

/* Если где-то внутри слайдера будут изображения,
  то нужно задать им pointer-events: none,
  чтобы они не перетаскивались мышью */

.slider img {
  pointer-events: none;
}

.slider-list {
  width: 1200px;
  height: 542px;
  overflow: hidden;
}

.slider-list.grab {
  cursor: grab;
}

.slider-list.grabbing {
  cursor: grabbing;
}

.slider-track {
  display: flex;
}

.slide {
  width: 380px;
  height: 542px;
  /* Чтобы слайды не сжимались */
  flex-shrink: 0;
  /* Увеличиваем и центрируем цифру внутри слайда */
  padding-right: 10px;
  padding-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: content-box;
}

.slide img {
  width: 100%;
  height: 100%;
}

.slider-arrows {
  margin-top: 50px;
  text-align: center;
}
.next,
.prev {
  background: none;
  border: none;
  margin: 0 10px;
  font-size: 30px;
  cursor: pointer;
}

.next.disabled,
.prev.disabled {
  opacity: 0.25;
  pointer-events: none;
}
/* Всплыв текста */
.header-show {
  display: block;
  transform: translateY(0%);
  opacity: 1;
}
.header__right-block-zero {
  width: 0;
}

@media (max-width: 1024px) {
  .header__inner {
    padding-top: 236px;
  }
  .header__right {
    margin-top: 29px;
  }
  .header__left-sert-title {
    font-size: 36px;
    line-height: 44px;
    max-width: 372px;
    margin: 65px 0 70px 0;
  }
  .header__rb-inner {
    width: 176px;
    height: 280px;
  }
  .system {
    padding: 185px 0 153px 0;
    background-position: 40% center;
    margin-bottom: 140px;
  }
  .license-left {
    max-width: 372px;
    height: fit-content;
  }
  .license-right {
    margin-top: 34px;
  }
  .sert_about {
    padding-top: 54px;
    background-position: 52% center;
  }
  .reasons-block {
    justify-content: space-between;
  }
  .reasons__left {
    width: 568px;
  }
  .reasons__right {
    max-width: 372px;
  }
  .reasons__right-text {
    max-width: 100%;
  }
  .clients {
    padding: 100px 0 60px 0;
  }
  .clients-title {
    margin-bottom: 80px;
    margin-right: 80px;
  }
  .clients_inner {
    justify-content: space-around;
  }
  .docs {
    padding: 150px 0;
  }
  .docs_inner {
    justify-content: space-between;
  }
  .docs-title {
    margin-bottom: 40px;
  }
  .docs_left {
    margin-top: 40px;
  }
  .docs_left-btn {
    font-size: 16px;
    line-height: 20px;
  }
  .docs_right {
    max-width: 324px;
    max-height: 456px;
  }
  .docs_right-img {
    margin: 0;
  }
  .diplom {
    padding: 100px 0;
  }
  .slider-list {
    max-width: 100%;
  }
  .slide {
    max-width: 372px;
    max-height: 532px;
  }
  .slider-arrows {
    display: none;
  }
}
@media (max-width: 768px) {
  .container {
    max-width: 768px;
  }
  .header__inner {
    padding-top: 221px;
  }
  .header__left-sert-title {
    margin-bottom: 40px;
    font-size: 34px;
    line-height: 41px;
  }
  .header__left-btn {
    font-size: 18px;
    line-height: 130%;
    max-width: 346px;
    max-height: 54px;
    padding: 15px 30px;
  }
  .header__right {
    margin: 33px 0 0 0;
  }
  .header__rb-inner{
    width: 167px;
  }
  .header__slider,
  .header__list {
    max-width: 354px;
    padding-left: 0;
    padding-right: 0;
  }
  .system {
    padding: 154px 0 152px 0;
    background-position: 30% center;
  }
  .license-inner {
    justify-content: space-between;
  }
  .license-left {
    max-width: 354px;
    margin-top: 57px;
  }
  .license-right {
    margin-top: 0;
    width: fit-content;
    margin-left: 21px;
  }
  .license-title {
    font-size: 30px;
    line-height: 37px;
    margin-bottom: 66px;
  }
  .license-text {
    margin: 0;
  }
  .sert_about {
    background-position: 57% center;
    padding: 37px 0 75px 0;
  }
  .reasons-title {
    font-size: 36px;
    line-height: 44px;
  }
  .reasons__right,
  .reasons__left {
    max-width: 354px;
  }
  .clients-title {
    margin-right: 0;
  }
  .docs_left-btn {
    font-size: 16px;
    line-height: 20px;
    padding: 15px 30px;
  }
  .docs_right {
    max-width: 272px;
    height: fit-content;
  }
  .slide {
    max-width: 354px;
    max-height: 513px;
  }
  .slider-list {
    width: 100%;
  }
}

/* потом удалить */
@media (max-width: 480px) {
  .header__inner {
    padding-top: 73px;
    flex-wrap: wrap;
  }
  .header__left {
    max-width: 320px;
  }
  .header__left-sert-title {
    font-size: 28px;
    line-height: 34px;
    margin: 30px 0;
    max-width: 100%;
  }
  .header__left-btn {
    font-size: 16px;
    max-width: 320px;
  }
  .header__left-btn::after {
    top: 12px;
    right: 20px;
  }
  .header__right {
    margin-top: 60px;
  }
  .header__rb-inner {
    max-width: 150px;
    max-height: 238px;
    padding: 141px 10px 20px 10px;
  }
  .header__right-txt {
    font-size: 16px;
    line-height: 20px;
  }
  .header__right-text {
    font-size: 10px;
    line-height: 12px;
  }
  .header__slider {
    max-width: 320px;
  }
  .header__left, .header__right, .header__list{
    width: 100%;
  }
  .header__slider, .header__list{
    max-width: none;
  }
  .system {
    background-position: right center;
    padding: 50px 0 37px 0;
    height: fit-content;
    margin: 0;
  }
  .license-inner,
  .reasons-block,
  .docs_inner {
    flex-wrap: wrap;
  }
  .license-inner {
    justify-content: center;
  }
  .license-left {
    max-width: 320px;
    max-height: 453px;
    margin: 0;
  }
  .license-right {
    margin: 0;
  }
  .license-title {
    margin: 30px 0 15px 0;
    font-size: 25px;
    line-height: 30px;
  }
  .sert_about {
    background-position: left center;
    padding: 50px 0 100px 0;
    margin: 0;
  }
  .reasons-title {
    font-size: 32px;
    line-height: 39px;
    margin-bottom: 40px;
  }
  .reasons__left-text {
    font-size: 24px;
    line-height: 29px;
  }
  .reasons__right {
    width: 100%;
    margin-top: 20px;
  }
  .reasons__right-text {
    color: #ffffff;
  }
  .reasons-line {
    border-color: #c4c4c4;
  }
  .clients {
    padding: 30px 0;
  }
  .clients-title {
    font-size: 30px;
    line-height: 37px;
    margin-bottom: 30px;
    width: auto;
  }
  .clients_inner {
    gap: 15px;
  }
  .clients_block {
    margin: 0;
  }
  .clients_block,
  .clients_block img {
    max-width: 150px;
    max-height: 63px;
  }
  .docs {
    padding: 80px 0;
  }
  .docs-title {
    font-size: 30px;
    line-height: 37px;
    margin-bottom: 37px;
  }
  .docs_left {
    margin: 0;
  }
  .docs_left-btn {
    padding: 15px 25px;
    text-align: left;
  }
  .docs_right {
    margin-top: 14px;
    margin: 0 auto;
  }
  .diplom {
    padding: 80px 0;
    background: #205d92;
  }
  .slider {
    height: 100%;
    width: 252px;
  }
  .slider-list {
    height: 100%;
    width: 252px;
  }
  .slide {
    max-width: 252px;
    max-height: 380px;
    padding: 0;
  }
}
</style>
