<template>
  <section class="BMCards">
    <div class="container">
      <div class="BMCards__inner">
        <div class="BMCards__cards">
          <div class="BMCards__card">
            <nuxt-link to="/courses/business-and-management/business-strategy">
              <div class="BMCards__img">
                <img
                  src="../../../assets/images/courses/business-and-management/course_b_strat.png"
                  alt="cards-img"
                >
                <span class="mask" />
              </div>
            </nuxt-link>
            <div class="BMCards__text">
              <div class="BMCards__type">
                Очно 2 дня
              </div>
              <div class="BMCards__desc">
                Бизнес-стратегия
              </div>
            </div>
          </div>
          <div class="BMCards__card">
            <nuxt-link to="/courses/business-and-management/strategic-analysis">
              <div class="BMCards__img">
                <img
                  src="../../../assets/images/courses/business-and-management/course_str_an.png"
                  alt="cards-img"
                >
                <span class="mask" />
              </div>
            </nuxt-link>
            <div class="BMCards__text">
              <div class="BMCards__type">
                Дистанционно на платформе
              </div>
              <div class="BMCards__desc">
                Стратегический анализ
              </div>
            </div>
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
.BMCards {
  background: #181816;
}
.BMCards__inner {
  padding: 100px 0 200px 0;
}
.BMCards__cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: flex-start;
  justify-content: flex-start;
}
.BMCards__card {
  width: 380px;
  height: 250px;
  position: relative;
  transition: all .2s;
}
.BMCards__card:hover {
  transform: scale(1.01);
}
.BMCards__img {
  width: 100%;
  height: 100%;
  border-radius: 50px;
  position: relative;
}
.BMCards__img>.mask {
  background: linear-gradient(122.93deg, rgba(89, 89, 89, 0.36) 1.7%, rgba(61, 61, 61, 0.17) 49.05%, rgba(72, 72, 72, 0.34) 97.44%);
  bottom: 0;
  left: 0;
  opacity: 1;
  position: absolute;
  right: 0;
  top: 0;
  border-radius: 50px;
}
.BMCards__img>img {
  object-fit: cover;
  border-radius: 50px;
}
.BMCards__text {
  position: absolute;
  bottom: 35px;
  left: 35px;
  font-family: 'Lato', sans-serif;
}
.BMCards__type{
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
  color: #FAFF00;
}
.BMCards__desc{
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #FFFFFF;
}
@media (max-width: 1024px) {
  .BMCards__card{
    width: 307px;
    height: 202px;
  }
  .BMCards__text{
    bottom: 30px;
    left: 30px;
  }
  .BMCards__type{
    line-height: 20px;
  }
  .BMCards__desc{
    line-height: 20px;
  }
}
@media (max-width: 768px) {
  .BMCards__cards{
    gap: 15px;
    justify-content: space-between;
  }
  .BMCards__card{
    width: 48%;
  }
}
@media (max-width: 480px) {
  .BMCards__cards{
    gap: 30px;
  }
  .BMCards__card{
    width: 100%;
  }
}
@media (max-width: 360px) {
  .BMCards__inner{
    padding-top: 80px;
  }
  .BMCards__cards{
    gap: 25px;
  }
  .BMCards__card{
    height: 161px;
  }
  .BMCards__text{
    bottom: 25px;
    left: 25px;
  }
  .BMCards__type{
    font-size: 16px;
  }
  .BMCards__desc{
    font-size: 18px;
  }
}
</style>
