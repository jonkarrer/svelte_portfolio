<script lang="ts">
  export let title: string;
  export let text: string;
</script>

<div>
  <h2>{title}</h2>
  <p>{text}</p>
</div>

<style>
  div {
    display: grid; 
    gap: 10px;
  }
  /*Md*/
  @media (min-width: 768px) {
    p {
      width: 80%;
    }
  }
  /*Lg*/
  @media (min-width: 1024px) {
    p {
      width: auto;
    }
    h2 {
      font-size: 4rem;
    }
  }
</style>