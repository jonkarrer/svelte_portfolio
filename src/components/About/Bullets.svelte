<div class="wrapper">
  <span>
    <img src="assets/icons/check.svg" alt="check icon" />
    <h6>I specialize in front-end development. Html, Css, Js.</h6>
  </span>
  <span>
    <img src="assets/icons/check.svg" alt="check icon" />
    <h6>Front-end stack - React, Next.js, and Tailwind CSS.</h6>
  </span>
  <span>
    <img src="assets/icons/check.svg" alt="check icon" />
    <h6>Other skills include Postgres, Deno, Auth0, and Stripe.</h6>
  </span>
</div>

<style>
  .wrapper {
    display: grid;
    gap: 20px;
  }
  span {
    display: flex;
    align-items: center;
  }
  img {
    width: 25px;
    margin-right: 20px;
  }
  h6 {
    font-weight: 500;
  }

  /*3xl*/
  @media (min-width: 2000px) {
    .wrapper {
      gap: 30px;
    }
    img {
      width: 30px;
    }
  }

  /*4xl*/
  @media (min-width: 2500px) {
    .wrapper {
      gap: 40px;
    }
    img {
      width: 40px;
    }
  }

  /*5xl*/
  @media (min-width: 3000px) {
    .wrapper {
      gap: 45px;
    }
  }

  /*4k*/
  @media (min-width: 3500px) {
    .wrapper {
      gap: 50px;
    }
    img {
      width: 45px;
    }
  }
</style>
