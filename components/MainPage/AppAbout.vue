<template>
  <section class="about">
    <div id="root1" class="root stars" />
    <div class="container">
      <div class="about__inner">
        <div class="about__left-side">
          <div class="about__title">
            EDUPARTNER
          </div>
          <div class="about__text">
            EDUPARTNER начал существование в 2009 году, как Приуральский центр
            образования. На сегодняшний день EDUPARTNER не только даёт
            образование, но и берет компании под управление и проводит полный
            цикл работ для эффективной работы управляемого бизнеса.
          </div>
          <div class="about__btn">
            <a href="#!" class="about__link"> Подробнее </a>
          </div>
        </div>
        <div class="about__right-side">
          <div class="about__img">
            <img
              src="../../assets/images/main-page/ceo-na-img.png"
              alt="ceo-na-img"
            >
          </div>
          <div class="about__director">
            <div class="about__name">
              <strong>Мещерякова Наталья, </strong>
            </div>
            <div class="about__position">
              собственник EDUPARTNER и Приуральского центра
            </div>
          </div>
        </div>
      </div>
      <div class="about__title toggle" style="display: none">
        Цикл работы
      </div>
      <div class="about__cards" style="display: none">
        <div class="about__card">
          <div class="about__icon">
            <img
              src="../../assets/images/main-page/btn-yellow-search.svg"
              alt="btn-yellow-search"
            >
          </div>
          <div class="about__desc">
            Диагностика бизнеса, анализ текущих бизнес-процессов организации.
            Аудит финансовых показателей, управленческий и кадровый аудит.
          </div>
        </div>
        <div class="about__card">
          <div class="about__icon">
            <img
              src="../../assets/images/main-page/btn-yellow-messages.svg"
              alt="btn-yellow-messages"
            >
          </div>
          <div class="about__desc">
            Бизнес-консультация с собственником или руководителем. Обсуждение
            результатов исследования, разработка стратегии.
          </div>
        </div>
        <div class="about__card">
          <div class="about__icon">
            <img
              src="../../assets/images/main-page/btn-yellow-hands.svg"
              alt="btn-yellow-hands"
            >
          </div>
          <div class="about__desc">
            Кадровое управление. Анализ эффективности работы персонала.
            Планирование персонала, увольнение, проведение отбора, наем,
            адаптация.
          </div>
        </div>
        <div class="about__card">
          <div class="about__icon">
            <img
              src="../../assets/images/main-page/btn-yellow-pc.svg"
              alt="btn-yellow-pc"
            >
          </div>
          <div class="about__desc">
            IT-разработка. Разработка сайта, веб-приложения, логотипа,
            фирменного стиля. <br>
            Проведение анализа существующего сайта, аналитика показателей.
          </div>
        </div>
        <div class="about__card">
          <div class="about__icon">
            <img
              src="../../assets/images/main-page/btn-yellow-speaker.svg"
              alt="btn-yellow-speaker"
            >
          </div>
          <div class="about__desc">
            Внутренний , внешний интернет-маркетинг. Связка с продажами, работа
            с персоналом. Управление продажами.
          </div>
        </div>
        <div class="about__card">
          <div class="about__icon">
            <img
              src="../../assets/images/main-page/btn-yellow-document.svg"
              alt="btn-yellow-document"
            >
          </div>
          <div class="about__desc">
            Ведение отчетности, анализ до/после. Аналитика, описание результатов
            по всем изменениям, презентация, планирование.
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { insertBitrix1 } from '@/assets/js/bitrx-window.js'
export default {
  mounted () {
    // Вставка popup от Bitrix на кнопку
    try {
      insertBitrix1('.about__left-side', '.about__btn')
    } catch (error) {}
  }
}
</script>

<style scoped>
.about {
  position: relative;
  padding-bottom: 100px;
  background-color: #181816;
}

.about__inner {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
.about__left-side {
  width: 45%;
}
.about__right-side {
  width: 53%;
}
.about__left-side {
  padding-top: 100px;
}
.about__title {
  font-weight: 700;
  font-size: 32px;
  line-height: 55px;
  color: #FFFFFF;
  padding-bottom: 50px;
}

.about__text {
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #D5D5D5;
  max-width: 480px;
  margin-bottom: 50px;
}
.about__link {
  background: #F9FF05;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
  border-radius: 50px;
  padding: 10px 40px;

  font-weight: 600;
  font-size: 18px;
  line-height: 33px;
  color: rgba(29, 29, 29, 0.9);
}
.about__right-side {
  position: relative;
  min-height: 518px;
}
.about__img {
  max-width: 664px;
  max-height: 503px;
}
.about__director {
  position: absolute;
  bottom: 0;
  left: 0;
  max-width: 235px;
}
.about__name {
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #FAFF00;
}
.about__position {
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: rgba(196, 196, 196, 1)
}
.about__cards {
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  flex-wrap: wrap;
  column-gap: 18px;
  row-gap: 30px;
}
.about__card {
  width: 32%;
  padding: 30px 34px 23px 35px;
  background: linear-gradient(122.93deg, rgba(89, 89, 89, 0.36) 1.7%, rgba(61, 61, 61, 0.17) 49.05%, rgba(72, 72, 72, 0.34) 97.44%);
  border-radius: 50px;
  align-self: stretch;
  min-height: 280px;

  border-top: 1px solid rgba(251, 255, 0, 0.35);
  border-left: 1px solid rgba(250, 255, 0, 0.35);
}
.about__icon {
  width: 60px;
  height: 60px;
  margin-bottom: 30px;
}
.about__desc {
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #FFFFFF;
}
@media (max-width: 768px) {
  .about__img {
    padding-top: 145px;
  }
  .about__title.toggle {
    display: none;
  }
  .about__card {
    width: 48%;
  }
}
@media (max-width: 480px) {
  .about {
    padding-bottom: 100px;
  }
  .about__inner {
    flex-wrap: wrap;
  }
  .about__left-side,
  .about__right-side {
    width: 100%;
  }
  .about__img {
    padding: 0;
    max-width: none;
    max-height: none;
    padding-bottom: 98px;
  }
  .about__right-side {
    min-height: auto;
  }
  .about__cards {
    row-gap: 25px;
  }
  .about__card {
    width: 100%;
    min-height: auto;
  }
  .about__icon {
    width: 45px;
    height: 45px;
    margin-bottom: 20px;
  }
}
@media (max-width: 360px) {
  .about__title {
    font-size: 30px;
  }
  .about__inner {
    row-gap: 20px;
  }
  .about__cards {
    row-gap: 20px;
  }
  .about__card {
    padding: 30px 15px 25px 25px;
  }
  .about__icon {
    margin-bottom: 10px;
  }
}
</style>
