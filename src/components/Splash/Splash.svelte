<script>
</script>

<section>
  <article>
    <div class="heading-container">
      <h4>Hello, I'm Jonathan <span>Karrer</span></h4>
      <h1>Professional Web Developer</h1>
    </div>
    <p>
      And I build software that helps brings you more. With all the modern tools
      available I am capable of growing your customer base, brand awareness,
      traffic, and sales. Together we can create an online store for your
      product or a simple landing page to showcase your services. If you need
      help with your start-up I can also offer business advice built by my
      personal experiences. Scroll to see my work.
    </p>
    <button>Say Hello</button>
  </article>
  <div class="arrows-container">
    <img class="arrow-orange" src="../assets/arrow/red.svg" alt="" />
    <img src="../assets/arrow/white.svg" alt="" />
    <img src="../assets/arrow/white.svg" alt="" />
  </div>
</section>

<style>
  section {
    height: calc(100vh - 75px);
    min-height: 600px;

    padding-top: 20%;
  }
  article {
    display: grid;
    gap: 20px;

    color: var(--light);
  }
  .heading-container {
    display: grid;
    gap: 5px;
  }
  span {
    color: var(--red);
  }
  p {
    color: var(--grey);
  }
  button {
    width: 175px;
    height: 50px;

    color: var(--light);
    background: var(--red);
    margin-top: 10px;
  }
  .arrows-container {
    position: absolute;
    bottom: 20px;

    right: 20px;

    display: grid;
    place-items: center;

    width: 100px;
  }
  .arrows-container img {
    width: 40px;
  }

  /*Md*/
  @media (min-width: 768px) {
    section {
      height: calc(100vh - 150px);
    }

    .arrows-container img {
      width: 50px;
    }
  }
  /*Lg*/
  @media (min-width: 1024px) {
  }
  /*Xl*/
  @media (min-width: 1280px) {
  }
  /*2xl*/
  @media (min-width: 1536px) {
  }
</style>
