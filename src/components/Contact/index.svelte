<script>
  import Available from "./Available.svelte";
  import BgImage from "./BgImage.svelte";
  import Form from "./Form.svelte";
  import Headline from "./Headline.svelte";
</script>

<section>
  <BgImage />
  <Headline />

  <Available />
  <Form />
</section>

<style>
  section {
    display: grid;
    place-content: center;
    gap: 60px;
    margin: 80px 0;
  }
  /*Lg*/
  @media (min-width: 1024px) {
    section {
      min-width: 100vw;
      height: 100vh;
      position: relative;
      margin: auto;
    }
  }
</style>
