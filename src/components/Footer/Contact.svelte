<script lang="ts">
  import Title from "../Projects/shared/Title.svelte";
</script>

<section>
  <div>
    <Title tagline="Contact" heading="Let's Begin" color="light" />
    <button>karrerjon@gmail.com</button>
  </div>
  <div class="social-container">
    <div class="tagline">Find me</div>
    <div class="links">
      <a target="_blank" href="https://github.com/jonkarrer">Github</a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/jon-karrer-6b8a18186/">LinkedIn</a
      >
      <a
        target="_blank"
        href="https://www.fiverr.com/jonkarrer?public_mode=true">Fiverr</a
      >
      <a target="_blank" href="https://codepen.io/jonkarrer">Codepen</a>
    </div>
  </div>
</section>

<style>
  .social-container {
    display: grid;
    gap: 20px;
    margin-top: 60px;
    color: var(--light);
  }
  .links {
    display: grid;
    gap: 30px;

    font-size: 18px;
    font-weight: 700;
  }

  button {
    height: 70px;
    width: 100%;
    font-size: 24px;

    margin-top: 30px;
  }

  /*Md*/
  @media (min-width: 768px) {
    .links {
      grid-auto-flow: column;

      font-size: 18px;
      font-weight: 700;
    }
  }
  /*Lg*/
  @media (min-width: 1024px) {
    section {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    button {
      width: 500px;
    }
  }

  /*Xl*/
  @media (min-width: 1250px) {
    .links {
      font-size: 24px;
      gap: 40px;
    }
  }
</style>
