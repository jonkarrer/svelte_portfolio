<script lang="ts">
  import Title from "../Projects/shared/Title.svelte";
</script>

<section>
  <div class="title">
    <Title tagline="Github API" heading="Some of my other work" color="light" />
  </div>
  <div class="grid">
    <span>One</span>
    <span>One</span>
    <span>One</span>
    <span>One</span>
    <span>One</span>
    <span>One</span>
  </div>
</section>

<style>
  .grid {
    display: grid;
    grid: auto / 1fr 1fr;
    gap: 10px;

    margin-top: 40px;
  }
  span {
    height: 200px;
    background: var(--light);
    border-radius: 3px;
  }
  /*Md*/
  @media (min-width: 768px) {
    .grid {
      gap: 20px;
    }
  }
  /*Lg*/
  @media (min-width: 1024px) {
    section {
      display: grid;
    }
    .grid {
      grid: auto / repeat(3, 1fr);
      gap: 20px;
    }
    .title {
      justify-self: end;
    }
  }
  /*Xl*/
  @media (min-width: 1250px) {
    span {
      height: 250px;
    }
  }
  /*2xl*/
  @media (min-width: 1536px) {
  }
</style>
