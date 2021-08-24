<script lang="ts">
  export let title: string;
  export let text: string;
  export let placeContent: string;
</script>

<div style="--theme-placement: {placeContent}">
  <h2>{title}</h2>
  <p>{text}</p>
</div>

<style>
  div {
    display: grid;
    place-content: var(--theme-placement);
    gap: 10px;
  }

  /*Lg*/
  @media (min-width: 1024px) {
    h2 {
      font-size: 4rem;
    }
    div {
      gap: 20px;
    }
  }

  /*Xl*/
  @media (min-width: 1280px) {
    h2 {
      font-size: 4.4rem;
    }
    p {
      max-width: 700px;
    }
    div {
      gap: 30px;
    }
  }

  /*2xl*/
  @media (min-width: 1536px) {
    h2 {
      font-size: 5rem;
    }
    p {
      max-width: 800px;
    }
    div {
      gap: 40px;
    }
  }
</style>
