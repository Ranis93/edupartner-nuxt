<template>
  <section class="BSReviews">
    <div class="container">
      <div class="BSReviews__inner">
        <div class="BSReviews__title">
          Отзывы о курсе
        </div>
        <div class="BSReviews__content">
          <div class="BSReviews__slider">
            <div class="BSReviews__list">
              <div class="BSReviews__track">
                <div class="BSReviews__slide">
                  <div class="BSReviews__img">
                    <img src="../../../assets/images/courses/business-strategy/reviews-slide/reviews_empty.png" alt="review_empty">
                  </div>
                  <div class="BSReviews__text">
                    Еще раз убедился в том, что необходимо проходить обучения. Несмотря на имеющийся опыт в ведении бизнеса, все равно подчерпнул новые знания, которые начал применять на практике. Спасибо, был рад познакомиться такой командой!
                  </div>
                  <div class="BSReviews__name">
                    Альберт, <br> предприниматель в области торговли
                  </div>
                </div>
                <div class="BSReviews__slide">
                  <div class="BSReviews__img">
                    <img src="../../../assets/images/courses/business-strategy/reviews-slide/reviews_empty.png" alt="review_empty">
                  </div>
                  <div class="BSReviews__text">
                    Здорово, что в Уфе запустили такое обучение. Раньше ездил в столицу, теперь можно обучаться, не выезжая, в своем городе)) Познакомился с другими бизнесменами, теперь поддерживаем связь, интересные люди оказались) спасибо команде!
                  </div>
                  <div class="BSReviews__name">
                    Ришат, <br> предприниматель в области экспертизы
                  </div>
                </div>
                <div class="BSReviews__slide">
                  <div class="BSReviews__img">
                    <img src="../../../assets/images/courses/business-strategy/reviews-slide/reviews_empty.png" alt="review_empty">
                  </div>
                  <div class="BSReviews__text">
                    Здорово, что в Уфе запустили такое обучение. Раньше ездил в столицу, теперь можно обучаться, не выезжая, в своем городе)) Познакомился с другими бизнесменами, теперь поддерживаем связь, интересные люди оказались) спасибо команде!
                  </div>
                  <div class="BSReviews__name">
                    Ришат, <br> предприниматель в области экспертизы
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="BSReviews__arrows">
          <button
            class="BSReviews__arrow-prev prev disabled"
          />
          <button type="button" class="BSReviews__arrow-next next" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { dragDropSlider } from '../../../assets/js/slider'
export default {
  mounted () {
    try {
      dragDropSlider(
        '.BSReviews__slider',
        '.BSReviews__list',
        '.BSReviews__track',
        '.BSReviews__slide',
        '.BSReviews__arrows',
        3
      )
    } catch (error) {}
  }

}
</script>

<style scoped>
.BSReviews {
  background-color: #FFFFFF;
}
.BSReviews__inner {
  padding: 125px 0 100px 0;
}
.BSReviews__title {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 50px;
  color: #1D1D1D;
  margin-bottom: 50px;
}

.BSReviews__content{
  position: relative;
  overflow: hidden;
  width: 100%;
}
.BSReviews__slider {
  padding-top: 70px;
  padding-left: 35px;
  vertical-align: bottom;
  position: relative;
  display: inline-block;
  width: 100%;
  /* overflow: hidden; */
  /* Чтобы во время перетаскивания слайда ничего не выделить внутри него */
  user-select: none;
  /* Чтобы запретить скролл страницы, если мы начали двигать слайдер по оси X */
  touch-action: pan-y;
}
/* Если где-то внутри слайдера будут изображения,
то нужно задать им pointer-events: none,
чтобы они не перетаскивались мышью */

.BSReviews__slider img {
  pointer-events: none;
}
.BSReviews__list {
  width: 100%;
  height: 100%;
  /* overflow: hidden; */
}
.BSReviews__list.grab {
  cursor: grab;
}
.BSReviews__list.grabbing {
  cursor: grabbing;
}
.BSReviews__slide {
  width: 480px;
  height: 100%;
  padding-right: 150px;
  flex-shrink: 0;
  box-sizing: content-box;
  position: relative;
  border-radius: 50px;
}
.BSReviews__track {
  display: flex;
}
.BSReviews__arrows {
  width: fit-content;
  margin: 50px auto 0 auto;
}
.BSReviews__arrow-prev,
.BSReviews__arrow-next {
  width: 80px;
  height: 70px;
  padding: 0;
  cursor: pointer;

  background-position: center center;
  background-color: transparent;
  border: 0;
}
.BSReviews__arrow-prev {
  background-image: url("../../../assets/images/courses/business-strategy/arr_prev.svg");
}
.BSReviews__arrow-next {
  background-image: url("../../../assets/images/courses/business-strategy/arr_next.svg");
  margin-left: 25px;
}
.BSReviews__arrow-next.disabled,
.BSReviews__arrow-prev.disabled {
  opacity: 0.25;
  pointer-events: none;
}
.BSReviews__img{
  width: 115px;
  height: 115px;
  border-radius: 50px;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-30%, -50%);
}
.BSReviews__img>img{
  border-radius: 50px;
}
.BSReviews__text{
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;

  color: #1D1D1D;
  padding: 68px 25px 15px 25px;
}
.BSReviews__name{
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  color: rgba(116, 116, 114, 0.73);
  padding: 0 25px 40px 25px;
}
@media (max-width: 1024px) {
  .BSReviews__inner{
    padding-top: 100px;
  }
  .BSReviews__slide{
    width: 42%;
    padding-right: 15%;
  }
}
@media (max-width: 480px) {
  .BSReviews__slide{
    width: 100%;
  }
}
@media (max-width: 360px) {
  .BSReviews__slider{
    padding-top: 50px;
  }
  .BSReviews__img{
    width: 87px;
    height: 87px;
  }
  .BSReviews__text{
    padding: 55px 41px 15px 14px;
  }
  .BSReviews__name{
    padding: 0 41px 40px 14px;
  }
}
</style>
