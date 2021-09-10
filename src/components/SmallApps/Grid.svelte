<script lang="ts">
  import App from "./App.svelte";
</script>

<div class="wrapper">
  <div class="grid_container">
    <App
      img="/assets/web_apps/countries.png"
      link="https://angry-villani-a63212.netlify.app"
    />
    <App
      img="/assets/web_apps/cards.png"
      link="https://jonkarrer.github.io/memory-cards/"
    />
    <App img="/assets/web_apps/blog.png" link="https://www.chewedup.blog" />
    <App
      img="/assets/web_apps/cart.png"
      link="https://jonkarrer.github.io/capstone-project/order"
    />
    <App
      img="/assets/web_apps/battleship.png"
      link="https://jonkarrer.github.io/battleship/"
    />
    <App
      img="/assets/web_apps/calculator.png"
      link="https://jonkarrer.github.io/calculator/"
    />
  </div>
</div>

<style>
  .wrapper {
    display: grid;
    margin: 0 15px;
    gap: 5%;
  }
  .grid_container {
    display: grid;
    grid: auto-flow / repeat(2, 1fr);
    gap: 10px;
  }
  /*Lg*/
  @media (min-width: 1024px) {
    .wrapper {
      display: grid;
      gap: 5%;
    }
    .grid_container {
      display: grid;
      grid: auto-flow / repeat(3, 1fr);
      gap: 20px;
    }
  }
  /*5xl*/
  @media (min-width: 3000px) {
    .grid_container {
      gap: 30px;
    }
  }
</style>
