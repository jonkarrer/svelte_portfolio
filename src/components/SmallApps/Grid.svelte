<script lang="ts">
  import Filters from "./Filters.svelte";
  import App from "./App.svelte";
</script>

<div class="wrapper">
  <Filters />
  <div class="grid_container">
    <App item="one" />
    <App item="two" />
    <App item="three" />
    <App item="four" />
    <App item="five" />
    <App item="six" />
  </div>
</div>

<style>
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
  /*Xl*/
  @media (min-width: 1280px) {
  }
  /*2xl*/
  @media (min-width: 1536px) {
    .grid_container {
      gap: 30px;
    }
  }
</style>
