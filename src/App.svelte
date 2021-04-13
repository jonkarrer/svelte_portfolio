<script lang="ts">
	import Splash from './Splash.svelte'
  import Homepage from './Homepage.svelte';
</script>

<Splash />
<main id="desktop">
	<Homepage />
</main>

<style>
	#desktop {
  width: 100vw;
  background: var(--main-grey);
  overflow: hidden;
}
</style>