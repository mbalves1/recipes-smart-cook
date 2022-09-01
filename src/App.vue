<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Alumni+Sans+Pinstripe&family=Roboto:wght@300;400;500;700&family=Space+Grotesk:wght@300;600&display=swap');
/*====  RESET ============================ */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: var(--body);
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  color: #2c3e50;
}
/*====  VARIABLES ============================ */
:root {
  --header-height: 4.5rem;

  /* colors */
  --hue: 200;
  /* HSL color mode */
  --base-color: hsl(var(--hue) 36% 57%);
  --base-color-second: hsl(var(--hue) 65% 88%);
  --base-color-alt: hsl(var(--hue) 57% 53%);
  --title-color: hsl(var(--hue) 41% 10%);
  --text-color: hsl(0 0% 46%);
  --text-color-light: hsl(0 0% 98%);
  --body: #f9f6f0;
  --body-logo: #f47825;

  /* fonts */
  --title-font-size: 1.875rem;
  --subtitle-font-size: 1rem;

  --title-font: 'Space Grotesk', sans-serif;
  --body-font: 'DM Sans', sans-serif;
}

#app {
  font-family: 'Space Grotesk', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.divider-1 {
  height: 1px;
  background: linear-gradient(
    270deg,
    hsla(var(--hue), 36%, 57%, 1),
    hsla(var(--hue), 65%, 88%, 0.34)
  );
}

.divider-2 {
  height: 1px;
  background: linear-gradient(
    270deg,
    hsla(var(--hue), 65%, 88%, 0.34),
    hsla(var(--hue), 36%, 57%, 1)
  );
}
</style>

