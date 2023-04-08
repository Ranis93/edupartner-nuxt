<template>
  <section class="ThisIs">
    <div class="container">
      <div class="ThisIs__inner">
        <div class="ThisIs__text">
          <span>Диагностика бизнеса</span> —  это анализ работы предприятия, выявление её слабых и сильных сторон. Диагностика помогает ответить на вопросы «Почему падает прибыль, о чем говорят цифры в отчётах?».
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
.ThisIs{
  background: {
    color: #181816;
    image: url('@/assets/images/control/business-diag/shedule-up.svg');
    repeat : no-repeat;
    position: bottom 0  right 0;
  };
}
.ThisIs__inner{
  padding: 100px 0 266px 0;
  .ThisIs__text{
    font-family: $ff1;
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 60px;
    color: #FFFFFF;
    span{
      font-weight: 700;
      font-size: 40px;
      line-height: 40px;
    }
  }
}
@media (max-width: 1024px) {
  .ThisIs{
    background-size: 80% 80%;
    background-position: 100% 180%;
  }
  .ThisIs__inner{
    padding: 182px 0 239px 0;
    .ThisIs__text{
      font-size: 28px;
      line-height: 47px;
      span{
        font-size: 34px;
        line-height: 24px;
      }
    }
  }
}
@media (max-width: 768px) {
  .ThisIs{
    background-size: 100% 85%;
    background-position: 130% 210%;
  }
  .ThisIs__inner{
    padding: 122px 0 232px 0;
    .ThisIs__text{
      font-size: 26px;
      line-height: 42px;
      span{
        font-size: 30px;
        line-height: 24px;
      }
    }
  }
}
@media (max-width: 480px) {
  .ThisIs{
    background-size: 100% 85%;
    background-position: 150% 330%;
  }
  .ThisIs__inner{
    padding-bottom: 108px;
    .ThisIs__text{
      font-size: 24px;
      line-height: 38px;
      span{
        font-size: 28px;
        line-height: 24px;
      }
    }
  }
}
@media (max-width: 360px) {
  .ThisIs{
    background-position: 150% 280%;
  }
  .ThisIs__inner{
    padding: 60px 0 120px 0;
    .ThisIs__text{
      font-size: 18px;
      line-height: 29px;
      span{
        font-size: 20px;
        line-height: 24px;
      }
    }
  }
}
</style>
