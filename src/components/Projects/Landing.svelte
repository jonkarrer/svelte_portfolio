<script lang="ts">
  import { Summary, Title, TechStack, Preview } from "./shared/index";
</script>

<section>
  <Summary rightBorder bg="light" borderColor="dark">
    <Title color="dark" tagline="Landing" heading="Serenity Hair" />
    <p>
      Landing pages are a cornerstone in any marketing stratagy. Serenity Hair
      is a hair studio in Florida run by a sole stylist. She wanted a page where
      clients could see her services, contact her for appoinments, and complete
      consultations with a form. I designed everything from the ground up with
      figma and we were able to colaborate completely through email.
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
