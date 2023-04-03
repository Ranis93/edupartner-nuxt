<template>
  <section class="choose">
    <div class="container">
      <div class="choose__inner">
        <div class="choose__box">
          <div class="choose__left-side">
            <div class="choose__title">
              Не знаете что выбрать?
            </div>
            <div class="choose__text">
              Наш менеджер ответит на любые вопросы и поможет с выбором!
            </div>
            <button class="choose_btn">
              Проконсультироваться
            </button>
          </div>
          <div class="choose__right-side">
            <img src="../../assets/images/main-page/operator.png" alt="operator">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { insertBitrix4 } from '@/assets/js/bitrx-window.js'
export default {
  mounted () {
    // Вставка popup от Bitrix на кнопку
    try {
      insertBitrix4('.choose__left-side', '.choose_btn')
    } catch (error) {}
  }
}
</script>

<style>
.choose {
  background-color: #181816;
}
.choose__inner {
  padding: 100px 0;
}
.choose__box {
  background-color: #ffffff;
  border-radius: 50px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  max-width: 1180px;
  overflow: hidden;

  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
}
.choose__left-side {
  padding: 0 60px 0 100px;
  width: 50%;
  box-sizing: border-box;
  flex-shrink: 0;
}
.choose__right-side {
  width: 578px;
  height: 299px;
  box-sizing: border-box;
}
.choose__right-side>img {
  object-fit: cover;
}
.choose__title {
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  color: #1D1D1D;
  margin-bottom: 30px;
}
.choose__text {
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #2C1909;
  max-width: 410px;
  margin-bottom: 35px;
}
.choose_btn {
  border: 1px solid #F9FF05;
  box-shadow: 0px 4px 10px rgba(195, 218, 204, 0.39);
  border-radius: 50px;
  padding: 10px 40px;
  width: fit-content;
  background: #F9FF05;

  font-weight: 600;
  font-size: 18px;
  line-height: 33px;
  color: rgba(29, 29, 29, 0.9);
}
.choose_btn:hover {
  cursor: pointer;
  background: #ffffff;
}
@media (max-width: 1024px) {
  .choose__left-side {
    padding: 0 58px 0 25px;
    width: 52%;
  }
  .choose__right-side {
    width: 48%;
  }
}
@media (max-width: 768px) {
  .choose__box,
  .choose__right-side {
    height: 299px;
  }
  .choose__right-side>img {
    object-fit: cover;
  }
  .choose__left-side {
    padding: 0 22px 0 15px;
  }
  .choose__title {
    font-size: 24px;
    line-height: 29px;
  }
}
@media (max-width: 480px) {
  .choose {
    background-size: auto;
  }
  .choose__box {
    flex-wrap: wrap;
    height: auto;
  }
  .choose__left-side,
  .choose__right-side {
    width: 100%;
  }
  .choose__left-side {
    padding: 0 21px 0 20px;
  }
  .choose__right-side {
    height: 230px;
  }
  .choose__title {
    margin: 35px 0 20px 0;
    font-size: 24px;
    line-height: 29px;
  }
  .choose__text {
    margin-bottom: 40px;
    font-size: 20px;
    line-height: 24px;
  }
  .choose_btn {
    padding: 10px 40px;
    margin-bottom: 40px;
    font-size: 18px;
    line-height: 33px;
  }
  .choose__right-side>img {
    width: 100%;
  }
}
@media (max-width: 360px) {
  .choose__title {
    margin: 30px 0 15px 0;
  }
  .choose__text {
    font-size: 18px;
    line-height: 22px;
    margin-bottom: 15px;
  }
  .choose_btn {
    font-size: 14px;
    line-height: 33px;
    padding: 5px 30px;
    margin-bottom: 24px;
  }
  .choose__right-side {
    height: 167px;
  }
}
</style>
