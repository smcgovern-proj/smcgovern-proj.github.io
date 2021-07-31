<script lang="ts">
</script>

<main>
  <div class="sidebar">
    <img src="http://placecorgi.com/260/180" alt="either me or a corgi">
    <h1 class="name">Sean McGovern</h1>
    <p class="bio">Hi! I'm a full-stack web developer and UX-dabbler based in Washington, D.C. I believe in constant self-improvement, in design/dev as a means of advocating for the end user, and in always seasoning your pasta water. Connect with me below:</p>
  </div>
  <div class="body">
  </div>
</main>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400&display=swap');
  :root {
    --font-main: Lato;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0
  }
  main {
   display: grid;
   grid-template-columns: minmax(150px, 25%) 1fr;
  }

  .body {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
  }

  .name {
    font-family: var(--font-main);
    font-weight: 700;
    color: #BB371A;
    letter-spacing: .1rem;
  }

  .bio {
    font-family: var(--font-main);
    font-weight: 400;
  }
</style>
