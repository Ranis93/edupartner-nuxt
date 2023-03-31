<template>
  <section class="WhatIs">
    <div class="container">
      <div class="WhatIs__columns">
        <div class="WhatIs__about">
          <div class="WhatIs__title">
            Что такое SEO-продвижение
          </div>
          <div class="WhatIs__text WhatIs__text_yellow">
            Search engine optimization — поисковая оптимизация — это доработка, развитие и продвижение сайта с учетом требований поисковиков.
          </div>
          <div class="WhatIs__text">
            К сожалению, многие предприниматели недооценивают возможности SEO-продвижения или нанимают специалиста, который выполняет свою работу некачественно, и предприниматель из-за отстутствия знаний тратит деньги впустую. Без качественного SEO-продвижения нет смысла в существовании сайта.
          </div>
        </div>
        <div class="WhatIs__img">
          <img src="../../../assets/images/control/seo-promotion/prices.png" alt="prices">
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
.WhatIs{
  background-color: #1D1C19;
}
.WhatIs__columns{
  padding: 100px 0 100px 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  .WhatIs__about{
    max-width: 680px;
  }
  .WhatIs__title{
    font-family: $ff1;
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 50px;
    color: #FFFFFF;
    padding-bottom: 50px;
  }
  .WhatIs__text{
    font-family: $ff2;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #FFFFFF;
    &.WhatIs__text_yellow{
      color: #FAFF00;
      padding-bottom: 20px;
    }
  }
  .WhatIs__img{
    height: 287px;
    width: auto;
  }
}

@media (max-width: 1024px) {
  .WhatIs__columns{
    .WhatIs__about{
      max-width: 529px;
    }
    .WhatIs__img{
      margin-top: 50px;
      height: auto;
      width: 307px;
    }
  }
}
@media (max-width: 768px) {
  .WhatIs__columns{
    padding-bottom: 76px;
    .WhatIs__about{
      max-width: 479px;
    }
    .WhatIs__img{
      width: 229px;
    }
  }
}
@media (max-width: 480px) {
  .WhatIs__columns{
    padding-bottom: 100px;
    flex-wrap: wrap;
    .WhatIs__about{
      max-width: none;
      .WhatIs__title{
        line-height: 40px;
        padding-bottom: 20px;
      }
    }
    .WhatIs__img{
      margin-top: 40px;
      width: 319px;
    }
  }
}
@media (max-width: 360px) {
  .WhatIs__columns{
    .WhatIs__about{
      .WhatIs__title{
        font-size: 24px;
        line-height: 35px;
        padding-bottom: 30px;
      }
      .WhatIs__text{
        font-size: 18px;
        line-height: 22px;
      }
    }
    .WhatIs__img{
      margin-top: 94px;
      width: 100%;
    }
  }
}
</style>
