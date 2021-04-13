<section class="about-wrapper">
  <div class="profile-pic-wrapper">
    <div class="profile-pic">
      <img src="assets/profile/profile.jpg" alt="">
    </div>
  </div>
  <div class="card-wrapper">
    <div class="intro">
      <h1>Hello, I'm Jon Karrer.</h1>
      <p>
        Thank you for coming to my corner of the internet!
        I am 28 and live in Louisiana with my high school sweetheart.
        My real passions in life are creating things and problem solving.
        Cooking, coding, writing, drawing, and reading take up most of my time.
        In my free time I enjoy backpacking for weeks deep into the mountains.
        I am always looking for a new adventure and to meet new people.
        If you have a dream, please contact me, because I really want to help you get there.
      </p>
    </div>
    <hr/>
    <div class="resume">
      <ul class="timeline">
        <li>
          <ul class="dot-list">
            <h3>Education</h3>
            <li>EA High School, Graduated w/ Honors</li>
            <li>LSU, 3 yrs, Mech. Engineering</li>
            <li>RPCC, 1.5 yrs, Plant Operations</li>
          </ul>
        </li>
        <li>
          <ul class="dot-list">
            <h3>Work History</h3>
            <li>Chef, 8 yrs, Various places</li>
            <li>Personal Training Director, 1 yr, LA Fitness</li>
            <li>Owner, 3 yrs, Feed the Beast LLC</li>
            <li>Front-end Engineer, 1 yr, Self taught</li>
          </ul>
        </li>
        <li>
          <ul class="dot-list">
            <h3>Sports</h3>
            <li>5A Varsity Football, 4 yrs, Team Captain</li>
            <li>Div 1 Wrestling, 2 yrs, 4th in State</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</section>

<style>
  .about-wrapper {
    height: calc(100vh + auto);
    padding-bottom: 20px;
    background: black;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  .profile-pic-wrapper{
    padding: 2em;
  }
  .profile-pic {
    height: 250px;
    width: 250px;
    border-radius: 50%;
    margin: auto;
  }
  .profile-pic img {
    object-fit: contain;
    height: 250px;
    border-radius: 50%;
  }
  .card-wrapper {
    display: flex;
    width: 70%;
    min-width: 800px;
    max-width: 1300px;
    background: white;
    margin: 30px auto;
    padding: 3vh 0;
    border-radius: .5em;
    box-shadow: teal 0px 10px 40px;
    -moz-box-shadow:    inset 0 0 10px #000000;
   -webkit-box-shadow: inset 0 0 10px #000000;
   box-shadow:         inset 0 0 10px #000000;
  }
  h1 {
    text-align: center;
    margin: 20px 0;
    font-size: clamp(1.6em, 2.2vw, 3em);
    color: var(--theme-purple);
  }
  h3 {
    color: var(--theme-purple);
  }
  p {
    font-size: clamp(1em, 1.2vw, 1.5em);
    margin: 10px 10%;
    text-indent: 1em;
    line-height: 1.4;
  }
  ul {
    list-style: none;
    margin: 0px 10px;
  }
  li {
    margin: 5px 20px;
    font-size: clamp(1em, 1.2vw, 1.5em);
  }
  .dot-list {
    list-style: outside;
  }
  .timeline {
    display: grid;
  }
  .intro {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .resume {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  @media (max-width: 800px) {
    .card-wrapper {
      display: grid;
      width: 85%;
      min-width: 350px;
      margin: 20px auto;
      padding: 0;
    }
    p {
      margin: 0px 12% 20px;
    }
    .timeline {
      margin: 20px 0;
    }
  }
  @media (min-width: 1500px) {
    .profile-pic {
      height: 400px;
      width: 400px;
      border-radius: 50%;
      margin: auto;
    }
    .profile-pic img {
      object-fit: contain;
      height: 400px;
      border-radius: 50%;
    }
  }
</style>