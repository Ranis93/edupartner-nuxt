<template>
  <section class="policy">
    <div class="container">
      <div class="policy__inner">
        <div class="policy__text text-one">
          © 2023 Все права защищены
        </div>
        <div class="policy__text text-two">
          <a href="#!">Политика конфиденциальности</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.policy {
  background-color: #181816;
}

.policy__inner {
  display: flex;
  justify-content: flex-start;
  padding: 20px 0;
  column-gap: 20px;
}

.policy__text,
.policy__text>a {
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.025em;
  color: rgba(255, 255, 255, 0.8);
  display: inline-block;
  text-decoration: none;
}

.policy__text>a {
  text-decoration: none;
  cursor: pointer;
}

.text-one {
  width: 340px;
  flex-shrink: 0;
}

.text-two {
  width: 280px;
}

.text-one,
.text-two {
  vertical-align: top;
}
@media (max-width: 1024px) {
  .container {
    padding: 0 20px;
  }
  .text-one {
    width: 180px;
  }
}
@media (max-width: 768px) {
  .text-one {
    width: 156px;
  }
}
@media (max-width: 655px) {
  .policy__inner {
    flex-wrap: wrap;
  }
}
@media (max-width: 480px) {
  .policy__inner {
    column-gap: normal;
    padding: 0 0 50px 0;
    flex-wrap: nowrap;
  }
  .text-one {
    width: 156px;
  }
  .text-two {
    width: auto;
  }
  .policy__text {
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.025em;
  }
}
@media (max-width: 360px) {
  .policy__text>a {
    font-size: 14px;
    line-height: 17px;
  }

  .policy__inner {
    flex-wrap: wrap;
    row-gap: 20px;
  }

  .text-one {
    width: 150px;
  }

  .text-two {
    width: 100%;
  }
}
</style>
