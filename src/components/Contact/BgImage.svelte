<img src="assets/background/contact.svg" alt="" />

<style>
  img {
    width: 80vw;
    margin: auto;
  }

  /*Lg*/
  @media (min-width: 1024px) {
    img {
      --change-max-h: calc(600px + 25vh);
      --change-min-h: calc(100px + 35vh);

      height: 40vh;
      width: auto;
      max-height: var(--change-max-h);
      min-height: var(--change-min-h);

      position: absolute;
      bottom: 0;
      left: 150px;
    }
  }

  @media (min-width: 1256px) {
    img {
      left: 200px;
    }
  }

  /*4xl*/
  @media (min-width: 2500px) {
    img {
      /** Match the wider DesktopNav */
      left: 400px;
    }
  }
</style>
