<script lang="ts">
  import { Summary, Title, TechStack, Preview, Gallery } from "./shared/index";
</script>

<section id="Landing">
  <Gallery>
    <span class="one"
      ><img src="./assets/serenity/tablet.png" alt="mobile view" /></span
    >
    <span class="two"
      ><img src="./assets/serenity/mobile.png" alt="mobile view" /></span
    >
    <span class="three"
      ><img src="./assets/serenity/desktop.png" alt="mobile view" /></span
    >
  </Gallery>
  <div class="summary">
    <Summary rightBorder bg="light" borderColor="dark">
      <Title color="dark" tagline="Landing" heading="Serenity Hair" />
      <p>
        Landing pages are a cornerstone in any marketing stratagy. Serenity Hair
        is a hair studio in Florida run by a sole stylist. She wanted a page
        where clients could see her services, contact her for appoinments, and
        complete consultations with a form. I designed everything from the
        ground up with figma and we were able to colaborate completely through
        email.
      </p>
      <TechStack
        techNames={["Netlify", "HTML5", "CSS3", "Javascript"]}
        bg="dark"
      />
    </Summary>
    <Preview link="https://www.serenityhairstudioflorida.com" bg="dark" />
  </div>
</section>

<style>
  section {
    background: var(--red);
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
