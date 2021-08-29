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
  /*3xl*/
  @media (min-width: 2000px) {
  }
  /*4xl*/
  @media (min-width: 2500px) {
  }
  /*5xl*/
  @media (min-width: 3000px) {
    section {
      min-height: 1350px;
    }
  }
  /*4k*/
  @media (min-width: 3500px) {
    section {
      min-height: 1550px;
    }
  }
</style>
