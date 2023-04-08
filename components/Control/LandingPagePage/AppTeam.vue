<template>
  <section class="Team">
    <div class="container">
      <div class="Team__inner">
        <div class="Team__title">
          Над сайтом будут работать
        </div>
        <div class="Team__cards">
          <div class="Team__card">
            <div class="Team__img">
              <img src="../../../assets/images/control/landing-page/team-cards/disigner.png" alt="card">
            </div>
            <div class="Team__text">
              Веб-дизайнер
            </div>
            <div class="Team__desc">
              Создает структуру и уникальный дизайн сайта
            </div>
          </div>
          <div class="Team__card short">
            <div class="Team__img">
              <img src="../../../assets/images/control/landing-page/team-cards/dev.png" alt="card">
            </div>
            <div class="Team__text">
              Разработчики
            </div>
            <div class="Team__desc">
              Фронтенд- и бэкенд-разработка
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
.Team{
  @include bgcenter('../../../assets/images/control/seo-promotion/team.png');
}
.Team__inner{
  padding: 100px 0 122px 0;
  .Team__title{
    font-family: $ff1;
    font-weight: 700;
    font-size: 28px;
    line-height: 50px;
    color: #FFFFFF;
    padding-bottom: 50px;
  }
  .Team__cards{
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    column-gap: 20px;
    .Team__card{
      max-width: 280px;
      &.short{
        max-width: 180px;
      }
      .Team__img{
        width: 98px;
        height: 98px;
      }
      .Team__text{
        font-family: $ff2;
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        color: #FAFF00;
        padding: 20px 0 15px 0;
      }
      .Team__desc{
        font-family: $ff2;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #C4C4C4;
      }
    }
  }
}
@media (max-width: 768px) {
  .Team__inner{
    padding-bottom: 100px;
    .Team__cards{
      .Team__card{
        max-width: 229px;
      }
    }
  }
}
@media (max-width: 480px) {
  .Team__inner{
    padding-bottom: 341px;
  }
}
@media (max-width: 360px) {
  .Team__inner{
    padding-bottom: 333px;
    .Team__title{
      font-size: 24px;
      line-height: 35px;
      padding-bottom: 30px;
    }
    .Team__cards{
      .Team__card{
        max-width: none;
        width: 47%;
        .Team__text{
          font-size: 18px;
          line-height: 22px;
        }
        .Team__desc{
          font-size: 16px;
          line-height: 19px;
        }
        .short{
          max-width: none;
        }
      }
    }
  }
}
</style>
