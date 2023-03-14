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
            to="/"
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
          <div class="header__burger">
            <img
              src="../assets/images/main-page/burger-btn.svg"
              alt="burger-btn"
            >
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
}
</script>

<style scoped>
.header {
  background-color: rgba(60, 60, 60, 0.25);
  position: fixed;
  width: 100vw;
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

.header__list,
.header__list>a {
  font-family: 'Lato', sans-serif;
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
}

.header__list>a:hover {
  background-size: 100% 2px;
}

/* .header__list>a {
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 20px;
  line-height: 24px;
  color: #FFFFFF;
  list-style: none;
  height: 30px;
}

.header__list>a.hover {
  background-image: linear-gradient(to left, rgba(250, 255, 0, 1) 0%, transparent 90%);
  background-position: bottom;
  background-repeat: repeat-x;
  background-size: 100% 2px;
} */

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
