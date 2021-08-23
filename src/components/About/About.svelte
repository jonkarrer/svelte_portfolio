<script>
  import Article from "./Article.svelte"
  import AboutTitle from "./AboutTitle.svelte"

  let x = 150;
  let y = 150;
  let opacity = 0;
  function moveAbout() {
    x = 0;
    y=50;
    opacity = 1;
  }
</script>

<svelte:window on:mousewheel={moveAbout}/>

<section>
  <AboutTitle x={x} />  
  <Article x={x}/>
</section>

<style>
 
</style>