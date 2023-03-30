<template>
  <section class="SAPrice">
    <div class="container">
      <div class="SAPrice__inner">
        <div class="SAPrice__info">
          <div class="SAPrice__title">
            Стоимость курса
          </div>
          <ul class="SAPrice__about">
            <li>
              окупаемость 100%
            </li>
            <li>
              вебинары с преподавателем
            </li>
            <li>
              лекции, тестирование, обратная связь
            </li>
          </ul>
          <div class="SAPrice__prices">
            <div class="SAPrice__new-price">
              30 000 ₽
            </div>
            <div class="SAPrice__old-price">
              35 000 ₽
            </div>
          </div>
          <div class="SAPrice__btn1">
            Записаться на курс
          </div>
        </div>
        <div class="SAPrice__box">
          <div class="SAPrice__window">
            <div class="SAPrice__text first">
              Оплачивайте онлайн на платформе!
            </div>
            <div class="SAPrice__text second">
              Безопасный приём платежей на сайте с помощью карты, электронного кошелька или мобильного телефона
            </div>
            <div class="SAPrice__img">
              <img src="../../../assets/images/courses/business-strategy/payment.png" alt="payment">
            </div>
            <a href="https://eduexp.ru/search/strategica/">
              <div class="SAPrice__btn2">
                Оплатить онлайн
              </div>
            </a>
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
      insertBitrix1('.SAPrice__info', '.SAPrice__btn1')
    } catch (error) {}
  }
}
</script>

<style scoped>
.SAPrice{
  background-color: #181816;
}
.SAPrice__inner{
  padding: 100px 0;
}
.SAPrice__inner{
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.SAPrice__info, .SAPrice__box{
  width: 41%;
}
.SAPrice__title{
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 50px;

  color: #FAFF00;
  margin-bottom: 50px;
}
.SAPrice__about{
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 125%;

  color: #FFFFFF;
  margin-left: 30px;
  margin-bottom: 15px;
}
.SAPrice__about>li{
  padding-bottom: 10px;
}
.SAPrice__new-price{
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 50px;

  color: #FAFF00;
  display: inline-block;
  padding-top: 25px;
  vertical-align: top;
}
.SAPrice__old-price{
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 50px;
  text-decoration: line-through;

  color: #C4C4C4;
  display: inline-block;
  vertical-align: top;
}
.SAPrice__info>a{
  display: block;
  width: fit-content;
}
.SAPrice__btn1{
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  cursor: pointer;
  color: #1D1D1D;
  background: #FAFF00;
  border-radius: 50px;
  padding: 15px 50px;
  width: fit-content;
}
.SAPrice__window{
  background: #FFFFFF;
  border-radius: 50px;
  padding: 45px 25px 45px 40px;
}
.SAPrice__text.first{
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 35px;
  color: #1D1D1D;
  padding-bottom: 15px;
}
.SAPrice__text.second{
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  color: #1D1D1D;
  padding-bottom: 15px;
}
.SAPrice__img{
  max-width: 304px;
  height: auto;
  padding-bottom: 30px;
}
.SAPrice__window>a{
  display: block;
  width: fit-content;
}
.SAPrice__btn2{
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  text-align: right;
  color: #1D1D1D;
  background: #FAFF00;
  border-radius: 50px;
  padding: 15px 50px;
}
@media (max-width: 1024px) {
  .SAPrice__box{
    width: 49%;
  }
}
@media (max-width: 768px) {
  .SAPrice__btn1, .SAPrice__btn2{
    font-size: 18px;
    line-height: 22px;
  }
  .SAPrice__inner{
    column-gap: 10px;
  }
  .SAPrice__info{
    width: 49%;
  }
  .SAPrice__window{
    padding-right: 10px;
  }
  .SAPrice__img{
    height: 90px;
    padding-bottom: 15px;
  }
}

@media (max-width: 480px) {
  .SAPrice__inner{
    padding: 100px 0 78px 0;
    flex-wrap: wrap;
    row-gap: 50px;
  }
  .SAPrice__info, .SAPrice__box{
    width: 100%;
  }
  .SAPrice__info>a{
    margin: 25px auto 0 auto;
  }
  .SAPrice__window{
    padding: 45px 34px 40px 48px;
  }
  .SAPrice__text.second{
    padding-bottom: 40px;
  }
  .SAPrice__img{
    height: auto;
  }
}
@media (max-width: 360px) {
  .SAPrice__about>li{
    font-size: 18px;
  }
  .SAPrice__info>a{
    width: 100%;
  }
  .SAPrice__btn1{
    padding: 15px 0;
    width: 100%;
    text-align: center;
  }
  .SAPrice__window{
    padding: 45px 20px 39px 20px;
  }
  .SAPrice__text.first{
    font-size: 20px;
    line-height: 30px;
    padding-bottom: 25px;
  }
  .SAPrice__text.second{
    font-size: 18px;
    padding-bottom: 30px;
  }
  .SAPrice__img{
    padding-bottom: 25px;
  }
}
</style>
