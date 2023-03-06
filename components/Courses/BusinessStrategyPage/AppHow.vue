<template>
  <section class="BMMain">
    <div class="container">
      <div class="BMMain__inner">
        <div class="BMMain__title">
          Как проходит обучение?
        </div>
        <div class="BMMain__content">
          <div class="BMMain__slider">
            <div class="BMMain__list">
              <div class="BMMain__track">
                <div class="BMMain__slide">
                  <div class="BMMain__img">
                    <img src="../../../assets/images/courses/business-strategy/how-slide/how_slide_1.png" alt="how_slide">
                  </div>
                  <div class="BMMain__text">
                    Обучение проходит очно в небольших группах от 4 до 12 человек. <br> Мы собираем небольшие группы для того, чтобы было комфортно находиться в аудитории, обучаться и взаимодействовать с преподавателем, задавать вопросы и получать на них ответы.
                  </div>
                </div>
                <div class="BMMain__slide">
                  <div class="BMMain__img">
                    <img src="../../../assets/images/courses/business-strategy/how-slide/how_slide_2.png" alt="how_slide">
                  </div>
                  <div class="BMMain__text">
                    Перерыв для перекуса и неформального общения. Мы предлагаем чай/кофе с различными угощениями. Это время можно использовать так же для знакомства, общения, обмена контактами.
                  </div>
                </div>
                <div class="BMMain__slide">
                  <div class="BMMain__img">
                    <img src="../../../assets/images/courses/business-strategy/how-slide/how_slide_3.png" alt="how_slide">
                  </div>
                  <div class="BMMain__text">
                    Предоставляем время для обеденного перерерыва. Помогаем с выбором заведения или совместно решаем вопрос с питанием.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="BMMain__arrows">
            <button
              class="BMMain__arrow-prev prev disabled"
            />
            <button type="button" class="BMMain__arrow-next next" />
          </div>
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
        '.BMMain__slider',
        '.BMMain__list',
        '.BMMain__track',
        '.BMMain__slide',
        '.BMMain__arrows',
        3
      )
    } catch (error) {}
  }

}
</script>

<style scoped>
.BMMain {
  background-color: #E5E5E5;
}
.BMMain__inner {
  padding: 100px 0;
}
.BMMain__title {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 50px;
  color: #1D1D1D;
}

.BMMain__content{
  position: relative;
}
.BMMain__slider {
  margin-top: 41px;
  vertical-align: middle;
  position: relative;
  display: inline-block;
  width: 1180px;
  overflow: hidden;
  /* Чтобы во время перетаскивания слайда ничего не выделить внутри него */
  user-select: none;
  /* Чтобы запретить скролл страницы, если мы начали двигать слайдер по оси X */
  touch-action: pan-y;
}
/* Если где-то внутри слайдера будут изображения,
то нужно задать им pointer-events: none,
чтобы они не перетаскивались мышью */

.BMMain__slider img {
  pointer-events: none;
}
.BMMain__list {
  width: 1180px;
  height: 350px;
  overflow: hidden;
}
.BMMain__list.grab {
  cursor: grab;
}
.BMMain__list.grabbing {
  cursor: grabbing;
}
.BMMain__slide {
  width: 1180px;
  height: 350px;
  padding-right: 20px;
  flex-shrink: 0;
  display: flex;
  align-items: top;
  justify-content: space-between;
  box-sizing: content-box;
  position: relative;
}
.BMMain__track {
  display: flex;
}
.BMMain__arrows {
  position: absolute;
  left: 695px;
  bottom: 0;
  width: fit-content;
}
.BMMain__arrow-prev,
.BMMain__arrow-next {
  width: 80px;
  height: 70px;
  padding: 0;

  background-position: center center;
  background-color: transparent;
  border: 0;
}
.BMMain__arrow-prev {
  background-image: url("../../../assets/images/courses/business-strategy/arr_prev.svg");
}
.BMMain__arrow-next {
  background-image: url("../../../assets/images/courses/business-strategy/arr_next.svg");
  margin-left: 25px;
}
.BMMain__arrow-next.disabled,
.BMMain__arrow-prev.disabled {
  opacity: 0.25;
  pointer-events: none;
}
.BMMain__img{
  width: 580px;
  height: 100%;
  border-radius: 50px;
}
.BMMain__img>img{
  border-radius: 50px;
}
.BMMain__text{
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;

  color: #1D1D1D;
  max-width: 451px;
  padding-top: 36px;
  padding-right: 29px;
}
@media (max-width: 1024px) {

}
@media (max-width: 768px) {
}
@media (max-width: 660px) {
}
@media (max-width: 480px) {
}
@media (max-width: 360px) {
}
</style>
