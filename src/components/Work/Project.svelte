

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
  img {
    position: absolute;
  }
  article {
    position: relative;
    width: 90%;
    margin: auto;
    padding: 30px 10px;
    z-index: 20;

    background-color: rgba(255, 255, 255, .2);  
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);

    display: grid;
    gap: 30px;

    color: white;
  }
  .github {
    height: 50px;
    right: 20px;
    top: 20px;
  }
  .info {
    display: grid;
    gap: 20px;
  }
  button {
    font-size: 1.4rem;
    padding: 10px 0;
    width: 200px;
    background: none;
    outline: none;
    border: white solid thin;
    color: white;
  }
  .tablet {
    display: none;
  }
  .phone {
    height: 700px;
    right: -200px;
    top: 0; bottom: 0;
    margin:auto
  }
 

  /*Lg*/
  @media (min-width: 1024px) {
    .project {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
    .tablet {
      display: block;
      left: -40%;
      height: 700px;
    }
    .phone {
      left: 25%;
      height: 550px;
      bottom: 30px;
      z-index: 10;
    }
    h3 {
      font-weight: 900;
      text-align: center;
    }
    article {
      text-align: right;
      margin: 50px;
    }
    article p {
      width: 600px;
    }
    
}
 


</style>