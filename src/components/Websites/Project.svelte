<script lang="ts">
  export let screenshot: string;
  export let logoPath: string;
  export let logoWidth: number;
  export let title: string;
  export let info: string;
</script>

<div class="wrapper">
  <img class="screenshot" src={screenshot} alt="" />
  <article>
    <span>
      <img
        class="logo"
        src={logoPath}
        style="--logoWidth: {logoWidth}px;"
        alt=""
      />
    </span>
    <div class="info">
      <h2 class="hollow_text">{title}</h2>
      <p>
        {info}
      </p>
      <button>Visit</button>
    </div>
  </article>
</div>

<style>
  /*Lg*/
  @media (min-width: 1024px) {
    .wrapper {
      display: flex;
      align-items: center;
    }
    .screenshot {
      --change-max-h: calc(500px + 10vh);
      --change-min-h: calc(250px + 50vh);

      height: 75vh;
      max-height: var(--change-max-h);
      min-height: var(--change-min-h);
    }
    article {
      display: grid;

      height: 60vh;
      max-height: var(--change-max-h);
      min-height: var(--change-min-h);

      width: 50vw;
    }
    span {
      height: 10vh;
      display: flex;
      align-items: center;
    }
    .logo {
      width: var(--logoWidth);
    }
    p {
      width: 80%;
    }
    .info {
      display: grid;
      gap: 30px;
    }
    button {
      height: 60px;
      width: 200px;
      color: white;
      background: black;
      outline: none;
      border: none;
    }
  }
  /*Xl*/
  @media (min-width: 1280px) {
  }
  /*2xl*/
  @media (min-width: 1536px) {
  }
  /*3xl*/
  @media (min-width: 2000px) {
  }
  /*4xl*/
  @media (min-width: 2500px) {
    .logo {
      width: calc(var(--logoWidth) + 100px);
    }
    button {
      height: 110px;
      width: 350px;
    }
  }
  /*5xl*/
  @media (min-width: 3000px) {
    article {
      height: 1100px;
      width: 1700px;
    }
    /* span {
      height: 250px;
    } */
    .logo {
      width: calc(var(--logoWidth) + 120px);
    }
    button {
      height: 120px;
      width: 400px;
    }
  }
  /*4k*/
  @media (min-width: 3500px) {
    article {
      height: 1200px;
      width: 1800px;
    }
    .logo {
      width: calc(var(--logoWidth) + 130px);
    }
    p {
      width: 1300px;
    }
    button {
      height: 120px;
      width: 400px;
    }
  }
</style>
