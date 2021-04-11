<script lang="ts">
	import Splash from './Splash.svelte'
  import Homepage from './Homepage.svelte';
	let name = 'Jon';
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