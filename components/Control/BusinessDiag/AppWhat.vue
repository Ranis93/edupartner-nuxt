<template>
  <section class="WhatIn">
    <div class="container">
      <div class="WhatIn__inner">
        <div class="WhatIn__title">
          ЧТО ВХОДИТ:
        </div>
        <div class="WhatIn__cards">
          <div class="WhatIn__card">
            <div class="WhatIn__img">
              <img src="../../../assets/images/control/business-diag/what-cards/card-01.png" alt="cards-img">
            </div>
            <div class="WhatIn__about">
              <div class="WhatIn__text">
                1. Кадровый аудит
              </div>
              <div class="WhatIn__desc">
                Индивидуальное собеседование каждого сотрудника (от уборщицы до директора) диагностика, выявление потенциала, лояльности, точки развития, склонность к конфликтам, рекомендации по управлению кадрами.
              </div>
              <div class="WhatIn__text">
                2. Финансовая диагностика (без инвентаризации товаров)
              </div>
            </div>
          </div>
          <div class="WhatIn__card">
            <div class="WhatIn__about">
              <div class="WhatIn__text">
                3. IT-диагностика
              </div>
              <div class="WhatIn__desc">
                It-ресурсы компании, диагностика качества настройки/связки ит-ресурсов компании (сайт, @, соц.сети, рекламные компании, crm система), выявление наличия/отсутствия необходимых шагов для качественного привлечения клиентов в интернете, управляемость.
              </div>
              <div class="WhatIn__text">
                4. Диагностика управленческого учета, включая продажи.
              </div>
            </div>
            <div class="WhatIn__img">
              <img src="../../../assets/images/control/business-diag/what-cards/card-02.png" alt="cards-img">
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
.WhatIn{
  background-color: #FFFFFF;
}
.WhatIn__inner{
  padding: 100px 0;
  .WhatIn__title{
    font-family: $ff1;
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 34px;
    color: #000000;
    padding-bottom: 91px;
  }
  .WhatIn__cards{
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    row-gap: 50px;
    .WhatIn__card{
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      justify-content: space-between;
      column-gap: 20px;
      width: 100%;
      .WhatIn__img{
        width: 479px;
        height: auto;
        border-radius: 50px;
        img{
          border-radius: 50px;
        }
      }
      .WhatIn__about{
        max-width: 580px;
        .WhatIn__text{
          font-family: $ff1;
          font-style: normal;
          font-weight: 700;
          font-size: 24px;
          line-height: 36px;
          color: #000000;
        }
        .WhatIn__desc{
          font-family: $ff2;
          font-style: normal;
          font-weight: 400;
          font-size: 20px;
          line-height: 30px;
          color: #000000;
          padding: 24px 0;
        }
      }
    }
  }
}
@media (max-width: 1024px) {
  .WhatIn__inner{
    padding: 51px 0 53px 0;
    .WhatIn__title{
      padding-bottom: 38px;
    }
    .WhatIn__cards{
      row-gap: 24px;
      .WhatIn__card{
        .WhatIn__img{
          width: 436px;
          height: 320px;
        }
        .WhatIn__about{
          max-width: 435px;
          .WhatIn__desc{
            padding: 10px 0;
          }
        }
      }
    }
  }
}
@media (max-width: 768px) {
  .WhatIn__inner{
    padding: 42px 0 52px 0;
    .WhatIn__cards{
      row-gap: 35px;
      .WhatIn__card{
        column-gap: 10px;
        .WhatIn__img{
          width: 48%;
        }
        .WhatIn__about{
          width: 48%;
          .WhatIn__text{
            font-size: 22px;
            line-height: 33px;
          }
          .WhatIn__desc{
            font-size: 18px;
            line-height: 27px;
          }
        }
      }
    }
  }
}
@media (max-width: 480px) {
  .WhatIn__inner{
    padding: 69px 0 57px 0;
    .WhatIn__title{
      padding-bottom: 31px;
    }
    .WhatIn__cards{
      row-gap: 20px;
      .WhatIn__card{
        flex-wrap: wrap;
        row-gap: 20px;
        &:first-child{
          flex-direction: column-reverse;
        }
        .WhatIn__img{
          width: 100%;
        }
        .WhatIn__about{
          width: 100%;
        }
      }
    }
  }
}
@media (max-width: 360px) {
  .WhatIn__inner{
    padding: 51px 0 48px 0;
    .WhatIn__title{
      font-size: 24px;
      line-height: 29px;
      padding-bottom: 36px;
    }
    .WhatIn__cards{
      .WhatIn__card{
        .WhatIn__img{
          height: 220px;
        }
      }
    }
  }
}
</style>
