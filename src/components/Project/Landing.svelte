<script lang="ts">
</script>

<section>
  <article>
    <div class="heading-container">
      <div class="tagline">Landing Page</div>
      <h2>Serenity Hair</h2>
    </div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
    <div class="tech-container">
      <span>Netlify</span>
      <span>HTML5</span>
      <span>CSS3</span>
      <span>Javascript</span>
    </div>
  </article>
  <button>Preview</button>
</section>

<style>
  section {
    background: var(--red);
  }
  .heading-container {
    display: grid;
    gap: 8px;
  }
  article {
    display: grid;
    gap: 30px;
    padding: 40px 20px;

    border-right: var(--dark) solid 15px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;

    background: var(--light);
  }
  h2 {
    color: var(--dark);
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

    background: var(--dark);
    border-radius: 3px;

    margin-right: 10px;
    margin-top: 10px;
  }
  button {
    width: 100%;
    height: 65px;

    background: var(--dark);

    font-size: 24px;
    font-weight: 500;
    color: var(--light);

    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
  }
</style>
