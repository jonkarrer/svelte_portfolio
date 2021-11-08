<script lang="ts">
  export let techNames: Array<string>;
  export let bg: string;
</script>

<div class="tech-container">
  {#each techNames as name}
    <span style={`background: var(--${bg})`}>{name}</span>
  {/each}
</div>

<style>
  .tech-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
  }
  span {
    padding: 5px 10px;

    color: var(--light);
    font-size: 13px;
    font-weight: bold;

    background: var(--orange);
    border-radius: 3px;

    margin-right: 10px;
    margin-top: 10px;
  }
</style>
