<script lang="ts">
  import Info from "./Info.svelte";
  import Button from "./Button.svelte";
  import Article from "./Article.svelte";
</script>

<div class="project">
  <img class="phone left" src="assets/work/mml_phone.png" alt="" />
  <img class="tablet left" src="assets/work/mml_tablet.png" alt="" />
  <Article
    bg="hsla(200, 50%, 50%, .8)"
    blur="rgba(255, 255, 255, .2)"
    alignment="right"
  >
    <h3>mml</h3>
    <Info
      title="Making Markets"
      text="This project is robust. Authentication, Stripe payments, back-end API, Postgres DB, subscriptions, and more. This is still under construction."
      placeContent="end"
    />
    <Button
      text="Explore"
      link="https://www.serenityhairstudioflorida.com"
      alignment="right"
    />
  </Article>
</div>

<style>
  .project {
    height: 100vh;
    background-image: linear-gradient(110deg, #00beb3, #5653ff);
    display: grid;
    place-content: center;
    position: relative;
    max-height: 1100px;
    min-height: 700px;
  }
  h3 {
    font-weight: 900;
  }

  /*Lg*/
  @media (min-width: 1024px) {
    .project {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
  }
</style>
