<script lang="ts">
  import Info from "./Info.svelte";
  import Button from "./Button.svelte";
  import Article from "./Article.svelte";
</script>

<div class="project">
  <img class="phone right" src="assets/work/serenity_phone.png" alt="" />
  <img class="tablet right" src="assets/work/serenity_tablet.png" alt="" />

  <Article
    bg="rgba(95, 96, 57, .8)"
    blur="rgba(95, 96, 57, .3)"
    alignment="left"
  >
    <img
      class="logo"
      src="assets/work/logos/serenity.png"
      alt="serenity logo"
    />
    <Info
      title="Hair Care"
      text="This project is robust. Authentication, Stripe payments, back-end API, Postgres DB, subscriptions, and more. This is still under construction."
      placeContent="start"
    />
    <Button
      text="Discover"
      link="https://www.serenityhairstudioflorida.com"
      alignment="left"
    />
  </Article>
</div>

<style>
  .project {
    height: 100vh;
    background-image: linear-gradient(160deg, #cfbca3, #5f6039);
    display: grid;
    place-content: center;
    position: relative;
    max-height: 1100px;
    min-height: 700px;
  }
  .logo {
    width: 100px;
    background: white;
    border-radius: 50%;
  }

  /*Lg*/
  @media (min-width: 1024px) {
    .project {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    .logo {
      width: 150px;
    }
  }
  /*2xl*/
  @media (min-width: 1536px) {
    .logo {
      width: 180px;
    }
  }
</style>
