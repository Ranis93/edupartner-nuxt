<template>
  <section class="ThisIs">
    <div class="container">
      <div class="ThisIs__inner">
        <div class="ThisIs__text">
          <span>БИЗНЕС-КОНСУЛЬТАЦИЯ</span> – это консультирование собственника или представителя компании по ведению бизнеса, анализ проблемы и помощь в эффективном решении. Это взгляд со стороны, оценка и рекомендации.
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
  };
}
.ThisIs__inner{
  padding: 150px 0 150px 0;
  .ThisIs__text{
    font-family: $ff1;
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 45px;
    color: #FFFFFF;
    span{
      font-weight: 700;
      font-size: 32px;
      line-height: 52px;
      color: #FAFF00;
    }
  }
}
@media (max-width: 1024px) {
  .ThisIs__inner{
    padding: 100px 0 100px 0;
    .ThisIs__text{
      font-size: 20px;
      line-height: 32px;
      span{
        line-height: 51px;
      }
    }
  }
}
@media (max-width: 768px) {
  .ThisIs__inner{
    .ThisIs__text{
      span{
        font-size: 28px;
        line-height: 43px;
      }
    }
  }
}
@media (max-width: 480px) {
  .ThisIs__inner{
    padding: 70px 0;
  }
}
@media (max-width: 360px) {
  .ThisIs__inner{
    .ThisIs__text{
      font-size: 18px;
      line-height: 29px;
      span{
        font-size: 20px;
        line-height: 32px;
      }
    }
  }
}
</style>
