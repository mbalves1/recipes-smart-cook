<template>
  <section class="section">
    <div>
      <header>
        <h2 class="title-header">What ingredients do you have at home today?</h2>
      </header>
      <div class="">
        <!-- <v-text-field label="Another input" class="input--text-field" v-model="item">
          <v-icon
            slot="append"
            color="orange"
            @click="pushBasket"
            @keydown.enter="pushBasket"
          >
            mdi-plus
          </v-icon>
        </v-text-field> -->
        <span>
          <v-combobox
            v-model="select"
            label="Choise a ingredient"
            multiple
            color="orange"
            class="combobox"
            @keyup.enter="filterByngredients"
          ></v-combobox>
        </span>
        <!-- <v-btn
          @click="dialog = true">
          Search<i class="fa fa-search" aria-hidden="true"></i>
        </v-btn> -->
        <ul v-for="(i, ixi) in []" :key="ixi" class="items-basket">
          <li>{{i}}</li>
        </ul> 
      </div>
      <div class="cards">
        <div v-for="(i, ix) in basket" :key="ix" >
          <v-card class="cards-card" flat>
            <img :src="i.image" alt="" srcset="">
            <v-card-title>{{i.nome}}</v-card-title>

            <v-card-text class="cards-card--text">
              <div>{{i.modoPreparo.split(' ').slice(0, 4).join(' ')}}...</div>
              <!-- <v-chip
                label
                outlined
                v-for="tool, toolid in i.utensilios"
                :key="toolid"
              >
                {{tool}}
              </v-chip> -->
            </v-card-text>
            <v-card-actions>
              <v-btn
                text
                color="teal accent-4"
                @click="toggleCard(ix, 'learn')"
              >
                Learn More
              </v-btn>

              <v-btn
                text
                color="teal accent-4"
                @click="toggleCard(ix, 'tools')"
              >
                Tools
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <v-card
                v-if="showCard === ix"
                class="transition-fast-in-fast-out v-card--reveal"
              >
                <v-card-text>
                  <span style="display: flex"><strong>Ingredients</strong></span>
                  <p>{{i.ingredientes}}.</p>
                  <span style="display: flex"><strong>Preparation</strong></span>
                  <p>{{i.modoPreparo}}.</p>
                </v-card-text>
                <v-card-actions class="pt-0">
                  <v-btn
                    text
                    color="teal accent-4"
                    @click="toggleCard(ix, 'learn')"
                  >
                    Close
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-expand-transition>
            <v-expand-transition>
              <v-card
                v-if="showTools === ix"
                class="transition-fast-in-fast-out v-card--reveal"
              >
                <v-card-text>
                  <span style="display: flex"><strong>Tools</strong></span>
                  <div style="display: flex" v-for="tool, tidx in i.utensilios" :key="tidx">{{tool}}</div>
                </v-card-text>
                <v-card-actions class="pt-0">
                  <v-btn
                    text
                    color="teal accent-4"
                    @click="toggleCard(ix, 'tools')"
                  >
                    Close
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-expand-transition>
          </v-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex';
import { recipes } from "@/assets/recipies.js"

export default {
  components: {
  },
  data () {
    return {
      basket: [],
      item: '',
      showCard: null,
      showTools: null,
      select: []
    }
  },
  created () {
    this.getAllRecipes()
    this.basket = recipes
  },
  computed: {
  },
  methods: {
    ...mapActions(['getAllRecipes']),
    toggleCard(item, option) {
      if (option === 'learn') {
        if(this.showCard === item) {
          this.showCard = null
        } else {
          this.showCard = item
        }
      } else {
        if(this.showTools === item) {
          this.showTools = null
        } else {
          this.showTools = item
        }
      }
    },
    filterByngredients() {
      let filteredRecipes = [];
      this.basket.forEach(recipe => {
        if (this.select.some(ingrediente => recipe.ingredientes.includes(ingrediente))) {
          filteredRecipes.push(recipe);
        }
      });
      this.basket = filteredRecipes
      return filteredRecipes;
    }
  },
  watch: {
    select(newVal) {
      if (newVal.length === 0) {
        this.basket = [...recipes];
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
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
  // min-height: 12rem;
  &-card {
    border: 1px solid #e4e4e4;
    box-shadow: 1px 0px 10px #e4e4e4;
    width: 20rem;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    img {
      height: 212px;
      width: auto;
      object-fit: cover;
      object-position: center;
    }

    &--text {
      display: flex;
      text-align: start;
    }
  
    h3 {
      // color: var(--body-logo);
    }
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


.combobox {
  display: flex;
  justify-content: center;
  width: 20rem;
  margin: auto;
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