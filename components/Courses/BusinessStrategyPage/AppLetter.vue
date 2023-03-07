<template>
  <section class="BSLetter">
    <div class="container">
      <div class="BSLetter__inner">
        <div class="BSLetter__about">
          <div class="BSLetter__symbols">
            “”
          </div>
          <div class="BSLetter__desc">
            Я открыла первый бизнес в 2008 году. Про сложности, которые встречались на пути с того времени и до недавних пор можно написать целую книгу. 99,9% предпринимателей добиваются успеха в бизнесе через пот и кровь, а можно и без этого! Несмотря на множество прочитанных книг (которые тоже в какой-то мере помогли), большую роль при решении проблем все равно играл опыт.
          </div>
          <div class="BSLetter__desc">
            Если бы у меня была возможность посетить курс по бизнес-стратегии 10 лет назад, количество шишек на голове изрядно бы поубавилось.
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
  padding: 25px 0;
}
.BSLetter__desc{
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 125%;
  color: #FFFFFF;
}
.BSLetter__desc:last-child{
  padding-top: 50px;
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
}

@media (max-width: 480px) {
}
@media (max-width: 360px) {

}
</style>
