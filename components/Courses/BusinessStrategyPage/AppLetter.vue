<template>
  <section class="BSLetter">
    <div class="container">
      <div class="BSLetter__inner">
        <div class="BSLetter__about">
          <div class="BSLetter__symbols">
            “”
          </div>
          <div class="BSLetter__desc">
            Про сложности, которые встречает на своём пути предприниматель, бизнесмен или управленец — много написано книг, про их решения, кстати тоже. 90% управленцев добиваются успеха в бизнесе стараниями и усилиями. Вопрос «какими»? И как долго стараться?
          </div>
          <div class="BSLetter__desc">
            Учёба — ради учёбы, работа — ради работы, бурная деятельность и самообман, приносят слабые результаты, а сил и энергии отнимают много. А впереди ещё туманно и цель почти не видна…и как её достигать?‥
          </div>
          <div class="BSLetter__desc">
            Управление — может стать интересным интеллектуальным процессом для вас!
          </div>
          <div class="BSLetter__desc">
            Какие книги читать….
          </div>
          <div class="BSLetter__desc">
            Какие цифры вести? И главное зачем и о чем они говорят с вами?
          </div>
          <div class="BSLetter__desc">
            Как работать с кадрами, цифрами, процессами и выстраивать систему — об всем и по порядку рассказываем мы сами. У нас нет преподавателей теоретиков, есть только знания, проверенные и закреплённые опытом.
          </div>
        </div>
        <div class="BSLetter__author">
          <div class="BSLetter__img">
            <img src="../../../assets/images/courses/business-strategy/na.png" alt="na">
          </div>
          <div class="BSLetter__name">
            Мещерякова Наталья
          </div>
          <div class="BSLetter__position">
            собственник EduPartner, Приуральский центр
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

<style scoped>
.BSLetter{
  background-color: #181816;
}
.BSLetter__inner{
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 75px 0 125px 0;
}
.BSLetter__about{
  max-width: 678px;
}
.BSLetter__symbols{
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 70px;
  color: #FAFF00;
  padding: 25px 0 0 0;
}
.BSLetter__desc{
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 125%;
  color: #FFFFFF;
  padding-bottom: 7px;
}
.BSLetter__desc:last-child{
  padding-bottom: 0;
}
.BSLetter__author{
  max-width: 295px;
}
.BSLetter__img{
  width: 180px;
  height: 180px;
  margin: 0 0 0 auto;
}
.BSLetter__name{
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  text-align: right;

  color: #FFFFFF;
  padding: 20px 0;
}
.BSLetter__position{
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  text-align: right;

  color: #898989;
}
@media (max-width: 1024px) {
  .BSLetter__inner{
    padding-bottom: 100px;
    column-gap: 20px;
  }
  .BSLetter__about{
    max-width: 633px;
  }
}
@media (max-width: 768px) {
  .BSLetter__inner{
    padding-top: 100px;
  }
  .BSLetter__symbols{
    padding-top: 0;
  }
  .BSLetter__author{
    padding-top: 61px;
    flex-shrink: 0;
    max-width: 229px;
  }
  .BSLetter__about{
    max-width: none;
  }
  .BSLetter__name, .BSLetter__position{
    font-size: 18px;
    line-height: 22px;
  }
  .BSLetter__name{
    padding-bottom: 10px;
  }
}

@media (max-width: 480px) {
  .BSLetter__inner{
    column-gap: normal;
    flex-wrap: wrap;
    flex-direction: column;
    row-gap: 40px;
  }
  .BSLetter__author{
    align-self: flex-end;
    padding-top: 0;
  }
}
@media (max-width: 360px) {
  .BSLetter__desc{
    font-size: 18px;
  }
}
</style>
