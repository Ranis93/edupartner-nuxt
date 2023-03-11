<template>
  <section class="BSWhy">
    <div class="container">
      <div class="BSWhy__inner">
        <div class="BSWhy__title">
          Почему стоит доверять нам
        </div>
        <div class="BSWhy__content">
          <div class="BSWhy__cards">
            <div class="BSWhy__card">
              <div class="BSWhy__img">
                <img src="../../../assets/images/courses/business-strategy/yellow_hands.svg" alt="hands">
              </div>
              <div class="BSWhy__text">
                Берём ответственность за результат нашей работы. Стараемся для каждого клиента и делаем все возможное и невозможное.
              </div>
            </div>
            <div class="BSWhy__card">
              <div class="BSWhy__img">
                <img src="../../../assets/images/courses/business-strategy/yellow_pc.svg" alt="pc">
              </div>
              <div class="BSWhy__text">
                Больше, чем специалисты. Мы проводим отбор, и к работе приступает тот, кто прошёл испытания. С нами работают лучшие из лучших.
              </div>
            </div>
            <div class="BSWhy__card">
              <div class="BSWhy__img">
                <img src="../../../assets/images/courses/business-strategy/yellow_search.svg" alt="search">
              </div>
              <div class="BSWhy__text">
                Индвидуальный подход. Внимательно относимся к Вашим запросам. Оцениваем, проводим аудит, разрабываем стратегию, решаем проблемы.
              </div>
            </div>
          </div>
          <div class="BSWhy__col">
            <div class="BSWhy__window">
              <div class="BSWhy__ad">
                Опыт в управлении пятью бизнесами 15 лет
              </div>
              <div class="BSWhy__ad">
                Увеличили доход бизнесов в кризис на 140%
              </div>
              <div class="BSWhy__ad">
                Вышли на международный рынок: Беларусь, Казахстан
              </div>
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

<style scoped>
.BSWhy{
  background-color: #181816;
}
.BSWhy__inner{
  padding: 100px 0;
}
.BSWhy__title{
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 50px;
  color: #FAFF00;
}
.BSWhy__content{
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 50px;
  column-gap: 20px;
}
.BSWhy__cards{
  max-width: 480px;
}
.BSWhy__col{
  max-width: 580px;
}
.BSWhy__card{
  margin-bottom: 25px;
}
.BSWhy__card:last-child{
  margin-bottom: 0;
}
.BSWhy__img{
  width: 55px;
  height: 55px;
  margin-bottom: 15px;
}
.BSWhy__text{
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;

  color: #F5F5F5;
}
.BSWhy__window{
  background-color: #FFFFFF;
  border-radius: 50px;
  padding: 45px 40px;
  margin-top: 63px;
}
.BSWhy__ad{
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 150%;
  color: #1D1D1D;
  padding-bottom: 10px;
}
.BSWhy__ad:last-child{
  padding-bottom: 0;
}
@media (max-width: 1024px) {
  .BSWhy__cards{
    max-width: 416px;
  }
  .BSWhy__col{
    max-width: 524px;
  }
}
@media (max-width: 768px) {
  .BSWhy__ad{
    font-size: 20px;
  }
  .BSWhy__cards, .BSWhy__col{
    max-width: none;
    width: 48%;
  }
}
@media (max-width: 480px) {
  .BSWhy__content{
    flex-wrap: wrap;
    column-gap: normal;
    row-gap: 50px;
  }
  .BSWhy__cards, .BSWhy__col{
    width: 100%;
  }
  .BSWhy__window{
    margin-top: 0;
    padding: 35px 45px;
  }
}
@media (max-width: 360px) {
  .BSWhy__title{
    font-size: 24px;
    line-height: 40px;
  }
  .BSWhy__text{
    font-size: 18px;
    line-height: 22px;
  }
  .BSWhy__window{
    padding: 35px 32px;
  }
  .BSWhy__ad{
    font-size: 18px;
  }
}
</style>
