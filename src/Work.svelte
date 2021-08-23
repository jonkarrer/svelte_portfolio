<script>
  import {scrollToWorkPage} from "./utils/store"

  let topPosition = 100;
  $: if ($scrollToWorkPage) {
    topPosition = 0;
    console.log($scrollToWorkPage)
  } else {
    console.log($scrollToWorkPage)
  }
</script>

<section style="--theme-position: {topPosition}vh">
  <div class="wrapper">
    <h1>Projects</h1>
  </div>
</section>

<style>
  section {
    position: fixed;
    top: var(--theme-position);
    width: 100%;
    height: 100vh;
    transition: top 2s ease;
    z-index: 50;
    background-color: white;
    overflow: scroll;
  }
  .wrapper {
    height: 4000px;
    background: var(--wheat);
    width: 100%;
  }
</style>