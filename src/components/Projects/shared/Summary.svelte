<script lang="ts">
  export let leftBorder = false;
  export let rightBorder = false;
  export let bg: string;
  export let borderColor: string;
</script>

<article
  class:leftBorder
  class:rightBorder
  style={`background: var(--${bg}); border-color: var(--${borderColor})`}
>
  <slot />
</article>

<style>
  article {
    display: grid;
    gap: 30px;
    padding: 40px 20px;
  }
  .rightBorder {
    border-right-width: 15px;
    border-right-style: solid;

    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
  }
  .leftBorder {
    border-left-width: 15px;
    border-left-style: solid;

    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
  }

  /*Md*/
  @media (min-width: 768px) {
    .leftBorder {
      border-left-width: 30px;
    }
    .rightBorder {
      border-right-width: 30px;
    }
  }
</style>
