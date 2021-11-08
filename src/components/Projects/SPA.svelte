<script lang="ts">
  import { Summary, Title, TechStack, Preview } from "./shared/index";
</script>

<section>
  <Summary leftBorder bg="light" borderColor="orange">
    <Title color="dark" tagline="SPA" heading="Market Maker Lite" />
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
