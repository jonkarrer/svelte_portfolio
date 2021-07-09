<script>
  export let title
  export let tools
  export let details 
  export let website
  export let code 
  export let image
</script>
<div class="project">
  <span class="overlay">
    <h1>{title}</h1>
    <h2>{tools}</h2>
    <p>
   {details}
    </p>
    <span class="source">
      <a href={code}><img src="assets/white-icons/1.svg" alt="github icon"></a>
      <a href={website}><img src="assets/white-icons/view.svg" alt="preview icon"></a>
    </span>
  </span>
  <img src={image} alt="screenshot home page">
</div>

<style>
   .project {
    height: 340px;
    width: 600px;
    background: white;
    position: relative;
  }
  .project:hover > .overlay {
    display: block;
  }
  .overlay {
    position: absolute;
    background: rgba(0,0,0,.8);
    z-index: 1;
    width: 100%;
    height: 110%;
    position:absolute;
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
  img {
    object-fit: fill;
    width: 100%;
  }
  /**Regular Screen*/
  @media (max-width: 1320px) {
    .project {
      height: 227px;
      width: 400px;
      background: white;
      position: relative;
    }
    .overlay h1 {
      margin: 10px 0;
      font-size: 1.5em;
    }
    .overlay h2 {
      margin-bottom: 10px;
      font-size: 1em;
    }
    .overlay p {
      margin: 0 20px;
      line-height: 1.4;
      font-size: .85em;
      margin-bottom: 20px;
    }
    .source img {
      object-fit: fill;
      width: 30px;
      margin: 0 10px;
    }
  }
  /**Small Screen*/
  @media (max-width: 860px) {
    .project {
      height: 270px;
      width: 475px;
      background: white;
      position: relative;
    }
    .overlay h1 {
      margin: 15px 0;
      font-size: 1.7em;
    }
    .overlay h2 {
      margin-bottom: 15px;
      font-size: 1.1em;
    }
    .overlay p {
      margin: 0 20px;
      line-height: 1.4;
      font-size: 1em;
      margin-bottom: 20px;
    }
    .source img {
      object-fit: fill;
      width: 35px;
      margin: 0 10px;
    }
  }
  /**Mobile*/
  @media (max-width: 500px) {
    .overlay {
      display: block;
    }
    .project {
      height: 181px;
      width: 320px;
      background: white;
      position: relative;
    }
    .overlay h1 {
      margin: 10px 0;
      font-size: 1em;
    }
    .overlay h2 {
      margin-bottom: 10px;
      font-size: .7em;
    }
    .overlay p {
      margin: 0 20px;
      line-height: 1.4;
      font-size: .7em;
      margin-bottom: 10px;
    }
    .source img {
      object-fit: fill;
      width: 25px;
      margin: 0 10px;
    }
  }
  /**Super Wide Screen*/
  @media (min-width: 2000px) {
    .project {
      height: 455px;
      width: 800px;
      background: white;
      position: relative;
    }
    .overlay h1 {
      margin: 30px 0;
      font-size: 3em;
    }
    .overlay h2 {
      margin-bottom: 30px;
      font-size: 1.6em;
    }
    .overlay p {
      margin: 0 50px;
      line-height: 1.4;
      font-size: 1.6em;
      margin-bottom: 30px;
    }
    .source img {
      object-fit: fill;
      width: 60px;
      margin: 0 10px;
    }
  }
</style>