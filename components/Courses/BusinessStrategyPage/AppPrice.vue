<template>
  <section class="BSPrice">
    <div class="container">
      <div class="BSPrice__inner">
        <div class="BSPrice__info">
          <div class="BSPrice__title">
            Стоимость курса
          </div>
          <ul class="BSPrice__about">
            <li>
              окупаемость 100%
            </li>
            <li>
              живое общение с преподавателем и быстрая обратная связь
            </li>
            <li>
              практические примеры из опыта работы компаний
            </li>
            <li>
              подарок в конце курса
            </li>
          </ul>
          <div class="BSPrice__prices">
            <div class="BSPrice__new-price">
              80 000 ₽
            </div>
            <div class="BSPrice__old-price">
              100 000 ₽
            </div>
          </div>
          <a href="#!">
            <div class="BSPrice__btn1">
              Записаться на курс
            </div>
          </a>
        </div>
        <div class="BSPrice__box">
          <div class="BSPrice__window">
            <div class="BSPrice__text first">
              Оплачивайте онлайн на платформе!
            </div>
            <div class="BSPrice__text second">
              Безопасный приём платежей на сайте с помощью карты, электронного кошелька или мобильного телефона
            </div>
            <div class="BSPrice__img">
              <img src="../../../assets/images/courses/business-strategy/payment.png" alt="payment">
            </div>
            <a href="https://eduexp.ru/search/biznes-strategiya/">
              <div class="BSPrice__btn2">
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
export default {
}
</script>

<style scoped>
.BSPrice{
  background-color: #181816;
}
.BSPrice__inner{
  padding: 100px 0;
}
.BSPrice__inner{
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.BSPrice__info, .BSPrice__box{
  width: 41%;
}
.BSPrice__title{
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 50px;

  color: #FAFF00;
  margin-bottom: 50px;
}
.BSPrice__about{
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 125%;

  color: #FFFFFF;
  margin-left: 30px;
  margin-bottom: 15px;
}
.BSPrice__about>li{
  padding-bottom: 10px;
}
.BSPrice__new-price{
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
.BSPrice__old-price{
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
.BSPrice__info>a{
  display: block;
  width: fit-content;
}
.BSPrice__btn1{
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;

  color: #1D1D1D;
  background: #FAFF00;
  border-radius: 50px;
  padding: 15px 50px;
  width: fit-content;
}
.BSPrice__window{
  background: #FFFFFF;
  border-radius: 50px;
  padding: 45px 25px 45px 40px;
}
.BSPrice__text.first{
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 35px;
  color: #1D1D1D;
  padding-bottom: 15px;
}
.BSPrice__text.second{
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  color: #1D1D1D;
  padding-bottom: 15px;
}
.BSPrice__img{
  max-width: 304px;
  height: auto;
  padding-bottom: 30px;
}
.BSPrice__window>a{
  display: block;
  width: fit-content;
}
.BSPrice__btn2{
  font-family: 'Verdana';
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
  .BSPrice__box{
    width: 49%;
  }
}
@media (max-width: 768px) {
}

@media (max-width: 480px) {
}
@media (max-width: 360px) {

}
</style>
