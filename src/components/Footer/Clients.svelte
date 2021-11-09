<script lang="ts">
  import Title from "../Projects/shared/Title.svelte";
</script>

<section>
  <Title tagline="Testimonial" heading="What my clients say" color="light" />
  <div class="grid">
    <article>
      <p>
        I never felt lost with your help. We described the website I wanted in
        one meeting and you had it finished in under a week. I love love my new
        site! I now have more clients than I can handle.
      </p>
      <h4>-Amanda</h4>
    </article>
    <article>
      <p>
        This project seemed like a huge undertaking by both of us, but once we
        got going it has been a breeze. Any time I had a design change or new
        feature, you were always happy to code more.
      </p>
      <h4>-Baker</h4>
    </article>
    <article>
      <p>
        It is kinda crazy we were able to build my site without ever meeting.
        You communicated so well and answered my emails promptly. My website is
        exactly what I wanted.
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
</style>
