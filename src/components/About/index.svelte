<script>
  import BgImage from "./BgImage.svelte";
  import Bullets from "./Bullets.svelte";
  import Article from "./Article.svelte";
</script>

<section>
  <div>
    <Article />
    <Bullets />
  </div>
  <BgImage />
</section>

<style>
  section {
    display: grid;
    place-items: center;
    margin: 60px 0;
    height: auto;
  }
  div {
    display: grid;
    gap: 40px;
    margin: auto;
    width: 90%;
  }

  /*Lg*/
  @media (min-width: 1024px) {
    section {
      display: flex;
      align-items: center;
      margin: 0 auto;
    }
    div {
      gap: 40px;
      width: 50%;
      margin-left: 200px;
    }
  }

  /*4xl*/
  @media (min-width: 2500px) {
    div {
      gap: 60px;
      margin-left: 400px;
    }
  }
</style>
