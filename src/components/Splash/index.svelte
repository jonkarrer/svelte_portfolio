<script>
  import Header from "../Header.svelte";
</script>

<section>
  <Header />
  <article>
    <div>
      <h4>Hello, I'm Jonathan <span>Karrer</span></h4>
      <h1>Professional Web Developer</h1>
    </div>
    <p>
      And I can build software that helps bring you more. With all the modern
      tools available I am capable of growing your customer base, brand
      awareness, sales, and more. Together we can create an online store for
      your product or a simple landing page to showcase your services. If you
      need help with your start-up I can also offer business advice built by my
      personal experiences.
    </p>
    <button>Say Hello</button>
  </article>
</section>

<style>
  section {
    display: flex;
    align-items: center;

    height: 100vh;
  }
  article {
    display: grid;
    gap: 20px;

    color: var(--light);
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
</style>
