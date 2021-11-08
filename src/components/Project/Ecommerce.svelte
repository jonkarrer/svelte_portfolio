<script lang="ts">
</script>

<section>
  <article>
    <div class="heading-container">
      <div class="tagline">e-Commerce</div>
      <h2>audiophile</h2>
    </div>
    <p>
      This is a mock e-commerce site that sells audio equipment. I got the
      design files from frontendmentor.io and was able to complete the site in
      40 hours. The product data comes from a Postgres database hosted on
      Supabase and deployed using Vercel. There is a realtime cart, total
      calculator, and a full checkout. This was not terribly difficult, and I
      could do a more complex e-commerce in the future.
    </p>
    <div class="tech-container">
      <span>Supabase</span>
      <span>Next.js</span>
      <span>Tailwind CSS</span>
      <span>Typescript</span>
    </div>
  </article>
  <button>Preview</button>
</section>

<style>
  section {
    background: var(--light);
  }
  .heading-container {
    display: grid;
    gap: 8px;
  }
  article {
    display: grid;
    gap: 30px;
    padding: 40px 20px;

    border-right: var(--red) solid 15px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    background: var(--dark);
  }
  h2 {
    color: var(--light);
  }
  p {
    color: var(--grey);
  }
  .tech-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
  }
  span {
    padding: 5px 10px;

    color: var(--light);
    font-size: 13px;
    font-weight: bold;

    background: var(--orange);
    border-radius: 3px;

    margin-right: 10px;
    margin-top: 10px;
  }
  button {
    width: 100%;
    height: 65px;

    background: var(--red);

    font-size: 24px;
    font-weight: 500;
    color: var(--light);

    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
  }
</style>
