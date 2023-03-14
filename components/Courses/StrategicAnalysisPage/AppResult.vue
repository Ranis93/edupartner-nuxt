<template>
  <section class="BSResult">
    <div class="container">
      <div class="BSResult__inner">
        <div class="BSResult__title">
          Результат, который вы получите
        </div>
        <div class="BSResult__cards">
          <div class="BSResult__card">
            <div class="BSResult__tit">
              Узнаете:
            </div>
            <ul class="BSResult__text">
              <li>
                основы стратегического анализа и планирования
              </li>
              <li>
                разработки стратегии
              </li>
              <li>
                инструментарий финансовой анализа
              </li>
            </ul>
          </div>
          <div class="BSResult__card">
            <div class="BSResult__tit">
              Сможете:
            </div>
            <ul class="BSResult__text">
              <li>
                проводить анализ внешней и внутренней среды предприятия;
              </li>
              <li>
                самостоятельно решать поставленную задачу стратегического анализа с использованием накопленных знаний
              </li>
            </ul>
          </div>
          <div class="BSResult__card">
            <div class="BSResult__tit">
              Овладеете:
            </div>
            <ul class="BSResult__text">
              <li>
                методами стратегического анализа; методами финасово-экономического анализа;
              </li>
              <li>
                современным инструментарием стратегического анализа для разработки стратегии и программы развития
              </li>
            </ul>
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
  background-image: url('../../../assets/images/courses/strategic-analysis/bs_bg_2.png');
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
  row-gap: 20px;
}
.BSResult__card{
  width: 32%;
  padding: 35px 20px 50px 20px;
  background: linear-gradient(122.93deg, rgba(100, 100, 100, 0.71) 1.7%, rgba(72, 71, 71, 0.12) 48.4%, rgba(115, 106, 106, 0.17) 94.76%);
  border-radius: 50px;
}
.BSResult__tit{
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 125%;

  color: #FAFF00;
  padding-bottom: 30px;
}
.BSResult__text{
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 125%;
  margin-left: 25px;
  color: #C4C4C4;
}
.BSResult__text>li{
  padding-bottom: 5px;
}
.BSResult__text>li:last-child{
  padding-bottom: 0;
}
@media (max-width: 1024px) {
  .BSResult__tit{
    padding-bottom: 15px;
  }
  .BSResult__card{
    padding: 35px 20px;
  }
}
@media (max-width: 768px) {
  .BSResult__cards{
    column-gap: 0;
  }
  .BSResult__card{
    width: 100%;
  }
}
@media (max-width: 480px) {
  .BSResult__title{
    line-height: 45px;
  }
}
@media (max-width: 360px) {
  .BSResult__title{
    font-size: 24px;
    line-height: 40px;
    padding-bottom: 25px;
  }
  .BSResult__text, .BSResult__tit{
    font-size: 16px;
  }
  .BSResult__tit{
    padding-bottom: 10px;
  }
}
</style>
