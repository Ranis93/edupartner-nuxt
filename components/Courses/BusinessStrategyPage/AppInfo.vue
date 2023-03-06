<template>
  <section class="BSInfo">
    <div class="container">
      <div class="BSInfo__inner">
        <ul class="BSInfo__content">
          <li>
            <span>
              <div class="BSInfo__title">
                Город
              </div>
              <div class="BSInfo__text">
                Уфа
              </div>
            </span>
          </li>
          <li>
            <span>
              <div class="BSInfo__title">
                Формат
              </div>
              <div class="BSInfo__text">
                Очно
              </div>
            </span>
          </li>
          <li>
            <span>
              <div class="BSInfo__title">
                Длительность
              </div>
              <div class="BSInfo__text">
                Суббота, воскресенье 10:00-19:00
              </div>
            </span>
          </li>
          <li>
            <span>
              <div class="BSInfo__title">
                Адрес
              </div>
              <div class="BSInfo__text">
                Бульвар Ибрагимова 37/1
              </div>
            </span>
          </li>
          <li>
            <span>
              <div class="BSInfo__title">
                Подарок
              </div>
              <div class="BSInfo__text">
                В конце <br> курса
              </div>
            </span>
          </li>
        </ul>
        <div class="BSInfo__link">
          <a href="#!">
            <div class="BSInfo__btn">
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
.BSInfo{
  background-color: #E5E5E5;
}
.BSInfo__inner{
  padding: 70px 0;
}
.BSInfo__content{
  display: flex;
  justify-content: space-around;
}
.BSInfo__content>li{
  color: #FAFF00;
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-size: 24px;
  line-height: 20px;
}
.BSInfo__content>li>span{
  color: #1D1D1D;
}
.BSInfo__title{
  font-weight: 700;
  color: #1D1D1D;
}
.BSInfo__text{
  padding-top: 20px;
  font-weight: 400;
  line-height: 30px;
  max-width: 250px;
}
.BSInfo__link{
  padding-top: 100px;
  width: fit-content;
  margin: 0 auto;
}
.BSInfo__btn{
  background: #FAFF00;
  border-radius: 50px;
  padding: 15px 50px;

  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;

  color: #1D1D1D;
}
@media (max-width: 1024px) {
}
@media (max-width: 768px) {
}

@media (max-width: 480px) {
}
@media (max-width: 360px) {

}
</style>
