<template>
  <section class="progress">
    <div class="container">
      <div class="progress__inner">
        <div class="progress__title">
          Наши достижения
        </div>
        <div class="progress__cards">
          <div class="progress__card">
            <div class="progress__text">
              5 проектов под управлением
            </div>
            <div class="progress__desc">
              Не просто существуют, а развиваются! Доход увеличивается с каждым годом.
            </div>
          </div>
          <div class="progress__card">
            <div class="progress__text">
              15 лет
            </div>
            <div class="progress__desc">
              Опыт ведения бизнеса и управления людьми
            </div>
          </div>
          <div class="progress__card">
            <div class="progress__text">
              Международ- <br> ный рынок
            </div>
            <div class="progress__desc">
              Наши клиенты из Беларуси и Казахстана
            </div>
          </div>
          <div class="progress__card">
            <div class="progress__text">
              на 140%
            </div>
            <div class="progress__desc">
              Увеличили доход в кризис
            </div>
          </div>
        </div>
        <div class="progress__blocks">
          <div class="progress__block one">
            <div class="progress__text">
              Не стоим на месте
            </div>
            <div class="progress__desc">
              Постоянно учимся и растём. Важно идти в ногу со временем и обучаться, чтобы полностью соотвествовать современным требованиям и работать эффективнее.
            </div>
          </div>
          <div class="progress__block two">
            <img src="../../assets/images/main-page/sertificate-black.png" alt="sertificate-black">
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
.progress {
  background-color: #FFFFFF;
}
.progress__inner {
  padding: 100px 0;
}
.progress__title {
  padding-bottom: 50px;
  font-weight: 700;
  font-size: 32px;
  line-height: 55px;
  color: #1D1D1D;
}
.progress__cards {
  display: flex;
  column-gap: 20px;
  align-items: flex-start;
  justify-content: flex-start;
}
.progress__card {
  max-width: 280px;
}
.progress__text {
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #1D1D1D;

  padding-bottom: 15px;
}
.progress__desc {
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;

  color: rgba(29, 29, 29, 0.85);
}
.progress__blocks {
  margin-top: 39px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  column-gap: 82px;
}
.progress__block.one {
  max-width: 380px;
  padding-top: 21px;
}
@media (max-width: 768px) {
  .progress__card {
    max-width: 198px;
  }
  .progress__block.one {
    max-width: 354px;
  }
  .progress__blocks {
    column-gap: 20px;
  }
}
@media (max-width: 480px) {
  .progress__cards {
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 50px;
  }
  .progress__card {
    width: 47%;
    max-width: none;
  }
  .progress__blocks {
    column-gap: normal;
    margin-top: 50px;
  }
  .progress__block.one {
    width: 50%;
    max-width: none;
    padding: 0;
  }

  .progress__block.two {
    width: 50%;
  }
}
@media (max-width: 360px) {
  .progress__title {
    font-size: 30px;
    line-height: 55px;
  }
  .progress__cards {
    column-gap: 5px;
    row-gap: 41px;
  }
  .progress__text {
    font-size: 18px;
    line-height: 22px;
  }
  .progress__desc {
    font-size: 16px;
    line-height: 19px;
  }
  .progress__blocks {
    margin-top: 40px;
    flex-wrap: wrap;
    row-gap: 40px;
  }
  .progress__block.one,
  .progress__block.two {
    width: 100%;
  }
}
</style>
