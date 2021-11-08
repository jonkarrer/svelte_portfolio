<script lang="ts">
  import { Summary, Title, TechStack, Preview } from "./shared/index";
</script>

<section>
  <Summary rightBorder bg="light" borderColor="dark">
    <Title color="dark" tagline="Landing" heading="Serenity Hair" />
    <p>
      This is a mock e-commerce site that sells audio equipment. I got the
      design files from frontendmentor.io and was able to complete the site in
      40 hours. The product data comes from a Postgres database hosted on
      Supabase and deployed using Vercel. There is a realtime cart, total
      calculator, and a full checkout. This was not terribly difficult, and I
      could do a more complex e-commerce in the future.
    </p>
    <TechStack
      techNames={["Netlify", "HTML5", "CSS3", "Javascript"]}
      bg="dark"
    />
  </Summary>
  <Preview link="/" bg="dark" />
</section>

<style>
  section {
    background: var(--red);
  }
  p {
    color: var(--grey);
  }
</style>
