<script></script>

<section class="projects-wrapper">
  <div class="title-block">
    <h1 class="title">Projects</h1>
    <q>to be creative is to be in love with life</q>
    <cite>- Osho</cite>
  </div>
  <div class="projects-grid">
    <div class="daybrk">Dybrk</div>
    <div class="hair">hair</div>
    <div class="nuleaf">nuleaf</div>
    <div class="blog">blog</div>
    <div class="battle">battle</div>
    <div class="itasu">itasu</div>
  </div>
</section>

<style>
  .projects-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .title-block {
    display: block;
    margin: auto;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3em;
  }
  h1.title {
    color: white;
    font-size: 4em;
  }
  q {
    color: white;
    font-size: 2em;
    display: block;
  }
  cite {
    color: white;
    font-size: 1.5em;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  .projects-grid {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto auto auto;
    gap: 40px;
  }
  .projects-grid div {
    height: 350px;
    width: 500px;
    background: white;
    border: red solid thick;
  }
</style>