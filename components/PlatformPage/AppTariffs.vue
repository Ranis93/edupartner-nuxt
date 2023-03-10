<template>
  <section class="tariffs">
    <div class="container">
      <div class="tariffs__inner">
        <h3 class="tariffs-title">
          Основные тарифы
        </h3>
        <div class="slider-one">
          <div class="slider-two">
            <div class="tariffs-block">
              <div
                class="tariffs-card"
                :class="{'active animated pulse' : activeCard === 0}"
                @mouseenter="activeCard = 0"
              >
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
              <div
                class="tariffs-card"
                :class="{'active animated pulse' : activeCard === 1}"
                @mouseenter="activeCard = 1"
              >
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
              <div
                class="tariffs-card"
                :class="{'active animated pulse' : activeCard === 2}"
                @mouseenter="activeCard = 2"
              >
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
          <div
            class="tariffs-arrow-left"
            @click="prevCard"
          >
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
          <div
            class="tariffs-arrow-right"
            @click="nextCard"
          >
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
</template>

<script>
import { dragDropSlider } from '@/assets/js/slider.js'
export default {
  data () {
    return {
      activeCard: 1
    }
  },
  mounted () {
    try {
      dragDropSlider('.slider-one', '.slider-two', '.tariffs-block', '.tariffs-card', '.tariffs-arrows', 3)
    } catch (error) {}
  },
  methods: {
    nextCard () {
      if (this.activeCard === 2) {
        this.activeCard = 0
      } else {
        ++this.activeCard
      }
    },
    prevCard () {
      if (this.activeCard === 0) {
        this.activeCard = 2
      } else {
        --this.activeCard
      }
    }
  }
}
</script>

<style scoped>
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
  padding-bottom: 80px;
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
  padding-top: 20px;
  overflow: hidden;
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
  padding-top: 55px;
}

.slider-two.grab {
  cursor: grab;
}

.slider-two.grabbing{
  cursor: grabbing;
}
@media (max-width: 1024px) {
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
@media (max-width: 480px) {
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

</style>
