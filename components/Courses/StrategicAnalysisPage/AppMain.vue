<template>
  <section class="SAMain">
    <div class="container">
      <div class="SAMain__inner">
        <div class="SAMain__content">
          <div class="SAMain__about">
            <h1 class="SAMain__title">
              Стратегический анализ
            </h1>
            <div class="SAMain__hat">
              <strong>Дистанционно</strong> на платформе
            </div>
          </div>
          <div class="SAMain__video">
            <div class="SAMain__play-circle" data-url="fYEwx4ovlHM">
              <img src="../../../assets/images/courses/strategic-analysis/play_video_btn.png" alt="play_video">
            </div>
            <div class="SAMain__text">
              Для продуктивной работы компании
            </div>
          </div>
        </div>
        <div class="SAMain__desc">
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
      insertBitrix1('.SAMain__about', '.SAMain__hat')
    } catch (error) {}
  }
}
</script>

<style scoped>
.SAMain {
  background-image: url('../../../assets/images/courses/strategic-analysis/sa_bg.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.SAMain__inner {
  padding: 230px 0 206px 0;
}
.SAMain__video, .SAMain__about{
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.SAMain__about{
  margin-bottom: 16px;
}
.SAMain__video{
  margin-bottom: 50px;
}
.SAMain__title{
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 70px;
  color: #FAFF00;
  max-width: 580px;
}
.SAMain__hat{
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
  text-align: right;
  cursor: pointer;
  color: #1D1D1D;
  background: #FAFF00;
  border-radius: 50px;
  padding: 20px 47px;
  width: fit-content;
  flex-shrink: 0;
  margin-top: 3px;
}
.SAMain__play-circle{
  margin-top: 34px;
  width: 88px;
  height: 88px;
}
.SAMain__play-circle:hover{
  cursor: pointer;
}
.SAMain__text{
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 60px;
  line-height: 125%;
  text-align: right;
  max-width: 680px;
  color: #FFFFFF;
}
.SAMain__desc{
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;

  color: #C4C4C4;
  max-width: 678px;
}
@media (max-width: 1024px) {
  .SAMain__inner{
    padding-bottom: 208px;
  }
  .SAMain__hat{
    margin-top: 0;
    font-size: 20px;
    line-height: 125%;
  }
  .SAMain__title, .SAMain__text{
    font-size: 55px;
  }
  .SAMain__title{
    max-width: 520px;
  }
  .SAMain__play-circle{
    margin-top: 50px;
  }
  .SAMain__video{
    margin-bottom: 60px;
  }
}
@media (max-width: 768px) {
  .SAMain__inner{
    padding-bottom: 247px;
  }
  .SAMain__title{
    font-size: 40px;
    line-height: 50px;
    max-width: 360px;
  }
  .SAMain__text{
    font-size: 40px;
    line-height: 125%;
    max-width: 440px;
  }
  .SAMain__hat{
    font-size: 18px;
    line-height: 125%;
    padding: 20px 30px;
  }
  .SAMain__about{
    margin-bottom: 55px;
  }
  .SAMain__video{
    flex-shrink: 0;
  }
  .SAMain__play-circle{
    margin-top: 6px;
    flex-shrink: 0;
  }
}
@media (max-width: 700px) {
  .SAMain__about{
    flex-wrap: wrap;
  }
}
@media (max-width: 480px) {
  .SAMain__inner{
    padding-bottom: 91px;
  }
  .SAMain__about{
    flex-direction: column;
    margin-bottom: 50px;
  }
  .SAMain__title{
    font-size: 35px;
    line-height: 45px;
    max-width: 318px;
  }
  .SAMain__hat{
    margin-top: 20px;
    text-align: center;
    align-self: flex-end;
  }
  .SAMain__video{
    margin-bottom: 50px;
    flex-direction: column-reverse;
    row-gap: 20px;
  }
  .SAMain__play-circle{
    margin-top: 0;
  }
  .SAMain__text{
    font-size: 35px;
    line-height: 45px;
    align-self: flex-end;
  }
}
@media (max-width: 360px) {
 .SAMain__inner{
  padding: 230px 0 93px 0;
 }
 .SAMain__title{
  font-size: 30px;
  line-height: 40px;
 }
 .SAMain__hat{
  font-size: 14px;
  padding: 15px 30px;
 }
 .SAMain__text{
  font-size: 30px;
  line-height: 45px;
 }
 .SAMain__video{
  row-gap: 25px;
 }
 .SAMain__desc{
  font-size: 18px;
  line-height: 22px;
 }
}
</style>
