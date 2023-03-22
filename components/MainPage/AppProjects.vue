<template>
  <section class="projects">
    <div id="root" class="root stars" />
    <div class="container">
      <div class="projects__inner">
        <div class="projects__left">
          <div class="projects__planet">
            <img src="../../assets/images/planet.png" alt="planet">
          </div>
        </div>
        <div class="projects__right">
          <div class="projects__title">
            Наши проекты
          </div>
          <carousel
            class="projects__slider"
            :loop="true"
            :autoplay="true"
            :autoplayTimeout="4500"
            :autoplaySpeed="1500"
            :autoplayHoverPause="true"
            :nav="false"
            :dots="false"
            :items="2"
            :center="false"
            :margin="20"
            :responsive="{769:{items:3}}"
          >
            <nuxt-link
              class="projects__slide"
              to="/platform"
            >
              <img src="../../assets/images/main-page/projects-slider/notebook_1.png" alt="card">
              <div class="slide__inner">
                <p class="slide__text">
                  Учись и преподавай
                </p>
                <p class="slide__text2">
                  Платформа EduExp
                </p>
              </div>
            </nuxt-link>
            <nuxt-link
              class="projects__slide"
              to="/license"
            >
              <img src="../../assets/images/main-page/projects-slider/book.png" alt="card">
              <div class="slide__inner">
                <p class="slide__text">
                  У нас есть лицензия
                </p>
                <p class="slide__text2">
                  Приуральский центр образования
                </p>
              </div>
            </nuxt-link>
            <nuxt-link
              class="projects__slide"
              to="/certification"
            >
              <img src="../../assets/images/main-page/projects-slider/sert_1.png" alt="card">
              <div class="slide__inner">
                <p class="slide__text">
                  Сертификат за 10 минут
                </p>
                <p class="slide__text2">
                  Сертификация экспертов
                </p>
              </div>
            </nuxt-link>
          </carousel>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { starsShining } from '../../assets/js/stars.js'
export default {
  mounted () {
    starsShining()
  }
}
</script>

<style scoped>
.projects {
  margin: 0;
  width: 100%;
  background: #1D1D1D;
  position: relative;
}
.projects__inner{
  padding: 260px 0 215px 0;
  display: flex;
  justify-content: flex-start;
  column-gap: 120px;
  align-items: stretch;
}
.projects__slider{
  width: 580px;
}
.projects__left{
  position: relative;
  padding-top: 95px;
}
.projects__planet{
  max-width: 380px;
  height: auto;
  margin: auto 0 auto auto;
}
.projects__title{
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 30px;
  text-transform: uppercase;
  margin-bottom: 65px;
  color: #FFFFFF;
}
.projects__slide{
  height: 280px;
  box-sizing: content-box;
  border-radius: 20px;
  position: relative;
  display: block;
  padding-top: 5px;
  padding-bottom: 5px;
  transition: all .25s;
}
.projects__slide:hover{
  transform: scale(1.01);
}
.projects__slide>img{
  border-radius: 20px;
  object-fit: cover;
}
.slide__inner{
  position: absolute;
  max-width: 160px;
  top: 166px;
  left: 10px;
}
.slide__text{
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #FFFFFF;
  padding-bottom: 10px;
}
.slide__text2{
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #FFFFFF;
}
@media (max-width: 1024px) {
  .projects__inner{
    padding: 160px 0 315px 0;
    justify-content: space-between;
    column-gap: normal;
  }
  .projects__left{
    padding-top: 130px;
  }
  .projects__planet{
    max-width: 322px;
  }
  .projects__slider{
    width: 568px;
  }
  .projects__slide{
    padding: 0;
  }
  .slide__inner{
    max-width: 155px;
  }
}
@media (max-width: 768px) {
  .projects__inner{
    padding: 165px 0 325px 0;
    column-gap: 20px;
  }
  .projects__left{
    padding-top: 114px;
  }
  .projects__title{
    margin-bottom: 50px;
  }
  .projects__slider{
    width: 354px;
  }
  .slide__inner{
    max-width: 150px;
  }
}
@media (max-width: 480px) {
  .projects__inner{
    flex-wrap: wrap;
    justify-content: center;
    padding: 130px 0 114px 0;
    row-gap: 80px;
  }
  .projects__left{
    padding: 0;
  }
  .projects__planet{
    max-width: 316px;
  }
  .projects__slider{
    width: 90vw;
  }
  .projects__slide{
    height: 238px;
  }
  .slide__inner{
    top: 141px;
    max-width: 145px;
  }
  .slide__text{
    padding-bottom: 5px;
    font-size: 10px;
    line-height: 12px;
  }
  .slide__text2{
    font-size: 16px;
    line-height: 20px;
  }
}
@media (max-width: 360px) {

}
</style>
