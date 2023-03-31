<template>
  <section class="Tariffs">
    <div class="container">
      <div class="Tariffs__inner">
        <div class="Tariffs__title">
          Тарифы
        </div>
        <div class="Tariffs__columns">
          <div class="Tariffs__types">
            <div
              class="Tariffs__type"
              :class="{active_type : activeType === 1}"
              @click="selectActiveType(1)"
            >
              Базовое SEO
            </div>
            <div
              class="Tariffs__type"
              :class="{active_type : activeType === 2}"
              @click="selectActiveType(2)"
            >
              Комплекс
            </div>
          </div>
          <div class="Tariffs__descriptions">
            <div
              v-if="activeType == 1"
              class="Tariffs__about"
            >
              <div class="Tariffs__text">
                Аудит сайта
              </div>
              <div class="Tariffs__text">
                <strong>Внутренняя поисковая оптимизация:</strong>
              </div>
              <ul class="Tariffs__ul">
                <li>
                  Добавление Webmaster и Google search console
                </li>
                <li>
                  Формирование sitemape и robot.txt
                </li>
                <li>
                  Формирование семантического ядра
                </li>
                <li>
                  Отбор актуальных страниц
                </li>
                <li>
                  Ликвидация дублей
                </li>
                <li>
                  Устранение технических ошибок
                </li>
                <li>
                  Настройка 404
                </li>
                <li>
                  Настройка и оптимизация мета-данных
                </li>
              </ul>
              <div class="Tariffs__prices">
                <div class="Tariffs__new-price">
                  от 30 000 ₽/мес
                </div>
                <div class="Tariffs__old-price">
                  от 40 000 ₽
                </div>
              </div>
              <div class="Tariffs__btn">
                Заказать
              </div>
            </div>
            <div
              v-if="activeType == 2"
              class="Tariffs__about"
            >
              <div class="Tariffs__text">
                Аудит сайта
              </div>
              <div class="Tariffs__text">
                <strong>Внутренняя поисковая оптимизация:</strong>
              </div>
              <ul class="Tariffs__ul">
                <li>
                  Добавление Webmaster и Google search console
                </li>
                <li>
                  Формирование sitemape и robot.txt
                </li>
                <li>
                  Формирование семантического ядра
                </li>
                <li>
                  Отбор актуальных страниц
                </li>
                <li>
                  Ликвидация дублей
                </li>
                <li>
                  Устранение технических ошибок
                </li>
                <li>
                  Настройка 404
                </li>
                <li>
                  Настройка и оптимизация мета-данных
                </li>
                <li>
                  Интеграция с битрикс 24
                </li>
                <li>
                  Еженедельный мониторинг источника трафика
                </li>
                <li>
                  Реализация микроразметки
                </li>
                <li>
                  Разработчик в команде
                </li>
                <li>
                  Оптимизация скорости загрузки сайта
                </li>
              </ul>
              <div class="Tariffs__text">
                <strong>Внешняя оптимизация</strong>
              </div>
              <ul class="Tariffs__ul">
                <li>
                  Покупка ссылок с ключевыми анкорами
                </li>
                <li>
                  Грамотная внутренняя перелинковка
                </li>
              </ul>
              <div class="Tariffs__prices">
                <div class="Tariffs__new-price">
                  от 50 000 ₽/мес
                </div>
                <div class="Tariffs__old-price">
                  от 70 000 ₽
                </div>
              </div>
              <div class="Tariffs__btn">
                Заказать
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
  data () {
    return {
      activeType: 1
    }
  },
  methods: {
    selectActiveType (num) {
      this.activeType = num
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables.scss';
@keyframes ani {
  0% {opacity: 0;}
  100% {opacity: 1;}
}
.Tariffs{
  background-color: #1D1C19;
}
.Tariffs__inner{
  padding: 100px 0 102px 0;
  .Tariffs__title{
    font-family: $ff1;
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 50px;
    color: #FFFFFF;
    padding-bottom: 36px;
  }
  .Tariffs__columns{
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    column-gap: 120px;
    .Tariffs__types{
      width: 280px;
      .Tariffs__type{
        font-family: $ff1;
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 50px;
        color: #FFFFFF;
        &:first-child::after{
          content: '';
          display: block;
          background-color: #C4C4C4;
          width: 100%;
          height: 1px;
        }
        &.active_type{
        color: #FAFF00;
        }
        &:hover{
          cursor: pointer;
        }
      }
    }
    .Tariffs__descriptions{
      .Tariffs__about{
        opacity: 0;
        animation: ani 2.5s forwards;
        .Tariffs__text{
          font-family: $ff1;
          font-style: normal;
          font-weight: 400;
          font-size: 20px;
          line-height: 32px;
          color: #FFFFFF;
        }
        .Tariffs__ul{
          @extend .Tariffs__text;
          li{
            margin-left: 25px;
          }
        }
        .Tariffs__prices{
          margin-top: 30px;
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          .Tariffs__new-price{
            margin-top: 30px;
            font-family: $ff2;
            font-style: normal;
            font-weight: 700;
            font-size: 36px;
            line-height: 30px;
            color: #FAFF00;
          }
          .Tariffs__old-price{
            font-family: $ff2;
            font-style: normal;
            font-weight: 500;
            font-size: 24px;
            line-height: 15px;
            text-decoration: line-through;
            color: #C4C4C4;
          }
        }
        .Tariffs__btn{
          margin-top: 35px;
          padding: 10px 40px;
          width: fit-content;
          background: #F9FF05;
          box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
          border-radius: 50px;
          font-family: $ff1;
          font-weight: 600;
          font-size: 18px;
          line-height: 33px;
          color: rgba(29, 29, 29, 0.9);
        }
      }
    }
  }
}

@media (max-width: 1024px) {
  .Tariffs__inner{
    padding: 100px 0;
    .Tariffs__columns{
      justify-content: space-between;
    }
  }
}

@media (max-width: 768px) {
  .Tariffs__inner{
    .Tariffs__columns{
      column-gap: 20px;
      .Tariffs__types{
        width: 229px;
      }
      .Tariffs__descriptions{
        max-width: 479px;
        .Tariffs__about{
          .Tariffs__btn{
            margin-top: 35px;
          }
        }
      }
    }
  }
}
@media (max-width: 480px) {
  .Tariffs__inner{
    .Tariffs__columns{
      flex-wrap: wrap;
      row-gap: 15px;
      .Tariffs__types{
        width: 210px;
      }
      .Tariffs__descriptions{
        .Tariffs__about{
          .Tariffs__prices{
            margin-top: 25px;
            position: relative;
            .Tariffs__old-price{
              position: absolute;
              top: 0;
              right: 0;
            }
          }
          .Tariffs__btn{
            margin-top: 50px;
          }
        }
      }
    }
  }
}
@media (max-width: 360px) {
  .Tariffs__inner{
    .Tariffs__columns{
      .Tariffs__descriptions{
        max-width: 479px;
        .Tariffs__about{
          .Tariffs__text{
            font-size: 18px;
          }
          .Tariffs__prices{
            margin-top: 30px;
            .Tariffs__new-price{
              font-size: 32px;
            }
            .Tariffs__old-price{
              font-size: 20px;
            }
          }
        }
      }
    }
  }
}
</style>
