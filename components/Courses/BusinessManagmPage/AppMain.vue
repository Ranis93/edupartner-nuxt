<template>
  <section class="BMMain">
    <div class="container">
      <div class="BMMain__inner">
        <div class="BMMain__desc">
          <h1 class="BMMain__title">
            <span>Курсы</span> по бизнесу и управлению
          </h1>
          <div class="BMMain__text">
            От преподавателей с опытом <br> в управлении более 15 лет
          </div>
        </div>
        <div class="BMMain__content">
          <div class="BMMain__slider">
            <div class="BMMain__list">
              <div class="BMMain__track">
                <div class="BMMain__slide">
                  <div class="BMMain__card one">
                    <div class="BMMain__name">
                      Мещерякова Наталья Анатольевна
                    </div>
                    <ul class="BMMain__about">
                      <li>
                        Образование высшее, 2008г. СпбГУТ им.Бонч-Бруевича техническое направление: Автоматизация производственных процессов на предприятиях; «Практическая психология»; курсы по управлению для учредителей и директоров; тренинг «Власть.Управление карьерой» Михаила Хазина
                      </li>
                      <li>
                        Опыт: 2005-2008 Специалист отдела продаж УФПС - Филиал ФГУП "Почта России"
                      </li>
                      <li>
                        Собственник "Приуральский центр образования", образовательной платформы EDUEXP, EDUPARTNER, бизнес-проекта «Сертификация»,руководитель и создатель проекта "Стажировка для выпускников" "БизнесДиагностика».
                      </li>
                    </ul>
                    <div class="BMMain__img first">
                      <img src="../../../assets/images/courses/business-and-management/na.png" alt="BMMain__img">
                    </div>
                  </div>
                </div>
                <div class="BMMain__slide">
                  <div class="BMMain__card two">
                    <div class="BMMain__name">
                      Игина Марина Аркадьевна
                    </div>
                    <div class="BMMain__position">
                      Опыт работы:
                    </div>
                    <ul class="BMMain__about">
                      <li>
                        Генеральным директором предприятия по производству и оптово — розничной торговли продуктов питания;
                      </li>
                      <li>
                        Директором учебного центра дополнительного и профессионального обучения.
                      </li>
                      <li>
                        Исполнительным директором холдинга: гостиничный бизнес, сельское хозяйство, добыча нерудных материалов, производство
                      </li>
                      <li>
                        Главным экономистом холдинга по производству и реализации товаров
                      </li>
                      <li>
                        Собственник бизнеса в фитнес-индсутрии и консалтинговая компания «БИЗНЕС МЕТОDИКА»
                      </li>
                    </ul>
                    <div class="BMMain__img second">
                      <img src="../../../assets/images/courses/business-and-management/igina_ma.png" alt="BMMain__img">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="BMMain__arrows">
            <button
              class="BMMain__arrow-prev prev disabled"
            />
            <button type="button" class="BMMain__arrow-next next" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { dragDropSlider } from '../../../assets/js/slider'
export default {
  mounted () {
    try {
      dragDropSlider(
        '.BMMain__slider',
        '.BMMain__list',
        '.BMMain__track',
        '.BMMain__slide',
        '.BMMain__arrows',
        2
      )
    } catch (error) {}
  }

}
</script>

