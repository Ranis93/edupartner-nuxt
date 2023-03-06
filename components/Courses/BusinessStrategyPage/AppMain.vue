<template>
  <section class="BSMain">
    <div class="container">
      <div class="BSMain__inner">
        <div class="BSMain__content">
          <div class="BSMain__video">
            <div class="BSMain__title">
              Бизнес-стратегия
            </div>
            <div class="BSMain__play-circle" data-url="fYEwx4ovlHM">
              <img src="../../../assets/images/courses/business-strategy/play_video_btn.png" alt="play_video">
            </div>
          </div>
          <div class="BSMain__about">
            <div class="BSMain__hat">
              Двухдневный <strong>очный</strong> курс
            </div>
            <div class="BSMain__text">
              Для владельцев малого и среднего бизнеса
            </div>
          </div>
        </div>
        <div class="BSMain__desc">
          от <strong>EDUPARTNER</strong> и преподавателя с опытом работы на руководящей должности <strong>более 15 лет и с высшей степенью бизнеса - МВА</strong>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import VideoPlayer from '@/assets/js/playVideo'
export default {
  mounted () {
    try {
      new VideoPlayer('.BSMain__play-circle', '.overlay').init()
    } catch (error) {}
  }
}
</script>

<style scoped>
.BSMain {
  background-image: url('../../../assets/images/courses/business-strategy/bs_bg.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.BSMain__inner {
  padding: 230px 0 165px 0;
}
.BSMain__content{
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.BSMain__title{
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 70px;
  color: #FAFF00;
  padding-bottom: 50px;
}
.BSMain__video{
  width: 380px;
}
.BSMain__play-circle{
  width: 88px;
  height: 88px;
}
.BSMain__play-circle:hover{
  cursor: pointer;
}
.BSMain__about{
  width: fit-content;
}
.BSMain__hat{
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  text-align: right;

  color: #1D1D1D;
  background: #FAFF00;
  border-radius: 50px;
  padding: 20px 73px;
  width: fit-content;
  margin: 0 0 0 auto;
}
.BSMain__text{
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 125%;
  text-align: right;

  color: #FFFFFF;
  margin-top: 55px;
}
.BSMain__desc{
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;

  color: #C4C4C4;
  max-width: 678px;
}
@media (max-width: 1024px) {
}
@media (max-width: 768px) {
}

@media (max-width: 480px) {
}
@media (max-width: 360px) {

}
</style>
