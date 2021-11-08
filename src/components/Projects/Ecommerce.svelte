<script lang="ts">
  import { Summary, Title, TechStack, Preview } from "./shared/index";
</script>

<section>
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
  <Preview link="/" bg="red" />
</section>

<style>
  section {
    background: var(--light);
  }
  p {
    color: var(--grey);
  }
</style>
