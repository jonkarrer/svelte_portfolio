<script lang="ts">
  export let text: string;
  export let link: string;
</script>


<a href={link}>
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
  }
</style>