<style scoped>
.BMMain {
  background-image: url('../../../assets/images/courses/business-and-management/b-a-m__bg.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.BMMain__inner {
  padding: 135px 0 0 0;
  display: flex;
  column-gap: 20px;
}
.BMMain__desc{
  max-width: 478px;
}

.BMMain__text {
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #B2B3B1;
  max-width: 540px;
}

.BMMain__title {
  padding: 95px 0 25px 0;
  max-width: 678px;
  font-weight: 700;
  font-size: 45px;
  line-height: 55px;
  color: #FFFFFF;
}

.BMMain__title>span {
  color: rgba(250, 255, 0, 1);
}
.BMMain__content{
  position: relative;
}
.BMMain__slider {
  vertical-align: middle;
  position: relative;
  display: inline-block;
  width: 680px;
  overflow: hidden;
  /* Чтобы во время перетаскивания слайда ничего не выделить внутри него */
  user-select: none;
  /* Чтобы запретить скролл страницы, если мы начали двигать слайдер по оси X */
  touch-action: pan-y;
}
/* Если где-то внутри слайдера будут изображения,
то нужно задать им pointer-events: none,
чтобы они не перетаскивались мышью */

.BMMain__slider img {
  pointer-events: none;
}
.BMMain__list {
  width: 680px;
  height: 720px;
  overflow: hidden;
}
.BMMain__list.grab {
  cursor: grab;
}
.BMMain__list.grabbing {
  cursor: grabbing;
}
.BMMain__slide {
  width: 680px;
  height: 715px;
  padding-right: 20px;
  flex-shrink: 0;
  box-sizing: content-box;
  position: relative;
}
.BMMain__track {
  display: flex;
}
.BMMain__arrows {
  position: absolute;
  left: 0;
  bottom: 182px;
  width: fit-content;
}
.BMMain__arrow-prev,
.BMMain__arrow-next {
  width: 80px;
  height: 70px;
  padding: 0;

  background-position: center center;
  background-color: transparent;
  border: 0;
  cursor: pointer;
}
.BMMain__arrow-prev {
  background-image: url("../../../assets/images/courses/business-and-management/arr_prev.svg");
}
.BMMain__arrow-next {
  background-image: url("../../../assets/images/courses/business-and-management/arr_next.svg");
  margin-left: 25px;
}
.BMMain__arrow-next.disabled,
.BMMain__arrow-prev.disabled {
  opacity: 0.25;
  pointer-events: none;
}
.BMMain__center {
  display: inline-block;
}
.BMMain__card {
  width: 680px;
  flex-shrink: 0;
  box-sizing: border-box;
  background: linear-gradient(122.93deg, rgba(100, 100, 100, 0.71) 1.7%, rgba(72, 71, 71, 0.12) 48.4%, rgba(115, 106, 106, 0.17) 94.76%);
  border-radius: 50px;
  padding: 50px 30px 30px 30px;
}
.BMMain__name{
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #FFF400;
  padding-bottom: 20px;
}
.BMMain__about{
  margin-left: 30px;
  max-width: 560px;
}
.BMMain__position, .BMMain__about>li{
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #D4D4D4;
}
.BMMain__position{
  padding-bottom: 15px;
}
.BMMain__about>li{
  padding-bottom: 10px;
}
.BMMain__img{
  width: auto;
  position: absolute;
  bottom: 0;
}
.BMMain__img img{
  width: auto;
  /* для Safari (iOS). Иначе изображение раястягивает */
}
.BMMain__img.first{
  height: 472px;
  right: 0;
}
.BMMain__img.second{
  height: 437px;
  right: 45px;
}
@media (max-width: 1024px) {
  .BMMain__inner {
    flex-wrap: wrap;
    flex-direction: column;
    padding-top: 230px;
    row-gap: 45px;
  }
  .BMMain__title{
    padding-top: 0;
  }
  .BMMain__content{
    align-self: center;
  }
  .BMMain__slider, .BMMain__list, .BMMain__slide{
    width: 95vw;
  }
  .BMMain__card{
    padding-top: 40px;
  }
  .BMMain__card.one{
    width: 633px;
  }
  .BMMain__card.two{
    width: 742px;
  }
  .BMMain__slider, .BMMain__list, .BMMain__slide{
    height: 570px;
  }
  .BMMain__about{
    max-width: 629px;
  }
  .BMMain__arrows{
    bottom: 84px;
  }
  .BMMain__img.first{
    height: 543px;
  }
  .BMMain__img.second{
    height: 463px;
    right: 0;
  }
}
@media (max-width: 768px) {
  .BMMain {
    background-position: 40% 100%;
  }
  .BMMain__slider, .BMMain__list, .BMMain__slide{
    height: 572px;
  }
  .BMMain__card{
    padding: 30px 20px 40px 20px;
  }
  .BMMain__about{
    max-width: 500px;
  }
  .BMMain__card.one, .BMMain__card.two{
    width: 603px;
  }
  .BMMain__img.first{
    height: 394px;
  }
  .BMMain__img.second{
    height: 310px;
  }
  .BMMain__arrows{
    bottom: 42px;
  }
}
@media (max-width: 700px) {
  .BMMain__card.one, .BMMain__card.two{
    width: 100%;
  }
}

@media (max-width: 480px) {
  .BMMain {
    background-position: 30% 100%;
  }
  .BMMain__title {
    font-size: 36px;
    line-height: 50px;
    padding-bottom: 35px;
  }
  .BMMain__inner{
    row-gap: 40px;
  }
  .BMMain__slider, .BMMain__list, .BMMain__slide{
    height: fit-content;
  }
  .BMMain__slider, .BMMain__list, .BMMain__slide, .BMMain__card{
    width: 90vw;
  }
  .BMMain__track{
    align-items: flex-end;
  }
  .BMMain__card{
    padding: 40px 20px 20px 20px;
    margin-bottom: 315px;
  }
  .BMMain__about{
    margin-left: 20px;
    position: relative;
    z-index: 1;
  }
  .BMMain__about>li{
    padding-bottom: 5px;
  }
  .BMMain__img.first{
    height: 359px;
  }
  .BMMain__img.second{
    height: 298px;
  }
  .BMMain__arrows{
    bottom: 149px;
  }
  .BMMain__arrow-prev, .BMMain__arrow-next{
    width: 64px;
    background-size: 80% 100%;
    background-repeat: no-repeat;
    margin-left: 0;
  }
}
@media (max-width: 360px) {
  .BMMain__text {
    font-size: 18px;
    line-height: 22px;
  }
  .BMMain__title {
    font-size: 32px;
    padding-bottom: 20px;
  }
  .BMMain__card{
    padding-top: 25px;
    margin-bottom: 276px;
  }
  .BMMain__name{
    font-size: 18px;
    line-height: 22px;
    padding-bottom: 15px;
  }
  .BMMain__about{
    margin-left: 15px;
  }
  .BMMain__about>li{
    font-size: 16px;
    line-height: 19px;
  }
  .BMMain__img.first{
    height: 323px;
    right: 11px;
  }
  .BMMain__img.second{
    height: 270px;
  }
  .BMMain__arrows{
    display: none;
  }

}
</style>
