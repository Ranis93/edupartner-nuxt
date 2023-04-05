<template>
  <section class="Why">
    <div class="container">
      <div class="Why__inner">
        <div class="Why__title">
          Почему стоит доверять нам
        </div>
        <div class="Why__columns">
          <div class="Why__cards">
            <div class="Why__card">
              <div class="Why__img">
                <img src="../../../assets/images/control/business-diag/why-cards/hands.svg" alt="cards-img">
              </div>
              <div class="Why__desc">
                Берём <strong>ответственность</strong> за результат нашей работы. Стараемся для каждого клиента и делаем все возможное и невозможное.
              </div>
            </div>
            <div class="Why__card">
              <div class="Why__img">
                <img src="../../../assets/images/control/business-diag/why-cards/pc.svg" alt="cards-img">
              </div>
              <div class="Why__desc">
                Больше, чем специалисты. Мы проводим отбор, и к работе приступает тот, кто прошёл испытания. С нами работают <strong>лучшие из лучших.</strong>
              </div>
            </div>
            <div class="Why__card">
              <div class="Why__img">
                <img src="../../../assets/images/control/business-diag/why-cards/search.svg" alt="cards-img">
              </div>
              <div class="Why__desc">
                Индвидуальный подход. Внимательно относимся к Вашим запросам. Оцениваем, проводим аудит, разрабываем стратегию, решаем проблемы.
              </div>
            </div>
          </div>
          <div class="Why__window">
            <div class="Why__text">
              Опыт в управлении пятью бизнесами 15 лет
            </div>
            <div class="Why__text">
              Увеличили доход бизнесов в кризис на 140%
            </div>
            <div class="Why__text">
              Вышли на международный рынок: Беларусь, Казахстан
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
.Why{
  background: #FFFFFF;
}
.Why__inner{
  padding: 96px 0 119px 0;
  .Why__title{
    font-family: $ff1;
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 50px;
    color: #000000;
    padding-bottom: 50px;
  }
  .Why__columns{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    column-gap: 43px;
    .Why__cards{
      max-width: 480px;
      .Why__card{
        margin-bottom: 25px;
        &:last-child{
          margin-bottom: 0;
        }
        .Why__img{
          height: 45px;
          width: fit-content;
        }
        .Why__desc{
          font-family: $ff2;
          font-style: normal;
          font-weight: 400;
          font-size: 20px;
          line-height: 24px;
          margin-top: 10px;
          color: #000000;
        }
      }
    }
    .Why__window{
      background: #FAFF00;
      border-radius: 50px;
      margin-top: 24px;
      padding: 45px 40px;
      max-width: 580px;
      .Why__text{
        font-family: $ff2;
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 36px;
        color: #000000;
        padding-bottom: 25px;
        &:last-child{
          padding-bottom: 0;
        }
      }
    }
  }
}
@media (max-width: 1024px) {
}

@media (max-width: 768px) {
}
@media (max-width: 480px) {
}
@media (max-width: 360px) {
}
</style>
