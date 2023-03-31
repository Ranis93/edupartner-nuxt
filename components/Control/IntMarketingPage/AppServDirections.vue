<template>
  <section class="ServiceLines">
    <div class="container">
      <div class="ServiceLines__inner">
        <div class="ServiceLines__title">
          НАПРАВЛЕНИЯ УСЛУГ
        </div>
        <div class="ServiceLines__desc">
          Больше, чем специалисты. Мы проводим отбор, и к работе приступает тот, кто прошёл испытания. С нами работают лучшие из лучших.
        </div>
        <div class="ServiceLines__cards">
          <nuxt-link to="/internet-marketing/seo-promotion">
            <div class="ServiceLines__card seo">
              <div class="ServiceLines__text">
                SEO-продвижение
              </div>
            </div>
          </nuxt-link>
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
  padding-bottom: 50px;
  color: #F5F5F5;
}
.ServiceLines__cards{
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
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
.ServiceLines__card.seo{
  background-image: url('../../../assets/images/control/site-development/cards/settings.png');
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
