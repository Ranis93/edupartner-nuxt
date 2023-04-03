<template>
  <section class="contacts">
    <div class="container">
      <div class="contacts__inner">
        <h1 class="contacts__title">
          Контакты
        </h1>
        <div class="contacts__columns">
          <div class="contacts__map">
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A6921613068c933e9f2ef36315a7137d173ad41974df468dcda18b677d840e795&amp;source=constructor" frameborder="0" />
          </div>
          <div class="contacts__window">
            <div class="contacts__cards">
              <div class="contacts__card">
                <div class="contacts__img">
                  <img src="../../assets/images/contacts-page/icons/phone-ico.svg" alt="phone">
                </div>
                <div class="contacts__text">
                  +7 (800)-101-19-45
                </div>
              </div>
              <div class="contacts__card">
                <div class="contacts__img">
                  <img src="../../assets/images/contacts-page/icons/geo-ico.svg" alt="geo">
                </div>
                <div class="contacts__text">
                  Уфа, Бульвар Ибрагимова, 37/1
                </div>
              </div>
              <div class="contacts__card">
                <div class="contacts__img">
                  <img src="../../assets/images/contacts-page/icons/mail-ico.svg" alt="mail">
                </div>
                <div class="contacts__text">
                  edupartner@edu-partner.ru
                </div>
              </div>
            </div>
            <div class="contacts__btn">
              Связаться
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { insertBitrix4 } from '@/assets/js/bitrx-window.js'
export default {
  mounted () {
    // Вставка popup от Bitrix на кнопку
    try {
      insertBitrix4('.contacts__window', '.contacts__btn')
    } catch (error) {}
  }
}
</script>

<style lang="scss" scoped>
.contacts__inner{
  padding: 230px 0 100px 0;
  .contacts__title{
    font-style: normal;
    font-weight: 700;
    font-size: 45px;
    line-height: 55px;
    color: #FFFFFF;
    margin-bottom: 50px;
  }
  .contacts__columns{
    display: flex;
    justify-content: space-between;
    column-gap: 20px;
    align-items: flex-start;
    .contacts__map{
      &>iframe{
        width: 580px;
        height: 440px;
      }
    }
    .contacts__window{
      width: 480px;
      padding: 40px;
      background: #FFFFFF;
      border-radius: 30px;
      .contacts__cards{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        row-gap: 15px;
        flex-wrap: wrap;
        margin-bottom: 30px;
        .contacts__card{
          display: flex;
          justify-content: flex-start;
          column-gap: 20px;
          align-items: center;
          .contacts__img{
            width: 50px;
            height: 50px;
          }
          .contacts__text{
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            line-height: 20px;
            color: #1D1D1D;
          }
        }
      }
      .contacts__btn{
        background: #F9FF05;
        border-radius: 50px;
        font-weight: 600;
        font-size: 18px;
        line-height: 33px;
        color: rgba(29, 29, 29, 0.9);
        padding: 10px 40px;
        width: fit-content;
      }
    }
  }
}
@media (max-width: 1024px) {
  .contacts__inner{
    padding-top: 180px;
    .contacts__columns{
      align-items: stretch;
      .contacts__map{
        width: 100%;
        &>iframe{
          width: 100%;
          height: 398px;
        }
      }
      .contacts__window{
        padding: 40px 27px;
        width: 416px;
        flex-shrink: 0;
        .contacts__cards{
          margin-bottom: 48px;
          .contacts__card{
            .contacts__img{
              width: 43px;
              height: 43px;
            }
            .contacts__text{
              font-size: 18px;
            }
          }
        }
      }
    }
  }
}
@media (max-width: 768px) {
  .contacts__inner{
    padding-top: 190px;
    .contacts__title{
      font-size: 40px;
    }
    .contacts__columns{
      column-gap: 15px;
      .contacts__map{
        width: 48.5%;
        & > iframe{
          height: 440px;
        }
      }
      .contacts__window{
        width: 48.5%;
        .contacts__cards{
          .contacts__card{
            .contacts__text{
              font-size: 16px;
            }
          }
        }
      }
    }
  }
}
@media (max-width: 480px) {
  .contacts__inner{
    .contacts__title{
      font-size: 36px;
    }
    .contacts__columns{
      flex-wrap: wrap;
      row-gap: 30px;
      .contacts__map{
        width: 100%;
      }
      .contacts__window{
        width: 100%;
        flex-shrink: 1;
      }
    }
  }
}
@media (max-width: 360px) {
  .contacts__inner{
    .contacts__title{
      font-size: 32px;
    }
    .contacts__columns{
      row-gap: 28px;
      .contacts__map{
        & > iframe {
          height: 321px;
        }
      }
      .contacts__window{
        padding: 40px 15px;
        .contacts__cards{
          row-gap: 13px;
          margin-bottom: 50px;
          .contacts__card{
            column-gap: 10px;
            .contacts__img{
              width: 38px;
              height: 38px;
            }
          }
        }
        .contacts__btn{
          padding: 5px 40px;
          font-size: 16px;
          margin-bottom: 27px;
        }
      }
    }
  }
}
</style>
