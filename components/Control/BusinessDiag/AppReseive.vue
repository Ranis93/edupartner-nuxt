<template>
  <section class="Receive">
    <div class="container">
      <div class="Receive__inner">
        <div class="Receive__title">
          Что собственник или заказчик получает:
        </div>
        <div class="Receive__cards">
          <div class="Receive__card">
            Cрез по компании на сегодняшний день по текущим показателям
          </div>
          <div class="Receive__card">
            Cтратегию развития
          </div>
          <div class="Receive__card">
            Рекомендации по устранению ошибок
          </div>
          <div class="Receive__card">
            Анализ конкурентов
          </div>
          <div class="Receive__card">
            Рекомендации по увеличению прибыли (как и за счет чего)
          </div>
          <div class="Receive__card">
            Точку безубыточности
          </div>
          <div class="Receive__card">
            Рекомендации по управленческому учету
          </div>
          <div class="Receive__card">
            Рекомендации по кадрам и управлению ими
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
  @include bgcenter('../../../assets/images/control/business-diag/receive_bg.png');
}
.Receive__inner{
  padding: 100px 0 85px 0;
  .Receive__title{
    font-family: $ff1;
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 34px;
    color: #FAFF00;
    padding-bottom: 50px;
  }
  .Receive__cards{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    row-gap: 16px;
    column-gap: 5px;
    .Receive__card{
      padding: 35px 27px 35px 45px;
      width: 23.5%;
      min-height: 190px;
      background: linear-gradient(122.93deg, rgba(100, 100, 100, 0.71) 1.7%, rgba(72, 71, 71, 0.12) 48.4%, rgba(115, 106, 106, 0.17) 94.76%);
      border-radius: 50px;
      position: relative;
      &::before{
        content: '';
        position: absolute;
        width: 8px;
        height: 8px;
        background: #FFFFFF;
        border-radius: 50%;
        top: 40px;
        left: 25px;
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
