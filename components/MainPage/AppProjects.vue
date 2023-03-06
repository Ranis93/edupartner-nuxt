<template>
  <section class="projects">
    <div id="root" class="root stars" />
    <div class="container">
      <div class="projects__inner">
        <div class="projects__left">
          <div class="projects__left-edupartner  projects-show">
            <div class="projects__left-text animated fadeInLeftBig">
              <img src="../../assets/images/EDU.svg" alt="EDU">
              <img src="../../assets/images/PARTNER.svg" alt="PARTNER">
            </div>
          </div>
        </div>
        <div class="projects__right">
          <div class="projects__right-top">
            <p class="projects__right-title   projects-show">
              Наши проекты
            </p>
          </div>
          <div class="projects__slider">
            <div class="projects__list">
              <div class="projects__right-blocks">
                <div
                  id="projects__right-platform"
                  class="projects__right-block"
                  :class="{'animated pulse': isHovering && hoveringItem === 1}"
                  @mouseover="hoveringOnItem(1)"
                  @mouseout="noHovering(), selectDefaultItem()"
                >
                  <nuxt-link
                    to="/platform"
                  >
                    <div class="project__rb-inner platform">
                      <p class="projects__right-text">
                        Учись и преподавай
                      </p>
                      <p class="projects__right-txt">
                        Платформа EduExp
                      </p>
                    </div>
                  </nuxt-link>
                </div>
                <div
                  id="projects__right-center"
                  class="projects__right-block"
                  :class="{'animated pulse': isHovering && hoveringItem === 2}"
                  @mouseover="hoveringOnItem(2)"
                  @mouseout="noHovering(), selectDefaultItem()"
                >
                  <nuxt-link
                    to="/license"
                  >
                    <div class="project__rb-inner center">
                      <p class="projects__right-text">
                        У нас есть лицензия
                      </p>
                      <p class="projects__right-txt">
                        Приуральский центр образования
                      </p>
                    </div>
                  </nuxt-link>
                </div>
                <div
                  id="projects__right-sert"
                  class="projects__right-block"
                  :class="{'animated pulse': isHovering && hoveringItem === 3}"
                  @mouseover="hoveringOnItem(3)"
                  @mouseout="noHovering(), selectDefaultItem()"
                >
                  <nuxt-link
                    to="/certification"
                  >
                    <div class="project__rb-inner sert">
                      <p class="projects__right-text">
                        Сертификат за 10 минут
                      </p>
                      <p class="projects__right-txt">
                        Сертификация экспертов
                      </p>
                    </div>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
          <div class="projects__arrows">
            <div class="projects-arrow__prev" />
            <div class="projects-arrow__next" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { starsShining } from '../../assets/js/stars.js'
