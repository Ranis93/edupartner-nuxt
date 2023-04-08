<template>
  <section class="Main">
    <div class="container">
      <div class="Main__inner">
        <div class="Main__about">
          <h1 class="Main__title">
            SEO-продвижение сайта
          </h1>
          <div class="Main__desc">
            Развитие и продвижение сайта с учетом требований поисковиков
          </div>
          <div class="Main__btn">
            Проконсультироваться
          </div>
        </div>
        <div class="Main__animation">
          <img src="../../../assets/images/control/seo-promotion/page.svg" alt="page">
          <div class="Main__gear">
            <img class="img-rotation2" src="../../../assets/images/control/seo-promotion/gear.svg" alt="gear">
          </div>
          <div class="Main__gear-min">
            <img class="img-rotation1" src="../../../assets/images/control/seo-promotion/gear-min.svg" alt="gear-min">
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
@-webkit-keyframes rotation {
  0% {-webkit-transform:rotate(0deg);
      -moz-transform:rotate(0deg);
      -o-transform:rotate(0deg);
      transform:rotate(0deg);}
  100% {-webkit-transform:rotate(360deg);
      -moz-transform:rotate(360deg);
      -o-transform:rotate(360deg);
      transform:rotate(360deg);}
}
@-moz-keyframes rotation {
  0% {-webkit-transform:rotate(0deg);
      -moz-transform:rotate(0deg);
      -o-transform:rotate(0deg);
      transform:rotate(0deg);}
  100% {-webkit-transform:rotate(360deg);
      -moz-transform:rotate(360deg);
      -o-transform:rotate(360deg);
      transform:rotate(360deg);}
}
@-o-keyframes rotation {
  0% {-webkit-transform:rotate(0deg);
      -moz-transform:rotate(0deg);
      -o-transform:rotate(0deg);
      transform:rotate(0deg);}
  100% {-webkit-transform:rotate(360deg);
      -moz-transform:rotate(360deg);
      -o-transform:rotate(360deg);
      transform:rotate(360deg);}
}
@keyframes rotation {
  0% {-webkit-transform:rotate(0deg);
      -moz-transform:rotate(0deg);
      -o-transform:rotate(0deg);
      transform:rotate(0deg);}
  100% {-webkit-transform:rotate(360deg);
      -moz-transform:rotate(720deg);
      -o-transform:rotate(360deg);
      transform:rotate(360deg);}
}
@-webkit-keyframes rotation-reverse {
  0% {-webkit-transform:rotate(360deg);
      -moz-transform:rotate(360deg);
      -o-transform:rotate(360deg);
      transform:rotate(360deg);}
  100% {-webkit-transform:rotate(0deg);
      -moz-transform:rotate(0deg);
      -o-transform:rotate(0deg);
      transform:rotate(0deg);}
}
@-moz-keyframes rotation-reverse {
  0% {-webkit-transform:rotate(360deg);
      -moz-transform:rotate(360deg);
      -o-transform:rotate(360deg);
      transform:rotate(360deg);}
  100% {-webkit-transform:rotate(0deg);
      -moz-transform:rotate(0deg);
      -o-transform:rotate(0deg);
      transform:rotate(0deg);}
}
@-o-keyframes rotation-reverse {
  0% {-webkit-transform:rotate(360deg);
      -moz-transform:rotate(360deg);
      -o-transform:rotate(360deg);
      transform:rotate(360deg);}
  100% {-webkit-transform:rotate(0deg);
      -moz-transform:rotate(0deg);
      -o-transform:rotate(0deg);
      transform:rotate(0deg);}
}
@keyframes rotation-reverse {
  0% {-webkit-transform:rotate(360deg);
      -moz-transform:rotate(360deg);
      -o-transform:rotate(360deg);
      transform:rotate(360deg);}
  100% {-webkit-transform:rotate(0deg);
      -moz-transform:rotate(0deg);
      -o-transform:rotate(0deg);
      transform:rotate(0deg);}
}
.Main__inner {
  padding: 230px 0 249px 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  column-gap: 30px;
  .Main__about{
    .Main__title{
      font-family: $ff1;
      font-style: normal;
      font-weight: 700;
      font-size: 45px;
      line-height: 55px;
      color: #FFFFFF;
      padding-bottom: 37px;
      max-width: 480px;
    }
    .Main__desc{
      font-family: $ff2;
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
      padding-bottom: 50px;
      color: #D4D4D4;
      max-width: 480px;
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
    max-width: 490px;
    height: auto;
    position: relative;
    padding: 0 35px 74px 0;
    .Main__gear{
      width: 138px;
      height: 138px;
      position: absolute;
      bottom: 19px;
      right: 0;

      display: flex;
      justify-content: center;
      align-items: center;
      .img-rotation2 {
        -webkit-animation-name: rotation-reverse;
        -webkit-animation-duration: 15s;
        -webkit-animation-iteration-count: infinite;
        -webkit-animation-timing-function: linear;
        -moz-animation-name: rotation-reverse;
        -moz-animation-duration: 15s;
        -moz-animation-iteration-count: infinite;
        -moz-animation-timing-function: linear;
        -o-animation-name: rotation-reverse;
        -o-animation-duration: 15s;
        -o-animation-iteration-count: infinite;
        -o-animation-timing-function: linear;
        animation-name: rotation-reverse;
        animation-duration: 15s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
      }
    }
    .Main__gear-min{
      width: 62px;
      height: 62px;
      position: absolute;
      bottom: 0;
      right: 131px;

      display: flex;
      justify-content: center;
      align-items: center;
      .img-rotation1 {
        -webkit-animation-name: rotation;
        -webkit-animation-duration: 15s;
        -webkit-animation-iteration-count: infinite;
        -webkit-animation-timing-function: linear;
        -moz-animation-name: rotation;
        -moz-animation-duration: 15s;
        -moz-animation-iteration-count: infinite;
        -moz-animation-timing-function: linear;
        -o-animation-name: rotation;
        -o-animation-duration: 15s;
        -o-animation-iteration-count: infinite;
        -o-animation-timing-function: linear;
        animation-name: rotation;
        animation-duration: 15s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
      }
    }
  }
}
@media (max-width: 1024px) {
  .Main__inner {
    padding: 229px 0 306px 0;
    .Main__about{
      .Main__desc{
        padding-bottom: 40px;
      }
    }
    .Main__animation{
      max-width: 436px;
      padding: 0 31px 65px 0;
      .Main__gear{
        width: 123px;
        height: 123px;
        bottom: 17px;
      }
      .Main__gear-min{
        width: 55px;
        height: 55px;
        right: 116px;
      }
    }
  }
}
@media (max-width: 768px) {
  .Main__inner {
    padding: 229px 0 277px 0;
    column-gap: 20px;
    .Main__animation{
      max-width: 354px;
      padding: 0 25px 53px 0;
      .Main__gear{
        width: 100px;
        height: 100px;
        bottom: 14px;
      }
      .Main__gear-min{
        width: 45px;
        height: 45px;
        right: 95px;
      }
    }
  }
}
@media (max-width: 480px) {
  .Main__inner {
    padding-bottom: 100px;
    flex-wrap: wrap;
    row-gap: 80px;
    .Main__about{
      .Main__title{
        font-size: 32px;
        line-height: 50px;
        padding-bottom: 20px;
        max-width: 100%;
      }
    }
    .Main__animation{
      max-width: 392px;
    }
  }
}
@media (max-width: 360px) {
  .Main__inner {
    padding-bottom: 120px;
    .Main__about{
      .Main__title{
        font-size: 32px;
        line-height: 45px;
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
    .Main__animation{
      padding: 0 22px 48px 0;
      .Main__gear{
        width: 90px;
        height: 90px;
        bottom: 12px;
      }
      .Main__gear-min{
        width: 41px;
        height: 41px;
        right: 85px;
      }
    }
  }
}
</style>
