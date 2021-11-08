<section>
  <div>
    <div class="heading-container">
      <div class="tagline">Contact</div>
      <h2>Let's Begin</h2>
    </div>
    <button>karrerjon@gmail.com</button>
  </div>
  <div class="social-container">
    <div class="tagline">Find me</div>
    <div class="links">
      <a href="/">Github</a>
      <a href="/">LinkedIn</a>
      <a href="/">Fiverr</a>
      <a href="/">Codepen</a>
    </div>
  </div>
</section>

<style>
  .heading-container {
    display: grid;
    gap: 8px;
  }
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
  h2 {
    color: var(--light);
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
</style>
