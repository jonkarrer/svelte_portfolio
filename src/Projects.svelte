<script></script>

<section class="projects-wrapper">
  <div class="title-block">
    <h1 class="title">Projects</h1>
    <q>to be creative is to be in love with life</q>
    <cite>- Osho</cite>
  </div>
  <div class="projects-grid">
    <div class="daybrk">
      <span class="overlay">
        <h1>Daybreak Nutrtion</h1>
        <h2>HTML CSS JS</h2>
        <p>
          My second paid project without a framework. 
          The client wanted a modern and minimal look.
          I learned how to create an interesting backdrop on the mobile version.
          Took about 3 days to construct this project.
        </p>
        <span class="source">
          <img src="assets/white-icons/1.svg" alt="">
          <img src="assets/white-icons/view.svg" alt="">
        </span>
      </span>
      <img src="assets/projects/daybreak_home.png" alt="">
    </div>
    <div class="hair">
      <span class="overlay">
        <h1>Hair by Amanda</h1>
        <h2>HTML CSS JS</h2>
        <p>
          My first paid project without a framework. 
          The client wanted a site for her personal brand.
          She needed a form for customers to contact her, and I even that routed to her email.
          Took about 1 week to construct this project.
        </p>
        <span class="source">
          <img src="assets/white-icons/1.svg" alt="">
          <img src="assets/white-icons/view.svg" alt="">
        </span>
      </span>
      <img src="assets/projects/hair_home.png" alt="">
    </div>
    <div class="nuleaf">
      <span class="overlay">
        <h1>Nu Leaf</h1>
        <h2>React Typescript</h2>
        <p>
          This was a mock up site for my old business. 
          It is an e-commerce site with a menu plus cart functionality.
          I plan to expand this project with a recipe database and admin portal.
        </p>
        <span class="source">
          <img src="assets/white-icons/1.svg" alt="">
          <img src="assets/white-icons/view.svg" alt="">
        </span>
      </span>
      <img src="assets/projects/nuleaf_cart.png
      " alt="">
    </div>
    <div class="blog">
      <span class="overlay">
        <h1>My Blog</h1>
        <h2>Next.js, Typescript, Prisma, PostgreSQL </h2>
        <p>
          A personal blog I made using an SSG. The site has a
          CRUD database, admin portal with auth, dynamic site generation, 
          and hosted on heroku. First attempt at modern fullstack.
        </p>
        <span class="source">
          <img src="assets/white-icons/1.svg" alt="">
          <img src="assets/white-icons/view.svg" alt="">
        </span>
      </span>
      <img src="assets/projects/blog_home.png" alt="">
    </div>
    <div class="battle">
      <span class="overlay">
        <h1>Battleship</h1>
        <h2>React, Typescript, Jest</h2>
        <p>
          An advanced React project. This has computer logic that is tested with Jest
          that ties into the user interface. I could make the computer "smarter" and add
          vertical ship placement in the future.
        </p>
        <span class="source">
          <img src="assets/white-icons/1.svg" alt="">
          <img src="assets/white-icons/view.svg" alt="">
        </span>
      </span>
      <img src="assets/projects/battleship_game.png" alt="">
    </div>
    <div class="itasu">
      <span class="overlay">
        <h1>Project Management</h1>
        <h2>HTML CSS JS</h2>
        <p>
          This was my most robust vanilla js project so far. I 
          manipulated the local storage to save each item in the project to do
          list. Basically a local CRUD app. I maximized the JS DOM manipulation
          tools to create this one.
        </p>
        <span class="source">
          <img src="assets/white-icons/1.svg" alt="">
          <img src="assets/white-icons/view.svg" alt="">
        </span>
      </span>
      <img src="assets/projects/itasu.png" alt="">
    </div>
  </div>
</section>

<style>
  .projects-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: Arial, Helvetica, sans-serif;
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
    height: 340px;
    width: 600px;
    background: white;
    border: red solid thick;
    position: relative;
  }
  .projects-grid div:hover > .overlay {
    display: block;
  }
  .overlay {
    position: absolute;
    background: rgba(0,0,0,.7);
    z-index: 1;
    width: 600px;
    height: 341px;
    left: 0;
    text-align: center;
    color: white;
    display: none;
  }
  .overlay h1 {
    margin: 30px 0;
    font-size: 2em;
  }
  .overlay h2 {
    margin-bottom: 30px;
  }
  .overlay p {
    margin: 0 50px;
    line-height: 1.4;
    font-size: 1.1em;
    margin-bottom: 30px;
  }
  .source {
    margin: auto;
    width: 50%;
  }
  .source img {
    object-fit: fill;
    width: 40px;
    margin: 0 10px;
  }
  .source img:hover {
    cursor: pointer;
  }
  /**Images*/
  img {
    object-fit: fill;
    width: 100%;
  }
</style>