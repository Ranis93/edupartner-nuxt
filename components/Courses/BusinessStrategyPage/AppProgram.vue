<template>
  <section class="BSProgram">
    <div class="container">
      <div class="BSProgram__inner">
        <div class="BSProgram__title">
          Программа курса
        </div>
        <div class="BSProgram__box">
          <div class="BSProgram__module">
            Модуль 1. Стратегия компании
          </div>
          <ol class="BSProgram__desc">
            <li>
              Стратегическое управление: сущность, задачи, преимущества стратегического управления
            </li>
            <li>
              Понятие стратегии организации, виды стратегии
            </li>
            <li>
              Эталонные стратегии развития бизнеса, их сущность и содержание
            </li>
          </ol>
          <div class="BSProgram__module">
            Модуль 2. Стратегический анализ
          </div>
          <ol class="BSProgram__desc">
            <li>
              Понятие стратегического анализа
            </li>
            <li>
              Характеристика инструментов стратегического анализа
            </li>
            <li>
              Методы стратегической диагностики организации
            </li>
          </ol>
          <div class="BSProgram__module">
            Модуль 3. «Внешний стратегический анализ»
          </div>
          <ol class="BSProgram__desc">
            <li>
              Понятие внешнего анализа
            </li>
            <li>
              Анализ рынка
            </li>
            <li>
              Анализ конкурентов. Методы анализа
            </li>
            <li>
              Анализ потребителей (клиентов)
            </li>
          </ol>
          <div class="BSProgram__module">
            Модуль 4. «Внутренний стратегический анализ»
          </div>
          <ol class="BSProgram__desc">
            <li>
              Внутренний анализ как стратегический ресурс развития компании
            </li>
            <li>
              Финансовый анализ
            </li>
            <li>
              Ключевые факторы успеха. Анализ
            </li>
            <li>
              Анализ цепочки ценности.
            </li>
            <li>
              Анализ выручки
            </li>
          </ol>
          <div class="BSProgram__module">
            Модуль 5. Инструменты стратегического анализа
          </div>
          <ol class="BSProgram__desc">
            <li>
              Внутренний анализ как стратегический ресурс развития компании
            </li>
            <li>
              Финансовый анализ
            </li>
            <li>
              Ключевые факторы успеха. Анализ
            </li>
            <li>
              Анализ цепочки ценности.
            </li>
            <li>
              Анализ выручки
            </li>
          </ol>
          <div class="BSProgram__module">
            Модуль 6. Бизнес процесс стратегического анализа
          </div>
          <ol class="BSProgram__desc">
            <li>
              План проведения стратегического анализа
            </li>
            <li>
              Как увеличить объёмы продаж. Инструменты
            </li>
          </ol>
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
.BSProgram{
  background-color: #E5E5E5;
}
.BSProgram__inner{
  padding: 100px 0;
}
.BSProgram__title{
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 50px;
  color: #1D1D1D;
  margin-bottom: 50px;
}
.BSProgram__box{
  padding: 30px 50px 50px 50px;
  max-width: 1080px;
  border-radius: 50px;
}
.BSProgram__module{
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 34px;

  color: #1D1D1D;
  padding: 20px 0;
}
.BSProgram__desc{
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 34px;

  color: #1D1D1D;
  margin-left: 30px;
}
@media (max-width: 480px) {
  .BSProgram__box{
    padding: 25px 30px 45px 30px;
  }
  .BSProgram__module, .BSProgram__desc{
    font-size: 20px;
    line-height: 24px;
  }
}
@media (max-width: 360px) {
  .BSProgram__title{
    font-size: 24px;
  }
  .BSProgram__box{
    padding: 25px 26px 45px 30px;
  }
  .BSProgram__module, .BSProgram__desc{
    font-size: 18px;
    line-height: 22px;
  }
  .BSProgram__module{
    padding-bottom: 10px;
  }
}
</style>
