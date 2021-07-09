<script>
  import Project from './components/Project.svelte'
</script>

<section class="projects-wrapper">
  <div class="title-block">
    <h1 class="title">Projects</h1>
    <q>to be creative is to be in love with life</q>
    <cite>- Osho</cite>
  </div>
  <div class="projects-grid">
    <Project 
      title= "Market Maker" 
      tools="Next.js Tailwind" 
      details="Very large project for a client. User auth, stripe, CMS, database,  ...the works. *Under Construction"
      website="https://market-maker.vercel.app"
      code="https://github.com/jonkarrer/market_maker"
      image="assets/projects/market_maker.png"
    />
    <Project 
      title= "Hair by Amanda" 
      tools="CSS HTML JS" 
      details="No framework here. I used a design system to keep my codebase organized. The client wanted a site for her personal brand."
      website="https://hairamandag.com"
      code="https://github.com/jonkarrer/hair_2.0"
      image="assets/projects/hair_home.png"
    />
    <Project 
      title= "Solo App" 
      tools="Next.js Tailwind Supabase" 
      details="I am working with a team to develop a solo travel app similiar to tinder. This is still under construction."
      website="http://solo-app.vercel.app/"
      code="https://github.com/jonkarrer/Solo_app"
      image="assets/projects/solo.png"
    />
    <Project 
    title= "Advanced Roofing" 
    tools="CSS HTML JS" 
    details="Teamed up with a designer to build out a website he created on 
    figma. Took me a day to complete, and he really enjoyed the result.
    We look foward to working again soon."
    website="https://jonkarrer.github.io/advanced_roofing/"
    code="https://github.com/jonkarrer/advanced_roofing"
    image="assets/projects/roofing.jpg"
    />
    <Project 
      title= "Countries" 
      tools="React Tailwind API" 
      details="I wanted to challenge myself with a project that manipulates API data. I added a Dark Mode switch, filter/search
      capabilities, and responsiveness."
      website="https://angry-villani-a63212.netlify.app"
      code="https://github.com/jonkarrer/country_api"
      image="assets/projects/countries.jpg"
    />
    <Project 
      title= "Nu Leaf" 
      tools="React Typescript" 
      details=" This was a mock up site for my old business. 
      It is an e-commerce site with a menu plus cart functionality."
      website="https://jonkarrer.github.io/capstone-project/"
      code="https://github.com/jonkarrer/capstone-project"
      image="assets/projects/nuleaf_cart.jpg"
    />
  </div>
</section>

<style>
  .projects-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: Arial, Helvetica, sans-serif;
    background: black;
    height: calc(auto + 100vh);
    padding-bottom: 50px;
  }
  .title-block {
    display: block;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3em 0;
  }
  h1.title {
    color: var(--lite-cyan);
    font-size: calc(10vw + 1vh);
    margin-bottom: 20px;
  }
  q {
    color: white;
    font-size: 3vw;
    text-align: center;
  }
  cite {
    color: white;
    font-size: 3vw;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  .projects-grid {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto auto auto;
    gap: 40px;
  }
  
  /**Regular Screen*/
  @media (max-width: 1320px) {
    .projects-grid {
      display: grid;
      grid-template-columns: auto auto;
      grid-template-rows: auto auto auto auto;
      gap: 25px;
    }
  }
  /**Small Screen*/
  @media (max-width: 860px) {
    .projects-grid {
      display: grid;
      grid-template-columns: auto;
      grid-template-rows: auto auto auto auto;
      gap: 30px;
      margin-bottom: 30px;
    }
  }
  /**Mobile*/
  @media (max-width: 500px) {
    .projects-grid {
      display: grid;
      grid-template-columns: auto;
      grid-template-rows: auto auto auto auto;
      gap: 25px;
      margin-bottom: 30px;
    }
    
  }
  /**Super Wide Screen*/
  @media (min-width: 2000px) {
    .projects-grid {
      display: grid;
      grid-template-columns: auto auto;
      grid-template-rows: auto auto auto auto;
      gap: 80px;
    }
  }
</style>