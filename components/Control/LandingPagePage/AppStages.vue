<template>
  <section class="Stages">
    <div class="container">
      <div class="Stages__inner">
        <div class="Stages__title">
          Этапы разработки
        </div>
        <div class="Stages__cards">
          <div class="Stages__card Stages__card_one">
            <div class="Stages__text">
              Подписание договора
            </div>
            <div class="Stages__desc">
              Вы заполняете бриф, после чего мы оформляем и подписываем договор
            </div>
          </div>
          <div class="Stages__card Stages__card_two">
            <div class="Stages__text">
              Разработка дизайна
            </div>
            <div class="Stages__desc">
              Разрабатываем дизайн сайта согласно заполненному брифу
            </div>
          </div>
          <div class="Stages__card Stages__card_three">
            <div class="Stages__text">
              Верстка и программирование
            </div>
            <div class="Stages__desc">
              Пишем код. Разрабатываем внешний вид сайта, логику работы сайта. Тестируем
            </div>
          </div>
          <div class="Stages__card Stages__card_four">
            <div class="Stages__text">
              Сдаем проект
            </div>
            <div class="Stages__desc">
              Переносим сайт на домен и хостинг, передаем доступы для управления сайтом
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
.Stages{
  background-color: #181816;
}
.Stages__inner{
  padding: 100px 0;
  .Stages__title{
    font-family: $ff1;
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 50px;
    color: #FFFFFF;
    padding-bottom: 32px;
  }
  .Stages__cards{
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    overflow: hidden;
    overflow-x: scroll;
    &::-webkit-scrollbar { width: 0; height: 0;}
    -ms-overflow-style: none;
    scrollbar-width: none;
    overflow: -moz-scrollbars-none;

    .Stages__card{
      width: 300px;
      border-top: 2px solid #FAFF00;
      padding: 10px 0 0 20px;
      position: relative;
      flex-shrink: 0;
      &::before{
        content: '';
        background: #FAFF00;
        width: 2px;
        height: 64px;
        position: absolute;
        top: 0;
        left: 0;
      }
      .Stages__text{
        font-family: $ff1;
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 30px;
        color: #FAFF00;
        padding-bottom: 10px;
      }
      .Stages__desc{
        font-family: $ff2;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 23px;
        color: #D4D4D4;
      }
      &.Stages__card_one{
        height: 119px;
        padding-left: 0;
        width: 280px;
        &::before{
          width: 0;
          height: 0;
        }
      }
      &.Stages__card_two{
        height: 183px;
      }
      &.Stages__card_three{
        height: 246px;
      }
      &.Stages__card_four{
        height: 309px;
      }
    }
  }
}
@media (max-width: 1024px) {
  .Stages__inner{
    padding-bottom: 36px;
    .Stages__title{
      padding-bottom: 29px;
    }
    .Stages__cards{
      .Stages__card{
        .Stages__text{
          font-size: 18px;
          line-height: 25px;
        }
        .Stages__desc{
          font-size: 16px;
          line-height: 21px;
        }
        &.Stages__card_one{
          width: 198px;
          height: 183px;
        }
        &.Stages__card_two{
          width: 219px;
          height: 247px;
        }
        &.Stages__card_three{
          width: 217px;
          height: 311px;
        }
        &.Stages__card_four{
          width: 300px;
          height: 375px;
        }
      }
    }
  }
}
@media (max-width: 768px) {
  .Stages__inner{
    padding-bottom: 50px;
    .Stages__title{
      padding-bottom: 28px;
    }
    .Stages__cards{
      .Stages__card{
        &.Stages__card_one{
          width: 229px;
          height: 158px;
        }
        &.Stages__card_two{
          width: 252px;
          height: 222px;
        }
        &.Stages__card_three{
          width: 249px;
          height: 286px;
        }
        &.Stages__card_four{
          width: 300px;
          height: 349px;
        }
      }
    }
  }
}
@media (max-width: 480px) {
  .Stages__inner{
    .Stages__cards{
      .Stages__card{
        &.Stages__card_one{
          width: 210px;
        }
      }
    }
  }
}
@media (max-width: 360px) {
  .Stages__inner{
    .Stages__cards{
      .Stages__card{
        &.Stages__card_one{
          width: 150px;
          height: 225px;
        }
        &.Stages__card_two{
          width: 170px;
          height: 290px;
        }
        &.Stages__card_three{
          width: 213px;
          height: 356px;
        }
        &.Stages__card_four{
          width: 213px;
          height: 420px;
        }
      }
    }
  }
}
</style>
