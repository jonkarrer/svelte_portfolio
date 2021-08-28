<script lang="ts">
  export let item: string;
</script>

<div>
  <h5>{item}</h5>
</div>

<style>
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
      height: 290px;
      width: 390px;
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
