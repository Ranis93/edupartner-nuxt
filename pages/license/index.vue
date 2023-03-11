<template>
  <div>
    <header class="header">
      <div class="container">
        <div class="header__inner">
          <div class="header__left">
            <div class="header__left-center header-show">
              <div class="header__left-center-top">
                <p class="header__left-center-text">
                  У нас есть лицензия
                </p>
              </div>
              <h2 class="header__left-center-title">
                Приуральский центр образования
              </h2>
              <p class="header__left-center-text">
                Частное образовательное учреждение дополнительного
                профессионального образования
              </p>
            </div>
          </div>
          <div class="header__right">
            <div class="header__slider">
              <div class="header__list">
                <div class="header__right-blocks">
                  <div
                    id="header__right-sert"
                    class="header__right-block"
                    :class="{'animated pulse': isHovering && hoveringItem === 1}"
                    @mouseover="hoveringOnItem(1)"
                    @mouseout="noHovering(), selectDefaultItem()"
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
                    :class="{'animated pulse': isHovering && hoveringItem === 2}"
                    @mouseover="hoveringOnItem(2)"
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
                    :class="{'animated pulse': isHovering && hoveringItem === 3}"
                    @mouseover="hoveringOnItem(3)"
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
    <section class="license second">
      <div class="container">
        <div class="license-inner">
          <div class="license-left">
            <img
              src="../../assets/images/license-page/lic_center.png"
              alt="Лицензия"
              class="license-image"
            >
          </div>
          <div class="license-right">
            <h2 class="license-title">
              О Приуральском центре образования
            </h2>
            <p class="license-text">
              «Приуральский центр ДПО» - лицензированная образовательная
              организация, основанная 2 апреля 2009 года.
            </p>
            <p class="license-text">
              Работаем на основании лицензии №4503.
            </p>
            <p class="license-text">
              Основные наши услуги: повышение квалификации, профессиональная
              переподготовка, профессиональное обучение, семинары, вебинары.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="reasons second">
      <div class="container">
        <div class="reasons__inner">
          <h3 class="reasons-title">
            Причины обучаться у нас
          </h3>
          <hr class="reasons-line">
          <div class="reasons-block">
            <div class="reasons__left">
              <p class="reasons__left-text">
                Опыт образовательной деятельности более 13 лет
              </p>
            </div>
            <div class="reasons__right">
              <p class="reasons__right-text">
                Долголетний опыт помогает нам совершенствовать наше обучение,
                интегрировать классическое обучение с современными трендами.
              </p>
            </div>
          </div>
          <hr class="reasons-line">
          <div class="reasons-block">
            <div class="reasons__left">
              <p class="reasons__left-text">
                Возраст сотрудников
              </p>
            </div>
            <div class="reasons__right">
              <p class="reasons__right-text">
                Возраст сотрудников компании варьируется от 19 до 50 лет.
                Это помогает нам в разработке курсов использовать разные взгляды
                и профессиональный опыт.
              </p>
            </div>
          </div>
          <hr class="reasons-line">
          <div class="reasons-block">
            <div class="reasons__left">
              <p class="reasons__left-text">
                Мы первые
              </p>
            </div>
            <div class="reasons__right">
              <p class="reasons__right-text">
                Мы первые в РБ реализовали профессиональную переподготовку
                экспертов-техников, получили лицензию Мин. Образования,
                присваивали новую квалификацию: выдавали дипломы, готовили
                документы экспертов для МАК.
              </p>
            </div>
          </div>
          <hr class="reasons-line">
          <div class="reasons-block">
            <div class="reasons__left">
              <p class="reasons__left-text">
                Дистанционное и очное обучение
              </p>
            </div>
            <div class="reasons__right">
              <p class="reasons__right-text">
                Все наши курсы для дистанционного обучения представлены на
                платформе
                <a class="reasons__right-link" href="#!">EduExp.</a> По запросу
                проводим очное обучение.
              </p>
            </div>
          </div>
          <hr class="reasons-line">
          <div class="reasons-block">
            <div class="reasons__left">
              <p class="reasons__left-text">
                Выгодная стоимость
              </p>
            </div>
            <div class="reasons__right">
              <p class="reasons__right-text">
                Мы следим за рынком и предлагаем выгодные предложения. Проводим
                акции, делаем специальные предложения и идём на уступки.
              </p>
            </div>
          </div>
          <hr class="reasons-line">
          <div class="reasons-block">
            <div class="reasons__left">
              <p class="reasons__left-text">
                Обучение в соответствии с ФГОС и государственными Проф.
                стандартами
              </p>
            </div>
            <div class="reasons__right">
              <p class="reasons__right-text">
                Мы следим за изменениями в законодательстве, разрабатываем курсы
                в соответствии с государственными стандартами
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
    <section class="footer">
      <div class="container">
        <table class="grid">
          <tr>
            <td>
              <a
                class="grid__link"
                href="https://eduexp.ru/wp-content/uploads/2021/09/%D0%A4%D0%B8%D0%BD%D0%B0%D0%BD%D1%81%D0%BE%D0%B2%D0%BE-%D1%85%D0%BE%D0%B7%D1%8F%D0%B9%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%B0%D1%8F-%D0%B4%D0%B5%D1%8F%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D1%8C.pdf"
              >
                Финансово-хозяйственная деятельность
              </a>
            </td>
            <td>
              <a
                class="grid__link"
                href="https://eduexp.ru/wp-content/uploads/2021/09/%D0%A0%D1%83%D0%BA%D0%BE%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%BE-%D0%B8-%D0%BF%D0%B5%D0%B4%D0%B0%D0%B3%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9-%D1%81%D0%BE%D1%81%D1%82%D0%B0%D0%B2.pdf"
              >
                Руководство и педагогический состав
              </a>
            </td>
            <td>
              <a
                class="grid__link"
                href="https://eduexp.ru/wp-content/uploads/2021/09/%D0%9E%D0%B1%D1%80%D0%B0%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5.pdf"
              >
                Образование
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a
                class="grid__link"
                href="https://eduexp.ru/wp-content/uploads/2021/09/%D0%A1%D1%82%D1%80%D1%83%D0%BA%D1%82%D1%83%D1%80%D0%B0-%D0%B8-%D0%BE%D1%80%D0%B3%D0%B0%D0%BD%D1%8B-%D1%83%D0%BF%D1%80%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F-%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE%D0%B9-%D0%BE%D1%80%D0%B3%D0%B0%D0%BD%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D0%B8.pdf"
              >
                Структура и органы управления образовательной организации
              </a>
            </td>
            <td>
              <a
                class="grid__link"
                href="https://eduexp.ru/wp-content/uploads/2021/09/%D0%9E%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D1%8B%D0%B5-%D1%81%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D1%8F.pdf"
              >
                Основные сведения
              </a>
            </td>
            <td>
              <a
                class="grid__link"
                href="https://eduexp.ru/wp-content/uploads/2021/09/%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE-%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B5-%D0%BE%D0%B1%D0%B5%D1%81%D0%BF%D0%B5%D1%87%D0%B5%D0%BD%D0%B8%D0%B5.pdf"
              >
                Материально-техническое обеспечение
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a
                class="grid__link"
                href="https://eduexp.ru/wp-content/uploads/2021/09/%D0%A1%D1%82%D0%B8%D0%BF%D0%B5%D0%BD%D0%B4%D0%B8%D0%B8-%D0%B8-%D0%B8%D0%BD%D1%8B%D0%B5-%D0%B2%D0%B8%D0%B4%D1%8B-%D0%BC%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B9-%D0%BF%D0%BE%D0%B4%D0%B4%D0%B5%D1%80%D0%B6%D0%BA%D0%B8.pdf"
              >
                Стипендии и иные виды материальной поддержки
              </a>
            </td>
            <td>
              <a
                class="grid__link"
                href="https://eduexp.ru/wp-content/uploads/2021/09/%D0%9E%D0%B1%D1%80%D0%B0%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D1%81%D1%82%D0%B0%D0%BD%D0%B4%D0%B0%D1%80%D1%82%D1%8B.pdf"
              >
                Образовательные стандарты
              </a>
            </td>
            <td>
              <a
                class="grid__link"
                href="https://eduexp.ru/wp-content/uploads/2021/09/%D0%92%D0%B0%D0%BA%D0%B0%D0%BD%D1%82%D0%BD%D1%8B%D0%B5-%D0%BC%D0%B5%D1%81%D1%82%D0%B0-%D0%B4%D0%BB%D1%8F-%D0%BF%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%D0%B4%D0%B0-%D0%B8-%D0%BF%D1%80%D0%B8%D0%B5%D0%BC%D0%B0.pdf"
              >
                Вакантные места для перевода и приёма
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <div class="grid__link">
                г. Уфа Бульвар Ибрагимова 37/1
              </div>
            </td>
            <td>
              <div class="grid__link">
                +7 347 214-51-29
              </div>
            </td>
            <td>
              <div class="grid__link" />
            </td>
          </tr>
        </table>
      </div>
    </section>
  </div>
