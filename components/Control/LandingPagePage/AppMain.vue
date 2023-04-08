<template>
  <section class="Main">
    <div class="container">
      <div class="Main__inner">
        <div class="Main__about">
          <h1 class="Main__title">
            Landing page
          </h1>
          <div class="Main__desc">
            Создадим продающий сайт под любой запрос за 10 дней!
          </div>
          <div class="Main__btn">
            Заказать сайт
          </div>
        </div>
        <div class="Main__animation">
          <div class="jumping-img">
            <img src="../../../assets/images/control/landing-page/notebook.svg" alt="notebook">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables.scss';

@keyframes bounce-6 {
  0%   { transform: scale(1,1)      translateY(0); }
  10%  { transform: scale(1.1,.9)   translateY(0); }
  30%  { transform: scale(.9,1.1)   translateY(-100px); }
  50%  { transform: scale(1.05,.95) translateY(0); }
  57%  { transform: scale(1,1)      translateY(-7px); }
  64%  { transform: scale(1,1)      translateY(0); }
  100% { transform: scale(1,1)      translateY(0); }
}
@keyframes bounce-2 {
  0%   { transform: translateY(0); }
  50%  { transform: translateY(-80px); }
  100% { transform: translateY(0); }
}
.Main{
  background: #1D1D1D;
}
.Main__inner {
  padding: 230px 0 155px 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  column-gap: 30px;
  .Main__about{
      max-width: 380px;
    .Main__title{
      font-family: $ff1;
      font-style: normal;
      font-weight: 700;
      font-size: 45px;
      line-height: 55px;
      color: #FFFFFF;
      padding-bottom: 37px;
    }
    .Main__desc{
      font-family: $ff2;
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
      padding-bottom: 50px;
      color: #D4D4D4;
    }
    .Main__btn{
      font-family: $ff1;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 33px;
      color: rgba(29, 29, 29, 0.9);
      width: fit-content;
      padding: 10px 40px;
      background: #F9FF05;
      box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
      border-radius: 50px;
    }
  }
  .Main__animation{
    max-width: 580px;
    display: flex;
    height: auto;
    .jumping-img{
      align-self: flex-end;
      animation-duration: 2s;
      animation-iteration-count: infinite;
      margin: 0 auto 0 auto;
      transform-origin: bottom;

      animation-name: bounce-2;
      animation-timing-function: ease;
    }
  }
}
@media (max-width: 1024px) {
  .Main__inner{
    column-gap: 20px;
    padding-bottom: 180px;
    .Main__animation{
      max-width: 524px;
    }
  }
}
@media (max-width: 768px) {
  .Main__inner{
    padding-bottom: 285px;
    column-gap: 0;
    .Main__about{
      max-width: 356px;
      .Main__title{
        font-size: 40px;
        line-height: 55px;
      }
    }
    .Main__animation{
      max-width: 332px;
    }
  }
}
@media (max-width: 480px) {
  .Main__inner{
    padding-bottom: 81px;
    flex-wrap: wrap;
    row-gap: 90px;
    .Main__about{
      .Main__title{
        font-size: 36px;
        line-height: 55px;
      }
    }
    .Main__animation{
      max-width: none;
    }
  }
}
@media (max-width: 360px) {
  .Main__inner{
    padding-bottom: 80px;
    .Main__about{
      .Main__title{
        font-size: 32px;
      }
      .Main__btn{
        width: 100%;
        text-align: center;
      }
    }
  }
}
</style>
