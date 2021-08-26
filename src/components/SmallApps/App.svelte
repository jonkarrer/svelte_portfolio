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
      height: 200px;
      width: 300px;
      background: cyan;
    }
  }
  /*Xl*/
  @media (min-width: 1280px) {
  }
  /*2xl*/
  @media (min-width: 1536px) {
  }
</style>
