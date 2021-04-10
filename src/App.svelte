<script lang="ts">
	import Splash from './Splash.svelte'
	import About from './About.svelte'
	let name = 'Jon';
</script>

<Splash />
<main id="desktop">
	<About />
</main>

<style>
	#desktop {
  height: 100vh;
  width: 100vw;
  background: var(--theme-dark-grey);
  position: relative;
  overflow: hidden;
}
</style>