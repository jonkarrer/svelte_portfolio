<script>
  async function copyEmail() {
    await navigator.clipboard.writeText("karrerjon@gmail.com");
    alert("email copied to clipboard");
  }
</script>

<div on:click={() => copyEmail()} class="wrapper">
  <h4 id="email">karrerjon@gmail.com</h4>
  <span> <img src="/assets/copy.png" alt="" /></span>
</div>

<style>
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    border-radius: 3px;

    padding: 0 20px;

    height: 70px;
    width: 100%;

    margin-top: 30px;

    background: var(--light);

    position: relative;
  }
  h4 {
    font-size: 20px;
  }
  img {
    width: 35px;
    margin-left: 20px;
  }
  .wrapper:hover {
    cursor: pointer;
  }

  /*Md*/
  @media (min-width: 768px) {
    .wrapper {
      width: 500px;
    }
    h4 {
      font-size: 24px;
    }
  }

  /*Lg*/
  @media (min-width: 1024px) {
    .wrapper {
      width: 500px;
    }
  }
  /*Xl*/
  @media (min-width: 1280px) {
  }
  /*2xl*/
  @media (min-width: 1536px) {
  }
</style>
