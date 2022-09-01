<template>
  <div>
    <header id="header-home">
      <nav class="container">
        <span class="logo">
          <i class="fa fa-cutlery" aria-hidden="true"></i>cook<span class="logo-smart">smart.</span></span>
        <nav>
          <ul>
            <li>Search</li>
          </ul>
        </nav>
        <span>Contato</span>
        <!-- menu -->
      </nav>
    </header>
    <section-about></section-about>
    <!-- <section-number></section-number> -->
    <section-recipes></section-recipes>
    <div class="divider-1"></div>
    <section-sample></section-sample>
    <div class="divider-2"></div>
    <section-search></section-search>
    <footer-view></footer-view>
  </div>
</template>

<script>
import SectionAbout from '@/components/Section-about.vue'
// import SectionNumber from '@/components/Section-number.vue'
import SectionSample from '@/components/Section-sample.vue'
import SectionRecipes from '@/components/Section-recipes.vue'
import SectionSearch from '@/components/Section-search.vue'
import FooterView from '@/components/FooterView.vue'
export default {
  name: 'HomeView',
  components: {
    SectionAbout,
    // SectionNumber,
    SectionSample,
    SectionRecipes,
    SectionSearch,
    FooterView
  }
}
</script>

<style lang="scss" scoped>
#header-home {
  border-bottom: 1px solid #e4e4e4;
  margin-bottom: 2rem;
  display: flex;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: var(--body);
  width: 100%;
}

#header-home.scroll {
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.15);
}

/*====  LOGO ============================ */
.logo {
  font-weight: 700;
  font-size: 1.25rem;
  font-family: var(--title-font);
  color: var(--body-logo);
  display: flex;
  i {
    padding-right: 0.25rem;
  }
  &-smart {
    color: #000;
  }
}

nav {
  height: var(--header-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  ul {
    display: flex;
    li {
      padding-left: 2.05rem;
    }
  }
}

@media (min-width: 1200px) {
  /* reusable classes */
  .container {
    max-width: 1120px;
    margin-left: auto;
    margin-right: auto;
  }
}

</style>
