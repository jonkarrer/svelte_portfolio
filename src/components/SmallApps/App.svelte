<script lang="ts">
  export let link: string;
  export let img: string;
</script>

<div>
  <a href={link} target="_blank"><img src={img} alt="" /></a>
</div>

<style>
  div {
    height: 150px;
    background: cyan;
  }
  img {
    height: 100%;
    width: 100%;
  }
  /*Lg*/
  @media (min-width: 1024px) {
    div {
      height: 170px;
      width: 270px;
    }
  }

  /*Xl*/
  @media (min-width: 1280px) {
    div {
      height: 200px;
      width: 300px;
    }
  }

  /*3xl*/
  @media (min-width: 2000px) {
    div {
      height: 240px;
      width: 360px;
    }
  }

  /*4xl*/
  @media (min-width: 2500px) {
    div {
      height: 280px;
      width: 400px;
    }
  }

  /*5xl*/
  @media (min-width: 3000px) {
    div {
      height: 360px;
      width: 580px;
    }
  }

  /*4k*/
  @media (min-width: 3500px) {
    div {
      height: 400px;
      width: 630px;
    }
  }
</style>
