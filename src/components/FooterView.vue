<template>
   <footer class="section">
      <div class="container grid">
        <div class="brand">
          <span class="logo logo-alt" href="#home">cook<span style="color: white; font-weight: bold;">smart</span>.</span>
          <p>©2021 CookSmart.</p>
          <p>Todos os direitos reservados.</p>
        </div>

        <div class="social grid">
          <a href="https://instagram.com" target="_blank">
            <i class="icon-instagram"></i>
          </a>
          <a href="https://facebook.com" target="_blank">
            <i class="icon-facebook"></i
          ></a>
          <a href="https://youtube.com" target="_blank"
            ><i class="icon-youtube"></i
          ></a>
        </div>
      </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
.section {
  padding: 3rem;
  display: flex;
  flex-direction: row;
}

span {
  font-size: 2rem;
  color: #2c3e50;
}

.logo {
  font-weight: bold;
}

footer, .container, .social, .brand, p, a, span {
  background: var(--body-logo);
}

@media (min-width: 1200px) {
  /* reusable classes */
  .section {
    /* max-width: 1120px; */
    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-template-columns: repeat(2, 50%);
  }
}
</style>