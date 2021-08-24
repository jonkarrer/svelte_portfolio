<script lang="ts">
import Info from "./Info.svelte";
import Button from "./Button.svelte";
import Article from './Article.svelte';
</script>

<div class="project">
  <img class="phone" src="assets/work/serenity_phone.png" alt="">
  <img class="tablet" src="assets/work/serenity_tablet.png" alt="">
  
     <Article bg="rgba(95, 96, 57, .8)" blur="rgba(95, 96, 57, .3)">
      <img class="logo" src="assets/work/logos/serenity.png" alt="serenity logo">
      <Info title="Hair Care" text="This project is robust. Authentication, Stripe payments, back-end API, Postgres DB, subscriptions, and more. This is still under construction."/>
      <Button text="Explore" link="https://www.serenityhairstudioflorida.com"/>
    </Article>
</div>

<style>
  .project {
    height: 100vh;
    background-image: linear-gradient(160deg, #cfbca3, #5f6039);
    display: grid;
    place-content: center;
    position: relative;
  }

  .tablet {
    display: none;
  }
  .logo {
    width: 100px;
    background: white;
    border-radius: 50%;
  }
  .phone {
    height: 90vh;
    position: absolute;
    right: -200px;
    top: 0; bottom: 0;
    margin:auto
  }
  a img {
    position: absolute; right: 30px; top: 30px;
    height: 40px;
  }

  /*Md*/
  @media (min-width: 768px) {
    .phone {
      right: -100px;
    }
  }
  /*Lg*/
  @media (min-width: 1024px) {
    .project {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    .tablet {
      position: absolute;
      display: block;
      right: -800px;
      height: 85vh;
    }
    .phone {
      position: absolute;
      right: 140px;
      right: auto; top: auto; bottom: auto;
      height: 550px;
      bottom: 30px;
      z-index: 10;
    }
    a img {
      right: 80px;
      top: 40px;
    }
  }

  /*Xl*/
  @media (min-width: 1280px) {
    .tablet {
      right: -600px;
      height: 85vh;
    }
    .phone {
      right: 380px;
      height: 550px;
    }
  }
</style>