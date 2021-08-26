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
    <img class="logo" src={logoPath} style="width: {logoWidth}px;" alt="" />
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
    }
    .screenshot {
      height: 75vh;
    }
    article {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      width: 700px;
    }
    p {
      width: 600px;
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
</style>
