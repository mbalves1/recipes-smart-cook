<template>
  <section class="section">
    <div class="section--title">
      <h4>
        Fun and Easy <br>to become <br>Master Cook
        <!-- <v-btn>Sarch</v-btn>   -->
      </h4>
      <p>Let's join us to become a cooking expert in every kind of cusine with a fun way to learn</p>
    </div>
    <div class="section--image">
      <img src="../assets/food/food1.jpg">
    </div>
    <div class="divider-2"></div>

    
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.section {
  padding: var(--header-height) 0;
  padding-bottom: 0;
  // display: grid;
  // grid-template-columns: repeat(2, 50%);

  &--title {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 3rem;

    h4 {
      text-align: start;
      font-size: 4rem;
      line-height: 4rem;
    }

    p {
      text-align: start;
      width: 86%;
    }
  }
  &--image {
    img {
      // height: auto;
      height: 100%;
      max-height: 826px;
      width: 100%;
    }
  }
}

@media (min-width: 768px) {

}

@media (min-width: 1200px) {
  /* reusable classes */
  .section {
    max-width: 1120px;
    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-template-columns: repeat(2, 50%);
  }
}
</style>