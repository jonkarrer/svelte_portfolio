<script>
  import Article from "./components/About/Article.svelte"
  import Skills from "./components/About/Skills.svelte"

  let x = 150;
  let opacity = 0;
  function moveAbout() {
    x = 0;
    opacity = 1;
  }
</script>

<svelte:window on:mousewheel={moveAbout}/>

<section>
  <h1 class="about" style="--theme-title: {x}vw">About</h1>
  <h1 class="tech" style="--theme-tech: {x}vh">Technology</h1>
  <Article x={x}/>
  <Skills opacity={opacity} />
</section>

<style>
  h1 {
    position: absolute;
    color: var(--red);
    font-size: 6rem;
    transition: transform 2s ease;
  }
  h1.tech {
    right: -650px;
    top: 0;
    transform: rotate(270deg) translate(var(--theme-tech));
  }
  h1.about {
    bottom: 10px;
    left: 10px;
    transform: translateX(var(--theme-title));
  }
  /*Md*/
  @media (min-width: 768px) {
    h1 {
      bottom: 0px;
      font-size: 10rem;
    }
  }
  /*2xl*/
  @media (min-width: 1536px) {
    h1 {
      left: 15px;
      font-size: 13rem;
    }
}
</style>