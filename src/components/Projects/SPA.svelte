<script lang="ts">
  import { Summary, Title, TechStack, Preview } from "./shared/index";
</script>

<section>
  <Summary leftBorder bg="light" borderColor="orange">
    <Title color="dark" tagline="SPA" heading="Market Maker Lite" />
    <p>
      This is a mock e-commerce site that sells audio equipment. I got the
      design files from frontendmentor.io and was able to complete the site in
      40 hours. The product data comes from a Postgres database hosted on
      Supabase and deployed using Vercel. There is a realtime cart, total
      calculator, and a full checkout. This was not terribly difficult, and I
      could do a more complex e-commerce in the future.
    </p>
    <TechStack
      techNames={["Stripe", "Next.js", "Typescript", "Tailwind CSS"]}
      bg="red"
    />
  </Summary>
  <Preview link="/" bg="orange" />
</section>

<style>
  section {
    background: var(--dark);
  }
  p {
    color: var(--grey);
  }
</style>
