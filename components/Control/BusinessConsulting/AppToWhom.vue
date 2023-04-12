<template>
  <section class="Whom">
    <div class="container">
      <div class="Whom__inner">
        <div class="Whom__title">
          Кому необходима бизнес-консультация?
        </div>
        <div class="Whom__cards">
          <div class="Whom__card">
            <div class="Whom__img">
              <img src="../../../assets/images/control/business-consult/to-whom-cards/phone.svg" alt="card-img">
            </div>
            <div class="Whom__text">
              Технические проблемы
            </div>
            <div class="Whom__desc">
              Незрелая экспертиза и управление знаниями. Нет автоматизации бизнес-процесса.
            </div>
          </div>
          <div class="Whom__card">
            <div class="Whom__img">
              <img src="../../../assets/images/control/business-consult/to-whom-cards/business.svg" alt="card-img">
            </div>
            <div class="Whom__text">
              Прибыль не растет или падает
            </div>
            <div class="Whom__desc">
              Уперлись в потолок или нестабильное финансовое положение. Кассовые разрывы: компании не хватает денег на текучку.
            </div>
          </div>
          <div class="Whom__card">
            <div class="Whom__img">
              <img src="../../../assets/images/control/business-consult/to-whom-cards/problems.svg" alt="card-img">
            </div>
            <div class="Whom__text">
              Проблемы с кадрами
            </div>
            <div class="Whom__desc">
              Текучка, низкая мотивация сотрудников, конфликты. <span>Неквалифици </span>рованный персонал и отсутствие дисциплины.
            </div>
          </div>
          <div class="Whom__card">
            <div class="Whom__img">
              <img src="../../../assets/images/control/business-consult/to-whom-cards/money.svg" alt="card-img">
            </div>
            <div class="Whom__text">
              Убыточные проекты
            </div>
            <div class="Whom__desc">
              Вложения денег без результата. Неоправданные проекты и их реализация.
            </div>
          </div>
        </div>
        <div class="Whom__btn">
          Заказать консультацию
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
.Whom{
  background-color: #FFFFFF;
}
.Whom__inner{
  padding: 150px 0;
  .Whom__title{
    font-family: $ff1;
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 34px;
    color: #000000;
    margin-bottom: 121px;
  }
  .Whom__cards{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    column-gap: 15px;
    row-gap: 55px;
    .Whom__card{
      width: 48%;
      .Whom__img{
        width: 100px;
        height: auto;
      }
      .Whom__text{
        font-family: $ff1;
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;
        color: #000000;
        margin: 25px 0 20px 0;
      }
      .Whom__desc{
        font-family: $ff1;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        color: #000000;
        span{
          margin-right: -0.3rem;
        }
      }
    }
  }
  .Whom__btn{
    font-family: $ff1;
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 33px;
    color: rgba(29, 29, 29, 0.9);

    margin: 90px auto 0 auto;
    padding: 24px 62px;
    width: fit-content;
    background: #F9FF05;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
    border-radius: 50px;
    text-align: center;
    &:hover{
      cursor: pointer;
    }
  }
}
@media (max-width: 1024px) {
  .Whom__inner{
    padding: 100px 0;
    .Whom__cards{
      row-gap: 55px;
    }
    .Whom__btn{
      margin-top: 64px;
    }
  }
}
@media (max-width: 768px) {
  .Whom__inner{
    .Whom__cards{
      row-gap: 100px;
      column-gap: 15px;
      .Whom__card{
        width: 48%;
      }
    }
    .Whom__btn{
      margin-top: 98px;
    }
  }
}
@media (max-width: 480px) {
  .Whom__inner{
    padding: 70px 0;
    .Whom__title{
      font-size: 24px;
      line-height: 29px;
      margin-bottom: 65px;
    }
    .Whom__cards{
      row-gap: 72px;
      column-gap: 5px;
      .Whom__card{
        width: 48%;
        .Whom__img{
          width: 80px;
        }
        .Whom__text{
          margin-top: 28px;
          font-size: 18px;
          line-height: 22px;
        }
        .Whom__desc{
          font-size: 16px;
          line-height: 19px;
        }
      }
    }
    .Whom__btn{
      margin-top: 53px;
      padding: 10px 40px;
      font-size: 18px;
    }
  }
}
@media (max-width: 360px) {
  .Whom__inner{
    .Whom__title{
      margin-bottom: 49px;
    }
    .Whom__cards{
      row-gap: 26px;
    }
    .Whom__btn{
      margin-top: 48px;
      width: 100%;
      padding: 10px 0;
    }
  }
}
</style>
