<script lang="ts">
  import { Glass, Rain, Hello } from "./components/Home/index.js";
  import About from "./components/About/About.svelte";
</script>

<section class="home">
  <div class="wrapper">
    <Rain />
    <Glass />
    <Hello />
    <About />
  </div>
</section>

<style>
  .home {
    overflow: hidden;
  }
  .wrapper {
    position: relative;
    background: var(--blue);
    height: 100vh;
  }
  /*Lg*/
  @media (min-width: 1024px) {
    .wrapper {
      min-height: 600px;
    }
  }
</style>
