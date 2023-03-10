<template>
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
                  @mouseout="noHovering(), selectDefaultItem()"
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
                  :class="{'animated pulse': isHovering && hoveringItem === 3}"
                  @mouseover="hoveringOnItem(3)"
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
</template>

<script>
import { dragDropSlider } from '@/assets/js/slider.js'
import hoveringMixin from '@/components/mixins/hoveringMixin'
export default {
  mixins: [hoveringMixin],
  mounted () {
    try {
      dragDropSlider('.header__slider', '.header__list', '.header__right-blocks', '.header__right-block', '.header__arrows', 3)
    } catch (error) {}
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
/* Всплыв текста */

.header-show{
  display: block;
  transform: translateY(0%);
  opacity: 1;

}
.header__right-block-zero{
  width: 0;
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
}
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
}
</style>
