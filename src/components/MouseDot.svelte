<script>
  import {spring} from 'svelte/motion'
    let coords = spring({x: 0, y: 0}, {
    stiffness: 0.2,
    damping: 0.25
  });
  let size = spring(10);
</script>

<svg
on:mousemove="{e => coords.set({ x: e.clientX, y: e.clientY }, {

})}"
on:mousedown="{(e) => coords.set({x: e.clientX, y: e.clientY + 200 })}"
on:mouseup="{(e) => coords.set({ x: e.clientX, y: e.clientY})}"
>
<circle cx={$coords.x} cy={$coords.y} r={$size}/>
</svg>