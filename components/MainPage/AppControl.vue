<template>
  <section class="control">
    <span class="mask" />
    <div class="container">
      <div class="control__inner">
        <div class="control__title">
          Бизнес под нашим управлением
        </div>
        <div class="control__text">
          В этом разделе представлен наш проект под полным циклом управления.
        </div>
        <nuxt-link to="/">
          <div class="control__img">
            <img src="../../assets/images/main-page/drevo-ru.png" alt="drevo-ru">
            <div class="control__desc">
              Центр семейной родословной Галины Рублевой
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.control {
  background-image: url('../../assets/images/main-page/drevo-ru-bg.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
}
.control>.mask {
  background: rgba(28, 28, 27, 0.9);
  bottom: 0;
  left: 0;
  opacity: 1;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
}
.control__inner {
  position: relative;
  padding: 100px 0;
  z-index: 2;
}
.control__inner>a{
  display: block;
  width: fit-content;
}
.control__title {
  font-weight: 700;
  font-size: 32px;
  line-height: 55px;
  color: #FFFFFF;

  padding-bottom: 50px;
}
.control__text {
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #D5D5D5;

  padding-bottom: 50px;
}
.control__img {
  max-width: 480px;
  max-height: 300px;
  position: relative;
  transition: all .2s;
}
.control__img:hover{
  transform: scale(1.01);
}
.control__desc {
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #FFFFFF;

  position: absolute;
  bottom: 35px;
  left: 35px;
  max-width: 391px;
}
@media (max-width: 768px) {
  .control__img {
    max-width: 413px;
    height: 300px;
  }
}
@media (max-width: 480px) {
  .control__title {
    line-height: 35px;
    padding-bottom: 35px;
  }
  .control__img {
    max-width: none;
    width: 100%;
    height: auto;
  }
}
@media (max-width: 360px) {
  .control__title {
    font-size: 30px;
  }
  .control__desc {
    font-size: 18px;
    bottom: 14px;
    left: 9px;
  }
}
</style>
