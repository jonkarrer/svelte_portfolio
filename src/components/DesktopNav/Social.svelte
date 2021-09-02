<menu>
  <a
    style="--content: 'Githhub'"
    target="_blank"
    href="https://github.com/jonkarrer"
    ><img src="assets/icons/github_lt.svg" alt="github" /></a
  >
  <a
    style="--content: 'LinkedIn'"
    target="_blank"
    href="https://www.linkedin.com/feed/"
    ><img src="assets/icons/linked_lt.svg" alt="linkedin" /></a
  >
  <a style="--content: 'Email'" href="mailto: karrerjon@gmail.com">
    <img src="assets/icons/email_lt.svg" alt="email" /></a
  >
</menu>

<style>
  /*Lg*/
  @media (min-width: 1024px) {
    menu {
      display: grid;
      gap: 20px;
      align-self: flex-end;
    }
    img {
      width: 30px;
    }
    a {
      position: relative;
    }
    a:hover::after {
      content: var(--content);
      height: 20px;
      padding: 0 3px;
      background: black;
      position: absolute;
      bottom: 0;
      color: white;
    }
  }

  /*2xl*/
  @media (min-width: 1536px) {
    menu {
      gap: 30px;
    }
    img {
      width: 40px;
    }
    a:hover::after {
      height: 30px;
      padding: 0 6px;
      font-size: 1.2rem;
    }
  }

  /*3xl*/
  @media (min-width: 2000px) {
  }

  /*4xl*/
  @media (min-width: 2500px) {
    menu {
      gap: 40px;
    }
    img {
      width: 50px;
    }
    a:hover::after {
      height: 40px;
      padding: 0 6px;
      font-size: 2rem;
    }
  }

  /*4k*/
  @media (min-width: 3500px) {
    menu {
      gap: 40px;
    }
    img {
      width: 60px;
    }
    a:hover::after {
      height: 40px;
      padding: 0 6px;
      font-size: 2rem;
    }
  }
</style>
