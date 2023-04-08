<template>
  <section class="ServiceLines">
    <div class="container">
      <div class="ServiceLines__inner">
        <div class="ServiceLines__title">
          Типы сайтов
        </div>
        <div class="ServiceLines__desc">
          Существуют разные типы сайтов и в зависимости от поставленных задач, выбирается определенный тип сайта, который будет работать и приносить прибыль.
        </div>
        <div class="ServiceLines__cards">
          <nuxt-link to="/site-development/landing-page">
            <div class="ServiceLines__card landing">
              <div class="ServiceLines__text">
                Landing page
              </div>
            </div>
          </nuxt-link>
          <a href="#!">
            <div class="ServiceLines__card coorp">
              <div class="ServiceLines__text">
                Корпоративный сайт
              </div>
            </div>
          </a>
          <a href="#!">
            <div class="ServiceLines__card internet">
              <div class="ServiceLines__text">
                Интернет-магазин
              </div>
            </div>
          </a>
          <a href="#!">
            <div class="ServiceLines__card graph">
              <div class="ServiceLines__text">
                Графический дизайн
              </div>
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
.ServiceLines{
  background-color: #181816;
}
.ServiceLines__inner{
  padding: 100px 0 200px 0;
}
.ServiceLines__title{
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 55px;
  padding-bottom: 50px;
  color: #FFFFFF;
}
.ServiceLines__desc{
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  max-width: 780px;
  padding-bottom: 30px;
  color: #F5F5F5;
}
.ServiceLines__cards{
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  row-gap: 30px;
  column-gap: 15px;
}
.ServiceLines__cards>a{
  display: block;
  width: 32%;
}
.ServiceLines__card{
  border-radius: 50px;
  position: relative;
  transition: all .2s;
  height: 300px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}
.ServiceLines__card.landing{
  background-image: url('../../../assets/images/control/site-development/cards/mac_laptop.png');
}

.ServiceLines__card.graph{
  background-image: url('../../../assets/images/control/site-development/cards/graphs.png');
}
.ServiceLines__card.coorp{
  background-image: url('../../../assets/images/control/site-development/cards/devices.png');
}
.ServiceLines__card.internet{
  background-image: url('../../../assets/images/control/site-development/cards/shoping.png');
}
.ServiceLines__card:hover{
  transform: scale(1.01);
}
.ServiceLines__text{
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #FFFFFF;
  position: absolute;
  z-index: 1;
  bottom: 35px;
  left: 45px;
}
.ServiceLines__card::after{
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(0deg, rgba(29, 29, 27, 0.73) 0%, rgba(44, 42, 33, 0) 80%);
  border-radius: 50px;
}
@media (max-width: 1024px) {
  .ServiceLines__card{
    height: 201px;
  }
  .ServiceLines__text{
    font-size: 20px;
    line-height: 20px;
    bottom: 31px;
    left: 30px;
  }
}

@media (max-width: 768px) {
  .ServiceLines__title{
    font-size: 28px;
  }
  .ServiceLines__cards>a{
    width: 31%;
  }
  .ServiceLines__card{
    height: 162px;
  }
  .ServiceLines__text{
    font-size: 18px;
    bottom: 20px;
  }
}
@media (max-width: 480px) {
  .ServiceLines__cards{
    flex-wrap: wrap;
    row-gap: 20px;
    column-gap: 10px;
  }
  .ServiceLines__cards>a{
    width: 47.5%;
  }
  .ServiceLines__text{
    font-size: 16px;
    left: 20px;
  }
}
@media (max-width: 360px) {
  .ServiceLines__title{
    font-size: 24px;
    padding-bottom: 35px;
  }
  .ServiceLines__desc{
    font-size: 18px;
    line-height: 125%;
  }
  .ServiceLines__cards{
    column-gap: normal;
  }
  .ServiceLines__cards>a{
    width: 100%;
  }
  .ServiceLines__text{
    left: 30px;
  }
}
</style>
