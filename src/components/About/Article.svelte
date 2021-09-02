<div>
  <h5>Hi, I'm Jon Karrer</h5>
  <h2>I build the web</h2>
  <p>
    Need help bringing an idea to life? I am the guy. Let me apply my buisness
    experience and programming knowledge to get you set up for success. Creating
    and problem solving are what I do most, but I also enjoy tea, backpacking,
    and fishing.
  </p>
</div>

<style>
  div {
    display: grid;
    gap: 10px;
  }
  p {
    margin-top: 10px;
  }

  /*Lg*/
  @media (min-width: 1024px) {
    div {
      gap: 15px;
    }
    p {
      width: calc(300px + 30vw);
      max-width: 1300px;
    }
  }

  /*2xl*/
  @media (min-width: 1536px) {
    div {
      gap: 20px;
    }
  }

  /*4k*/
  @media (min-width: 3500px) {
    div {
      gap: 30px;
    }
    p {
      max-width: 1600px;
    }
  }
</style>
