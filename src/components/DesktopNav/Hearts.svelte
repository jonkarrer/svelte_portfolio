<script>
  let pathColor = "grey";

  let likes = 23;
</script>

<span>
  <p>Drop a Like</p>
  <div>
    <img
      on:click={() => {
        pathColor = "red";
        likes += 1;
      }}
      src="assets/hearts/{pathColor}.svg"
      alt=""
    />
    <h5>{likes}</h5>
  </div>
</span>

<style>
  /*Lg*/
  @media (min-width: 1024px) {
    span {
      background: var(--dk-grey);
      width: 100%;
      height: 90px;
      align-self: flex-end;

      display: grid;
      place-content: center;
      gap: 10px;
    }
    span p {
      font-size: 1rem;
      font-weight: bold;
    }
    div {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
    }
    img {
      width: 30px;
    }
    img:hover {
      cursor: pointer;
    }
  }

  /*4xl*/
  @media (min-width: 2500px) {
    span {
      height: 150px;
    }
    span p {
      font-size: 1.8rem;
    }
    img {
      width: 60px;
    }
  }

  /*5xl*/
  @media (min-width: 3000px) {
    span {
      height: 200px;
      gap: 25px;
    }
    span p {
      font-size: 2rem;
    }
    img {
      width: 70px;
    }
  }
</style>
