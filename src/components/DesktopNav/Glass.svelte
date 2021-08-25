<script>
</script>

<svelte:window />

<div class="frosted_glass" />

<style>
  .frosted_glass {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 50vw;
    height: 85vh;

    /** Frosted Glass fallback */
    background-color: rgba(255, 255, 255, 0.4);

    -o-transition: all 2s ease;
    -webkit-transition: all 2s ease;
    -moz-transition: all 2s ease;
    transition: all 2s ease;
    z-index: 10;
  }

  /*Md*/
  @media (min-width: 768px) {
    .frosted_glass {
      min-height: 500px;
      height: 80vh;
    }
  }
  /*Lg*/
  @media (min-width: 1024px) {
    .frosted_glass {
      min-height: 600px;
      max-width: 1000px;
    }
  }
</style>
