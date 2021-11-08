<script lang="ts">
  export let link: string;
  export let bg: string;
</script>

<a href={link} style={`background: var(--${bg})`}>Preview</a>

<style>
  a {
    display: grid;
    place-content: center;

    width: 100%;
    height: 65px;

    font-size: 24px;
    font-weight: 500;
    color: var(--light);

    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
  }
</style>
