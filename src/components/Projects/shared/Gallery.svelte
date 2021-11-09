<div class="gallery">
  <slot />
</div>

<style>
  .gallery {
    display: none;
  }

  /*Lg*/
  @media (min-width: 1024px) {
    .gallery {
      display: grid;
      gap: 10px;
      grid: 1fr 1fr / repeat(3, 1fr);

      width: 450px;
    }
  }

  /*Xl*/
  @media (min-width: 1250px) {
    .gallery {
      display: grid;
      gap: 10px;
      grid: 1fr 1fr / repeat(3, 1fr);

      width: 550px;
    }
  }
</style>
