<template>
  <section class="Receive">
    <div class="container">
      <div class="Receive__inner">
        <div class="Receive__title">
          Что вы получите после консультации?
        </div>
        <div class="Receive__cards">
          <div class="Receive__card">
            <div class="Receive__img">
              <img src="../../../assets/images/control/business-consult/mark.svg" alt="mark">
            </div>
            <div class="Receive__text">
              Обсудим и проанализируем запрос
            </div>
          </div>
          <div class="Receive__card">
            <div class="Receive__img">
              <img src="../../../assets/images/control/business-consult/mark.svg" alt="mark">
            </div>
            <div class="Receive__text">
              Определим причину возникновения проблемы
            </div>
          </div>
          <div class="Receive__card">
            <div class="Receive__img">
              <img src="../../../assets/images/control/business-consult/mark.svg" alt="mark">
            </div>
            <div class="Receive__text">
              Рассмотрим варианты решения
            </div>
          </div>
          <div class="Receive__card">
            <div class="Receive__img">
              <img src="../../../assets/images/control/business-consult/mark.svg" alt="mark">
            </div>
            <div class="Receive__text">
              Составим пошаговый план к качественному решению
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
.Receive{
  @include bgcenter('../../../assets/images/control/business-consult/receive_bg.png');
}
.Receive__inner{
  padding: 150px 0;
  .Receive__title{
    font-family: $ff1;
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 35px;
    color: #F9FF05;
    padding-bottom: 59px;
  }
  .Receive__cards{
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    row-gap: 40px;
    .Receive__card{
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: flex-end;
      column-gap: 50px;
      .Receive__img{
        width: 50px;
        height: auto;
        flex-shrink: 0;
      }
      .Receive__text{
        font-family: $ff2;
        font-style: normal;
        font-weight: 400;
        font-size: 28px;
        line-height: 35px;
        color: #FFFFFF;
      }
    }
  }
}
@media (max-width: 1024px) {
  .Receive__inner{
    padding: 100px 0;
  }
}
@media (max-width: 768px) {
  .Receive__inner{
    .Receive__title{
      padding-bottom: 51px;
    }
    .Receive__cards{
      row-gap: 25px;
      .Receive__card{
        column-gap: 43px;
        .Receive__img{
          width: 35px;
        }
        .Receive__text{
          font-size: 18px;
        }
      }
    }
  }
}
@media (max-width: 480px) {
  .Receive__inner{
    padding: 70px 0;
    .Receive__title{
      font-size: 24px;
      line-height: 30px;
      padding-bottom: 40px;
    }
    .Receive__cards{
      row-gap: 19px;
      .Receive__card{
        column-gap: 19px;
        align-items: flex-start;
        .Receive__img{
          width: 30px;
        }
        .Receive__text{
          font-size: 16px;
          line-height: 20px;
        }
      }
    }
  }
}
@media (max-width: 360px) {
  .Receive__inner{
    .Receive__title{
      padding-bottom: 35px;
    }
    .Receive__cards{
      row-gap: 21px;
      .Receive__card{
        column-gap: 16px;
        .Receive__img{
          width: 30px;
        }
      }
    }
  }
}
</style>
