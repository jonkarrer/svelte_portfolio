<script>
  let text = "Copy";

  async function copyEmail() {
    await navigator.clipboard.writeText("karrerjon@gmail.com");
    text = "Copied!!";
  }
</script>

<div>
  <h3 id="email">karrerjon@gmail.com</h3>
  <span on:click={() => copyEmail()} style="--text: '{text}'">
    <img src="/assets/copy.png" alt="" /></span
  >
</div>

<style>
  div {
    display: flex;
    align-items: center;
    border: black solid thin;
    border-radius: 1rem;
    padding: 10px 25px;
    width: max-content;
    height: max-content;
  }
  img {
    width: 35px;
    margin-left: 20px;
  }
  img:hover {
    cursor: pointer;
  }
  span {
    border-left: black solid thin;
    position: relative;
  }
  span:hover::after {
    content: var(--text);
    position: absolute;
    top: -50px;
    left: 0;
    right: 0;
    margin: auto;

    padding: 10px;
    width: 70px;

    background: black;
    color: white;
    font-weight: bold;
  }
  h3 {
    margin-right: 20px;
    font-size: 20px;
  }
  /*Lg*/
  @media (min-width: 1024px) {
    div {
      position: absolute;
      right: 30px;
      top: 0;
      bottom: 0;
      margin: auto;
      height: 80px;
      padding: 10px 30px;
      width: auto;
    }
    img {
      width: 60px;
    }
    h3 {
      font-size: 32px;
    }
  }
  /*Xl*/
  @media (min-width: 1280px) {
    div {
      right: 40px;
      height: 100px;
    }
    img {
      width: 60px;
    }
    h3 {
      font-size: 40px;
    }
  }
  /*2xl*/
  @media (min-width: 1536px) {
    div {
      right: 40px;
      height: 120px;
    }
    img {
      width: 80px;
    }
    h3 {
      font-size: 50px;
    }
  }
  /*3xl*/
  @media (min-width: 2000px) {
    div {
      right: 100px;
      height: 150px;
    }
    img {
      width: 100px;
    }
    h3 {
      font-size: 72px;
    }
  }
  /*4xl*/
  @media (min-width: 2500px) {
    div {
      right: 150px;
      height: 180px;
    }
    img {
      width: 110px;
    }
    h3 {
      font-size: 85px;
    }
  }
  /*5xl*/
  @media (min-width: 3000px) {
  }
  /*4k*/
  @media (min-width: 3500px) {
  }
</style>
