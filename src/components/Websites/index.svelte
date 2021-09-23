<script lang="ts">
  import Headline from "./Headline.svelte";
  import Project from "./Project.svelte";
</script>

<section id="websites">
  <Headline />
  <Project
    logoPath="assets/work/logos/mml.png"
    logoWidth={110}
    screenshot="assets/work/mml_phone.png"
    title="Making Markets"
    info="This project is robust. Auth, subscriptions, Next.js, database API,
          dynamic content, and more. This is still under construction but will be
          finished soon."
    link="https://market-maker.vercel.app"
  />
  <Project
    logoPath="assets/work/logos/amanda.svg"
    logoWidth={150}
    screenshot="assets/work/amanda_phone.png"
    title="Reaching Clients"
    info="The owner wanted to re do her precvious website made with squarespace. I made a pure HTML CSS rebuild for her in a week. She has gotten more clients than she can handle now."
    link="https://www.hairamandag.com"
  />
  <Project
    logoPath="assets/work/logos/serenity.png"
    logoWidth={150}
    screenshot="assets/work/serenity_phone.png"
    title="Building Brands"
    info="A landing page for a hair stylist in florida. Clients can view her work, find her location, and contact her directly throught the page. Designed and coded from scratch."
    link="https://www.serenityhairstudioflorida.com"
  />
</section>

<style>
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
