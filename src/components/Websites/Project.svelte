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
      <img class="logo" src={logoPath} style="width: {logoWidth}px;" alt="" />
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
      height: 75vh;
      min-height: 550px;
      max-height: 600px;
    }
    article {
      display: grid;
      height: 450px;

      width: 700px;
    }
    span {
      height: 150px;
      display: flex;
      align-items: center;
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
    article {
      height: 500px;
      width: 720px;
    }
  }
  /*2xl*/
  @media (min-width: 1536px) {
    article {
      height: 600px;
      width: 800px;
    }
    .screenshot {
      max-height: 860px;
    }
  }
</style>
