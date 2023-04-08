<template>
  <section class="Prices">
    <div class="container">
      <div class="Prices__inner">
        <div class="Prices__title">
          Стоимость диагностики бизнеса
        </div>
        <div class="Prices__subtitle">
          Сколько человек в компании?
        </div>
        <div class="Prices__btngroup">
          <button
            class="Prices__btn"
            :class="{'active-btn': numberOfPeople === 5}"
            @click="selectPeople(5)"
          >
            От 1 до 5
          </button>
          <button
            class="Prices__btn"
            :class="{'active-btn': numberOfPeople === 8}"
            @click="selectPeople(8)"
          >
            От 6 до 8
          </button>
          <button
            class="Prices__btn"
            :class="{'active-btn': numberOfPeople === 11}"
            @click="selectPeople(11)"
          >
            От 9 до 11
          </button>
          <button
            class="Prices__btn"
            :class="{'active-btn': numberOfPeople === 20}"
            @click="selectPeople(20)"
          >
            От 12 до 20
          </button>
          <button
            class="Prices__btn"
            :class="{'active-btn': numberOfPeople === 30}"
            @click="selectPeople(30)"
          >
            От 21 до 30
          </button>
        </div>
        <div class="Scoreboard Scoreboard_one">
          <div class="Scoreboard__cards">
            <div class="Scoreboard__card">
              <div class="Scoreboard__hat Scoreboard__hat_full">
                <div class="Scoreboard__img">
                  <img src="../../../assets/images/control/business-diag/prices-cards/fire.svg" alt="card-img">
                </div>
                <div class="Scoreboard__title">
                  Полная диагностика
                </div>
                <div class="Scoreboard__text">
                  — большая выгода!
                </div>
              </div>
              <div class="Scoreboard__desc">
                <span>Все включено:</span> управленческий учёт+кадровая диагностика+финансовая диагностика+ИТ диагностика!
              </div>
              <div class="Scoreboard__prices">
                <div class="Scoreboard__new-price">
                  {{ parseInt(filteredPricesByNumber.full.newPrice).toLocaleString("ru-RU") }} ₽
                </div>
                <div class="Scoreboard__old-price">
                  {{ parseInt(filteredPricesByNumber.full.oldPrice).toLocaleString("ru-RU") }} ₽
                </div>
              </div>
            </div>
            <div class="Scoreboard__card">
              <div class="Scoreboard__hat">
                <div class="Scoreboard__img">
                  <img src="../../../assets/images/control/business-diag/prices-cards/society.svg" alt="card-img">
                </div>
                <div class="Scoreboard__title">
                  Кадровая диагностика
                </div>
              </div>
              <div class="Scoreboard__desc">
                Оценка соответствия кадрового потенциала целям и стратегиям организации. Анализ резюме, собеседование каждого сотрудника, рекомендации по результатам проведения диагностики
              </div>
              <div class="Scoreboard__prices">
                <div class="Scoreboard__new-price">
                  {{ parseInt(filteredPricesByNumber.personnel.newPrice).toLocaleString("ru-RU") }} ₽
                </div>
                <div class="Scoreboard__old-price">
                  {{ parseInt(filteredPricesByNumber.personnel.oldPrice).toLocaleString("ru-RU") }} ₽
                </div>
              </div>
            </div>
            <div
              v-if="filteredPricesByNumber.it.newPrice"
              class="Scoreboard__card"
            >
              <div class="Scoreboard__hat">
                <div class="Scoreboard__img">
                  <img src="../../../assets/images/control/business-diag/prices-cards/mac.svg" alt="card-img">
                </div>
                <div class="Scoreboard__title">
                  IT-диагностика
                </div>
              </div>
              <div class="Scoreboard__desc">
                Определение скорости работы, индексируемости, совместимости с различными браузерами и платформами. Оценка адаптивности сайта
              </div>
              <div class="Scoreboard__prices">
                <div class="Scoreboard__new-price">
                  {{ parseInt(filteredPricesByNumber.it.newPrice).toLocaleString("ru-RU") }} ₽
                </div>
                <div class="Scoreboard__old-price">
                  {{ parseInt(filteredPricesByNumber.it.oldPrice).toLocaleString("ru-RU") }} ₽
                </div>
              </div>
            </div>
          </div>
          <div class="Scoreboard__order-btn">
            Заказать диагностику
          </div>
        </div>
        <div class="Prices__subtitle">
          Какой доход компании?
        </div>
        <div class="Prices__btngroup">
          <button
            class="Prices__btn"
            :class="{'active-btn': incomeOfCompany === 1}"
            @click="selectIncome(1)"
          >
            до 1 млн
          </button>
          <button
            class="Prices__btn"
            :class="{'active-btn': incomeOfCompany === 5}"
            @click="selectIncome(5)"
          >
            От 1 до 5 млн
          </button>
          <button
            class="Prices__btn"
            :class="{'active-btn': incomeOfCompany === 10}"
            @click="selectIncome(10)"
          >
            От 6 до 10 млн
          </button>
          <button
            class="Prices__btn"
            :class="{'active-btn': incomeOfCompany === 20}"
            @click="selectIncome(20)"
          >
            От 10 до 20 млн
          </button>
        </div>
        <div class="Scoreboard Scoreboard_two">
          <div class="Scoreboard__cards">
            <div class="Scoreboard__card">
              <div class="Scoreboard__hat">
                <div class="Scoreboard__img">
                  <img src="../../../assets/images/control/business-diag/prices-cards/calcs.svg" alt="card-img">
                </div>
                <div class="Scoreboard__title">
                  Диагностика управленческого учета
                </div>
              </div>
              <div class="Scoreboard__desc">
                Анализ текущей ситуации, определение необходимых отчетов, определение и анализ ключевых показателей, автоматизация учета, рекомендации по результатам диагностики
              </div>
              <div class="Scoreboard__prices">
                <div class="Scoreboard__new-price">
                  {{ parseInt(filteredPricesByIncome.managm.newPrice).toLocaleString("ru-RU") }} ₽
                </div>
                <div class="Scoreboard__old-price">
                  {{ parseInt(filteredPricesByIncome.managm.oldPrice).toLocaleString("ru-RU") }} ₽
                </div>
              </div>
            </div>
            <div class="Scoreboard__card">
              <div class="Scoreboard__hat">
                <div class="Scoreboard__img">
                  <img src="../../../assets/images/control/business-diag/prices-cards/money.svg" alt="card-img">
                </div>
                <div class="Scoreboard__title">
                  Финансовая диагностика
                </div>
              </div>
              <div class="Scoreboard__desc">
                Глубокое исследование финансовых отношений и движения финансовых ресурсов. Анализ прошлого, текущего финансового положения, прогноз относительно будущих условий и деятельности предприятия.
              </div>
              <div class="Scoreboard__prices">
                <div class="Scoreboard__new-price">
                  {{ parseInt(filteredPricesByIncome.financial.newPrice).toLocaleString("ru-RU") }} ₽
                </div>
                <div class="Scoreboard__old-price">
                  {{ parseInt(filteredPricesByIncome.financial.oldPrice).toLocaleString("ru-RU") }} ₽
                </div>
              </div>
            </div>
          </div>
          <div class="Scoreboard__order-btn">
            Заказать диагностику
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { insertBitrix5 } from '~/assets/js/bitrx-window'
export default {
  data () {
    return {
      numberOfPeople: 5,
      incomeOfCompany: 1,
      filteredPricesByNumber: {
        full: {
          oldPrice: 100000,
          newPrice: 85000
        },
        personnel: {
          oldPrice: 90000,
          newPrice: 79000
        },
        it: {
          oldPrice: 89000,
          newPrice: 70000
        }
      },
      filteredPricesByIncome: {
        managm: {
          oldPrice: 120000,
          newPrice: 100000
        },
        financial: {
          oldPrice: 90000,
          newPrice: 79000
        }
      },
      allPrices1: [
        {
          id: 1,
          numberOfPeople: 5,
          about: {
            full: {
              oldPrice: 100000,
              newPrice: 85000
            },
            personnel: {
              oldPrice: 90000,
              newPrice: 79000
            },
            it: {
              oldPrice: 89000,
              newPrice: 70000
            }
          }
        },
        {
          id: 2,
          numberOfPeople: 8,
          about: {
            full: {
              oldPrice: 155000,
              newPrice: 140000
            },
            personnel: {
              oldPrice: 131000,
              newPrice: 120000
            },
            it: {
              oldPrice: 139000,
              newPrice: 120000
            }
          }
        },
        {
          id: 3,
          numberOfPeople: 11,
          about: {
            full: {
              oldPrice: 195000,
              newPrice: 180000
            },
            personnel: {
              oldPrice: 171000,
              newPrice: 160000
            },
            it: {
              oldPrice: 214000,
              newPrice: 195000
            }
          }
        },
        {
          id: 4,
          numberOfPeople: 20,
          about: {
            full: {
              oldPrice: 325000,
              newPrice: 310000
            },
            personnel: {
              oldPrice: 291000,
              newPrice: 280000
            },
            it: {
              oldPrice: 419000,
              newPrice: 400000
            }
          }
        },
        {
          id: 5,
          numberOfPeople: 30,
          about: {
            full: {
              oldPrice: 455000,
              newPrice: 440000
            },
            personnel: {
              oldPrice: 406000,
              newPrice: 395000
            },
            it: {
              oldPrice: 0,
              newPrice: 0
            }
          }
        }
      ],
      allPrices2: [
        {
          id: 1,
          incomeOfCompany: 1,
          about: {
            managm: {
              oldPrice: 120000,
              newPrice: 100000
            },
            financial: {
              oldPrice: 90000,
              newPrice: 79000
            }
          }
        },
        {
          id: 2,
          incomeOfCompany: 5,
          about: {
            managm: {
              oldPrice: 230000,
              newPrice: 210000
            },
            financial: {
              oldPrice: 161000,
              newPrice: 150000
            }
          }
        },
        {
          id: 3,
          incomeOfCompany: 10,
          about: {
            managm: {
              oldPrice: 370000,
              newPrice: 350000
            },
            financial: {
              oldPrice: 311000,
              newPrice: 300000
            }
          }
        },
        {
          id: 4,
          incomeOfCompany: 20,
          about: {
            managm: {
              oldPrice: 520000,
              newPrice: 500000
            },
            financial: {
              oldPrice: 411000,
              newPrice: 400000
            }
          }
        }
      ]
    }
  },
  mounted () {
    try {
      insertBitrix5('.Scoreboard_one', '.Scoreboard__order-btn')
    } catch (error) {}
    try {
      insertBitrix5('.Scoreboard_two', '.Scoreboard__order-btn')
    } catch (error) {}
  },
  methods: {
    selectPeople (num) {
      this.numberOfPeople = num
      const filtered = this.allPrices1.filter(price => num === price.numberOfPeople)
      this.filteredPricesByNumber = filtered[0].about
    },
    selectIncome (num) {
      this.incomeOfCompany = num
      const filtered = this.allPrices2.filter(price => num === price.incomeOfCompany)
      this.filteredPricesByIncome = filtered[0].about
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables.scss';
.Prices{
  @include bgcenter('../../../assets/images/control/business-diag/receive_bg.png');
}
.Prices__inner{
  padding: 137px 0 100px 0;
  .Prices__title{
    font-family: $ff1;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 50px;
    color: #FAFF00;
    padding-bottom: 25px;
  }
  .Prices__subtitle{
    font-family: $ff1;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 50px;
    color: #FAFF00;
    padding-bottom: 25px;
  }
  .Prices__btngroup{
    margin-bottom: 50px;
    overflow-x: scroll;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    column-gap: 20px;
    position: relative;
    -ms-overflow-style: none;
    overflow: -moz-scrollbars-none;
    &::-webkit-scrollbar { width: 0; height: 0; }
    padding: 3px 5px;
    .Prices__btn{
      font-family: $ff1;
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 50px;
      width: 180px;
      border-radius: 50px;
      border: 1px solid #FAFF00;
      background: #181816;
      border-radius: 50px;
      color: #FAFF00;
      flex-shrink: 0;
      transition: all .25s;
      &.active-btn{
        color: #1D1D1D;
        background: #FAFF00;
        border: 1px solid #FAFF00;
      }
      &:hover{
        cursor: pointer;
        transform: scale(1.05);
      }
    }
  }
  .Scoreboard{
    background: linear-gradient(122.93deg, rgba(100, 100, 100, 0.71) 1.7%, rgba(72, 71, 71, 0.12) 48.4%, rgba(115, 106, 106, 0.17) 94.76%);
    border-radius: 50px;
    padding: 45px 100px;
    margin-bottom: 50px;
    &:last-child{
      margin-bottom: 0;
    }
    .Scoreboard__cards{
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-wrap: wrap;
      row-gap: 25px;
      .Scoreboard__card{
        width: 100%;
        .Scoreboard__hat{
          display: flex;
          justify-content: flex-start;
          align-items: center;
          .Scoreboard__img{
            width: 30px;
            height: auto;
          }
          .Scoreboard__title{
            margin-left: 17px;
            font-family: $ff1;
            font-style: normal;
            font-weight: 700;
            font-size: 24px;
            line-height: 40px;
            color: #FAFF00;
          }
          .Scoreboard__text{
            font-family: $ff1;
            font-style: normal;
            font-weight: 500;
            font-size: 20px;
            line-height: 50px;
            color: #FFFFFF;
            margin-left: 13px;
          }
        }
        .Scoreboard__desc{
          font-family: $ff1;
          font-style: italic;
          font-weight: 500;
          font-size: 20px;
          line-height: 25px;
          color: #FFFFFF;
          margin-top: 10px;
          max-width: 880px;
          span {
            color: #FAFF00;
          }
        }
        .Scoreboard__prices{
          margin-top: 5px;
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          .Scoreboard__new-price{
            font-family: $ff1;
            font-style: normal;
            font-weight: 700;
            font-size: 32px;
            line-height: 50px;
            color: #FF0000;
            padding-top: 25px;
          }
          .Scoreboard__old-price{
            font-family: $ff1;
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 50px;
            text-decoration: line-through;
            color: #C4C4C4;
          }
        }
      }
    }
    .Scoreboard__order-btn{
      margin-top: 30px;
      padding: 10px 40px;
      font-family: $ff1;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 33px;
      color: rgba(29, 29, 29, 0.9);
      background: #F9FF05;
      box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
      border-radius: 50px;
      width: fit-content;
      &:hover{
        cursor: pointer;
      }
    }
  }
}
@media (max-width: 1024px) {
  .Prices__inner{
    padding: 92px 0 84px 0;
    .Prices__subtitle{
      padding-bottom: 18px;
    }
    .Prices__btngroup{
      column-gap: 15px;
      margin-bottom: 75px;
    }
    .Scoreboard{
      padding: 33px 56px 27px 44px;
      .Scoreboard__cards{
        .Scoreboard__card{
          .Scoreboard__desc{
            font-size: 18px;
          }
        }
      }
    }
  }
}
@media (max-width: 768px) {
  .Prices__inner{
    padding: 92px 0 71px 0;
    .Prices__title{
      padding-bottom: 39px;
    }
    .Prices__subtitle{
      padding-bottom: 10px;
    }
    .Prices__btngroup{
      margin-bottom: 69px;
    }
    .Scoreboard{
      padding: 33px 20px 27px 44px;
    }
  }
}
@media (max-width: 480px) {
  .Prices__inner{
    padding-bottom: 76px;
    .Prices__title{
      font-size: 28px;
      line-height: 40px;
      padding-bottom: 15px;
    }
    .Prices__subtitle{
      line-height: 30px;
    }
    .Prices__btngroup{
      margin-bottom: 90px;
      column-gap: 10px;
      .Prices__btn{
        width: auto;
        min-width: 160px;
      }
    }
    .Scoreboard{
      padding: 33px 20px 43px 22px;
      .Scoreboard__cards{
        row-gap: 35px;
        .Scoreboard__card{
          .Scoreboard__hat{
            position: relative;
            align-items: flex-start;
            &.Scoreboard__hat_full{
              padding-bottom: 30px;
            }
            .Scoreboard__img{
              flex-shrink: 0;
            }
            .Scoreboard__text{
              position: absolute;
              bottom: -5px;
              right: 0;
            }
          }
        }
      }
      .Scoreboard__order-btn{
        margin: 24px auto 0 auto;
      }
    }
  }
}
@media (max-width: 360px) {
  .Prices__inner{
    padding: 65px 0 62px 0;
    .Prices__title{
      font-size: 24px;
      line-height: 30px;
      padding-bottom: 48px;
    }
    .Prices__subtitle{
      font-size: 22px;
      line-height: 30px;
      padding-bottom: 25px;
    }
    .Prices__btngroup{
      margin-bottom: 82px;
    }
    .Scoreboard{
      padding: 27px 11px;
      .Scoreboard__cards{
        row-gap: 23px;
        .Scoreboard__card{
          .Scoreboard__hat{
            &.Scoreboard__hat_full{
              padding-bottom: 25px;
            }
            .Scoreboard__title{
              font-size: 20px;
            }
            .Scoreboard__text{
              font-size: 18px;
              bottom: 0;
            }
          }
          .Scoreboard__desc{
            margin-top: 5px;
          }
        }
      }
      .Scoreboard__order-btn{
        padding: 10px 27px;
      }
    }
  }
}
</style>
