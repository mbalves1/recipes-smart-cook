<template>
  <section class="section">
    <div class="">
      <header>
        <h2 class="title-header">What ingredients do you have at home today?</h2>
      </header>
      <div class="input">
        <v-text-field label="Another input" class="input--text-field" v-model="item">
          <v-icon
            slot="append"
            color="orange"
            @click="pushBasket"
            @keydown.enter="pushBasket"
          >
            mdi-plus
          </v-icon>
        </v-text-field>
        <!-- <v-btn
          @click="dialog = true">
          Search<i class="fa fa-search" aria-hidden="true"></i>
        </v-btn> -->
        <ul v-for="(i, ixi) in basket" :key="ixi" class="items-basket">
          <li>{{i}}</li>
        </ul> 
      </div>
      <div class="cards">
        <div v-for="(i, ix) in 10" :key="ix" >
          <v-card class="cards-card">
            {{ix}}
          </v-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  components: {
  },
  data () {
    return {
      basket: [],
      item: ''
    }
  },
  created () {
    this.getAllRecipes()
  },
  computed: {
  },
  methods: {
    ...mapActions(['getAllRecipes']),
    pushBasket () {
      console.log('basket', this.basket);
      this.basket.push(this.item)
      this.item = ''
    }
  }
};
</script>

<style lang="scss" scoped>
 /* import 'swiper/css'; */
.section {
  padding: var(--header-height) 0;
}

.fa {
  padding-left: 10px;
}

.item-basket {
  display: flex;
}

.input {
  display: flex;
  min-width: 20rem;
  max-width: 20rem;

  &--text-field {
    justify-content: center;
    align-items: center;
  }
  
  // div {
  //   height: 2rem;
  //   border: 1px solid #b8b8b8;
  //   border-radius: 2px;
  //   background: #f9f6f0;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   font-weight: bold;
  //   cursor: pointer;
  // }

  // div:hover {
  //   box-shadow: 1px 1px #e4e4e5;
  // }

  //  div::before {
  //   box-shadow: 1px 0px grey;
  // }
}

.cards {
  display: flex;
  flex-wrap: wrap;
  &-card {
    border: 1px solid #e4e4e4;
    box-shadow: 1px 0px 10px #e4e4e4;
    height: 12rem;
    width: 10rem;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem;
  
    h3 {
      color: var(--body-logo);
    }
  }
}

.title-header {
  text-align: center;
  font-size: 3rem !important;
  line-height: 2rem;
  padding-bottom: 2rem;
  padding-top: 2rem;
}

@media (min-width: 1200px) {
  /* reusable classes */
  .section {
    max-width: 1120px;
    margin-left: auto;
    margin-right: auto;
  }
}

@media (max-width: 768px) {
  /* reusable classes */
  .cards {
    justify-content: center;
    &-card {
    }
  }
}

</style>