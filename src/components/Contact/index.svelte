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
      min-height: 600px;
      position: relative;
      margin: auto;
    }
  }
  /*2xl*/
  @media (min-width: 1536px) {
    section {
      min-height: 800px;
    }
  }
  /*3xl*/
  @media (min-width: 2000px) {
    section {
      min-height: 1000px;
    }
  }
  /*4xl*/
  @media (min-width: 2500px) {
    section {
      min-height: 1250px;
    }
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
