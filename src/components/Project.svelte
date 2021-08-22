<script>
  export let title
  export let tools
  export let details 
  export let website
  export let code 
  export let image
</script>
<div class="project">
    <h1>{title}</h1>
    <h2>{tools}</h2>
    <p>
   {details}
    </p>
    <span class="source">
      <a href={code}><img src="assets/white-icons/1.svg" alt="github icon"></a>
      <a href={website}><img src="assets/white-icons/view.svg" alt="preview icon"></a>
    </span>

  <img src={image} alt="screenshot home page">
</div>

<style>
  
</style>