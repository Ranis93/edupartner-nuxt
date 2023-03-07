<template>
  <section class="BSTeacher">
    <div class="container">
      <div class="BSTeacher__inner">
        <div class="BSTeacher__title">
          Преподаватель курса
        </div>
        <div class="BSTeacher__box">
          <div class="BSTeacher__text">
            Игина Марина Аркадьевна
          </div>
          <ul class="BSTeacher__desc first">
            <li>
              Опыт работы генеральным директором по производству и оптово — розничной торговли продуктов питания
            </li>
            <li>
              Главный экономист холдинга по производству и реализации товаров
            </li>
            <li>
              Собственник бизнеса в фитнес-индустрии и консалтинговой компании «БИЗНЕС МЕТОDИКА»
            </li>
          </ul>
          <div class="BSTeacher__text">
            Образование
          </div>
          <ul class="BSTeacher__desc second">
            <p>
              2022
            </p>
            <li>
              Казанский инновационный университет. Высшая степень бизнеса - МВА . Стратегический менеджмент
            </li>
            <p>
              2016
            </p>
            <li>
              Академия новой экономики Регион. Контрактная система, Контрактная система. Электронные аукционы на электронной торговой площадке
            </li>
            <p>
              2012
            </p>
            <li>
              Башкирская академия государственной службы и управления при Президенте Республики Башкортостан, Уфа. Управление. Стратегический менеджер
            </li>
            <p>
              2003
            </p>
            <li>
              Московский университет потребительской кооперации, Москва. Коммерческая деятельность. Коммерческий директор.
            </li>
          </ul>
          <div class="BSTeacher__img">
            <img src="../../../assets/images/courses/business-strategy/igina_m_a.png" alt="igina_m_a">
          </div>
        </div>
        <div class="BSTeacher__link">
          <a href="#!">
            <div class="BSTeacher__btn">
              Записаться на курс
            </div>
          </a>
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
.BSTeacher{
  background-color: #181816;
}
.BSTeacher__inner{
  padding: 100px 0;
}
.BSTeacher__title{
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 50px;
  color: #FAFF00;
  margin-bottom: 53px;
}
.BSTeacher__box{
  background: linear-gradient(122.93deg, rgba(100, 100, 100, 0.71) 1.7%, rgba(72, 71, 71, 0.12) 48.4%, rgba(115, 106, 106, 0.17) 94.76%);
  border-radius: 50px;
  padding: 15px 400px 50px 30px;
  position: relative;
}
.BSTeacher__text{
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  padding-bottom: 20px;
  color: #FFF400;
  margin-top: 35px;
}
.BSTeacher__desc{
  position: relative;
  z-index: 1;
}
.BSTeacher__desc>li{
  margin-left: 35px;
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;

  color: #D4D4D4;
}
.BSTeacher__desc>p{
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;

  color: #D4D4D4;
}
.BSTeacher__desc.first>li{
  padding-bottom: 10px;
}
.BSTeacher__img{
  width: 364px;
  height: 408px;
  position: absolute;
  bottom: 0;
  right: 36px;
}
.BSTeacher__link{
  margin-top: 60px;
}
.BSTeacher__link{
  width: fit-content;
}
.BSTeacher__btn{
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
@media (max-width: 1024px) {
  .BSTeacher__box{
    padding-right: 238px;
  }
  .BSTeacher__desc.second{
    max-width: 603px;
  }
  .BSTeacher__img{
    right: 39px;
  }
}
@media (max-width: 768px) {
}

@media (max-width: 480px) {
}
@media (max-width: 360px) {

}
</style>
