<script>
  import Project from './components/Project.svelte'
</script>

<section class="projects">

  <div class="wrapper">
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
 
</style>