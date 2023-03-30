<template>
  <section class="Main">
    <div class="container">
      <div class="Main__inner">
        <h1 class="Main__title">
          Услуги интернет-маркетинга
        </h1>
        <div class="Main__desc">
          Предлагаем комплекс мер по продвижению и увеличению прибыльности вашего сайта с помощью таких инструментов интернет-маркетинга, как SEO-оптимизация, контекстная реклама, таргетированая реклама, SMM, email-рассылка и множество других
        </div>
        <div class="Main__btn">
          Проконсультироваться
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { insertBitrix3 } from '@/assets/js/bitrx-window.js'
export default {
  mounted () {
    // Вставка popup от Bitrix на кнопку
    try {
      insertBitrix3('.Main__inner', '.Main__btn')
    } catch (error) {}
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables.scss';
.Main {
  @include bgcenter('../../../assets/images/control/internet-marketing/bg-marketing.png');
}
.Main__inner {
  padding: 230px 0 333px 0;
}
.Main__title{
  font-family: $ff1;
  font-style: normal;
  font-weight: 700;
  font-size: 45px;
  line-height: 55px;
  color: #FFFFFF;
  padding-bottom: 25px;
  max-width: 580px;
}
.Main__desc{
  font-family: $ff2;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  padding-bottom: 50px;
  color: #D4D4D4;
  max-width: 580px;
}
.Main__btn{
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
  .Main {
    background-position: 65% 100%;
  }
}
@media (max-width: 480px) {
  .Main__inner {
    padding: 235px 0 314px 0;
  }
  .Main__title{
    font-size: 35px;
    line-height: 45px;
    padding-bottom: 35px;
    max-width: 100%;
  }
}
@media (max-width: 360px) {
  .Main{
    background-position: 50% 100%;
  }
  .Main__inner {
    padding-bottom: 265px;
  }
  .Main__title{
    font-size: 32px;
    padding-bottom: 20px;
  }
  .Main__desc{
    font-size: 18px;
    line-height: 22px;
  }
  .Main__btn{
    font-size: 16px;
    padding: 5px 30px;
  }
}
</style>
