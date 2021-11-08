<script lang="ts">
</script>

<section>
  <article>
    <div class="heading-container">
      <div class="tagline">Web App</div>
      <h2>Recipe Builder</h2>
    </div>
    <p>
      I am a profesional chef as well as a programmer, so I decided to build a
      recipe app of course. I did not use a framework, but used typescript to
      organize the code. The app has a full "CRUD" workflow. The user's local
      storage object is serving as my mock database to store thier recipes. This
      could be made into a full stack app in the future.
    </p>
    <div class="tech-container">
      <span>Typescript</span>
      <span>HTML5</span>
      <span>CSS3</span>
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

    border-left: var(--grey) solid 15px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;

    background: var(--dark);
  }
  h2 {
    color: var(--orange);
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

    background: var(--grey);

    font-size: 24px;
    font-weight: 500;
    color: var(--light);

    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
  }
</style>
