<script>
  import BgImage from "./BgImage.svelte";
  import Bullets from "./Bullets.svelte";
  import Info from "./Info.svelte";
</script>

<section>
  <article>
    <Info />
    <Bullets />
  </article>
  <BgImage />
</section>

<style>
  section {
    margin: 60px 0;
    display: grid;
    place-items: center;
    height: auto;
  }
  article {
    display: grid;
    margin: auto;
    width: 90%;
    gap: 40px;
  }

  /*Lg*/
  @media (min-width: 1024px) {
    section {
      display: flex;
      align-items: center;
      height: 100vh;
      margin: auto;
    }
    article {
      display: grid;
      width: 50%;
      margin-left: 200px;
      gap: 40px;
    }
  }
  /*4xl*/
  @media (min-width: 2500px) {
    article {
      margin-left: 400px;
    }
  }
</style>
