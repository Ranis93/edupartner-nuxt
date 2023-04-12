<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <nuxt-link to="/">
          <div class="header__logo">
            <img
              src="../assets/images/main-page/edupartner-footer.svg"
              alt="edu_header"
            >
          </div>
        </nuxt-link>
        <div class="header__list">
          <nuxt-link
            to="/courses/business-and-management"
            exact
          >
            Обучение
          </nuxt-link>
          <nuxt-link
            to="/"
            exact
          >
            Управление
          </nuxt-link>
          <nuxt-link
            to="/"
            exact
          >
            О компании
          </nuxt-link>
          <nuxt-link
            to="/contacts"
            exact
          >
            Контакты
          </nuxt-link>
          <nuxt-link
            to="/"
            exact
          >
            Отзывы
          </nuxt-link>
        </div>
        <div class="header__more">
          <div class="header__flags">
            <div class="header__flag">
              <img src="../assets/images/flags/br.png" alt="br">
            </div>
            <div class="header__flag">
              <img src="../assets/images/flags/kz.png" alt="kz">
            </div>
            <div class="header__flag">
              <img src="../assets/images/flags/ru.png" alt="ru">
            </div>
          </div>
          <div
            class="header__burger"
            @click="burgerMenuShow"
          >
            <img
              src="../assets/images/main-page/burger-btn.svg"
              alt="burger-btn"
            >
          </div>
        </div>
      </div>
    </div>
    <div
      class="header__burger-menu"
      :class="{header__nav_active : burgerHide === false}"
    >
      <ul class="header__burger-list">
        <li class="header__burger-item">
          <div
            class="header__burger-link"
            :class="{active : activeBurgerList === 1}"
            @click="[burgerListShow(), (activeBurgerList = 1)]"
          >
            Обучение
          </div>
          <ul
            class="burger-link__ul"
            :class="{
              link_show: burgerMenuIsHide == false && activeBurgerList == 1,
            }"
          >
            <li class="burger-link__li" @click="burgerMenuHide">
              <nuxt-link
                exact
                to="/courses/business-and-management/business-strategy"
                @click="burgerListHide"
              >
                Бизнес-стратегия
              </nuxt-link>
            </li>
            <li class="burger-link__li" @click="burgerMenuHide">
              <nuxt-link
                exact
                to="/courses/business-and-management/strategic-analysis"
                @click="burgerListHide"
              >
                Стратегический анализ
              </nuxt-link>
            </li>
            <li class="burger-link__li" @click="burgerMenuHide">
              <nuxt-link
                exact
                to="/"
                @click="burgerListHide"
              >
                IT-курсы
              </nuxt-link>
            </li>
          </ul>
          <div
            class="header__burger-link"
            :class="{active : activeBurgerList === 2}"
            @click="[burgerListShow(), (activeBurgerList = 2)]"
          >
            Управление
          </div>
          <ul
            class="burger-link__ul"
            :class="{
              link_show: burgerMenuIsHide == false && activeBurgerList == 2,
            }"
          >
            <li class="burger-link__li" @click="burgerMenuHide">
              <nuxt-link
                exact
                to="/business-diagnostics"
                @click="burgerListHide"
              >
                Диагностика бизнеса
              </nuxt-link>
            </li>
            <li class="burger-link__li" @click="burgerMenuHide">
              <nuxt-link
                exact
                to="/business-consulting"
                @click="burgerListHide"
              >
                Бизнес-консультация
              </nuxt-link>
            </li>
            <li class="burger-link__li" @click="burgerMenuHide">
              <nuxt-link
                exact
                to="/site-development"
                @click="burgerListHide"
              >
                Разработка сайтов
              </nuxt-link>
            </li>
            <li class="burger-link__li" @click="burgerMenuHide">
              <nuxt-link
                exact
                to="/internet-marketing"
                @click="burgerListHide"
              >
                Интернет-маркетинг
              </nuxt-link>
            </li>
          </ul>
          <div
            class="header__burger-link"
            :class="{active : activeBurgerList === 3}"
            @click="[burgerMenuHide(), (activeBurgerList = 3), (activeBurgerList = 0)]"
          >
            <nuxt-link to="/" exact>
              О компании
            </nuxt-link>
          </div>
          <div
            class="header__burger-link list"
            :class="{active : activeBurgerList === 4}"
            @click="[burgerMenuHide(), (activeBurgerList = 4), (activeBurgerList = 0)]"
          >
            <nuxt-link to="/contacts" exact>
              Контакты
            </nuxt-link>
          </div>
          <div
            class="header__burger-link list"
            :class="{active : activeBurgerList === 5}"
            @click="[burgerMenuHide(), (activeBurgerList = 5), (activeBurgerList = 0)]"
          >
            <nuxt-link to="/" exact>
              Отзывы
            </nuxt-link>
          </div>
        </li>
      </ul>
      <div
        class="header__nav-close"
        @click="burgerMenuHide"
      />
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      burgerHide: true, // Состояние самого бургера
      menuIsHide: true, // Состояние пункта бургер-меню
      burgerMenuIsHide: true, // Состояние пунктов бургер-меню
      activeBurgerList: 0 // Текущий пункт бургер-меню
    }
  },
  watch: {
    burgerHide: function () {
      // запрет на прокрутку, когда открыт бургер-меню
      if (!this.burgerHide) {
        document.documentElement.style.overflow = 'hidden'
        return
      }
      document.documentElement.style.overflow = 'auto'
    }
  },
  methods: {
    burgerListShow () { // Показать списки под пуктами бургер-меню
      this.burgerMenuIsHide = false
    },
    burgerListHide () { // Скрыть подпункты бургер-меню
      this.activeBurgerList = 0
      this.burgerMenuIsHide = true
    },
    burgerMenuShow () { // Показать сам бургер-меню
      this.burgerHide = false
    },
    burgerMenuHide () { // Скрыть сам бургер-меню
      this.burgerHide = true
      this.burgerListHide()
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
.header__burger-menu {
  position: fixed;
  width: 100vw;
  height: 80vh;
  top: 0;
  right: 0;
  background-color: #1E1F06;
  z-index: 10;
  padding: 103px 0 0 40px;
  transform: translateX(100%);
  transition: .2s all linear;
}
.header__nav_active{
  transform: translateX(0);
  overflow-y: hidden;
}
.header__burger-list{
  max-width: 100%;
  margin-right: 20px;
}
.header__burger-item {
  margin-right: 0;
  margin-bottom: 15px;
  list-style-type: none;
}
.header__burger-link {
  &>a{
    margin-bottom: 15px;
    font-weight: 400;
    font-size: 26px;
    line-height: 31px;
    color: #FFFFFF;
    text-decoration: none;
    width: fit-content;
  }
  margin-bottom: 15px;
  font-weight: 400;
  font-size: 26px;
  line-height: 31px;
  color: #FFFFFF;
  text-decoration: none;
  width: fit-content;

  background-image: linear-gradient(to left, rgba(250, 255, 0, 1) 0%, transparent 90%);
  background-position: 0% 100%;
  background-repeat: no-repeat;
  background-size: 0% 1px;
  transition: background-size .3s;
  &.active{
   background-size: 100% 1px;
  }
}
.burger-link__ul{
  display: none;
  margin: 5px 0 25px 0;
  z-index: 10;
  opacity: 0;
  animation: ani 2.5s forwards;
}
.burger-link__ul.link_show{
  display: block;
}
.burger-link__ul>li{
  list-style-type: none;
  padding-bottom: 5px;
}
.burger-link__ul>li>a{
  text-decoration: none;
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  color: #FFFFFF;
}
.header__nav-close {
  width:60px;
  height: 60px;
  position: absolute;
  top: 21px;
  right: 22px;
  z-index: 11;
  background-image: url('../assets/images/burger-close-btn.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
.header {
  background-color: rgba(60, 60, 60, 0.25);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
}

.header__inner {
  padding: 13px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header__list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 38px;
}

.header__logo {
  width: 109px;
  height: 74px;
}
.header__flags{
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
}
.header__flag {
  width: 35px;
  height: 35px;
}
.header__list {
  font-family: $ff2;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #FFFFFF;
  list-style: none;
  height: 30px;
  background-image: linear-gradient(to left, rgba(250, 255, 0, 1) 0%, transparent 90%);
  background-position: 0% 100%;
  background-repeat: no-repeat;
  background-size: 0% 2px;
  transition: background-size .3s;
  a {
    @extend .header__list;
    &:hover {
      background-size: 100% 2px;
    }
  }
}
.header__more {
  display: flex;
  justify-content: flex-end;
  column-gap: 23px;
  align-items: center;
}
.header__burger {
  display: none;
  width: 65px;
  height: 64px;
}
@media (max-width: 1024px) {
  .container {
    padding: 0 20px;
  }
}
@media (max-width: 768px) {
  .header__logo {
    width: 97px;
    height: 66px;
  }
  .header__flag {
    display: none;
  }
  .header__list {
    column-gap: 20px;
  }
}
@media (max-width: 655px) {
  .header__list {
    display: none;
  }
  .header__flag,
  .header__burger {
    display: block;
  }
}
@media (max-width: 360px) {
  .header__more{
    column-gap: 13px;
  }
  .header__flags{
    column-gap: 7px;
  }
  .header__flag{
    width: 29px;
    height: 29px;
  }
}
</style>
