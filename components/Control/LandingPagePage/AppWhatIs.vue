<template>
  <section class="WhatIs">
    <div class="container">
      <div class="WhatIs__columns">
        <div class="WhatIs__about">
          <div class="WhatIs__title">
            Landing page —
          </div>
          <div class="WhatIs__desc">
            одностраничный сайт, который подталкивает пользователя к определённому действию. Этот инструмент помогает рекламировать и продавать товары или услуги, анонсировать мероприятия и собирать данные о потенциальных покупателях.
          </div>
        </div>
        <div class="WhatIs__col">
          <div class="WhatIs__cards">
            <div class="WhatIs__card">
              <div class="WhatIs__img one">
                <img src="../../../assets/images/control/landing-page/what-is-cards/money.svg" alt="money">
              </div>
              <div class="WhatIs__subtitle">
                Экономия бюджета
              </div>
              <div class="WhatIs__text">
                Одностраничный сайт дешевле многостраничного из-за меньшего объема работы
              </div>
            </div>
            <div class="WhatIs__card">
              <div class="WhatIs__img two">
                <img src="../../../assets/images/control/landing-page/what-is-cards/flash.svg" alt="flash">
              </div>
              <div class="WhatIs__subtitle">
                Быстрая разработка
              </div>
              <div class="WhatIs__text">
                На разработку лендинга требуется от двух недель до месяца
              </div>
            </div>
            <div class="WhatIs__card">
              <div class="WhatIs__img one">
                <img src="../../../assets/images/control/landing-page/what-is-cards/mac-pen.svg" alt="mac">
              </div>
              <div class="WhatIs__subtitle">
                Уникальный дизайн
              </div>
              <div class="WhatIs__text">
                Создадим сайт с уникальным дизайном, учитывая Ваши предпочтения и пожелания
              </div>
            </div>
            <div class="WhatIs__card">
              <div class="WhatIs__img two">
                <img src="../../../assets/images/control/landing-page/what-is-cards/phone.svg" alt="phone">
              </div>
              <div class="WhatIs__subtitle">
                Адаптивная верстка
              </div>
              <div class="WhatIs__text">
                Адаптируем сайт для удобства просмотра под разные устройства: планшет, мобильный телефон
              </div>
            </div>
          </div>
          <div class="WhatIs__prices">
            <div class="WhatIs__new-price">
              от 40 000 ₽
            </div>
            <div class="WhatIs__old-price">
              от 60 000 ₽
            </div>
          </div>
          <div class="WhatIs__btn">
            Заказать
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
.WhatIs{
  background-color: #181816;
}
.WhatIs__columns{
  padding: 100px 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  .WhatIs__about{
    max-width: 480px;
    .WhatIs__title{
      font-family: $ff1;
      font-style: normal;
      font-weight: 700;
      font-size: 45px;
      line-height: 55px;
      color: #FFFFFF;
      padding-bottom: 32px;
    }
    .WhatIs__desc{
      font-family: $ff2;
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 26px;
      color: #FFFFFF;
    }
  }
  .WhatIs__col{
    padding-top: 91px;
    .WhatIs__cards{
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-wrap: wrap;
      max-width: 580px;
      column-gap: 15px;
      row-gap: 36px;
      .WhatIs__card{
        width: 48%;
        .WhatIs__img{
          height: auto;
          &.one{
            width: 45px;
          }
          &.two{
            width: 23px;
          }
        }
        .WhatIs__subtitle{
          font-family: $ff1;
          font-style: normal;
          font-weight: 700;
          font-size: 20px;
          line-height: 30px;
          color: #FAFF00;
          margin: 15px 0 10px 0;
        }
        .WhatIs__text{
          font-family: $ff2;
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 130%;
          color: #D4D4D4;
        }
      }
    }
    .WhatIs__prices{
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      margin: 50px 0 35px 0;
      .WhatIs__new-price{
        font-family: $ff2;
        font-style: normal;
        font-weight: 700;
        font-size: 36px;
        line-height: 30px;
        color: #FAFF00;
        padding-top: 30px;
      }
      .WhatIs__old-price{
        font-family: $ff2;
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 15px;
        text-decoration: line-through;
        color: #C4C4C4;
      }
    }
    .WhatIs__btn{
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
}

@media (max-width: 1024px) {
  .WhatIs__columns{
    .WhatIs__about{
      max-width: 416px;
    }
    .WhatIs__col{
      max-width: 416px;
      .WhatIs__cards{
        .WhatIs__card{
          .WhatIs__subtitle{
            font-size: 18px;
            line-height: 30px;
          }
          .WhatIs__text{
            font-size: 16px;
            line-height: 21px;
          }
        }
      }
    }
  }
}
@media (max-width: 768px) {
  .WhatIs__columns{
    flex-wrap: wrap;
    row-gap: 39px;
    .WhatIs__about{
      max-width: 100%;
    }
    .WhatIs__col{
      padding-top: 0;
      max-width: none;
      width: 100%;
      .WhatIs__cards{
        max-width: none;
      }
    }
  }
}
@media (max-width: 480px) {
  .WhatIs__columns{
    .WhatIs__about{
      .WhatIs__title{
        font-size: 32px;
        padding-bottom: 20px;
      }
      .WhatIs__desc{
        font-size: 18px;
        line-height: 23px;
      }
    }
    .WhatIs__col{
      .WhatIs__cards{
        .WhatIs__card{
          width: 47%;
        }
      }
      .WhatIs__prices{
        position: relative;
        .WhatIs__old-price{
          position: absolute;
          top: 0;
          right: 0;
        }
      }
    }
  }
}
@media (max-width: 360px) {
  .WhatIs__columns{
    row-gap: 56px;
    .WhatIs__col{
      .WhatIs__cards{
        column-gap: normal;
        row-gap: 35px;
        .WhatIs__card{
          width: 100%;
          .WhatIs__subtitle{
            line-height: 25px;
          }
        }
      }
      .WhatIs__prices{
        .WhatIs__new-price{
          font-size: 32px;
        }
      }
    }
  }
}
</style>
