<script>
import {onMount} from 'svelte'
import {drawRain} from '../../utils/drawRain'

let canvasElement;
// onMount(() => {
//    drawRain(canvasElement);
//  	});

let visible = "block";
function moveRain() {
  visible = "none";
}

</script>

<svelte:window on:touchmove={moveRain} on:mousewheel={moveRain}/>
<div class="wrapper" >
  <canvas bind:this={canvasElement} id="rain" style="--theme-visible: {visible}"></canvas>
</div>

<style>
.wrapper {
  height: 100%;
  width: 100%;
  transform: translateY(var(--theme-y));
  transition: transform 2s ease;
}

canvas {
  display: var(--theme-visible);
  width: 100%;
  height: 100%;
  background: #003049;
}
</style>