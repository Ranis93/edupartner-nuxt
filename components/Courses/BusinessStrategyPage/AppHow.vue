<template>
  <section class="BSHow">
    <div class="container">
      <div class="BSHow__inner">
        <div class="BSHow__title">
          Как проходит обучение?
        </div>
        <div class="BSHow__content">
          <div class="BSHow__slider">
            <div class="BSHow__list">
              <div class="BSHow__track">
                <div class="BSHow__slide">
                  <div class="BSHow__img">
                    <img src="../../../assets/images/courses/business-strategy/how-slide/how_slide_1.png" alt="how_slide">
                  </div>
                  <div class="BSHow__text">
                    Обучение проходит очно в небольших группах от 4 до 12 человек. <br> Мы собираем небольшие группы для того, чтобы было комфортно находиться в аудитории, обучаться и взаимодействовать с преподавателем, задавать вопросы и получать на них ответы.
                  </div>
                </div>
                <div class="BSHow__slide">
                  <div class="BSHow__img">
                    <img src="../../../assets/images/courses/business-strategy/how-slide/how_slide_2.png" alt="how_slide">
                  </div>
                  <div class="BSHow__text">
                    Перерыв для перекуса и неформального общения. Мы предлагаем чай/кофе с различными угощениями. Это время можно использовать так же для знакомства, общения, обмена контактами.
                  </div>
                </div>
                <div class="BSHow__slide">
                  <div class="BSHow__img">
                    <img src="../../../assets/images/courses/business-strategy/how-slide/how_slide_3.png" alt="how_slide">
                  </div>
                  <div class="BSHow__text">
                    Предоставляем время для обеденного перерерыва. Помогаем с выбором заведения или совместно решаем вопрос с питанием.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="BSHow__arrows">
            <button
              class="BSHow__arrow-prev prev disabled"
            />
            <button type="button" class="BSHow__arrow-next next" />
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
        '.BSHow__slider',
        '.BSHow__list',
        '.BSHow__track',
        '.BSHow__slide',
        '.BSHow__arrows',
        3
      )
    } catch (error) {}
  }

}
</script>

<style scoped>
.BSHow {
  background-color: #E5E5E5;
}
.BSHow__inner {
  padding: 100px 0;
}
.BSHow__title {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 50px;
  color: #1D1D1D;
}

.BSHow__content{
  position: relative;
}
.BSHow__slider {
  margin-top: 41px;
  vertical-align: middle;
  position: relative;
  display: inline-block;
  width: 100%;
  overflow: hidden;
  /* Чтобы во время перетаскивания слайда ничего не выделить внутри него */
  user-select: none;
  /* Чтобы запретить скролл страницы, если мы начали двигать слайдер по оси X */
  touch-action: pan-y;
}
/* Если где-то внутри слайдера будут изображения,
то нужно задать им pointer-events: none,
чтобы они не перетаскивались мышью */

.BSHow__slider img {
  pointer-events: none;
}
.BSHow__list {
  width: 100%;
  height: 350px;
  overflow: hidden;
}
.BSHow__list.grab {
  cursor: grab;
}
.BSHow__list.grabbing {
  cursor: grabbing;
}
.BSHow__slide {
  width: 100%;
  height: 350px;
  padding-right: 20px;
  flex-shrink: 0;
  display: flex;
  align-items: top;
  justify-content: space-between;
  column-gap: 108px;
  box-sizing: content-box;
  position: relative;
}
.BSHow__track {
  display: flex;
}
.BSHow__arrows {
  position: absolute;
  left: 695px;
  bottom: 0;
  width: fit-content;
}
.BSHow__arrow-prev,
.BSHow__arrow-next {
  width: 80px;
  height: 70px;
  padding: 0;
  cursor: pointer;

  background-position: center center;
  background-color: transparent;
  border: 0;
}
.BSHow__arrow-prev {
  background-image: url("../../../assets/images/courses/business-strategy/arr_prev.svg");
}
.BSHow__arrow-next {
  background-image: url("../../../assets/images/courses/business-strategy/arr_next.svg");
  margin-left: 25px;
}
.BSHow__arrow-next.disabled,
.BSHow__arrow-prev.disabled {
  opacity: 0.25;
  pointer-events: none;
}
.BSHow__img{
  width: 580px;
  height: 100%;
  border-radius: 50px;
}
.BSHow__img>img{
  border-radius: 50px;
}
.BSHow__text{
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
  .BSHow__text{
    font-size: 22px;
    line-height: 26px;
    max-width: 371px;
  }
  .BSHow__arrows{
    left: auto;
    right: 216px;
  }
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
