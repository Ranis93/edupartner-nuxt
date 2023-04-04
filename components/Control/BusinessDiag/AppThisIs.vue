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
    size: 80% 80%;
    position: 130% 110%;
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
}

@media (max-width: 768px) {
}
@media (max-width: 480px) {
}
@media (max-width: 360px) {
}
</style>
