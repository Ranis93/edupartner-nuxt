<template>
  <section class="SATeacher">
    <div class="container">
      <div class="SATeacher__inner">
        <div class="SATeacher__title">
          Преподаватель курса «Стратегический анализ»
        </div>
        <div class="SATeacher__box">
          <div class="SATeacher__text">
            Игина Марина Аркадьевна
          </div>
          <ul class="SATeacher__desc first">
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
          <div class="SATeacher__text">
            Образование
          </div>
          <ul class="SATeacher__desc second">
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
          <div class="SATeacher__img">
            <img src="../../../assets/images/courses/business-strategy/igina_m_a.png" alt="igina_m_a">
          </div>
        </div>
        <div class="SATeacher__link">
          <div class="SATeacher__btn">
            Записаться на курс
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
      insertBitrix1('.SATeacher__link', '.SATeacher__btn')
    } catch (error) {}
  }
}
</script>

<style scoped>
.SATeacher{
  background-color: #181816;
}
.SATeacher__inner{
  padding: 100px 0;
}
.SATeacher__title{
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 50px;
  color: #FAFF00;
  margin-bottom: 53px;
}
.SATeacher__box{
  background: linear-gradient(122.93deg, rgba(100, 100, 100, 0.71) 1.7%, rgba(72, 71, 71, 0.12) 48.4%, rgba(115, 106, 106, 0.17) 94.76%);
  border-radius: 50px;
  padding: 15px 400px 50px 30px;
  position: relative;
}
.SATeacher__text{
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  padding-bottom: 20px;
  color: #FFF400;
  margin-top: 35px;
}
.SATeacher__desc{
  position: relative;
  z-index: 1;
}
.SATeacher__desc>li{
  margin-left: 35px;
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;

  color: #D4D4D4;
}
.SATeacher__desc>p{
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;

  color: #D4D4D4;
}
.SATeacher__desc.first>li{
  padding-bottom: 10px;
}
.SATeacher__img{
  width: 364px;
  height: 408px;
  position: absolute;
  bottom: 0;
  right: 36px;
}
.SATeacher__link{
  margin-top: 60px;
}
.SATeacher__link{
  width: fit-content;
}
.SATeacher__btn{
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
@media (max-width: 1024px) {
  .SATeacher__box{
    padding-right: 238px;
  }
  .SATeacher__desc.second{
    max-width: 603px;
  }
  .SATeacher__img{
    right: 39px;
  }
}
@media (max-width: 768px) {
  .SATeacher__box{
    padding: 10px 42px 366px 18px;
  }
  .SATeacher__desc.second{
    max-width: none;
  }
  .SATeacher__img{
    right: 43px;
    width: 311px;
    height: 349px;
  }
}

@media (max-width: 480px) {
  .SATeacher__inner{
    padding-bottom: 55px;
  }
  .SATeacher__title{
    margin-bottom: 55px;
  }
  .SATeacher__box{
    padding: 25px 30px 309px 30px;
  }
  .SATeacher__text{
    margin-top: 20px;
  }
  .SATeacher__img{
    width: 275px;
    height: 309px;
    right: 38px;
  }
  .SATeacher__link{
    margin: 45px auto 0 auto;
  }
}
@media (max-width: 360px) {
  .SATeacher__inner{
    padding-bottom: 100px;
  }
  .SATeacher__title{
    font-size: 24px;
    line-height: 50px;
  }
  .SATeacher__box{
    padding: 25px 20px 304px 20px;
  }
  .SATeacher__desc.second>li{
    font-size: 18px;
    line-height: 22px;
  }
  .SATeacher__img{
    width: 249px;
    height: 279px;
    right: 35px;
  }
  .SATeacher__btn{
    font-size: 18px;
    line-height: 22px;
  }
}
</style>
