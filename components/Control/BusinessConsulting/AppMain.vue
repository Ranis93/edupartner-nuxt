<template>
  <section class="BConsult">
    <div class="container">
      <div class="BConsult__inner">
        <div class="BConsult__about">
          <h1 class="BConsult__title">
            Бизнес-консультация
          </h1>
          <div class="BConsult__desc">
            На бизнес-консультации можно найти проблему бизнеса и качественное решение этой проблемы. Бизнес-консультацию проводят специалисты с многолетним опытом в управлении
          </div>
          <div class="BConsult__btn">
            Записаться
          </div>
        </div>
        <div class="BConsult__show">
          <div class="BConsult__window">
            <img src="../../../assets/images/control/business-consult/empty-window.png" alt="empty-window">
          </div>
          <div class="BConsult__video">
            <img src="../../../assets/images/control/business-consult/play-btn.svg" alt="play-btn">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import { insertBitrix5 } from '~/assets/js/bitrx-window'
export default {
  // mounted () {
  //   try {
  //     insertBitrix5('.BConsult__about', '.BConsult__btn')
  //   } catch (error) {}
  // }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables.scss';
.BConsult {
  @include bgcenter('@/assets/images/control/business-consult/bg.png');
}
.BConsult__inner {
  padding: 230px 0 353px 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  column-gap: 34px;
  .BConsult__about{
    max-width: 580px;
    .BConsult__title{
      font-family: $ff1;
      font-style: normal;
      font-weight: 700;
      font-size: 45px;
      line-height: 55px;
      color: #FFFFFF;
      padding-bottom: 37px;
    }
    .BConsult__desc{
      font-family: $ff2;
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
      color: #D4D4D4;
      padding-bottom: 50px;
    }
    .BConsult__btn{
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
      &:hover{
        cursor: pointer;
      }
    }
  }
  .BConsult__show{
    position: relative;
    .BConsult__window{
      max-width: 480px;
      height: auto;
    }
    .BConsult__video{
      position: absolute;
      bottom: 0;
      left: 30%;
      transform: translate(-50%, 50%);
      width: 88px;
      height: 88px;
    }
  }
}
@media (max-width: 1024px) {
  .BConsult__inner {
    padding: 227px 0 185px 0;
    .BConsult__about{
      max-width: 444px;
      .BConsult__title{
        padding-bottom: 25px;
      }
      .BConsult__desc{
        padding-bottom: 60px;
      }
    }
    .BConsult__show{
      .BConsult__window{
        max-width: 480px;
      }
    }
  }
}
@media (max-width: 768px) {
  .BConsult__inner{
    padding: 217px 0 202px 0;
    column-gap: normal;
    row-gap: 59px;
    flex-wrap: wrap;
    .BConsult__about{
      max-width: none;
      width: 100%;
      .BConsult__title{
        padding-bottom: 21px;
      }
      .BConsult__desc{
        padding-bottom: 31px;
      }
    }
    .BConsult__show{
      margin: 0 auto;
    }
  }
}
@media (max-width: 480px) {
  .BConsult__inner{
    padding-bottom: 219px;
    row-gap: 30px;
    .BConsult__about{
      .BConsult__title{
        font-size: 35px;
        line-height: 55px;
      }
      .BConsult__desc{
        padding-bottom: 21px;
      }
    }
    .BConsult__show{
      padding: 0;
      margin: 0;
      .BConsult__window{
        max-width: none;
        width: 100%;
      }
      .BConsult__video{
        left: 60%;
        transform: translate(-50%, 70%);
      }
    }
  }
}
@media (max-width: 360px) {
  .BConsult__inner{
    padding-bottom: 216px;
    row-gap: 45px;
    .BConsult__about{
      .BConsult__title{
        font-size: 30px;
        line-height: 30px;
        padding-bottom: 16;
      }
      .BConsult__desc{
        padding-bottom: 19px;
      }
    }
    .BConsult__show{
      .BConsult__video{
        left: 50%;
        transform: translate(-50%, 50%);
      }
    }
  }
}
</style>
