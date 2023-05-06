<template>
  <section class="section">
    <div class="container">
      <header>
        <h2 class="title-header">Find Your Recipe Today</h2>
      </header>
      <carousel :perPage="2">
        <slide v-for="(i, idx) in 3" :key="idx">
          <div class="card">
            <h3>Receita {{ idx }}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quo soluta non odit minima, officia cum voluptatum laudantium reprehenderit ullam similique minus inventore vero unde tenetur reiciendis fuga atque accusantium!</p>
          </div>
        </slide>
      </carousel>
    </div>
  </section>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import { mapActions } from 'vuex';

export default {
  components: {
    Carousel,
    Slide,
  },
  created () {
    this.getAllRecipes()
  },
  methods: {
    ...mapActions(['getAllRecipes'])
  }
};
</script>

<style lang="scss" scoped>
 /* import 'swiper/css'; */
.section {
  padding: var(--header-height) 0;
}

.card {
  border: 1px solid #e4e4e4;
  box-shadow: 1px 0px 10px #e4e4e4;
  // height: 12rem;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;

  h3 {
    color: var(--body-logo);
  }
}

.title-header {
  text-align: center;
  font-size: 3rem !important;
  line-height: 2rem;
  padding-bottom: 2rem;
  padding-top: 2rem;
  line-height: 0.8;
}

@media (min-width: 1200px) {
  /* reusable classes */
  .section {
    max-width: 1120px;
    margin-left: auto;
    margin-right: auto;
  }

  .title-header {
   line-height: 0.8;
  }
}

</style>