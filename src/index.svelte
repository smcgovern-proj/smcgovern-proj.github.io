<script lang="ts">
  import Card from './Card.svelte';
</script>

<main>
  <div class="sidebar">
    <div class="photo">
      <img src="./assets/profile-full-cropped.jpg" alt="either me or a corgi"/>
    </div>
    <h1 class="name">SEAN MCGOVERN</h1>
    <p class="bio">Hi! I'm a full-stack web developer and UX-dabbler based in Washington, D.C. I believe in constant self-improvement, in design/dev as a means of advocating for the end user, and in always seasoning your pasta water. Connect with me below:</p>
  </div>
  <div class="body">
    <Card
    title="blossom.map"
    bg="#F3CEE6"
    subtitle="Javascript, React, Open Data DC API"
    />
  </div>
</main>

<style>
  main {
   display: grid;
   grid-template-columns: minmax(150px, 25%) 1fr;
  }

  .sidebar {
    margin-left: 1rem;
    margin-top: 1rem;

  }
  .body {
    display: flex;
    flex-flow: column nowrap;
    justify-content: start;
    margin-left: 6rem;
    margin-right: 1rem;
    margin-top: 1rem;
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

  .photo {
    width: 273px;
    height: 273px;
  }
  .photo img {
    width: 100%;
  }

</style>
