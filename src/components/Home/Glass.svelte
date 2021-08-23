<script>
  let position= 5;

  function moveGlass() {
    position = 45;
  }
</script>

<svelte:window on:touchmove={moveGlass} on:mousewheel={moveGlass}/>

<div class="frosted_glass" style="--theme-move: {position}%">

</div>

<style>
  .frosted_glass {
    position: absolute;
    top: 0;
    bottom: 0;
    right: var(--theme-move);
    margin: auto;
    width: 50vw;
    height: 85vh;
    background-color: rgba(255, 255, 255, .2);  
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
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