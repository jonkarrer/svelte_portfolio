<script>
  export let x;
</script>

<article style="--theme-article: {x}vw">
  <img src="assets/profile/profile.jpg" alt="">
  <p>I studied engineering in college and after running my own food business I moved into crafting all things Web. Freelancing gives me the creative freedom to work on small or large projects. I am always looking for new opportunities so please get in touch.</p>
  <button>Explore</button>
</article>

<style>
  article {
    position: absolute;
    top: 30px;
    left: 0;
    right: 0;
    margin: auto;
    color: var(--wheat);
    z-index: 20;
    width: 300px;
    height: max-content;
    display: grid;
    gap: 30px;
    transform: translateX(var(--theme-article));
    transition: all 2s ease;
  }
  img {
    height: 120px;
    width: 120px;
    border-radius: 50%;
  }
  p {
    font-weight: 500;
  }
  button {
    border: var(--red) solid 2px;
    background: none;
    color: white;
    width: 200px;
    padding: 5px 0;
    transition: all 2s ease;
  }
  button:hover {
    background-color: white;
    cursor: pointer;
  }
  /*Md*/
  @media (min-width: 768px) {
    article {
    top: 12%;
    left: 80px;
    right: auto;
    width: 400px;
    gap: 40px;
    }
  }
  /*Lg*/
  @media (min-width: 1024px) {
  article {
    left: 150px;
    width: 500px;
    }
    img {
    height: 160px;
    width: 160px;
  }
  button {
    width: 220px;
    padding: 10px 0;
  }
  /*2xl*/
  @media (min-width: 1536px) {
    article {
      width: 600px;
      gap: 50px;
      }
      img {
      height: 200px;
      width: 200px;
    }
    button {
      width: 260px;
      padding: 15px 0;
    }
  }
}
</style>