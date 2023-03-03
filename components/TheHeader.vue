<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <div class="header__logo">
          <img
            src="../assets/images/main-page/edupartner-footer.svg"
            alt="edu_header"
          >
        </div>
        <div class="header__list">
          <a class="underline underline_a" href="#!"> Обучение </a>
          <a href="#!"> Управление </a>
          <a href="#!"> Об EDUPARTNER </a>
          <a href="#!"> Контакты </a>
          <a href="#!"> Отзывы </a>
        </div>
        <div class="header__more">
          <div class="header__flag">
            <img src="../assets/images/main-page/flag-ru.svg" alt="ru">
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
export default {}
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
  padding: 17px 0;
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

.header__flag {
  width: 62px;
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
}

.header__list>a:hover {
  background-image: linear-gradient(to left, rgba(250, 255, 0, 1) 0%, transparent 90%);
  background-position: bottom;
  background-repeat: repeat-x;
  background-size: 100% 2px;
}

.header__more {
  display: flex;
  justify-content: flex-end;
  column-gap: 24px;
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
  .header__flag {
    width: 56px;
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
</style>
