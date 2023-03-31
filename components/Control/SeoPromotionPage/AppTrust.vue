<template>
  <section class="Trust">
    <div class="container">
      <div class="Trust__inner">
        <div class="Trust__title">
          Нам стоит доверять
        </div>
        <div class="Trust__cards">
          <div class="Trust__card short">
            <div class="Trust__img">
              <img src="../../../assets/images/control/seo-promotion/trust-cards/yellow_hands.svg" alt="hands">
            </div>
            <div class="Trust__text">
              Берём ответственность за результат нашей работы. Стараемся для каждого клиента и делаем все возможное и
              невозможное.
            </div>
          </div>
          <div class="Trust__card">
            <div class="Trust__img">
              <img src="../../../assets/images/control/seo-promotion/trust-cards/yellow_star.svg" alt="star">
            </div>
            <div class="Trust__text">
              За нашими плечами большой опыт в развитии бизнеса в интернете. Мы поможем “не набить шишки” и сделаем все
              качественно.
            </div>
          </div>
          <div class="Trust__card short">
            <div class="Trust__img">
              <img src="../../../assets/images/control/seo-promotion/trust-cards/yellow_pc.svg" alt="pc">
            </div>
            <div class="Trust__text">
              Больше, чем специалисты. Мы проводим отбор, и к работе приступает тот, кто прошёл испытания. С нами работают
              лучшие из лучших.
            </div>
          </div>
          <div class="Trust__card">
            <div class="Trust__img">
              <img src="../../../assets/images/control/seo-promotion/trust-cards/yellow_search.svg" alt="search">
            </div>
            <div class="Trust__text">
              Индвидуальный подход. Внимательно относимся к Вашим запросам. Оцениваем, проводим аудит, разрабываем
              стратегию, решаем проблемы.
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

.Trust {
  background-color: #1D1C19;
}
.Trust__inner {
  padding: 100px 0;
  .Trust__title {
    font-family: $ff1;
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 50px;
    color: #FFFFFF;
    padding-bottom: 50px;
  }
  .Trust__cards {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    row-gap: 50px;
    column-gap: 120px;
    flex-wrap: wrap;
    .Trust__card {
      max-width: 480px;
      &.short {
        max-width: 380px;
      }
      .Trust__img {
        width: 60px;
        height: 60px;
        margin-bottom: 20px;
      }
      .Trust__text {
        font-family: $ff2;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        color: #F5F5F5;
      }
    }
  }
}

@media (max-width: 768px) {
  .Trust__inner {
    .Trust__cards{
      row-gap: 55px;
      column-gap: 15px;
      justify-content: space-between;
      .Trust__card{
        max-width: none;
        width: 47.5%;
        &.short{
          max-width: none;
        }
      }
    }
  }
}
@media (max-width: 480px) {
  .Trust__inner {
    .Trust__cards{
      row-gap: 48px;
      .Trust__card{
        .Trust__text{
          font-size: 18px;
          line-height: 22px;
        }
      }
    }
  }
}
@media (max-width: 480px) {
  .Trust__inner {
    .Trust__cards{
      row-gap: 30px;
      flex-wrap: wrap;
      .Trust__card{
        width: 100%;
        .Trust__img{
          width: 55px;
          height: 55px;
          margin-bottom: 15px;
        }
        .Trust__text{
          font-size: 18px;
          line-height: 22px;
        }
      }
    }
  }
}
</style>
