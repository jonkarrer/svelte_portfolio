<form action="">
  <label for="name">
    <h5>Name</h5>
    <input type="text" />
  </label>
  <label for="email">
    <h5>Email</h5>
    <input type="email" />
  </label>
  <textarea name="comment" rows="10" cols="30" placeholder="Write message..." />
  <button>Submit</button>
</form>

<style>
  /*Lg*/
  @media (min-width: 1024px) {
    form {
      display: grid;
      gap: 20px;
      background: var(--lt-grey);
      width: 40vw;
      max-width: 600px;
      height: 400px;
      padding: 30px;
      position: absolute;
      right: 40px;
      top: 0;
      bottom: 100px;
      margin: auto;
    }
    label {
      display: flex;
      align-items: flex-end;
      width: 100%;
    }
    input {
      background: none;
      outline: none;
      border: none;
      border-bottom: black solid thin;
      width: 100%;
      margin: 0 10px;
      padding: 5px;
      height: 30px;
      font-size: 1.3rem;
    }
    textarea {
      font-size: 1.3rem;
      outline: none;
      padding: 5px;
    }
  }
  /*Xl*/
  @media (min-width: 1280px) {
    form {
      gap: 25;
      width: 40vw;
      max-width: 1000px;
      height: 400px;
      padding: 30px;
    }
  }
  /*2xl*/
  @media (min-width: 1536px) {
    form {
      gap: 30px;
      width: 45vw;
      max-width: 800px;
      height: 500px;
      padding: 30px;
      right: 50px;
    }
    /*3xl*/
    @media (min-width: 2000px) {
      form {
        gap: 40px;
        height: 600px;
        max-width: 900px;
      }
    }
    /*4xl*/
    @media (min-width: 2500px) {
      form {
        gap: 60px;
        max-width: 1000px;
        height: 700px;
        padding: 40px;
        right: 60px;
      }
    }
    /*5xl*/
    @media (min-width: 3000px) {
      form {
        gap: 60px;
        max-width: 1600px;
        height: 800px;
        padding: 40px;
        right: 100px;
      }
    }
    /*4k*/
    @media (min-width: 3500px) {
      form {
        gap: 80px;
        max-width: 2500px;
        height: 1000px;
      }
    }
  }
</style>
