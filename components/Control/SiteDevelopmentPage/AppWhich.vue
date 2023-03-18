<template>
  <section class="ItWhich">
    <div class="container">
      <div class="ItWhich__inner">
        <div class="ItWhich__col">
          <div class="ItWhich__title">
            Какой сайт нужен Вашему бизнесу?
          </div>
          <div class="ItWhich__desc">
            Пройди тест и узнай, какой сайт подходит для вашего бизнеса
          </div>
          <a href="#!">
            <div class="ItWhich__btn">
              Пройти тест
            </div>
          </a>
        </div>
        <div class="ItWhich__col">
          <img src="../../../assets/images/control/site-development/pc.svg" alt="pc">
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
.ItWhich {
  background: #FFFFFF;
  padding: 141px 0 100px 0;
}
.ItWhich__inner{
  display: flex;
  justify-content: center;
  align-items: stretch;
  background: rgba(217, 217, 217, 0.5);
  border-radius: 50px;
}
.ItWhich__col {
  width: 50%;
  padding: 52px 0 48px 100px;
  position: relative;
  a{
    display: block;
    width: fit-content;
  }
  img{
    width: auto;
    height: 387px;
    position: absolute;
    bottom: 0;
    right: 77px;
  }
  &:last-child{
    padding: 0;
  }
}
.ItWhich__title{
  font-family: $ff1;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  max-width: 480px;
  padding-bottom: 30px;
  color: #1D1D1D;
}
.ItWhich__desc{
  font-family: $ff2;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #2C1909;
  padding-bottom: 35px;
  max-width: 407px;
}
.ItWhich__btn{
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
  .ItWhich__inner{
    align-items: flex-end;
    justify-content: space-between;
  }
  .ItWhich__col{
    padding-left: 20px;
  }
  .ItWhich__col {
    img{
      height: 372px;
    }
  }
}
@media (max-width: 768px) {
  .ItWhich__title{
    padding-bottom: 50px;
    font-size: 24px;
    line-height: 29px;
  }
  .ItWhich__col {
    img{
      height: 288px;
      position: static;
    }
    &:last-child{
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      padding-right: 23px;
    }
  }
}
@media (max-width: 600px) {
  .ItWhich__inner{
    flex-wrap: wrap;
  }
  .ItWhich__col{
    width: 100%;
  }
}
@media (max-width: 480px) {
  .ItWhich{
    padding: 100px 0;
  }
  .ItWhich__col{
    padding: 53px 56px 50px 30px;
    &:last-child{
      padding: 0;
      justify-content: center;
    }
  }
  .ItWhich__title, .ItWhich__desc{
    padding-bottom: 40px;
  }
}
@media (max-width: 360px) {
  .ItWhich__col{
    padding: 53px 15px 50px 15px;
    img{
      height: 243px;
    }
  }
  .ItWhich__title{
    font-size: 20px;
    line-height: 24px;
    padding-bottom: 15px;
  }
  .ItWhich__desc{
    font-size: 18px;
    line-height: 22px;
    padding-bottom: 25px;
  }
  .ItWhich__btn{
    font-size: 16px;
    padding: 10px 25px;
  }

}
</style>
