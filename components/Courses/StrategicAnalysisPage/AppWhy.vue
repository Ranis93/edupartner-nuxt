<template>
  <section class="SAWhy">
    <div class="container">
      <div class="SAWhy__inner">
        <div class="SAWhy__title">
          Почему стоит доверять нам
        </div>
        <div class="SAWhy__content">
          <div class="SAWhy__cards">
            <div class="SAWhy__card">
              <div class="SAWhy__img">
                <img src="../../../assets/images/courses/business-strategy/yellow_hands.svg" alt="hands">
              </div>
              <div class="SAWhy__text">
                Берём ответственность за результат нашей работы. Стараемся для каждого клиента и делаем все возможное и невозможное.
              </div>
            </div>
            <div class="SAWhy__card">
              <div class="SAWhy__img">
                <img src="../../../assets/images/courses/business-strategy/yellow_pc.svg" alt="pc">
              </div>
              <div class="SAWhy__text">
                Больше, чем специалисты. Мы проводим отбор, и к работе приступает тот, кто прошёл испытания. С нами работают лучшие из лучших.
              </div>
            </div>
            <div class="SAWhy__card">
              <div class="SAWhy__img">
                <img src="../../../assets/images/courses/business-strategy/yellow_search.svg" alt="search">
              </div>
              <div class="SAWhy__text">
                Индвидуальный подход. Внимательно относимся к Вашим запросам. Оцениваем, проводим аудит, разрабываем стратегию, решаем проблемы.
              </div>
            </div>
          </div>
          <div class="SAWhy__col">
            <div class="SAWhy__window">
              <div class="SAWhy__ad">
                Опыт в управлении пятью бизнесами 15 лет
              </div>
              <div class="SAWhy__ad">
                Увеличили доход бизнесов в кризис на 140%
              </div>
              <div class="SAWhy__ad">
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
.SAWhy{
  background-color: #181816;
}
.SAWhy__inner{
  padding: 100px 0;
}
.SAWhy__title{
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 50px;
  color: #FAFF00;
}
.SAWhy__content{
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 50px;
  column-gap: 20px;
}
.SAWhy__cards{
  max-width: 480px;
}
.SAWhy__col{
  max-width: 580px;
}
.SAWhy__card{
  margin-bottom: 25px;
}
.SAWhy__card:last-child{
  margin-bottom: 0;
}
.SAWhy__img{
  width: 55px;
  height: 55px;
  margin-bottom: 15px;
}
.SAWhy__text{
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;

  color: #F5F5F5;
}
.SAWhy__window{
  background-color: #FFFFFF;
  border-radius: 50px;
  padding: 45px 40px;
  margin-top: 63px;
}
.SAWhy__ad{
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 150%;
  color: #1D1D1D;
  padding-bottom: 10px;
}
.SAWhy__ad:last-child{
  padding-bottom: 0;
}
@media (max-width: 1024px) {
  .SAWhy__cards{
    max-width: 416px;
  }
  .SAWhy__col{
    max-width: 524px;
  }
}
@media (max-width: 768px) {
  .SAWhy__ad{
    font-size: 20px;
  }
  .SAWhy__cards, .SAWhy__col{
    max-width: none;
    width: 48%;
  }
}
@media (max-width: 480px) {
  .SAWhy__content{
    flex-wrap: wrap;
    column-gap: normal;
    row-gap: 50px;
  }
  .SAWhy__cards, .SAWhy__col{
    width: 100%;
  }
  .SAWhy__window{
    margin-top: 0;
    padding: 35px 45px;
  }
}
@media (max-width: 360px) {
  .SAWhy__title{
    font-size: 24px;
    line-height: 40px;
  }
  .SAWhy__text{
    font-size: 18px;
    line-height: 22px;
  }
  .SAWhy__window{
    padding: 35px 32px;
  }
  .SAWhy__ad{
    font-size: 18px;
  }
}
</style>
