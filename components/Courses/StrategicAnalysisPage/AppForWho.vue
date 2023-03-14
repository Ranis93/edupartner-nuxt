<template>
  <section class="SAForWho">
    <div class="container">
      <div class="SAForWho__inner">
        <div class="SAForWho__title">
          Для кого курс «Стратегический анализ»
        </div>
        <div class="SAForWho__desc">
          Цель курса состоит в том, чтобы научиться применять богатый инструментарий стратегического анализа организаций и их динамического окружения и повысить их способность вырабатывать, анализировать, оценивать и выбирать наиболее эффективные, социально значимые и системно устойчивые стратегические альтернативы.
        </div>
        <div class="SAForWho__cards">
          <div class="SAForWho__card">
            <div class="SAForWho__img">
              <img src="../../../assets/images/courses/strategic-analysis/fh-cards/fh-card-01.svg" alt="bag">
            </div>
            <div class="SAForWho__text">
              Предприни<span> мателям</span>
            </div>
          </div>
          <div class="SAForWho__card">
            <div class="SAForWho__img">
              <img src="../../../assets/images/courses/strategic-analysis/fh-cards/fh-card-02.svg" alt="society">
            </div>
            <div class="SAForWho__text">
              Руководители подразделений, ответственные лица
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
.SAForWho{
  background-color: #181816;
}
.SAForWho__inner{
  padding: 100px 0;
}
.SAForWho__title{
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 28px;
  line-height: 50px;
  color: #FAFF00;
  margin-bottom: 50px;
}
.SAForWho__desc{
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 125%;
  max-width: 880px;
  color: #FFFFFF;
  margin-bottom: 50px;
}
.SAForWho__cards{
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 980px;
}
.SAForWho__card{
  width: 480px;
}
.SAForWho__img{
  width: 45px;
  height: auto;
}
.SAForWho__text{
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;

  color: #FAFF00;
  margin-top: 22px;
}
.SAForWho__text>span{
  word-spacing: -.4ch;
}
@media (max-width: 768px) {
  .SAForWho__card{
    width: 49%;
  }
}
@media (max-width: 480px) {
  .SAForWho__title{
    line-height: 45px;
  }
  .SAForWho__text{
    margin-top: 21px;
    font-size: 18px;
    line-height: 22px;
  }
}
@media (max-width: 360px) {
  .SAForWho__title{
    font-size: 24px;
    line-height: 35px;
    margin-bottom: 35px;
  }
  .SAForWho__text{
    margin-top: 16px;
    font-size: 18px;
  }
  .SAForWho__cards{
    flex-wrap: wrap;
    row-gap: 40px;
  }
  .SAForWho__card{
    width: 100%;
  }
}
</style>
