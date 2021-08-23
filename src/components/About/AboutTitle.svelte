<script>
  export let x;
</script>

  <h1 class="about" style="--theme-title: {x}vw">About</h1>

<style>
   h1 {
    position: absolute;
    color: var(--red);
    font-size: 6.5rem;
    transition: transform 2s ease;
    bottom: 10px;
    left: 10px;
    transform: translateX(var(--theme-title));
  }
  /*Md*/
  @media (min-width: 768px) {
    h1 {
      font-size: 8rem;
      bottom: -10px;
    }
  }
   /*Lg*/
   @media (min-width: 1024px) {
    h1 {
      font-size: 10rem;
    }
  }
  /*2xl*/
  @media (min-width: 1536px) {
    h1 {
      font-size: 13rem;
      bottom: -20px;
    }
  }
</style>