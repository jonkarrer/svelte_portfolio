<script>
  import Article from "./Article.svelte";
</script>

<section>
  <Article />
</section>

<style>
  section {
    background: var(--background);
  }
  /*Lg*/
  @media (min-width: 1024px) {
    section {
      display: flex;
      align-items: center;
    }
  }
  /*Xl*/
  @media (min-width: 1280px) {
  }
  /*2xl*/
  @media (min-width: 1536px) {
  }
</style>
