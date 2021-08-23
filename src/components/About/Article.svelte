<script>
  import {scrollToWorkPage} from "../../utils/store"
  export let x;

  function scrollDown() {
    scrollToWorkPage.set(true);
  }
</script>

<article style="--theme-article: {x}vw">
  <img class="avatar" src="assets/profile/profile.jpg" alt="">
  <p>I studied engineering in college and after running my own food business I moved into crafting all things Web. Freelancing gives me the creative freedom to work on small or large projects. I am always looking for new opportunities so please get in touch.</p>
  
  <button on:click={scrollDown}>My Work <img src="assets/arrow.svg" alt=""></button>
</article>

<style>
  article {
    position: absolute;
    top: 10%;
    left: 0;
    right: 0;
    margin: auto;
    color: var(--wheat);
    z-index: 20;
    width: 300px;
    height: auto;
    display: grid;
    text-align: left;
    gap: 50px;
    transform: translateX(var(--theme-article));
    transition: all 2s ease;
  }
  .avatar {
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
    width: 220px;
    padding: 10px 0;
    transition: all 2s ease;
    display: grid;
    grid-auto-flow: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  button img {
    height: 20px;
  }
  button:hover {
    background-color: var(--blue);
    cursor: pointer;
  }
  button:hover > img {
    transform: rotate(90deg);
    transition: transform 1s ease;
  }
  /*Md*/
  @media (min-width: 768px) {
    article {
    top: 12%;
    width: 500px;
    gap: 40px;
    }
  }
  /*Lg*/
  @media (min-width: 1024px) {
  article {
    top: 15%;
    left: 150px;
    width: 700px;
    }
    .avatar {
    height: 160px;
    width: 160px;
  }
  button {
    width: 250px;
    padding: 15px 0;
  }
}
/*2xl*/
@media (min-width: 1536px) {
    article {
      width: 1100px;
      gap: 60px;
      }
    .avatar {
      height: 200px;
      width: 200px;
    }
    button {
      width: 300px;
      padding: 20px 0;
    }
    article p {
      font-size: 2.3rem;
    }
    button img {
    height: 30px;
    }
  }
</style>