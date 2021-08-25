<span>
  <p>Leave a like!</p>
  <div>
    <img src="assets/hearts/grey.svg" alt="" />
    <h5>{23}</h5>
  </div>
</span>

<style>
  /*Md*/
  @media (min-width: 768px) {
    span {
      background: var(--dk-grey);
      width: 100%;
      height: 100px;
      align-self: flex-end;

      display: grid;
      place-content: center;
      gap: 10px;
    }
    span p {
      font-size: 1.2rem;
      font-weight: bold;
    }
    div {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
    }
  }
  /*Lg*/
  @media (min-width: 1024px) {
  }
  /*Xl*/
  @media (min-width: 1280px) {
  }
  /*2xl*/
  @media (min-width: 1536px) {
  }
</style>
