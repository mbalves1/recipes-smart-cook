<template>
  <section class="section">
    <div class="section--image">
      <img src="../assets/food/food5.jpg">
    </div>
    <div class="section--title">
      <h4>
        TOPS <span>RECIPES</span>
      </h4>
      <div>
        <div class="img">
          <h3>Facilities Provided</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum natus magnam, cons</p>
        </div>
        <img src="../assets/food/food1.jpg" alt="">
        <img src="../assets/food/food3.jpg" alt="">
        <div class="img">
          <h3>Real work practice</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum natus magnam, cons</p>
        </div>
      </div>
      <!-- <div class="section--food">
        <div class="section--food--cards">
        </div>
      </div> -->
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.img {
  border: 1px solid #e4e4e4;
  display: flex !important;
  flex-direction: column !important;
  justify-content: center;
  p {
    font-size: 0.55rem;
  }
}

.section {
  padding: var(--header-height) 0;
  padding-bottom: 4rem;
  // display: grid;
  // grid-template-columns: repeat(2, 50%);
  // &--food {
  //   &--cards {
  //     display: grid;
  //     img {
  //       width: 10rem;
  //     } 
  //   }
  // }

  &--title {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    padding: 3.5rem 0 0;

    h4 {
      text-align: start;
      font-size: 3rem;
      line-height: 2rem;
      font-style: italic;
      padding-bottom: 2rem;
      padding-top: 2rem;
      border-top: 2px solid #e4e4e4;

      span {
        color: var(--body-logo);
      }
    }

    div {
      // border-top: 1px solid gray; 
      // border-bottom: 1px solid gray;

      padding: 1rem;
      flex-direction: row;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
      
      img, .img {
        width: 12rem;
        height: 17rem;
      }
    }

  }
  &--image {
    img {
      // height: auto;
      height: 100%;
      width: 100%;
    }
  }
}

@media (max-width: 768px) {
  .section {
    display: flex;
    flex-direction: column-reverse;
    &--title {
      div {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 1rem;

        img, .img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
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