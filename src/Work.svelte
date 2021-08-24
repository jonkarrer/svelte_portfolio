<script>
  import { Mml, Serenity } from "./components/Work/index.js";
  import { scrollToWorkPage } from "./utils/store";

  let topPosition = 100;
  $: if ($scrollToWorkPage) {
    topPosition = 0;
    console.log($scrollToWorkPage);
  } else {
    console.log($scrollToWorkPage);
  }
</script>

<section style="--theme-position: {topPosition}vh">
  <div class="wrapper">
    <Mml />
    <Serenity />
  </div>
</section>

<style>
  section {
    position: fixed;
    top: var(--theme-position);
    width: 100%;
    height: 100vh;
    transition: top 1s linear;
    z-index: 50;
    background-color: white;
    overflow-y: scroll;
    overflow-x: hidden;

    left: 0;
    right: 0;
  }
  .wrapper {
    height: 4000px;
    width: 100%;
  }
</style>
