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
