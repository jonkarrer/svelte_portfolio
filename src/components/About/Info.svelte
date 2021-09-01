<div>
  <h5>Hi, I'm Jon Karrer</h5>
  <h2>I build the web</h2>
  <p>
    I studied engineering and after running my own food business I moved on to
    creating software. Creating and problem solving are what I do most, but I
    also enjoy tea, backpacking, and fishing.
  </p>
</div>

<style>
  div {
    display: grid;
    gap: 10px;
  }
  /*Lg*/
  @media (min-width: 1024px) {
    div {
      display: grid;
      gap: 15px;
    }
    p {
      width: calc(300px + 30vw);
    }
  }
  /*2xl*/
  @media (min-width: 1536px) {
    div {
      gap: 20px;
    }
  }
  /*3xl*/
  @media (min-width: 2000px) {
  }
  /*4xl*/
  @media (min-width: 2500px) {
  }
  /*5xl*/
  @media (min-width: 3000px) {
    div {
      gap: 20px;
    }
    p {
      width: 1300px;
    }
  }
  /*4k*/
  @media (min-width: 3500px) {
    div {
      gap: 40px;
    }
    p {
      width: 1600px;
    }
  }
</style>
