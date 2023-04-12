<template>
  <section class="directions">
    <div class="container">
      <div class="directions__inner">
        <div class="directions__title">
          ПРОЕКТЫ
        </div>
        <div class="directions__cards">
          <div class="directions__card">
            <nuxt-link to="/courses/business-and-management">
              <div class="directions__img">
                <img
                  src="../../assets/images/main-page/dir-cards/cards-img-02.png"
                  alt="cards-img-02"
                >
                <span class="mask" />
              </div>
              <div class="directions__text">
                Курсы по бизнесу и управлению
              </div>
            </nuxt-link>
          </div>
          <div class="directions__card">
            <nuxt-link to="/business-diagnostics">
              <div class="directions__img">
                <img
                  src="../../assets/images/main-page/dir-cards/cards-img-06.png"
                  alt="cards-img-06"
                >
                <span class="mask" />
              </div>
              <div class="directions__text">
                Бизнес-диагностика
              </div>
            </nuxt-link>
          </div>
          <div class="directions__card">
            <nuxt-link to="/business-consulting">
              <div class="directions__img">
                <img
                  src="../../assets/images/main-page/dir-cards/cards-img-03.png"
                  alt="cards-img-03"
                >
                <span class="mask" />
              </div>
              <div class="directions__text">
                Бизнес-консультации
              </div>
            </nuxt-link>
          </div>
          <div class="directions__card">
            <nuxt-link to="/site-development">
              <div class="directions__img">
                <img
                  src="../../assets/images/main-page/dir-cards/cards-img-04.png"
                  alt="cards-img-04"
                >
                <span class="mask" />
              </div>
              <div class="directions__text">
                Разработка сайта
              </div>
            </nuxt-link>
          </div>
          <div class="directions__card">
            <nuxt-link to="/internet-marketing">
              <div class="directions__img">
                <img
                  src="../../assets/images/main-page/dir-cards/cards-img-05.png"
                  alt="cards-img-05"
                >
                <span class="mask" />
              </div>
              <div class="directions__text">
                Интернет-маркетинг
              </div>
            </nuxt-link>
          </div>
          <div class="directions__card">
            <nuxt-link to="/">
              <div class="directions__img">
                <img
                  src="../../assets/images/main-page/dir-cards/cards-img-01.png"
                  alt="cards-img-01"
                >
                <span class="mask" />
              </div>
              <div class="directions__text">
                Управление Вашим бизнесом
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
.directions {
  background: #181816;
}
.directions__inner {
  padding: 100px 0;
}
.directions__title {
  padding-bottom: 50px;
  font-weight: 700;
  font-size: 32px;
  line-height: 55px;
  color: #FFFFFF;
}
.directions__cards {
  display: flex;
  flex-wrap: wrap;
  column-gap: 15px;
  row-gap: 30px;
  align-items: flex-start;
  justify-content: space-between;
}
.directions__card {
  height: 300px;
  position: relative;
  transition: all .2s;
  width: 32.2%;
}
.directions__card:hover {
  transform: scale(1.01);
}

.directions__img {
  width: 100%;
  height: 100%;
  border-radius: 50px;
  position: relative;
}
.directions__img>.mask {
  background: linear-gradient(0deg, rgba(29, 29, 27, 0.73) 0%, rgba(44, 42, 33, 0) 80%);
  bottom: 0;
  left: 0;
  opacity: 1;
  position: absolute;
  right: 0;
  top: 0;
  border-radius: 40px;
}
.directions__img>img {
  object-fit: cover;
  border-radius: 50px;
}
.directions__text {
  position: absolute;
  bottom: 35px;
  left: 25px;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #FFFFFF;
  max-width: 340px;
}
@media (max-width: 768px) {
  .directions__text {
    font-size: 20px;
    line-height: 24px;
  }
  .directions__card {
    height: 253px;
    width: 31%;
  }
  .directions__img,
  .directions__img>img,
  .directions__img>.mask {
    border-radius: 30px;
  }
}
@media (max-width: 480px) {
  .directions__title {
    font-size: 28px;
  }
  .directions__card {
    height: 232px;
    width: 47%;
  }
  .directions__text {
    font-size: 18px;
    line-height: 22px;
    left: 20px;
  }
}
@media (max-width: 360px) {
  .directions__card {
    height: 168px;
  }
  .directions__text {
    bottom: 15px;
    left: 10px;
  }
}
</style>
