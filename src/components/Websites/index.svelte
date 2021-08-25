<script>
  import Headline from "./Headline.svelte";
</script>

<section>
  <Headline />
</section>

<style>
  /*Lg*/
  @media (min-width: 1024px) {
    section {
      display: flex;
      align-items: center;
      padding: 0 100px;
    }
  }
  /*Xl*/
  @media (min-width: 1280px) {
  }
  /*2xl*/
  @media (min-width: 1536px) {
  }
</style>
