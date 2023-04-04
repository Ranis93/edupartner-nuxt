<template>
  <section class="BDiag">
    <div class="container">
      <div class="BDiag__inner">
        <div class="BDiag__about">
          <h1 class="BDiag__title">
            Бизнес-диагностика
          </h1>
          <div class="BDiag__desc">
            Если падает выручка, нет стабильного роста и отсутствует система контроля и управления компанией, предлагаем провести бизнес-диагностику
          </div>
          <div class="BDiag__btn">
            Заказать диагностику
          </div>
        </div>
        <div class="BDiag__show">
          <div class="BDiag__window">
            <img src="../../../assets/images/control/business-diag/empty-window.png" alt="empty-window">
          </div>
          <div class="BDiag__btn2">
            <div class="BDiag__video">
              <img src="../../../assets/images/control/business-diag/play-btn.svg" alt="play-btn">
            </div>
            <div class="BDiag__text">
              Почему это <span>обязательно</span>
            </div>
            <div class="BDiag__arrow">
              <img src="../../../assets/images/control/business-diag/arr-spiral.svg" alt="arrow-s">
            </div>
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
.BDiag {
  @include bgcenter('@/assets/images/control/business-diag/bg.png');
}
.BDiag__inner {
  padding: 230px 0 353px 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  column-gap: 34px;
  .BDiag__about{
    max-width: 580px;
    .BDiag__title{
      font-family: $ff1;
      font-style: normal;
      font-weight: 700;
      font-size: 45px;
      line-height: 55px;
      color: #FFFFFF;
      padding-bottom: 37px;
    }
    .BDiag__desc{
      font-family: $ff2;
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
      color: #D4D4D4;
      padding-bottom: 50px;
    }
    .BDiag__btn{
      font-family: $ff1;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 33px;
      color: rgba(29, 29, 29, 0.9);
      background: #F9FF05;
      box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
      border-radius: 50px;
      padding: 10px 40px;
      width: fit-content;
    }
  }
  .BDiag__show{
    position: relative;
    .BDiag__window{
      width: 480px;
      height: auto;
    }
    .BDiag__btn2{
      position: absolute;
      bottom: 0;
      left: 0;
      transform: translate(-30%, 70%);
      .BDiag__video{
        width: 88px;
        height: 88px;
        margin: 0 0 0 auto;
      }
      .BDiag__text{
        font-family: $ff2;
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 29px;
        color: #FFFFFF;
        padding-top: 50px;
        span{
          color: #FAFF00;
        }
      }
      .BDiag__arrow{
        width: 76px;
        height: 87px;
        position: absolute;
        bottom: 0;
        right: 0;
        transform: translateX(100%);
      }
    }
  }
}

@media (max-width: 1024px) {
}
@media (max-width: 480px) {
}
@media (max-width: 360px) {
}
</style>
