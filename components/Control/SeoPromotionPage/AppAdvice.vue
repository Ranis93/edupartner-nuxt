<template>
  <section class="Advice">
    <div class="container">
      <div class="Advice__inner">
        <div class="Advice__title">
          Советуем прочитать:
        </div>
        <div class="Advice__cards">
          <div class="Advice__card">
            <div class="Advice__img">
              <img src="../../../assets/images/control/seo-promotion/advice-cards/advice-card-01.png" alt="advice-card">
            </div>
            <div class="Advice__text">
              Почему нет эффекта от SEO-продвижения? Разбираем причины
            </div>
          </div>
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
.Advice{
  background-color: #ffffff;
}
.Advice__inner{
  padding: 100px 0 100px 0;
  .Advice__title{
    font-family: $ff1;
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 50px;
    color: #1D1D1D;
    margin-bottom: 30px;
  }
  .Advice__cards{
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    column-gap: 20px;
    .Advice__card{
      max-width: 480px;
      .Advice__img{
        height: auto;
        border-radius: 50px;
        margin-bottom: 20px;
        img{
          border-radius: 50px;
        }
      }
      .Advice__text{
        font-family: $ff2;
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;
        color: #1D1D1D;
      }
    }
  }
}
@media (max-width: 1024px) {
  .Advice__inner{
    .Advice__cards{
      .Advice__card{
        max-width: 416px;
      }
    }
  }
}
@media (max-width: 480px) {
  .Advice__inner{
    .Advice__cards{
      .Advice__card{
        max-width: none;
        width: 100%;
      }
    }
  }
}
@media (max-width: 360px) {
  .Advice__inner{
    .Advice__title{
      font-size: 24px;
    }
    .Advice__cards{
      .Advice__card{
        max-width: none;
        width: 100%;
        .Advice__img{
          border-radius: 30px;
          img{
            border-radius: 30px;
          }
        }
        .Advice__text{
          font-size: 18px;
          line-height: 22px;
        }
      }
    }
  }
}
</style>
