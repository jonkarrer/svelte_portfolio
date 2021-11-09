<script lang="ts">
  import Title from "../Projects/shared/Title.svelte";
</script>

<section>
  <div class="title">
    <Title tagline="Github API" heading="Some of my other work" color="light" />
  </div>
  <div class="grid">
    <span>
      <h3>myTeam</h3>
      <p>A professional basic multi page website.</p>
      <a target="_blank" href="https://jonkarrer.github.io/myTeam/">View</a>
    </span>
    <span>
      <h3>Distilled.Co</h3>
      <p>Landing page for a hair boutique.</p>
      <a target="_blank" href="https://www.hairamandag.com">View</a>
    </span>
    <span>
      <h3>Countries</h3>
      <p>I consume a all countries from an API. React.</p>
      <a target="_blank" href="https://angry-villani-a63212.netlify.app">View</a
      >
    </span>

    <span>
      <h3>Battleship</h3>
      <p>Test driven classic board game. React.</p>
      <a target="_blank" href="https://jonkarrer.github.io/battleship/">View</a>
    </span>
    <span>
      <h3>Memory</h3>
      <p>A simple game of memory with football. React.</p>
      <a target="_blank" href="https://jonkarrer.github.io/memory-cards/"
        >View</a
      >
    </span>
    <span>
      <h3>Calculator</h3>
      <p>My first project a year ago. Pure JS</p>
      <a target="_blank" href="https://jonkarrer.github.io/calculator/">View</a>
    </span>
  </div>
</section>

<style>
  .grid {
    display: grid;
    grid: auto / 1fr 1fr;
    gap: 8px;

    margin-top: 40px;
  }
  span {
    height: 220px;
    background: var(--light);
    border-radius: 3px;

    padding: 10px;

    display: grid;
    gap: 10px;
  }
  p {
    height: 75px;
  }
  a {
    background: var(--dark);
    color: white;
    height: 40px;

    display: grid;
    place-content: center;
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
    span {
      padding: 40px;
    }
    h3 {
      font-size: 36px;
    }
  }

  /*Xl*/
  @media (min-width: 1250px) {
    span {
      height: 250px;
    }
  }
</style>
