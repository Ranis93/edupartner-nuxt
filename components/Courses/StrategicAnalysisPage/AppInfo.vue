<template>
  <section class="SAInfo">
    <div class="container">
      <div class="SAInfo__inner">
        <ul class="SAInfo__content">
          <li>
            <span>
              <div class="SAInfo__title">
                Формат
              </div>
              <div class="SAInfo__text">
                Дистанционно
              </div>
            </span>
          </li>
          <li>
            <span>
              <div class="SAInfo__title">
                Материал
              </div>
              <div class="SAInfo__text">
                6 модулей <br> 22 лекции
              </div>
            </span>
          </li>
          <li>
            <span>
              <div class="SAInfo__title">
                Курс
              </div>
              <div class="SAInfo__text">
                Новый, <br> с актуальными знаниями
              </div>
            </span>
          </li>
          <li>
            <span>
              <div class="SAInfo__title">
                Автор курса
              </div>
              <div class="SAInfo__text">
                эксперт с опытом работы на руководящей должности 15 лет
              </div>
            </span>
          </li>
        </ul>
        <div class="SAInfo__link">
          <div class="SAInfo__btn">
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
      insertBitrix1('.SAInfo__link', '.SAInfo__btn')
    } catch (error) {}
  }
}
</script>

<style scoped>
.SAInfo{
  background-color: #FFFFFF;
}
.SAInfo__inner{
  padding: 70px 0;
}
.SAInfo__content{
  display: flex;
  justify-content: space-around;
}
.SAInfo__content>li{
  color: #FAFF00;
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-size: 24px;
  line-height: 20px;
  max-width: 230px;
}
.SAInfo__content>li:last-child{
  max-width: 345px;
}
.SAInfo__content>li>span{
  color: #1D1D1D;
}
.SAInfo__title{
  font-weight: 700;
  color: #1D1D1D;
}
.SAInfo__text{
  padding-top: 20px;
  font-weight: 400;
  line-height: 30px;
}
.SAInfo__link{
  padding-top: 100px;
  width: fit-content;
  margin: 0 auto;
}
.SAInfo__btn{
  background: #FAFF00;
  border-radius: 50px;
  padding: 15px 50px;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;

  color: #1D1D1D;
}
@media (max-width: 1024px) {
  .SAInfo__link{
    padding-top: 70px;
  }
  .SAInfo__content>li{
    max-width: 182px;
  }
  .SAInfo__content>li:last-child{
    max-width: 272px;
  }
}
@media (max-width: 768px) {
  .SAInfo__title{
    font-size: 22px;
  }
  .SAInfo__text{
    font-size: 22px;
  }
  .SAInfo__content{
    flex-wrap: wrap;
    justify-content: flex-start;
    column-gap: 100px;
    margin-left: 30px;
  }
  .SAInfo__content>li:last-child{
    max-width: 348px;
  }
}
@media (max-width: 480px) {
  .SAInfo__content{
    justify-content: space-between;
    row-gap: 42px;
    column-gap: 0;
    margin-left: 0;
  }
  .SAInfo__content>li{
    margin-left: 20px;
  }
  .SAInfo__content>li, .SAInfo__content>li:last-child{
    max-width: none;
    width: 43%;
  }
  .SAInfo__link{
    padding-top: 60px;
  }
}
@media (max-width: 360px) {
  .SAInfo__content{
    row-gap: 30px;
  }
  .SAInfo__title{
    font-size: 18px;
  }
  .SAInfo__text{
    padding-top: 10px;
    font-size: 18px;
    line-height: 25px;
  }
  .SAInfo__link{
    padding-top: 60px;
  }
  .SAInfo__btn{
    font-size: 18px;
    line-height: 22px;
  }
}
</style>
