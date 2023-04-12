<template>
  <section class="Teacher">
    <div class="container">
      <div class="Teacher__inner">
        <div class="Teacher__title">
          Кто проводит бизнес-консультацию?
        </div>
        <div class="Teacher__cards">
          <div class="Teacher__card">
            <div class="Teacher__about">
              <div class="Teacher__text">
                Мещерякова Наталья Анатольевна
              </div>
              <div class="Teacher__desc">
                С 2008 года управление бизнесами и проектами:
                Собственник "Приуральский центр образования", Образовательной платформы EDUEXP, EDUPARTNER, бизнес проекта «Сертификация», Руководитель и создатель проекта "СТАЖИРОВКА для выпускников" Вузов в Республике Башкортостан, действует ежегодно с 2017года; Руководитель направления "БизнесДиагностика».
              </div>
            </div>
            <div class="Teacher__img">
              <img src="../../../assets/images/control/business-consult/teacher-cards/na.png" alt="teacher">
            </div>
          </div>
          <div class="Teacher__card">
            <div class="Teacher__img">
              <img src="../../../assets/images/control/business-consult/teacher-cards/ma.png" alt="teacher">
            </div>
            <div class="Teacher__about">
              <div class="Teacher__text">
                Игина Марина Аркадьевна
              </div>
              <div class="Teacher__desc">
                Опыт работы на руководящей должности более 15 лет: Генеральный директор предприятия по производству и оптово — розничной торговли продуктов питания; Директор учебного центра дополнительного и профессионального обучения. Исполнительный директор холдинга: сельское хозяйство, гостиничный бизнес, добыча нерудных материалов, производство Главный экономист холдинга по производству и реализации товаров
              </div>
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
.Teacher{
  background: {
    color: #1E1E1C;
  };
}
.Teacher__inner{
  padding: 150px 0;
  .Teacher__title{
    font-family: $ff1;
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 34px;
    color: #FAFF00;
  }
  .Teacher__cards{
    .Teacher__card{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .Teacher__about{
        max-width: 594px;
        .Teacher__text{
          font-family: $ff1;
          font-style: normal;
          font-weight: 600;
          font-size: 30px;
          line-height: 37px;
          color: #FFFFFF;
          margin-bottom: 20px;
        }
        .Teacher__desc{
          font-family: $ff1;
          font-style: normal;
          font-weight: 400;
          font-size: 20px;
          line-height: 24px;
          color: #FFFFFF;
        }
      }
      .Teacher__img{
        max-width: 500px;
      }
    }
  }
}
@media (max-width: 1024px) {
  .Teacher__inner{
    padding: 100px 0;
    .Teacher__title{
      margin-bottom: 20px;
    }
    .Teacher__cards{
      .Teacher__card{
        .Teacher__about{
          max-width: 327px;
        }
      }
    }
  }
}
@media (max-width: 768px) {
  .Teacher__inner{
    .Teacher__cards{
      .Teacher__card{
        margin-bottom: 20px;
        .Teacher__about{
          max-width: 293px;
        }
        .Teacher__img{
          max-width: 400px;
        }
      }
    }
  }
}
@media (max-width: 480px) {
  .Teacher__inner{
    padding: 70px 0;
    .Teacher__title{
      font-size: 24px;
      line-height: 29px;
      margin-bottom: 30px;
    }
    .Teacher__cards{
      .Teacher__card{
        flex-wrap: wrap;
        flex-direction: column;
        &:last-child{
          flex-direction: column-reverse;
        }
        .Teacher__about{
          max-width: 100%;
          margin-bottom: 20px;
          .Teacher__text{
            font-size: 24px;
            line-height: 29px;
          }
          .Teacher__desc{
            font-size: 16px;
            line-height: 19px;
          }
        }
        .Teacher__img{
          max-width: 300px;
        }
      }
    }
  }
}
@media (max-width: 360px) {
  .Teacher__inner{
    .Teacher__cards{
      .Teacher__card{
        .Teacher__img{
          max-width: 250px;
        }
      }
    }
  }
}
</style>
