<template>
  <section class="BSResult">
    <div class="container">
      <div class="BSResult__inner">
        <div class="BSResult__title">
          Результат, который вы получите
        </div>
        <div class="BSResult__cards">
          <div class="BSResult__card">
            <div class="BSResult__text">
              Вы создадите стратегию развития своей компании, сможете прогнозировать развитие рынка и увеличить прибыль бизнеса
            </div>
          </div>
          <div class="BSResult__card">
            <div class="BSResult__text">
              Увидите нынешнее положение своего бизнеса
            </div>
          </div>
          <div class="BSResult__card">
            <div class="BSResult__text">
              Узнаете, чего вам сегодня не хватает для реализации стратегии
            </div>
          </div>
          <div class="BSResult__card">
            <div class="BSResult__text">
              Найдёте новые точки развития своего бизнеса
            </div>
          </div>
          <div class="BSResult__card">
            <div class="BSResult__text">
              Научитесь и начнете анализировать финансовые показатели
            </div>
          </div>
          <div class="BSResult__card">
            <div class="BSResult__text">
              Рассчитаете точку безубыточности
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
.BSResult{
  background-image: url('../../../assets/images/courses/business-strategy/bs_bg_2.png');
  background-size: cover;
}
.BSResult__inner{
  padding: 100px 0;
}
.BSResult__title{
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 50px;

  color: #FAFF00;
  padding-bottom: 50px;
}
.BSResult__cards{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  column-gap: 15px;
  row-gap: 25px;
}
.BSResult__card{
  width: 32%;
  padding: 35px 20px;
  background: linear-gradient(122.93deg, rgba(100, 100, 100, 0.71) 1.7%, rgba(72, 71, 71, 0.12) 48.4%, rgba(115, 106, 106, 0.17) 94.76%);
  border-radius: 50px;
  display: flex;
  align-items: flex-start;
}
.BSResult__text{
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 125%;

  color: #FFFFFF;
}
.BSResult__card::before{
  content: '.';
  padding-right: 10px;
  font-size: 40px;
  margin-top: -15px;
}
@media (max-width: 1024px) {
  .BSResult__text{
    font-size: 18px;
  }
  .BSResult__card::before{
    margin-top: -20px;
  }
}
@media (max-width: 768px) {
  .BSResult__card{
    width: 48%;
  }
}
@media (max-width: 480px) {
  .BSResult__inner{
    padding: 100px 0 86px 0;
  }
  .BSResult__title{
    line-height: 45px;
  }
  .BSResult__cards{
    row-gap: 20px;
    column-gap: normal;
  }
  .BSResult__card{
    width: 100%;
    padding: 35px 25px;
  }
}
@media (max-width: 360px) {
  .BSResult__inner{
    padding: 100px 0;
  }
  .BSResult__title{
    font-size: 24px;
    line-height: 40px;
    padding-bottom: 26px;
  }
  .BSResult__cards{
    row-gap: 15px;
  }
  .BSResult__card{
    padding: 30px 10px 30px 10px;
  }
  .BSResult__text{
    font-size: 16px;
  }
}
</style>
