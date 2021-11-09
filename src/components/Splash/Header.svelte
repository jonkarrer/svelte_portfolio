<header>
  <img src="../assets/logo.svg" alt="logo" />
  <nav>
    <a href="#e-commerce">E-commerce</a>
    <a href="#e-commerce">SPA</a>
    <a href="#e-commerce">Landing</a>
    <a href="#e-commerce">Web App</a>
  </nav>
</header>

<style>
  header {
    display: grid;
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    z-index: 50;
  }
  img {
    margin: auto;
    width: 75px;
  }
  nav {
    display: none;

    color: var(--light);
    font-weight: 800;
    letter-spacing: 1px;
  }

  /*Md*/
  @media (min-width: 768px) {
    header {
      display: grid;
      grid-auto-flow: column;
      align-items: flex-end;
      justify-content: flex-start;

      padding: 30px 60px;
    }

    img {
      margin: 0;
      width: 125px;
    }
    nav {
      display: grid;
      grid-auto-flow: column;
      gap: 40px;

      margin-bottom: 30px;
      margin-left: 40px;
    }
  }
</style>
