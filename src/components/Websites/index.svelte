<script lang="ts">
  import Headline from "./Headline.svelte";
  import Project from "./Project.svelte";
</script>

<section>
  <Headline />
  <Project
    logoPath="assets/work/logos/mml.png"
    logoWidth={100}
    screenshot="assets/work/mml_phone.png"
    title="Making Markets"
    info="This project is robust. Auth, subscriptions, Next.js, database API,
          dynamic content, and more. This is still under construction but will be
          finished soon."
  />
  <Project
    logoPath="assets/work/logos/amanda.svg"
    logoWidth={150}
    screenshot="assets/work/amanda_phone.png"
    title="Reaching Clients"
    info="This project is robust. Auth, subscriptions, Next.js, database API,
          dynamic content, and more. This is still under construction but will be
          finished soon."
  />
  <Project
    logoPath="assets/work/logos/serenity.png"
    logoWidth={150}
    screenshot="assets/work/serenity_phone.png"
    title="Building Brands"
    info="This project is robust. Auth, subscriptions, Next.js, database API,
          dynamic content, and more. This is still under construction but will be
          finished soon."
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
