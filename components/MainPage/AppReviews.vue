<template>
  <section class="reviews">
    <div class="container">
      <div class="reviews__inner">
        <div class="reviews__title">
          Отзывы клиентов
        </div>
        <div class="reviews__slider">
          <button type="button" class="slider_prev-btn prev disabled" />
          <div class="slider">
            <div class="slider-list">
              <div class="slider-track">
                <div class="slide">
                  <div class="slide-inner">
                    <div class="slide-inner__img">
                      <img
                        src="../../assets/images/main-page/slide_1.png"
                        alt="reviews-image"
                        class="reviews-image"
                      >
                    </div>
                  </div>
                </div>
                <div class="slide">
                  <div class="slide-inner">
                    <div class="slide-inner__img">
                      <img
                        src="../../assets/images/main-page/slide_1.png"
                        alt="reviews-image"
                        class="reviews-image"
                      >
                    </div>
                  </div>
                </div>
                <div class="slide">
                  <div class="slide-inner">
                    <div class="slide-inner__img">
                      <img
                        src="../../assets/images/main-page/slide_1.png"
                        alt="reviews-image"
                        class="reviews-image"
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button type="button" class="slider_next-btn next" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { dragDropSliderAlt } from '../../assets/js/slider.js'
export default {
  mounted () {
    try {
      dragDropSliderAlt('.slider', '.slider-list', '.slider-track', '.slide', '.reviews__slider', 3)
    } catch (error) {}
  }
}
</script>

<style scoped>
.reviews {
  background-color: #FFFFFF;
}
.reviews__inner {
  padding: 100px 0 150px 0;
}
.reviews__title {
  font-weight: 700;
  font-size: 32px;
  line-height: 55px;
  color: #1D1D1D;
}
.reviews__slider {
  margin: 100px auto 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.slider_prev-btn,
.slider_next-btn {
  background: inherit;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-size: 120% 120%;
  background-position: center center;
  width: 60px;
  height: 60px;
}
.slider_prev-btn {
  background-image: url("../../assets/images/main-page/btn_slider_left.svg");
}
.slider_next-btn {
  background-image: url("../../assets/images/main-page/btn_slider_right.svg");
}
.slider {
  vertical-align: middle;
  margin-left: 29px;
  margin-right: 29px;
  position: relative;
  display: inline-block;
  width: 680px;
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
  width: 680px;
  height: 100%;
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
  width: 680px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: content-box;
}
.slide-inner__img {
  height: 440px;
  position: relative;
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
  display: inline-block;
  vertical-align: middle;
  padding: 0;
  border: none;
  cursor: pointer;
}
.next.disabled,
.prev.disabled {
  opacity: 0.25;
  pointer-events: none;
}
.reviews__btn {
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);

  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  color: #7d4e24;
  background-color: #ffffff;

  border: 1px solid #7d4e24;
  box-shadow: 0px 4px 10px rgba(132, 99, 70, 0.38);
  border-radius: 50px;
  padding: 10px 35px;
}
.reviews__btn:hover {
  color: #ffffff;
  background: #7d4e24;
  cursor: pointer;
}
@media (max-width: 1024px) {
  .reviews__inner {
    padding: 76px 0 100px 0;
  }
  .reviews__slider {
    justify-content: space-between;
  }
}

@media (max-width: 768px) {
  .reviews__inner {
    padding-top: 100px;
  }
  .reviews__slider {
    margin-bottom: 0;
    margin-right: 10px;
    margin-left: 10px;
  }
  .slider-list,
  .slider,
  .slide,
  .slide-inner {
    width: 478px;
  }
  .slide,
  .slide-inner,
  .slide-inner__img {
    height: 283px;
  }
}
@media (max-width: 480px) {
  .reviews__slider {
    margin: 100px 0 0 0;
  }
  .slider_prev-btn,
  .slider_next-btn {
    display: none;
  }
  .slider {
    margin: 0;
  }
  .slider-list,
  .slider,
  .slide,
  .slide-inner {
    width: 100%;
  }
  .slide,
  .slide-inner,
  .slide-inner__img {
    height: 259px;
  }
}

@media (max-width: 360px) {
  .reviews__title {
    font-size: 30px;
  }
  .slide,
  .slide-inner,
  .slide-inner__img {
    height: 188px;
  }
}
</style>
