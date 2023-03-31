<template>
  <section class="Main">
    <div class="container">
      <div class="Main__inner">
        <div class="Main__about">
          <h1 class="Main__title">
            SEO-продвижение сайта
          </h1>
          <div class="Main__desc">
            Развитие и продвижение сайта с учетом требований поисковиков
          </div>
          <div class="Main__btn">
            Проконсультироваться
          </div>
        </div>
        <div class="Main__img">
          <img src="../../../assets/images/control/seo-promotion/page.svg" alt="page">
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
.Main__inner {
  padding: 230px 0 249px 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  column-gap: 30px;
  .Main__about{
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
      width: fit-content;
      padding: 10px 40px;
      background: #F9FF05;
      box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
      border-radius: 50px;
    }
  }
  .Main__img{
    max-width: 490px;
    height: auto;
  }
}
@media (max-width: 1024px) {
  .Main__inner {
    padding: 229px 0 306px 0;
    .Main__about{
      .Main__desc{
        padding-bottom: 40px;
      }
    }
    .Main__img{
      max-width: 436px;
    }
  }
}
@media (max-width: 768px) {
  .Main__inner {
    padding: 229px 0 277px 0;
    column-gap: 20px;
    .Main__img{
      max-width: 354px;
    }
  }
}
@media (max-width: 480px) {
  .Main__inner {
    padding-bottom: 100px;
    flex-wrap: wrap;
    row-gap: 80px;
    .Main__about{
      .Main__title{
        font-size: 32px;
        line-height: 50px;
        padding-bottom: 20px;
        max-width: 100%;
      }
    }
    .Main__img{
      max-width: 392px;
    }
  }
}
@media (max-width: 360px) {
  .Main__inner {
    padding-bottom: 120px;
    .Main__about{
      .Main__title{
        font-size: 32px;
        line-height: 45px;
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
  }
}
</style>
