<img src="assets/background/gears.svg" alt="" />

<style>
  img {
    width: 95vw;
    margin: 20px auto;
  }
  /*Lg*/
  @media (min-width: 1024px) {
    img {
      --change-max-h: calc(550px + 30vh);
      --change-min-h: calc(350px + 40vh);

      height: 75vh;
      width: auto;
      max-height: var(--change-max-h);
      min-height: var(--change-min-h);

      margin-left: 80px;
    }
  }
</style>
