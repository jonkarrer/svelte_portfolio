<script lang="ts">
</script>

<section>
  <article>
    <div class="heading-container">
      <div class="tagline">SPA</div>
      <h2>Market Maker Lite</h2>
    </div>
    <p>
      MML computes realtime market data into funtional decision indicators. I
      worked with a financial expert who programmed the back-end using python.
      The algorithms are proprietary tools that help subscribers make market
      decisions. I consume the API from his server and display the information
      in various graphs.
    </p>
    <div class="tech-container">
      <span>Stripe</span>
      <span>Typescript</span>
      <span>Next.js</span>
      <span>Tailwind CSS</span>
    </div>
  </article>
  <button>Preview</button>
</section>

<style>
  section {
    background: var(--dark);
  }
  .heading-container {
    display: grid;
    gap: 8px;
  }
  article {
    display: grid;
    gap: 30px;
    padding: 40px 20px;

    border-left: var(--orange) solid 15px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;

    background: var(--light);
  }
  h2 {
    color: var(--dark);
    width: 200px;
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

    background: var(--red);
    border-radius: 3px;

    margin-right: 10px;
    margin-top: 10px;
  }
  button {
    width: 100%;
    height: 65px;

    background: var(--orange);

    font-size: 24px;
    font-weight: 500;
    color: var(--light);

    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
  }
</style>
