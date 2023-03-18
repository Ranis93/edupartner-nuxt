<template>
  <section class="Main">
    <div class="container">
      <div class="Main__inner">
        <h1 class="Main__title">
          SEO-продвижение сайта
        </h1>
        <div class="Main__desc">
          Развитие и продвижение сайта с учетом требований поисковиков
        </div>
        <a href="#!">
          <div class="Main__btn">
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

<style lang="scss" scoped>
@import '~/assets/scss/variables.scss';
.Main {
  @include bgcenter('../../../assets/images/control/seo-promotion/bg.png');
}
.Main__inner {
  padding: 230px 0 322px 0;
  & > a{
    display: block;
    width: fit-content;
  }
}
.Main__title{
  font-family: $ff1;
  font-style: normal;
  font-weight: 700;
  font-size: 45px;
  line-height: 55px;
  color: #FFFFFF;
  padding-bottom: 37px;
  max-width: 480px;
}
.Main__desc{
  font-family: $ff2;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  padding-bottom: 50px;
  color: #D4D4D4;
  max-width: 480px;
}
.Main__btn{
  font-family: $ff1;
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
  .Main {
    background-position: 65% 100%;
  }
}
@media (max-width: 480px) {
  .Main__inner {
    padding: 235px 0 314px 0;
  }
  .Main__title{
    font-size: 35px;
    line-height: 45px;
    padding-bottom: 35px;
    max-width: 100%;
  }
}
@media (max-width: 360px) {
  .Main{
    background-position: 50% 100%;
  }
  .Main__inner {
    padding-bottom: 265px;
  }
  .Main__title{
    font-size: 32px;
    padding-bottom: 20px;
  }
  .Main__desc{
    font-size: 18px;
    line-height: 22px;
  }
  .Main__btn{
    font-size: 16px;
    padding: 5px 30px;
  }
}
</style>
