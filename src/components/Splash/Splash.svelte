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
    height: 100vh;
    min-height: 700px;

    padding-top: 40%;

    display: block;
    position: relative;
    z-index: 2;
  }
  section::after {
    content: "";
    background: url("../assets/bg.jpg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.3;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
  article {
    display: grid;
    gap: 20px;

    color: var(--light);
    z-index: 15;
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
    bottom: 30px;

    right: 0;

    display: grid;
    place-items: center;

    width: 100px;

    z-index: 10;
  }
  .arrows-container img {
    width: 40px;
  }

  /*Md*/
  @media (min-width: 768px) {
    section {
      padding-top: 10%;

      display: flex;
      align-items: center;
    }

    .arrows-container img {
      width: 50px;
    }
  }
  /*Lg*/
  @media (min-width: 1024px) {
    section {
      padding-top: 10%;

      display: flex;
      align-items: center;
    }
    .arrows-container img {
      width: 50px;
    }
    article {
      width: 850px;
    }
    .heading-container {
      justify-self: end;
    }
    p {
      text-align: right;
      width: 85%;
      justify-self: end;
    }
    button {
      justify-self: end;
    }
  }
  /*Xl*/
  @media (min-width: 1280px) {
    .arrows-container {
      right: 40px;
    }
    .arrows-container img {
      width: 60px;
    }
  }
  /*2xl*/
  @media (min-width: 1536px) {
  }
</style>
