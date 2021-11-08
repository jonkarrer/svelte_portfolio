<script lang="ts">
  import { Summary, Title, TechStack, Preview } from "./shared/index";
</script>

<section>
  <Summary leftBorder bg="dark" borderColor="grey">
    <Title color="orange" tagline="Web App" heading="Recipe Builder" />
    <p>
      I am a profesional chef as well as a programmer, so I decided to build a
      recipe app of course. I did not use a framework, but used typescript to
      organize the code. The app has a full "CRUD" workflow. The user's local
      storage object is serving as my mock database to store thier recipes. This
      could be made into a full stack app in the future.
    </p>
    <TechStack techNames={["Typescript", "CSS3", "HTML5"]} bg="red" />
  </Summary>
  <Preview link="/" bg="grey" />
</section>

<style>
  section {
    background: var(--light);
  }
  p {
    color: var(--grey);
  }
</style>
