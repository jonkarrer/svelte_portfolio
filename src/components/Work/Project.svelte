

<div class="project">
  <img class="phone" src="assets/work/mml_phone.png" alt="">
  <img class="tablet" src="assets/work/mml_tablet.png" alt="">
 
    <article>
      <img class="github" src="assets/white-icons/1.svg" alt="">
      <h3>mml</h3>
      <div class="info">
        <h2>Making Markets</h2>
        <p>This project is robust. Authentication, Stripe payments, back-end API, Postgres DB, subscriptions, and more. This is still under construction.</p>
      </div>
      <button>
        Visit
      </button>
    </article>
</div>

<style>
  .project {
    height: 100vh;
    background-image: linear-gradient(110deg, #00beb3, #5653ff);
    display: grid;
    place-content: center;
  }
  article {
    position: relative;

    width: 90%;
    margin: auto;
    padding: 30px 15px;

    /** Frosted Glass fallback */
    background-color: hsla(200, 50%, 50%, .8);
    
    display: grid;
    gap: 30px;

    color: white;
    z-index: 20;
  }
  @supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
    article {
      background-color: rgba(255, 255, 255, .2);  
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
    }
  }
  .github {
    position: absolute; right: 30px; top: 30px;

    height: 50px;
  }
  .info {
    display: grid; gap: 20px;
  }
  button {
    font-size: 1.4rem;

    height: 60px;
    width: 200px;

    background: none; outline: none;

    border: white solid thin;
    color: white;
  }
  button:hover {
    cursor: pointer;
    background-color: hsla(200, 50%, 50%, 1);
  }
  .tablet {
    display: none;
  }
  .phone {
    height: 90vh;
    position: absolute;
    right: -200px;
    top: 0; bottom: 0;
    margin:auto
  }
  /*Md*/
  @media (min-width: 768px) {
    article {
      width: 80%;
      padding: 30px;

      gap: 50px;

      color: white;
    }
    p {
      width: 80%;
    }
    .phone {
      right: -100px;
    }
  }

  /*Lg*/
  @media (min-width: 1024px) {
    .project {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
    .tablet {
      position: absolute;
      display: block;
      left: -800px;
      height: 85vh;
    }
    .phone {
      position: absolute;
      left: 140px;
      right: auto; top: auto; bottom: auto;
      height: 550px;
      bottom: 30px;
      z-index: 10;
    }
    h3 {
      font-weight: 900;
    }
    h2 {
      font-size: 4rem;
    }
    article {
      text-align: right;
      margin: 60px;
      width: 600px;
      padding: 40px;
      gap: 70px;
    }
    p {
      width: auto;
    }
    .github {
      right: auto;
      left: 80px;
      top: 40px;
    }
    button {
      justify-self: end;
      height: 60px;
      font-size: 1.6rem;
    }
  }
  /*Xl*/
  @media (min-width: 1280px) {
    .tablet {
      left: -600px;
      height: 85vh;
    }
    .phone {
      left: 380px;
      height: 550px;
    }
    h3 {
      font-weight: 900;
    }
    h2 {
      font-size: 4rem;
    }
    article {
      width: 700px;
    }
  }


</style>