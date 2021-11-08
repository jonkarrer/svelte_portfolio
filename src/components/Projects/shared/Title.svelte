<script lang="ts">
  export let heading: string;
  export let tagline: string;
  export let color: string;
</script>

<div class="container">
  <div class="tagline">{tagline}</div>
  <h2 style={`color: var(--${color})`}>{heading}</h2>
</div>

<style>
  .container {
    display: grid;
    gap: 8px;
  }
</style>
