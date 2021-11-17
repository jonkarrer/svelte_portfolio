<script lang="ts">
  import { Summary, Title, TechStack, Preview, Gallery } from "./shared/index";
</script>

<section id="e-commerce">
  <Gallery>
    <span class="one"
      ><img src="./assets/audiophile/tablet.png" alt="mobile view" /></span
    >
    <span class="two"
      ><img src="./assets/audiophile/mobile.png" alt="mobile view" /></span
    >
    <span class="three"
      ><img src="./assets/audiophile/desktop.png" alt="mobile view" /></span
    >
  </Gallery>
  <div class="summary">
    <Summary rightBorder bg="dark" borderColor="red">
      <Title color="light" tagline="e-Commerce" heading="audiophile" />
      <p>
        This is a mock e-commerce site that sells audio equipment. I got the
        design files from frontendmentor.io and was able to complete the site in
        40 hours. The product data comes from a Postgres database hosted on
        Supabase and deployed using Vercel. There is a realtime cart, total
        calculator, and a full checkout. This was not terribly difficult, and I
        could do a more complex e-commerce in the future.
      </p>
      <TechStack
        techNames={["Supabase", "Next.js", "Typescript", "Tailwind CSS"]}
        bg="orange"
      />
    </Summary>
    <Preview link="https://silly-dubinsky-a8c901.netlify.app" bg="red" />
  </div>
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
