<script lang="ts">
  import Gallery from "./shared/Gallery.svelte";

  import { Summary, Title, TechStack, Preview } from "./shared/index";
</script>

<section id="Web App">
  <div class="summary">
    <Summary leftBorder bg="light" borderColor="orange">
      <Title color="dark" tagline="Web App" heading="Recipe Builder" />
      <p>
        I am a profesional chef as well as a programmer, so I decided to build a
        recipe app of course. I did not use a framework, but used typescript to
        organize the code. The app has a full "CRUD" workflow. The user's local
        storage object is serving as my database to store thier recipes. This
        can be integrated into a website in the future or built out as a full
        stack app.
      </p>
      <TechStack techNames={["Typescript", "CSS3", "HTML5"]} bg="red" />
    </Summary>
    <Preview link="https://jonkarrer.github.io/Recipe_App/" bg="orange" />
  </div>
  <Gallery>
    <span class="one"
      ><img src="./assets/recipe/tablet.png" alt="mobile view" /></span
    >
    <span class="two"
      ><img src="./assets/recipe/mobile.png" alt="mobile view" /></span
    >
    <span class="three"
      ><img src="./assets/recipe/desktop.png" alt="mobile view" /></span
    >
  </Gallery>
</section>

<style>
  section {
    background: var(--grey);
  }
  p {
    color: var(--grey);
  }

  /*Lg*/
  @media (min-width: 1024px) {
    section {
      display: flex;
      justify-content: space-between;
    }
    .summary {
      width: 500px;
    }

    .one {
      grid-column: 1 / span 2;
    }
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
    .three {
      grid-column: 1 / span 3;
    }
  }

  /*Xl*/
  @media (min-width: 1250px) {
    section {
      align-items: center;
    }
  }
</style>
