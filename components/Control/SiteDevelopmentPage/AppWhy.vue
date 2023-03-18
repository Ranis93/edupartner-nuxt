<template>
  <section class="ItWhy">
    <div class="container">
      <div class="ItWhy__inner">
        <div class="ItWhy__title">
          Почему бизнесу необходим сайт?
        </div>
        <div class="ItWhy__cards">
          <div class="ItWhy__card">
            <div class="ItWhy__text">
              Увеличение прибыли. Здесь можно выделить несколько вариантов:
            </div>
            <ul class="ItWhy__list">
              <li>
                клиент, самостоятельно изучая информацию на сайте, облегчит работу менеджера; менеджер потратит меньше времени на обработку клиента и следовательно сможет проделать больше работы
              </li>
              <li>
                сайт, как дополнительная точка продаж; если у вас сейчас оффлайн-бизнес, можно перевести его в онлайн (например, разработать интернет-магазин) и осуществлять продажи с помощью сайта
              </li>
              <li>
                автопродажи; мечта каждого предпринимателя - покупка товара клиентом без консультации, что удобно и для покупателя, и для самого предпринимателя
              </li>
              <li>
                реклама, продвижение в Интернете - это привлечение новых целевых клиентов, которые с большей вероятностью приобретут Ваш товар или услугу
              </li>
            </ul>
          </div>
          <div class="ItWhy__card">
            <div class="ItWhy__text">
              Создание имиджа
            </div>
            <div class="ItWhy__desc">
              С помощью сайта можно сформировать образ, рассказать о ценностях, преимуществах перед конкурентами, укрепить позиционирование. Представить каталог товаров и услуг, лицензии и сертификаты, показать рабочий процесс и сотрудников компании
            </div>
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

<style lang="scss" scoped>
@import '~/assets/scss/variables.scss';
.ItWhy {
  background: #181816;
  padding: 100px 0;
}
.ItWhy__inner{
  background: #FAFF00;
  border-radius: 50px;
  padding: 35px 40px;
}
.ItWhy__title{
  font-family: $ff1;
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 50px;
  color: #1D1D1D;
  padding-bottom: 30px;
}
.ItWhy__cards{
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  row-gap: 30px;
}
.ItWhy__card{
  width: 100%;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50px;
  padding: 35px 40px;
}
.ItWhy__text{
  font-family: $ff2;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 140%;
  color: #1D1D1D;
  padding-bottom: 20px;
}
.ItWhy__desc {
  font-family: $ff2;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  color: #1D1D1D;
}
.ItWhy__list{
  @extend .ItWhy__desc;
  margin-left: 27px;
  li{
    padding-bottom: 10px;
  }
  li:last-child{
    padding-bottom: 0;
  }
}

@media (max-width: 1024px) {
  .ItWhy__inner {
    padding: 35px 33px;
  }
  .ItWhy__card{
    padding: 35px 32px;
  }
}
@media (max-width: 768px) {
  .ItWhy__inner, .ItWhy__card {
    padding: 35px 25px;
  }
}
@media (max-width: 480px) {
  .ItWhy__inner, .ItWhy__card {
    padding: 35px 20px;
  }
  .ItWhy__title{
    line-height: 45px;
    padding-left: 13px;
  }
  .ItWhy__text, .ItWhy__list, .ItWhy__desc{
    font-size: 19px;
  }
  .ItWhy__text{
    padding-bottom: 10px;
  }
  .ItWhy__list{
    margin-left: 20px;
  }
  .ItWhy__list>li {
    padding-bottom: 5px;
  }
}
@media (max-width: 360px) {
  .ItWhy__inner{
    padding: 35px 15px;
  }
  .ItWhy__title{
    font-size: 24px;
    line-height: 35px;
    padding-left: 18px;
  }
  .ItWhy__text, .ItWhy__list, .ItWhy__desc{
    font-size: 18px;
  }
}
</style>
