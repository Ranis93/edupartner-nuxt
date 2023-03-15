<template>
  <section class="ItDevMain">
    <div class="container">
      <div class="ItDevMain__inner">
        <h1 class="ItDevMain__title">
          IT-разработки для развития бизнеса
        </h1>
        <div class="ItDevMain__desc">
          Разработка сайта, SEO-продвижение, графический дизайн от команды профессионалов
        </div>
        <a href="#!">
          <div class="ItDevMain__btn">
            Проконсультироваться
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style scoped>
.ItDevMain {
  background-image: url('../../../assets/images/control/it-development/bg.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.ItDevMain__inner {
  padding: 230px 0 333px 0;
}
.ItDevMain__title{
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 45px;
  line-height: 55px;
  color: #FFFFFF;
  padding-bottom: 25px;
  max-width: 678px;
}
.ItDevMain__desc{
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  padding-bottom: 50px;
  color: #D4D4D4;
  max-width: 480px;
}
.ItDevMain__inner>a{
  display: block;
  width: fit-content;
}
.ItDevMain__btn{
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 33px;
  color: rgba(29, 29, 29, 0.9);

  padding: 10px 40px;
  background: #F9FF05;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
  border-radius: 50px;
}

@media (max-width: 1024px) {
  .ItDevMain {
    background-position: 65% 100%;
  }
}
@media (max-width: 480px) {
  .ItDevMain__inner {
    padding: 235px 0 314px 0;
  }
  .ItDevMain__title{
    font-size: 35px;
    line-height: 45px;
    padding-bottom: 35px;
    max-width: 100%;
  }
}
@media (max-width: 360px) {
  .ItDevMain{
    background-position: 50% 100%;
  }
  .ItDevMain__inner {
    padding-bottom: 265px;
  }
  .ItDevMain__title{
    font-size: 32px;
    padding-bottom: 20px;
  }
  .ItDevMain__desc{
    font-size: 18px;
    line-height: 22px;
  }
  .ItDevMain__btn{
    font-size: 16px;
    padding: 5px 30px;
  }
}
</style>
