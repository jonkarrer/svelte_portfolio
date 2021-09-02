<script>
  import Headline from "./Headline.svelte";
  import BgImage from "./BgImage.svelte";
  import Grid from "./Grid.svelte";
</script>

<section>
  <BgImage />
  <div class="wrapper">
    <Headline />
    <Grid />
  </div>
</section>

<style>
  section {
    padding: 60px 0;
  }
  .wrapper {
    height: auto;
    display: grid;
    gap: 60px;
  }
  /*Lg*/
  @media (min-width: 1024px) {
    section {
      display: flex;
      align-items: center;
    }
    .wrapper {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
    }
  }

  /*3xl*/
  @media (min-width: 2000px) {
    section {
      padding: 0 100px;
    }
  }
</style>
