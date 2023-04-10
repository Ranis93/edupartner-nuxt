<template>
  <section class="Reccomend">
    <div class="container">
      <div class="Reccomend__inner">
        <div class="Reccomend__title">
          Если нет сайта, рекомендуем:
        </div>
        <div class="Reccomend__cards">
          <nuxt-link to="/site-development">
            <div class="Reccomend__card dev">
              <div class="Reccomend__text">
                Разработка сайтов
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

<style lang="scss" scoped>
.Reccomend {
  background-color: #1D1C19;
}
.Reccomend__inner {
  padding: 100px 0 100px 0;
  .Reccomend__title {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 50px;
    padding-bottom: 50px;
    color: #FFFFFF;
  }
  .Reccomend__cards {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    column-gap: 15px;
    &>a {
      display: block;
      width: 32%;
    }
    .Reccomend__card {
      border-radius: 50px;
      position: relative;
      transition: all .2s;
      height: 300px;
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      &.dev {
        background-image: url('../../../assets/images/control/seo-promotion/reccomend-cards/it-dev.png');
        background-position: center;
        background-size: cover;
        border-radius: 50px;
      }
      &:hover {
        transform: scale(1.01);
      }
      .Reccomend__text {
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
      &::after {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(0deg, rgba(29, 29, 27, 0.73) 0%, rgba(44, 42, 33, 0) 80%);
        border-radius: 50px;
      }
    }
  }
}
@media (max-width: 1024px) {
  .Reccomend__inner{
    .Reccomend__cards{
      .Reccomend__card{
        width: 307px;
        height: 180px;
        & > a{
          width: auto;
        }
      }
    }
  }
}
@media (max-width: 480px) {
  .Reccomend__inner{
    .Reccomend__cards{

      & > a{
        width: 100%;
      }
      .Reccomend__card{
        width: 100%;
        height: 180px;
        background-size: cover;
      }
    }
  }
}
</style>
