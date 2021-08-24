<script lang="ts">
  export let text: string;
  export let link: string;
  export let alignment: string;
</script>

<a href={link} style="--theme-align: {alignment}">
  {text}
</a>

<style>
  a {
    font-size: 1.2rem;
    border: white solid thin;
    width: 160px;
    height: 45px;
    display: grid;
    place-content: center;
    justify-self: var(--theme-align);
  }

  /*Lg*/
  @media (min-width: 1024px) {
    a {
      font-size: 1.5rem;
      width: 180px;
      height: 60px;
    }
  }

  /*Xl*/
  @media (min-width: 1280px) {
    a {
      font-size: 1.6rem;
    }
  }
  /*2xl*/
  @media (min-width: 1536px) {
    a {
      font-size: 1.8rem;
      width: 190px;
      height: 75px;
    }
  }
</style>
