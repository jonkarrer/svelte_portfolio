<script></script>

<div class="homepage">
  <div class="project-title" onclick="slideOpenProjects()"><p style="transform: rotate(90deg)">Projects</p></div>
  <div class="about-wrapper">
    <h1>About Me</h1>
    <p>
         I enjoy problem solving, coding, team sports, and art. If you have a dream,
         I want to help you make that happen. I'm adding projects to my portfolio
         regulary and you can follow my progress on LinkedIn!
    </p>
    <div class="soft-skills-wrapper">
      <div class="skills-title" onclick="slideOpenSkills()"><p1>Skills</p1></div>
      <div class="blog-title"><p1><a href="https://chewedup.blog">Blog</a></p1></div>
    </div>
  </div>
  <div class="contact-title" onclick="slideOpenContacts()"><p style="transform: rotate(-90deg)">Contact</p></div>
</div>

<style>
  .homepage {
  display: grid;
  grid-template-columns: 300px auto 300px;
  position: relative;
  transition: all 0.5s;
  overflow: hidden;
}
.about-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.about-wrapper h1 {
  font-size: 6em;
  color: white;
}
.about-wrapper p {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.7vw;
  margin: 20px;
  color: var(--theme-lite-grey);
}
.about-wrapper p {
    font-size: 1.5em;
  }
.project-title {
  display: flex;
  align-items: center;
  height: 100vh;
  font-size: 50px;
  color: var(--theme-cyan);
}
.contact-title {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100vh;
  font-size: 50px;
  color: var(--theme-cyan);
}
.soft-skills-wrapper {
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  font-size: calc(2vh + 2vw);
  color: var(--theme-purple);
  margin-top: 10vh;
}
.project-title,
.contact-title,
.skills-title,
.blog-title,
.resume-title:hover {
  cursor: pointer;
}
</style>