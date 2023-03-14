<template>
  <section class="BSProgram">
    <div class="container">
      <div class="BSProgram__inner">
        <div class="BSProgram__title">
          Программа курса
        </div>
        <div class="BSProgram__box">
          <div class="BSProgram__module">
            МОДУЛЬ 1 СТРАТЕГИЯ И СТРАТЕГИЧЕСКОЕ УПРАВЛЕНИЕ
          </div>
          <ol class="BSProgram__desc">
            <li>
              Что такое стратегия и как она вырабатывается.
            </li>
            <li>
              Стратегическое планирование и понимание процесса стратегии.
            </li>
            <li>
              Сущность, цели и задачи стратегического анализа.
            </li>
            <li>
              Информационная база стратегического анализа.
            </li>
            <li>
              Миссия. Ценности. Культура компании и сотрудников. Идеальная стратегия.
            </li>
          </ol>
          <div class="BSProgram__module">
            МОДУЛЬ 2 ОПОРА СТРАТЕГИИ
          </div>
          <ol class="BSProgram__desc">
            <li>
              Клиенты. Анализ клиента. Привлечение, удержание и развитие клиента. RFM - анализ.
            </li>
            <li>
              Продукты, типы. Анализ взаимодействия покупателя с продуктом компании. С помощью каких продуктов можно удовлетворить потребности, получая при этом выгоду.
            </li>
            <li>
              Конкуренты. Анализ конкурентов. Конкурентное преимущество.
            </li>
          </ol>
          <div class="BSProgram__module">
            МОДУЛЬ 3 СОЗДАНИЕ СТРАТЕГИИ
          </div>
          <ol class="BSProgram__desc">
            <li>
              Видение компании, цель, ключевые ценности.
            </li>
            <li>
              Основное предназначение компании.
            </li>
            <li>
              Стратегический анализ бизнеса.Актуализация в зависимости от состояния рынка.
            </li>
            <li>
              PEST анализ. Понятие. Создание.
            </li>
            <li>
              SWOT-анализ. Понятие. Построение. Поиск решения.
            </li>
            <li>
              Маркетинг. Медиа каналы. Тенденции и анализ. Нестандартные средства коммуникации.
            </li>
            <li>
              Воплощение стратегии и её развитие. Постановка стратегических целей.
            </li>
          </ol>
          <div class="BSProgram__module">
            МОДУЛЬ 4 ФИНАНСОВЫЙ МЕНЕДЖМЕНТ
          </div>
          <ol class="BSProgram__desc">
            <li>
              Точка безубыточности. Анализ безубыточности.
            </li>
            <li>
              Ключевой расчёт маржинальной прибыли, чистой прибыли.
            </li>
            <li>
              Анализ финансовых результатов деятельности.
            </li>
            <li>
              Анализ бухгалтерский баланс отчёта о прибыли и убытках.
            </li>
            <li>
              Коэффициенты финансового анализа: платёжеспособность и ликвидность.
            </li>
          </ol>
          <div class="BSProgram__module">
            МОДУЛЬ 5 БИЗНЕС ПЛАНИРОВАНИЕ
          </div>
          <ol class="BSProgram__desc">
            <li>
              Основы бизнес-планирования.
            </li>
            <li>
              Подготовка маркетингового раздела бизнес-плана.
            </li>
            <li>
              Подготовка производственного раздела бизнес-плана.
            </li>
            <li>
              Организационный раздел бизнес-плана.
            </li>
            <li>
              Разработка финансового раздела бизнес-плана.
            </li>
          </ol>
          <div class="BSProgram__module">
            МОДУЛЬ 6 БИЗНЕС МОДЕЛЬ. ИНСТРУМЕНТ АНАЛИЗА НОВОГО И ДЕЙСТВУЮЩЕГО БИЗНЕСА.
          </div>
          <ol class="BSProgram__desc">
            <li>
              Что такое Бизнес модель Canvas.
            </li>
            <li>
              Чем методика поможет стартапу.
            </li>
            <li>
              Как выглядит Бизнес модель. Построение.
            </li>
            <li>
              Как оценивать бизнес-модель.
            </li>
            <li>
              Как сделать бизнес-модель инновационной.
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
  background-color: #FFFFFF;
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