import { dragDropSlider } from '../../assets/js/slider.js'
import hoveringMixin from '@/components/mixins/hoveringMixin'
export default {
  mixins: [hoveringMixin],
  mounted () {
    starsShining()
    try {
      dragDropSlider('.projects__slider', '.projects__list', '.projects__right-blocks', '.projects__right-block', '.projects__arrows', 3)
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style scoped>
.projects {
  margin: 0;
  width: 100%;
  height: 850px;
  background: #1D1D1D;
  position: relative;
}
.projects__left,
.projects__right {
  z-index: 2;
}
.projects__inner {
  display: flex;
  justify-content: center;
  column-gap: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 100px 0;
}
.projects__left {
  margin-top: 95px;
  width: auto;
  white-space: nowrap;
}
.projects__left-edupartner {
  display: none;
  transition: 1s;
  transform: translateY(70%);
  opacity: 0;
  height: 234px;
  width: 365px;

  background-image: url('../../assets/images/planet-new.svg');
  background-position: center right;
  background-size: contain;
  background-repeat: no-repeat;
}
.projects__left-text {
  margin: 76px 25px 0 0;
  /*Только на Новый Год*/
  max-width: 169px;
  display: inline-block;
  vertical-align: middle;
}
.projects__left-text>img {
  padding-bottom: 13px;
  display: block;
}
.projects__left-text>img:last-child {
  padding-bottom: 0;
}
/* .projects__left-planet{
  display: inline-block;
  margin-left: -50px;
  z-index: -1;
  vertical-align: middle;
} */
.projects__left-image {
  max-width: 236px;
}
.projects__left-center {
  display: none;
  transition: 1s;
  transform: translateY(70%);
  opacity: 0;
}
.projects__left-center-top {
  display: flex;
  align-items: center;
}
.projects__left-center-text,
.projects__left-sert-text {
  max-width: 420px;

  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 31px;
  color: rgba(255, 255, 255, 0.8);
}
.projects__left-center-top .projects__left-center-text,
.projects__left-sert-text {
  width: 263px;
  position: relative;
}
.projects__left-sert-text {
  width: auto;
}
.projects__left-sert {
  margin-top: 13px;

  display: none;
  transition: 1s;
  transform: translateY(70%);
  opacity: 0;
}
.projects__left-center-title,
.projects__left-sert-title {
  margin-bottom: 30px;
  width: 427px;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 49px;

  color: #FFFFFF;
}
.projects__left-sert-title {
  margin-top: 65px;
  margin-bottom: 50px;
}
.projects__right {
  margin-bottom: 215px;
}
.projects__right-top {
  height: 95px;
}
.projects__right-title {
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
/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

.projects__slider {
  max-width: 580px;
  /* Чтобы во время перетаскивания слайда ничего не выделить внутри него */
  user-select: none;
  /* Чтобы запретить скролл страницы, если мы начали двигать слайдер по оси X */
  touch-action: pan-y;
}

/* Если где-то внутри слайдера будут изображения,
  то нужно задать им pointer-events: none,
  чтобы они не перетаскивались мышью */

.projects__slider img {
  pointer-events: none;
}
.projects__list {
  padding: 20px 10px;
  width: 620px;
  height: 320px;
  overflow: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.projects__list::-webkit-scrollbar {
  width: 0;
  height: 0;
}
.projects__list.grab {
  cursor: grab;
}
.projects__list.grabbing {
  cursor: grabbing;
}
.projects__right-blocks {
  display: flex;
  transition: 1s;
  width: fit-content;
  justify-content: flex-end;
}
.projects__right-block {
  padding-right: 20px;
}
.projects__right-block>a {
  color: #FFFFFF;
}
.project__rb-inner {
  width: 180px;
  height: 280px;
  border-radius: 20px;
  padding-top: 160px;
  background-repeat: no-repeat;
  background-size: 150%;
  background-position: center;
  transition: 0.5s;
  z-index: 4;
  padding-left: 10px;
}
.projects__right-block:hover {
  cursor: pointer;
}
/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

.project__rb-inner.platform {
  background-image: url('../../assets/images/main-page/projects-slider/notebook_1.png');
}
.project__rb-inner.center {
  background-image: url('../../assets/images/main-page/projects-slider/book.png');
}
.project__rb-inner.sert {
  background-image: url('../../assets/images/main-page/projects-slider/sert_1.png');
}
.projects__right-block:nth-child(4),
.projects__right-block:nth-child(5),
.projects__right-block:nth-child(6) {
  width: 0;
  opacity: 0;
  margin-right: 0;
  padding-left: 0;

}
#projects__right-main {
  background-image: url('../../assets/images/main-page/projects-slider/edupartner.png');
}
.transition_zero {

  transition: 0s;
}
.projects__right-text {
  margin-left: 5px;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  margin-bottom: 10px;
  margin-right: 10px;
}
.projects__right-txt {
  margin-left: 5px;
  width: 80%;
  font-weight: 700;
  font-size: 17px;
  line-height: 21px;
}
.projects__left-eduexp {
  position: relative;
  display: none;
  transition: 1s;
  transform: translateY(30%);
  opacity: 0;
}
.projects__left-txt {
  font-weight: 500;
  font-size: 24px;
  line-height: 31px;
  margin-bottom: 30px;
}
.projects__left-img {
  margin-bottom: 55px;
}
.projects__left-btn {
  display: block;
  font-weight: 600;
  font-size: 20px;
  line-height: 26px;
  color: #FFFFFF;

  width: 382px;
  height: 66px;
  padding: 20px 40px;

  border: 2px solid #FAFF00;
  border-radius: 20px;
  position: relative;
  transition: 0.5s;
}
.projects__left-btn::after {
  position: absolute;
  content: '⟶';
  width: 41px;
  font-size: 30px;
  right: 32px;
}
.projects__left-btn:hover {
  cursor: pointer;
  background: #FAFF00;
  border: 2px solid #FAFF00;
  box-shadow: 0px 0px 20px #FAFF00;
  border-radius: 20px;
  color: #1D1D1D;
}
/* Всплыв текста */
.projects-show {
  display: block;
  transform: translateY(0%);
  opacity: 1;
}
.projects__right-block-zero {
  width: 0;
}
@media (max-width: 1024px) {
  .projects__inner {
    width: 100%;
    justify-content: flex-start;
    padding: 0 26px;
    column-gap: 50px;
  }
  .projects__right {
    overflow-x: hidden;
  }
  .projects__left {
    margin-top: 130px;
  }
  .projects__left-edupartner {
    width: 310px;
    height: 199px;
  }
  .projects__left-image {
    max-width: 199px;
  }
  .projects__left-text {
    max-width: 142px;
  }
  .projects__left-text>img {
    max-width: 100%;
  }
  .projects__right {
    margin-left: 10px;
  }
  .project__rb-inner {
    width: 176px;
    height: 280px;
  }
}
@media (max-width: 768px) {
  .projects__inner {
    flex-wrap: wrap;
    column-gap: 0;
    padding: 0 20px;
  }
  .projects__right {
    max-width: 400px;
    margin-left: 10px;
  }
  .projects__slider,
  .projects__list {
    max-width: 400px;
  }
  .scroll__down {
    display: none;
  }
}
@media (max-width: 480px) {
  .projects {
    min-height: 850px;
  }
  .projects__inner {
    justify-content: center;
    margin: 0;
    padding: 0;
    top: 50%;
    left: 50%;
  }
  .projects__left {
    margin: 0;
  }
  .projects__right {
    margin: 87px 0 0 0;
    padding-bottom: 0;
  }
  .projects__left {
    width: 304px;
    height: 195px;
  }
  .projects__right-title {
    margin: 0;
  }
  .projects__right-top {
    height: auto;
  }
  .projects__slider,
  .projects__list {
    max-width: 340px;
  }
  .project__rb-inner {
    max-width: 150px;
    max-height: 238px;
    padding: 141px 10px 20px 10px;
  }
  .projects__right-txt {
    font-size: 16px;
    line-height: 20px;
  }
  .projects__right-text {
    font-size: 10px;
    line-height: 12px;
  }
  .projects__list {
    height: auto;
    padding-bottom: 0;
  }
}
@media (max-width: 360px) {
  .projects__inner {
    flex-wrap: wrap;
    justify-content: center;
  }
  .projects__left {
    margin: 0;
    flex-shrink: 1;
  }
  .projects__right {
    margin: 87px 0 0 0;
  }
  .project__rb-inner {
    max-width: 150px;
    max-height: 238px;
    padding: 141px 10px 20px 10px;
  }
  .projects__right-txt {
    font-size: 16px;
    line-height: 20px;
  }
  .projects__right-text {
    font-size: 10px;
    line-height: 12px;
  }
  .projects__slider,
  .projects__list {
    max-width: 320px;
  }
  .projects__right-block {
    padding-right: 10px;
  }
}
</style>
