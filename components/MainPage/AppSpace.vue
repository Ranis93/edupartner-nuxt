<template>
  <section class="space">
    <div class="container">
      <div class="space__inner">
        <div class="space__text one">
          Берем ответственность за развитие бизнеса
        </div>
        <h1 class="space__title">
          EDUPARTNER — космический <span>запуск Вашего бизнеса</span>
        </h1>
        <div class="space__text">
          Полный цикл работы: диагностика, управление, кадровый и управленческий
          консалтинг
        </div>
        <div class="space__btn">
          <a href="#!" class="space__link"> Бесплатная консультация </a>
        </div>
        <div class="space__rocket">
          <img src="../../assets/images/main-page/rocket.png" alt="rocket">
        </div>
      </div>
      <div
        v-if="false"
        class="gift"
      >
        <div class="gift__tray">
          <div class="gift__timer">
            Подарок исчезнет через 0:59
          </div>
          <div class="gift__close">
            <img src="../../assets/images/gift/close-btn.svg" alt="close-btn">
          </div>
        </div>
        <div class="gift__window">
          <div class="gift__form">
            <div class="gift__title">
              Получите скидку 10% на любую услугу!
            </div>
            <input class="gift__email" type="email" placeholder="Введите e-mail">
            <input class="gift__tel" type="tel" placeholder="Введите номер">
            <button class="gift__submit">
              Получить подарок
            </button>
            <div class="gift__checkbox">
              <input id="agree" type="checkbox" name="source" value="agree">
              <label for="agree">Согласие на получение рекламно-информационных рассылок</label>
            </div>
          </div>
          <div class="gift__footer">
            <div class="gift__text">
              Поздравляем! Проверьте почту!
            </div>
            <div class="gift__img">
              <img src="../../assets/images/gift/gift.svg" alt="gift-img">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { insertBitrix4 } from '@/assets/js/bitrx-window.js'
export default {
  mounted () {
    // Вставка popup от Bitrix на кнопку
    try {
      insertBitrix4('.space__inner', '.space__btn')
    } catch (error) {}
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables.scss';
.space {
  @include bgcenter('../../assets/images/main-page/bg-rocket-earth.png');
}
.space__inner {
  padding: 196px 0 279px 0;
  position: relative;
}
.space__text {
  font-family: $ff2;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #B2B3B1;
  max-width: 540px;
}
.space__title {
  padding: 10px 0 25px 0;
  max-width: 678px;
  font-weight: 700;
  font-size: 45px;
  line-height: 55px;
  color: #FFFFFF;
  span {
    color: rgba(250, 255, 0, 1);
  }
}
.space__btn {
  margin-top: 50px;
}
.space__link {
  padding: 10px 40px;
  background: #F9FF05;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
  border-radius: 50px;

  font-weight: 600;
  font-size: 18px;
  line-height: 33px;
  color: rgba(29, 29, 29, 0.9);
}
.space__rocket {
  position: absolute;
  bottom: 0;
  right: 0;
  max-width: 861px;
  max-height: 558px;
}

.gift{
  position: fixed;
  top: 50vh;
  right: 10vw;
  z-index: 2;
  width: 280px;
  .gift__tray{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  .gift__timer{
    font-family: $ff1;
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    color: #FFFFFF;
  }
  .gift__close{
    width: 14px;
    height: 14px;
    box-sizing: content-box;
    padding: 7px;
  }
  .gift__window{
    background: #FFFFFF;
    border-radius: 55px;
  }
  .gift__form{
    padding: 10px 17px;
  }
  .gift__title{
    font-family: $ff1;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    padding-bottom: 17px;
    color: #1D1D1D;
    max-width: 170px;
    margin: auto;
  }
  .gift__email, .gift__tel{
    border: 1px solid #C4C4C4;
    font-family: $ff1;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #C4C4C4;
    width: 100%;
    border: none;
    border-bottom: 1px solid #C4C4C4;
    border-radius: 0;
    padding: 0 0 5px 0;
  }

  .gift__email{
    margin-bottom: 5px;
  }
  .gift__submit{
    font-family: $ff1;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 33px;
    color: rgba(29, 29, 29, 0.9);
    background: #F9FF05;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
    border: 0;
    border-radius: 50px;
    margin: 25px 0 10px 0;
    width: 100%;
  }
  .gift__checkbox{
    font-family: $ff1;
    font-style: normal;
    font-weight: 500;
    font-size: 9px;
    line-height: 10px;
    color: #C4C4C4;
    display: flex;
    justify-content: flex-end;
    &>input{
      margin-right: 10px;
    }
    &>label{
      max-width: 192px;
    }
  }
  .gift__footer{
    background: #323232;
    padding: 11px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0 0 53px 53px;
    box-shadow: 0px 0px 20px rgba(111, 110, 110, 0.25);
  }
  .gift__text{
    font-family: $ff1;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;
    max-width: 159px;
  }
  .gift__img{
    width: 41px;
    height: 45px;
  }
}

@media (max-width: 1024px) {
  .space__rocket {
    max-width: 790px;
    max-height: 512px;
  }
}
@media (max-width: 820px) {
  .space__rocket {
    max-width: 685px;
    max-height: 444px;
  }
}
@media (max-width: 768px) {
  .space {
    background-position: 40% 100%;
  }
}
@media (max-width: 480px) {
  .space {
    background-position: 30% 100%;
  }
  .space__inner {
    padding-bottom: 295px;
  }
  .space__text {
    font-size: 18px;
    line-height: 22px;
  }
  .space__title {
    font-size: 36px;
    line-height: 45px;
  }
  .space__btn {
    margin-top: 40px;
  }
  .space__rocket {
    max-width: 438px;
    max-height: 284px;
  }
}
@media (max-width: 360px) {
  .space__text.one {
    font-size: 14px;
    line-height: 17px;
  }
  .space__title {
    font-size: 32px;
    line-height: 40px;
  }
  .space__link {
    font-size: 16px;
    padding: 10px 30px;
  }
  .space__rocket {
    max-height: fit-content;
    width: 100%;
  }
}
</style>
