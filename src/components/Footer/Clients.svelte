<script lang="ts">
  import Title from "../Projects/shared/Title.svelte";
</script>

<section>
  <Title tagline="Testimonial" heading="What my clients say" color="light" />
  <div class="grid">
    <article>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
      </p>
      <h4>-Amanda</h4>
    </article>
    <article>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
      </p>
      <h4>-Baker</h4>
    </article>
    <article>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
      </p>
      <h4>-Sarah</h4>
    </article>
  </div>
</section>

<style>
  h4 {
    color: var(--light);
    margin-top: 10px;
  }
  p {
    color: var(--grey);
    font-size: 14px;
  }
  .grid {
    display: grid;
    gap: 30px;

    text-align: center;

    margin-top: 30px;
  }

  /*Lg*/
  @media (min-width: 1024px) {
    .grid {
      gap: 35px;
      text-align: left;

      grid: auto / repeat(3, 1fr);
    }
    h4 {
      text-align: right;
    }
  }
  /*Xl*/
  @media (min-width: 1250px) {
    .grid {
      gap: 80px;
    }
  }
  /*2xl*/
  @media (min-width: 1536px) {
  }
</style>
