<script>
  export let opacity;
</script>

<div class="skills" style="--theme-opacity: {opacity};">
  <div class="row top" >
    <div class="hex">
      <img src="assets/skill_logos/react.svg" alt="react icon">
    </div>
    <div class="hex">
      <img src="assets/skill_logos/type.svg" alt="typescript icon" style="width: 90%; height: 95%; top: 4px; left: 0;">
    </div>
    <div class="hex">
      <img src="assets/skill_logos/next.svg" alt="next.js icon">
    </div>
  </div>
  <div class="row mid">
    <div class="hex">
      <img src="assets/skill_logos/post.svg" alt="postgres icon">
    </div>
    <div class="hex">
      <img src="assets/skill_logos/deno.svg" alt="deno icon">
    </div>
  </div>
  <div class="row bott">
    <div class="hex">
      <img src="assets/skill_logos/figma.svg" alt="figma icon">
    </div>
    <div class="hex">
      <img src="assets/skill_logos/auth.svg" alt="auth0 icon">
    </div>
    <div class="hex">
      <img src="assets/skill_logos/github.svg" alt="github icon">
    </div>
  </div>
</div>

<style>

  /*Lg*/
@media (min-width: 1024px) {

  .skills {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 100px;
    margin: auto;
    height: max-content;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    gap: 50px;
    z-index: 50;
    opacity: var(--theme-opacity);
    transition: opacity 4s ease;
  }

  .hex:before {
    content: " ";
    width: 0; height: 0;
    border-bottom: 41px solid var(--wheat);
    border-left: 75px solid transparent;
    border-right: 75px solid transparent;
    position: absolute;
    top: -41px;
  }

  .hex {
    margin-top: 30px;
    width: 150px;
    height: 90px;
    position: relative;
    background: var(--wheat);
  }
  .hex:after {
    content: "";
    width: 0;
    position: absolute;
    bottom: -41px;
    border-top: 41px solid var(--wheat);
    border-left: 75px solid transparent;
    border-right: 75px solid transparent;
  }
  .hex img {
    position: absolute;
    width: 100%;
    height: 110%;
    left: -5px;
    right: 0;
    margin: auto;
    z-index: 20;
  }
  .row {
    display: flex;
    justify-content: center;

  }
  .row div {
    margin: 0 5px;
  }
}

.hex.one {

}
 
</style>