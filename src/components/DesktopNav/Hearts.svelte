<script>
  let pathColor = "grey";
</script>

<span>
  <p>Drop a Like</p>
  <div>
    <img
      on:click={() => (pathColor = "red")}
      src="assets/hearts/{pathColor}.svg"
      alt=""
    />
    <h5>{23}</h5>
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
  /*Xl*/
  @media (min-width: 1280px) {
  }
  /*2xl*/
  @media (min-width: 1536px) {
  }
</style>
