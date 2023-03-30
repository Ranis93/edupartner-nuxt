<template>
  <section class="BSMain">
    <div class="container">
      <div class="BSMain__inner">
        <div class="BSMain__date">
          Первый поток 8 и 9 апреля, второй 15 и 16 апреля
        </div>
        <div class="BSMain__content">
          <div class="BSMain__about">
            <h1 class="BSMain__title">
              Бизнес-стратегия
            </h1>
            <div class="BSMain__hat">
              Двухдневный <strong>очный</strong> курс
            </div>
          </div>
          <div class="BSMain__video">
            <div class="BSMain__play-circle" data-url="fYEwx4ovlHM">
              <img src="../../../assets/images/courses/business-strategy/play_video_btn.png" alt="play_video">
            </div>
            <div class="BSMain__text">
              Для владельцев малого и среднего бизнеса
            </div>
          </div>
        </div>
        <div class="BSMain__desc">
          от <strong>EDUPARTNER</strong> и Приуральского центра образования
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { insertBitrix1 } from '@/assets/js/bitrx-window.js'
export default {
  mounted () {
    // Вставка popup от Bitrix на кнопку
    try {
      insertBitrix1('.BSMain__about', '.BSMain__hat')
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
  position: relative;
}
.BSMain__date{
  position: absolute;
  top: 160px;
  left: 0;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 40px;
  text-decoration: underline;
  color: #FAFF00;
}
.BSMain__video, .BSMain__about{
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
  max-width: 350px;
}
.BSMain__hat{
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  text-align: right;
  cursor: pointer;

  color: #1D1D1D;
  background: #FAFF00;
  border-radius: 50px;
  padding: 20px 73px;
  width: fit-content;
  margin-top: 3px;
}
.BSMain__play-circle{
  width: 88px;
  height: 88px;
}
.BSMain__play-circle:hover{
  cursor: pointer;
}
.BSMain__text{
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 125%;
  text-align: right;
  max-width: 690px;
  color: #FFFFFF;
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
  .BSMain__inner{
    padding-bottom: 157px;
  }
  .BSMain__date{
    top: 169px;
  }
  .BSMain__hat{
    margin-top: 24px;
  }
  .BSMain__title, .BSMain__text{
    font-size: 55px;
  }
  .BSMain__play-circle{
    margin-top: 50px;
  }
  .BSMain__desc{
    margin-top: 20px;
  }
}
@media (max-width: 768px) {
  .BSMain__date{
    line-height: 40px;
    top: 172px;
  }
  .BSMain__title{
    font-size: 40px;
    line-height: 50px;
    max-width: 230px;
  }
  .BSMain__text{
    font-size: 40px;
    line-height: 125%;
    max-width: 440px;
  }
  .BSMain__hat{
    font-size: 20px;
    line-height: 24px;
    padding: 20px 50px;
    margin-top: 18px;
  }
  .BSMain__video{
    margin-top: 37px;
    flex-shrink: 0;
  }
  .BSMain__play-circle{
    margin-top: 13px;
    flex-shrink: 0;
  }
  .BSMain__desc{
    margin-top: 89px;
  }
}
@media (max-width: 480px) {
  .BSMain__inner{
    padding-top: 228px;
    padding-bottom: 146px;
  }
  .BSMain__date{
    font-size: 16px;
    line-height: 30px;
  }
  .BSMain__title{
    font-size: 35px;
    line-height: 45px;
  }
  .BSMain__hat{
    margin-top: 14px;
    padding: 15px 20px;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
  }
  .BSMain__video{
    margin-top: 60px;
  }
  .BSMain__play-circle{
    margin-top: 0;
    width: 85px;
    height: 85px;
  }
  .BSMain__text{
    font-size: 35px;
    line-height: 45px;
  }
  .BSMain__desc{
    margin-top: 75px;
  }
}
@media (max-width: 360px) {
 .BSMain__inner{
  padding: 222px 0 66px 0;
 }
  .BSMain__date{
    top: 171px;
    line-height: 20px;
  }
 .BSMain__about{
  flex-wrap: wrap;
  flex-direction: column;
 }
 .BSMain__hat{
  align-self: flex-end;
  margin-top: 20px;
 }
 .BSMain__title{
  font-size: 30px;
  line-height: 40px;
 }
 .BSMain__video{
  margin-top: 40px;
  flex-direction: column-reverse;
 }
 .BSMain__text{
  font-size: 30px;
  line-height: 45px;
 }
 .BSMain__desc{
  margin-top: 40px;
  font-size: 18px;
  line-height: 22px;
 }
}
</style>
