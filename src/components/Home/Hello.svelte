<script>
  let tag = "Web Developer"
  let allTags = ["Web Developer","Creator", "Problem Solver"]
  let i = 1;
  setInterval(() => {
    i > allTags.length - 1 ? i=0 : undefined
    tag = allTags[i]
    i+=1;
  }, 2000);

  let x = 0;
  function moveHello() {
    x = -100
  }


</script>

<svelte:window on:touchmove={moveHello} on:mousewheel={moveHello}/>

<div class="hello" style="--theme-x: {x}vw">
  <h1>Hello,</h1>
  <h1>I'm <a href="/">Jonathan</a></h1>
  <h4>{tag}</h4>
</div>

<style>
.hello {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 15%;
  transform: translateX(var(--theme-x));
  margin: auto;
  color: var(--red);
  z-index: 10;
  height: max-content;
  width: min-content;
  font-family: sans-serif;
  font: 900;
  display: grid;
  transition: transform 2s ease;
  z-index: 10;
}
h1 {
  font-size: 3.5rem;
}
h4 {
  text-align: right;
  margin-top: 30px;
  font-size: 1.4rem;
}
a {
  border-bottom: wheat solid thick;
  padding: 10px 0;
}

/*Md*/
@media (min-width: 768px) {
.hello {
  left: 0;
  right: 0;
  width: max-content;
 
}
h1 {
  font-size: 5rem;
}

}
/*Lg*/
@media (min-width: 1024px) {
h1 {
  font-size: 8rem;
}
h4 {
  margin-top: 40px;
  font-size: 2rem;
}
}
/*Xl*/
@media (min-width: 1280px) {
}
/*2xl*/
@media (min-width: 1536px) {
}
</style>