</template>

<script>
import { dragDropSlider } from '../../assets/js/slider.js'
import hoveringMixin from '@/components/mixins/hoveringMixin'
export default {
  name: 'LicensePage',
  mixins: [hoveringMixin],
  layout: 'emptyLt',
  head () {
    return {
      title: 'Образовательная лицензия Edupartner',
      meta: [
        {
          name: 'description',
          content: 'Eduparter совместно с Приуральским центром дополнительного профессоинального обрзования(лицензированная образовательная организация) осуществляют образовательные услуги: повышение квалификации, профессиональная переподготовка, профессиональное обучение, семинары, вебинары.'
        },
        {
          name: 'keywords',
          content: 'О лицензии EduPartner'
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
  background: #205D92;
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
  padding-top: 308px;
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
.header__left-center-title,.header__left-sert-title{
  margin-top: 30px;
    margin-bottom: 30px;
  max-width: 100%;
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
  margin-top: 61px;
}
.header__right-top{
  height: 95px;
}
.header__right-title{
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
  border-radius: 20px;
  z-index: 4;
  padding-left: 10px;
}
.header__right-block>a{
  color: #FFFFFF;
}
.header__right-block:hover{
  cursor: pointer;
}

.header__rb-inner.platform{
  background-image: url('../../assets/images/main-page/projects-slider/notebook_1.png');
}
.header__rb-inner.sert{
  background-image: url('../../assets/images/main-page/projects-slider/sert_1.png');
}
#header__right-main, #header__right-sert, #header__right-center, #header__right-platform{
  background-size: auto;
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
/* .header__left-txt::before{
  width: 80px;
  height: 5px;
  position: absolute;
  content: '';
  background-color: #FAFF00;
  top: -30px;
} */
.header__left-img{
  margin-bottom: 55px;
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

.license{
  background-image: url('../../assets/images/license-page/license_center.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 864px;
  margin-bottom: 150px;
  padding-top: 112px;
  padding-bottom: 112px;
}

.license-inner{
  display: flex;
  justify-content: space-between;
}
.license-right{
  width: 480px;
  margin-top: 123px;
}
.license-image{
  width: 100%;
}
.license-title{
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 40px;
line-height: 49px;
color: #FFFFFF;
margin-bottom: 30px;
}
.license-text{
  margin-bottom: 15px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height:  30px;
  color: rgba(236, 248, 255, 0.8);
}

.reasons,.sert_about{
  background-image: url('../../assets/images/license-page/white-blue.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  margin-bottom: 148px;
  padding-bottom: 80px;
  padding-top: 100px;
}

.reasons-title{
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 49px;
  position: relative;
  color: #FFFFFF;
  margin-bottom: 65px;

}
.reasons-line{
  border: 1px solid rgba(9, 103, 161, 0.5);
  margin-bottom: 20px;
  margin-top: 20px;
}
.reasons-block{
  display: flex;
  justify-content: space-between;

}
.reasons__left-text{
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 39px;
  color: #FFFFFF;
}
.reasons__right-text, .reasons__right-link{
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #154069;
  width: 480px;
}
.reasons__right-link{
  font-weight: 500;
  text-decoration: underline;
}
.reasons__right-text-bold{
  font-weight: 700;

}

.clients{
  background-color:#0967A1;
  padding-top: 122px;
  padding-bottom: 120px;
}
.clients-title{
  text-align: right;
  margin-left: auto;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 49px;
  color: #FFFFFF;
  margin-bottom: 110px;
  position: relative;
  width: 326px;
}
.clients_inner{
  display: flex;
  flex-wrap: wrap;
  align-items: center
}
.clients_block{
  margin-bottom: 46px;
}
.clients-image{
  display: flex;
    align-items: center;
}

.docs{
  padding-top: 172px;
  padding-bottom: 100px;
}
.docs-title{
  position: relative;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 49px;
  color: #0967A1;
  margin-bottom: 50px;
}
.docs_inner{
  display: flex;
  justify-content: space-between;
}
.docs_left-btn{
  display: block;
  padding: 20px 50px;
  border: 1px solid #0967A1;
  border-radius: 30px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  background-color:white;
  margin-bottom: 20px;
  color: #0967A1;
  cursor: pointer;
  transition: 0.5s;
  text-align: left;
}
.docs_left-btn:hover{
  color: #FFFFFF;
  background-color:#0967A1;
}
.docs_right-img{
  max-width: 371px;
  margin-right: auto;
}

.active {
  display: block;
}

.diplom{
  background: #205D92;
  padding-bottom: 130px;
  padding-top: 80px;
}
.diplom-inner{
  height: 544px;
  display: flex;
  justify-content: space-between;
}
.diplom-block{
  width: 380px;
  max-height: 544px;
  transition: .5s;
  overflow: hidden;
}
.diplom-block-shadow{
  width: 0;
}
.diplom-image{
  width: 100%;
}
.diplom-arrows{
  display: flex;
  gap: 98px;
  margin-top: 50px;
}
.diplom-arrow-left{
  margin-left: auto;
}
.diplom-arrow-right{
  margin-right: auto;
}
.diplom-arrows-svg path{
  stroke-opacity: 1;
    stroke: white;
}
.diplom-arrows-svg:hover{
  cursor: pointer;
}
.diplom-arrows-svg:hover path{
  stroke: #FAFF00;
  opacity: 1;
  stroke-opacity: 1;
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

.footer {
  background-color: #00304E;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  padding: 50px 0 50px 0;
}
.grid {
  width: 100%;
  border: none;
  border-collapse: separate;
  border-spacing: 30px;
}

.grid td {
  width: 380px;
  vertical-align: top;
  padding: 0;
}

.grid__link {
  color: #FFFFFF;
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

  .slider-list.grabbing{
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
  opacity: .25;
  pointer-events: none;
  }

@media (max-width: 1024px) {
  .container {
    max-width: 100%;
  }
  .header__right{
    margin-top: 66px;
  }
  .header__rb-inner {
    width: 176px;
    height: 280px;
  }
  .header__inner {
    justify-content: flex-start;
    padding: 190px 10px 0 10px;
  }
  .header__left{
    max-width: 372px;
  }
  .license{
    background-position: 42% center;
    padding: 202px 0 0 0;
    margin-bottom: 140px;
  }
  .license-left{
    max-width: 373px;
    max-height: 525px;
  }
  .license-right{
    max-width: 480px;
    margin-top: 23px;
  }
  .reasons {
    background-position: 53% center;
    margin-bottom: 150px;
  }
  .reasons-title{
    font-size: 36px;
    line-height: 44px;
    max-width: fit-content;
  }
  .reasons__left-text{
    max-width: 503px;
  }
  .reasons__right-text, .reasons__right-link{
    max-width: 372px;
  }
  .reasons-line{
    margin-bottom: 32px;
  }
  .clients{
    padding-top: 100px;
    padding-bottom: 50px;
  }
  .clients-title{
    margin-right: 79px;
    font-size: 36px;
    line-height: 44px;
  }
  .docs{
    padding: 100px 0;
  }
  .docs-title{
    font-size: 36px;
    line-height: 44px;
    margin-bottom: 50px;
  }
  .docs_right-img{
    max-width: 371px;
    max-height: 523px;
  }
  .diplom{
    padding: 100px 0 ;
  }
  .slider-list{
    max-width: 100%;
  }
  .slide{
    max-width: 372px;
    max-height: 532px;
  }
  .slider-arrows{
    display: none;
  }
  .grid{
    border-spacing: 20px;
  }
  .footer>.container{
    padding: 0;
  }
}
@media (max-width: 768px) {
  .header__inner{
    padding: 190px 0 0 0;
    justify-content: space-between;
  }
  .header__right{
    max-width: 380px;
    margin-left: 10px;
  }
  .header__slider{
    max-width: 380px;
  }
  .header__list{
    max-width: 380px;
  }
  .license {
    background-position: 32% center;
    padding-top: 155px;
  }
  .license-left{
    max-width: 354px;
    max-height: 499px;
    padding-top: 55px;
  }
  .license-right{
    max-width: 320px;
  }
  .license-title{
    font-size: 34px;
    line-height: 41px;
    margin-bottom: 40px;
  }
  .reasons{
    padding: 54px 0 80px 0;
    background-position: 57% center;
  }
  .reasons-title{
    max-width: 354px;
  }
  .reasons-line{
    margin: 20px 0 20px 0;
  }
  .reasons__left-text{
    max-width: 343px;
  }
  .reasons__right-text{
    max-width: 354px;
  }
  .clients-title{
    margin-right: 0;
  }
  .docs{
    padding: 113px 0 150px 0;
  }
  .docs-title{
    margin-left: 6px;
    margin-bottom: 39px;
  }
  .docs_left{
    margin-top: 42px;
  }
  .docs_left-btn{
    font-size: 16px;
    line-height: 20px;
    padding: 15px 30px;
  }
  .docs_right{
    margin: 0 auto;
  }
  .docs_right-img{
    max-width: 272px;
    max-height: 383px;
  }
  .diplom{
    padding: 100px 0 78px 0;
  }
  .slide{
    max-width: 354px;
    max-height: 535px;
  }
  .footer{
    padding: 46px 0 50px 0;
  }
  .grid__link{
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
  }
}

@media (max-width: 480px) {
  .header{
    height: auto;
  }
  .container{
    padding: 0 20px;
  }
  .header__inner{
    padding-top: 73px;
    flex-wrap: wrap;
  }
  .header__rb-inner {
    max-width: 150px;
    max-height: 238px;
    padding: 141px 10px 20px 10px;
  }
  .header__left-center-title{
    margin-bottom: 35px;
    font-size: 36px;
    line-height: 44px;
  }
  .header__left-center-text{
    font-size: 20px;
  }
  .header__right{
    margin-top: 60px;
    margin-left: 0;
    max-width: 320px;
  }
  .header__right-txt{
    font-size: 16px;
    line-height: 20px;
  }
  .header__right-text{
    font-size: 10px;
    line-height: 12px;
  }
  .header__slider, .header__list{
    max-width: auto;
  }
  .header__list{
    padding-left: 0;
    padding-right: 0;
  }
  .license{
    padding-top: 50px;
    background-position: right center;
    min-height: 1058px;
    height: fit-content;
    margin: 0;
  }
  .license-inner {
    flex-wrap: wrap;
    padding-bottom: 37px;
  }
  .license-left{
    max-width: 320px;
    max-height: 449px;
    padding-top: 0;
  }
  .license-right{
    margin-top: 42px;
  }
  .license-title{
    margin-bottom: 15px;
    font-size: 30px;
    line-height: 37px;
  }
  .license-text{
    font-size: 18px;
    margin-bottom: 5px;
  }
  .reasons{
    padding-top: 50px;
    padding-bottom: 166px;
    margin-bottom: 0;
    background-position: left center;
  }
  .reasons-title{
    padding-bottom: 20px;
    margin: 0;
  }
  .reasons-block{
    flex-wrap: wrap;
  }
  .reasons__left-text{
    font-size: 24px;
    line-height: 29px;
  }
  .reasons__right-text{
    width: 100%;
    padding-top: 20px;
    color: #FFFFFF;
  }
  .reasons__right-link{
    color: #FFFFFF;
  }
  .clients{
    padding: 30px 0;
  }
  .clients-title{
    font-size: 30px;
    line-height: 37px;
    margin-bottom: 40px;
    width: 100%;
  }
  .clients_inner{
    gap: 15px;
  }
  .clients_block{
    margin: 0;
  }
  .clients_block, .clients_block img{
    max-width: 150px;
    max-height: 63px;
  }
  .docs{
    padding: 80px 0;
  }
  .docs-title{
    margin: 0 0 37px 0;
    font-size: 30px;
    line-height: 37px;
  }
  .docs_inner{
    flex-wrap: wrap;
  }
  .docs_left{
    margin-top: 0;
  }
  .docs_left-btn{
    text-align: left;
  }
  .docs_right{
    margin-top: 24px;
  }
  .docs_right-img{
    margin: 0 auto;
    max-width: 272px;
    max-height: 383px;
  }
  .diplom{
    padding: 80px 0;
  }
  .slider {
    height: 100%;
    width: 252px;
  }
  .slider-list{
    height: 100%;
    width: 252px;
  }
  .slide{
    max-width: 252px;
    max-height: 380px;
    padding: 0;
  }
  .grid__link{
    font-size: 16px;
    line-height: 20px;
  }
  .grid{
    max-width: 320px!important;
  }
  .footer>.container{
    overflow-y: scroll
  }
}
</style>
