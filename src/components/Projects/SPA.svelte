<script lang="ts">
  import { Summary, Title, TechStack, Preview, Gallery } from "./shared/index";
</script>

<section>
  <div class="summary">
    <Summary leftBorder bg="dark" borderColor="grey">
      <Title color="orange" tagline="SPA" heading="Market Maker Lite" />
      <p>
        MML computes realtime market data into funtional decision indicators. I
        worked with a financial expert who programmed the back-end using python.
        The algorithms are proprietary tools that help subscribers make market
        decisions. I consume the API from his server and display the information
        in various graphs.
      </p>
      <TechStack
        techNames={["Stripe", "Next.js", "Typescript", "Tailwind CSS"]}
        bg="red"
      />
    </Summary>
    <Preview link="https://market-maker.vercel.app" bg="grey" />
  </div>
  <Gallery>
    <span class="one"
      ><img src="./assets/mml/tablet.png" alt="mobile view" /></span
    >
    <span class="two"
      ><img src="./assets/mml/mobile.png" alt="mobile view" /></span
    >
    <span class="three"
      ><img src="./assets/mml/desktop.png" alt="mobile view" /></span
    >
  </Gallery>
</section>

<style>
  section {
    background: var(--light);
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
