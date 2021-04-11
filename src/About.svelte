<script></script>

<section class="contact-wrapper">
  <div class="profile-pic-wrapper">
    <div class="profile-pic">
      <img src="assets/profile/profile.jpg" alt="">
    </div>
  </div>
  <div class="about-me">
    <div class="intro">
      <h1>Hello, I'm Jon</h1>
      <p>
        Thank you for coming to my corner of the internet!
        I am 28 and live in Louisiana with my high school sweetheart.
        My real passions in life are creating things and problem solving.
        Cooking, coding, writing, drawing, and reading take up most of my time.
        In my free time I enjoy backpacking for weeks deep into the moutains.
        I am always looking for a new adventure and to meet new people.
        If you have a dream, please contact me, because I really want to help you get there.
      </p>
    </div>
    <hr/>
    <div class="resume">
      <h1>Experience</h1>
      <ul class="timeline">
        <li>
          <ul>
            <h2>Education</h2>
            <li>East Ascension High, Graduated w/ Honors</li>
            <li>LSU, 3 yrs, Mech. Engineering</li>
            <li>RPCC, 1.5 yrs, Plant Operations</li>
          </ul>
        </li>
        <li>
          <ul>
            <h2>Work History</h2>
            <li>Chef, 8 yrs, Various places</li>
            <li>Personal Training Director, 1 yr, LA Fitness</li>
            <li>Owner, 3 yrs, Feed the Beast LLC</li>
            <li>Frontend Engineer, 1 yr, Self taught</li>
          </ul>
        </li>
        <li>
          <ul>
            <h2>Sports</h2>
            <li>5A Varsity Football, 4 yrs, Team Captain</li>
            <li>Div 1 Wrestling, 2 yrs, 4th in State</li>
          </ul>
        
        </li>
      </ul>
    </div>
  </div>
</section>

<style>
  .contact-wrapper {
    background: black;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  .profile-pic-wrapper{
    background: blue;
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
  .about-me {
    display: flex;
    height: 100%;
    width: 70%;
    background: white;
    margin: auto;
  }
  h1 {
    text-align: center;
    margin: 20px 0;
    font-size: 2em;
  }
  p {
    margin: 30px 50px;
    text-indent: 1em;
    line-height: 1.4;
    font-size: 1.2em;
  }
  ul {
    list-style: none;
    margin: 0px 10px;
  }
  li {
    margin: 5px 20px;
  }
  .timeline {
    display: grid;
  }
  .intro {
    flex: 1;
  }
  .resume {
    flex: 1;
  }
</style>