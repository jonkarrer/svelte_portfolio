<script lang="ts">
</script>

<section>
  <article>
    <div class="heading-container">
      <div class="tagline">Landing Page</div>
      <h2>Serenity Hair</h2>
    </div>
    <p>
      Landing pages are a cornerstone in any marketing stratagy. Serenity Hair
      is a hair studio in Florida run by a sole stylist. She wanted a page where
      clients could see her services, contact her for appoinments, and complete
      consultations with a form. I designed everything from the ground up with
      figma and we were able to colaborate completely through email.
    </p>
    <div class="tech-container">
      <span>Netlify</span>
      <span>HTML5</span>
      <span>CSS3</span>
      <span>Javascript</span>
    </div>
  </article>
  <button>Preview</button>
</section>

<style>
  section {
    background: var(--red);
  }
  .heading-container {
    display: grid;
    gap: 8px;
  }
  article {
    display: grid;
    gap: 30px;
    padding: 40px 20px;

    border-right: var(--dark) solid 15px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;

    background: var(--light);
  }
  h2 {
    color: var(--dark);
  }
  p {
    color: var(--grey);
  }
  .tech-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
  }
  span {
    padding: 5px 10px;

    color: var(--light);
    font-size: 13px;
    font-weight: bold;

    background: var(--dark);
    border-radius: 3px;

    margin-right: 10px;
    margin-top: 10px;
  }
  button {
    width: 100%;
    height: 65px;

    background: var(--dark);

    font-size: 24px;
    font-weight: 500;
    color: var(--light);

    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
  }
</style>
