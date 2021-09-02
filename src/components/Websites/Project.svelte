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
    </div>
    <button>Visit</button>
  </article>
</div>

<style>
  .wrapper {
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
    height: 100vh;
  }
  .screenshot {
    height: 90vh;
    position: absolute;
    right: -170px;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  article {
    display: grid;
    place-content: center;
    gap: 20px;
    height: 80vh;
    width: 85vw;
    margin: auto;
    padding: 15px;
    /** Frosted Glass fallback */
    background-color: rgba(140, 136, 136, 0.8);
    z-index: 10;
  }
  span {
    height: 120px;
    display: flex;
    align-items: center;
  }
  .logo {
    width: calc(var(--logoWidth) - 20px);
  }
  .info {
    display: grid;
    gap: 30px;
  }
  @supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
    article {
      background-color: rgba(238, 231, 231, 0.5);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
    }
  }

  /*Lg*/
  @media (min-width: 1024px) {
    .wrapper {
      position: static;
      height: auto;
    }
    .screenshot {
      --change-max-h: calc(500px + 10vh);
      --change-min-h: calc(250px + 50vh);

      height: 75vh;
      max-height: var(--change-max-h);
      min-height: var(--change-min-h);
      position: static;
    }
    article {
      width: 650px;
      height: 60vh;
      max-height: var(--change-max-h);
      min-height: var(--change-min-h);
      background: none;
    }
    span {
      height: 120px;
      display: flex;
      align-items: center;
    }
    .logo {
      width: var(--logoWidth);
    }
    p {
      width: 80%;
    }
  }

  /*2xl*/
  @media (min-width: 1536px) {
    article {
      gap: 20px;
      width: 50vw;
      height: 65vh;
    }
  }

  /*3xl*/
  @media (min-width: 2000px) {
    .logo {
      width: calc(var(--logoWidth) + 20px);
    }
    article {
      gap: 35px;
    }
  }

  /*4xl*/
  @media (min-width: 2500px) {
    .logo {
      width: calc(var(--logoWidth) + 40px);
    }
    article {
      gap: 40px;
    }
    span {
      height: 150px;
    }
  }

  /*5xl*/
  @media (min-width: 3000px) {
    .logo {
      width: calc(var(--logoWidth) + 60px);
    }
    article {
      gap: 60px;
    }
  }

  /*4k*/
  @media (min-width: 3500px) {
    article {
      height: 1200px;
      width: 1800px;
    }
    .logo {
      width: calc(var(--logoWidth) + 80px);
    }
    p {
      width: 1300px;
    }
  }
</style>
