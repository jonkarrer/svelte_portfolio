<img src="assets/background/desk.svg" alt="" />

<style>
  img {
    width: 90vw;
    margin-bottom: 60px;
  }
  /*Lg*/
  @media (min-width: 1024px) {
    img {
      --change-max-h: calc(450px + 35vh);
      --change-min-h: calc(300px + 35vh);

      width: auto;
      height: 75vh;
      max-height: var(--change-max-h);
      min-height: var(--change-min-h);

      margin-right: 10vw;
      align-self: flex-end;
    }
  }
</style>
