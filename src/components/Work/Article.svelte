<script lang="ts">
export let bg: string;
export let blur: string;
</script>

<article style="--theme-bg: {bg}; --theme-blur: {blur};">
  <slot></slot>
</article>

<style>
  article {
    position: relative;

    width: 90%;
    height: 75vh;
    margin: auto;
    padding: 30px 15px;
    display: grid;
    gap: 40px;

    /** Frosted Glass fallback */
    background-color: var(--theme-bg);

    color: white;
    z-index: 20;
  }
   
  @supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
    article {
      background-color: var(--theme-blur);  
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
    }
  }

  /*Md*/
  @media (min-width: 768px) {
    article {
      width: 80%;
      padding: 30px;
      gap: 50px;
      color: white;
    }
  }

  /*Lg*/
  @media (min-width: 1024px) {
    article {
      margin: 60px;
      width: 600px;
      padding: 40px;
      gap: 70px;
    }
  }

  /*Xl*/
  @media (min-width: 1280px) {
    article {
      width: 700px;
    }
  }
</style>


