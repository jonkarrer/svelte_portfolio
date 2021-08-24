<script lang="ts">
import Info from "./Info.svelte";
import Button from "./Button.svelte";
import Article from './Article.svelte';
</script>

<div class="project">
  <img class="phone" src="assets/work/mml_phone.png" alt="">
  <img class="tablet" src="assets/work/mml_tablet.png" alt="">
    <Article bg="hsla(200, 50%, 50%, .8)" blur="rgba(255, 255, 255, .2)">
      <h3>mml</h3>
      <Info title="Making Markets" text="This project is robust. Authentication, Stripe payments, back-end API, Postgres DB, subscriptions, and more. This is still under construction."/>
      <Button text="Explore" link="https://www.serenityhairstudioflorida.com"/>
    </Article>
</div>

<style>
  .project {
    height: 100vh;
    background-image: linear-gradient(110deg, #00beb3, #5653ff);
    display: grid;
    place-content: center;
  }
  .tablet {
    display: none;
  }
  .phone {
    height: 90vh;
    position: absolute;
    left: -200px;
    top: 0; bottom: 0;
    margin:auto
  }

  /*Md*/
  @media (min-width: 768px) {
    .phone {
      left: -100px;
    }
  }

  /*Lg*/
  @media (min-width: 1024px) {
    .project {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
    .tablet {
      position: absolute;
      display: block;
      left: -800px;
      height: 85vh;
    }
    .phone {
      position: absolute;
      left: 140px;
      right: auto; top: auto; bottom: auto;
      height: 550px;
      bottom: 30px;
      z-index: 10;
    }
    h3 {
      font-weight: 900;
    }
  }
  
  /*Xl*/
  @media (min-width: 1280px) {
    .tablet {
      left: -600px;
      height: 85vh;
    }
    .phone {
      left: 380px;
      height: 550px;
    }
    h3 {
      font-weight: 900;
    }
  }


</style>