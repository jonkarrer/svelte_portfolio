<script lang="ts">
  export let item: string;
</script>

<div>
  <h5>{item}</h5>
</div>

<style>
  div {
    height: 150px;
    background: cyan;
  }
  /*Lg*/
  @media (min-width: 1024px) {
    div {
      height: 170px;
      width: 270px;
      background: cyan;
    }
  }
  /*Xl*/
  @media (min-width: 1280px) {
    div {
      height: 200px;
      width: 300px;
    }
  }
  /*2xl*/
  @media (min-width: 1536px) {
    div {
      height: 250px;
      width: 360px;
    }
  }
  /*3xl*/
  @media (min-width: 2000px) {
    div {
      height: 280px;
      width: 430px;
    }
  }
  /*4xl*/
  @media (min-width: 2500px) {
    div {
      height: 300px;
      width: 480px;
    }
  }
  /*5xl*/
  @media (min-width: 3000px) {
    div {
      height: 370px;
      width: 670px;
    }
  }
  /*4k*/
  @media (min-width: 3500px) {
    div {
      height: 450px;
      width: 750px;
    }
  }
</style>
