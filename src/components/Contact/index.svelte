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
  /*Lg*/
  @media (min-width: 1024px) {
    section {
      min-width: 100vw;
      min-height: 600px;
      position: relative;
    }
  }
  /*Xl*/
  @media (min-width: 1280px) {
  }
  /*2xl*/
  @media (min-width: 1536px) {
  }
</style>
