<template>
  <section class="ItDevMain">
    <div class="container">
      <div class="ItDevMain__inner">
        <h1 class="ItDevMain__title">
          Разработка сайтов
        </h1>
        <div class="ItDevMain__desc">
          Разработаем и запустим сайт, отражающий концепцию вашего бизнеса и привлекающий целевую аудиторию. Подготовим индивидуальный дизайн сайта
        </div>
        <div class="ItDevMain__btn">
          Заказать сайт
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { insertBitrix2 } from '@/assets/js/bitrx-window.js'
export default {
  mounted () {
    // Вставка popup от Bitrix на кнопку
    try {
      insertBitrix2('.ItDevMain__inner', '.ItDevMain__btn')
    } catch (error) {}
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables.scss';
.ItDevMain {
  @include bgcenter('../../../assets/images/control/site-development/bg.png');
}
.ItDevMain__inner {
  padding: 230px 0 333px 0;
}
.ItDevMain__title{
  font-family: $ff1;
  font-style: normal;
  font-weight: 700;
  font-size: 45px;
  line-height: 55px;
  color: #FFFFFF;
  padding-bottom: 25px;
  max-width: 480px;
}
.ItDevMain__desc{
  font-family: $ff2;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  padding-bottom: 50px;
  color: #D4D4D4;
  max-width: 480px;
}
.ItDevMain__btn{
  font-family: $ff1;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 33px;
  color: rgba(29, 29, 29, 0.9);
  width: fit-content;
  cursor: pointer;
  padding: 10px 40px;
  background: #F9FF05;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
  border-radius: 50px;
}

@media (max-width: 1024px) {
  .ItDevMain {
    background-position: 65% 100%;
  }
}
@media (max-width: 480px) {
  .ItDevMain__inner {
    padding: 235px 0 314px 0;
  }
  .ItDevMain__title{
    font-size: 35px;
    line-height: 45px;
    padding-bottom: 35px;
    max-width: 100%;
  }
}
@media (max-width: 360px) {
  .ItDevMain{
    background-position: 50% 100%;
  }
  .ItDevMain__inner {
    padding-bottom: 265px;
  }
  .ItDevMain__title{
    font-size: 32px;
    padding-bottom: 20px;
  }
  .ItDevMain__desc{
    font-size: 18px;
    line-height: 22px;
  }
  .ItDevMain__btn{
    font-size: 16px;
    padding: 5px 30px;
  }
}
</style>
