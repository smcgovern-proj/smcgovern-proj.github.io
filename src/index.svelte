<script lang="ts">
  import Card from './Card.svelte';
  import Icon from 'svelte-awesome';
  import Modal from './Modal.svelte';
  import { linkedin, github, envelope } from 'svelte-awesome/icons';

  let showModal = false;

</script>

<main>
  <div class="sidebar">
    <div class="photo">
      <img src="./assets/profile-full-cropped.jpg" alt="either me or a corgi"/>
    </div>
    <div class="sidebar-content">
      <h1 class="name">SEAN MCGOVERN</h1>
      <p class="bio">Hi! I'm a full-stack web developer and UX-dabbler based in San Francisco. I believe in constant self-improvement, in design/dev as a means of advocating for the end user, and in always seasoning your pasta water. Connect with me below:</p>
      <div class="icon-bar">
        <a href="https://www.linkedin.com/in/seanmcgovern5/">
          <Icon data={linkedin} scale="1.5" />
        </a>
        <a href="https://github.com/smcgovern-proj">
          <Icon data={github} scale="1.5" />
        </a>
        <a href="mailto:smcgovern135@gmail.com">
          <Icon data={envelope} scale="1.5" />
        </a>
      </div>
    </div>
  </div>
  <div class="body">
    <Card
    title="Pomelo"
    bg="https://user-images.githubusercontent.com/84145162/132075004-f52a9792-14f4-44cd-ab86-20bb7274fdd5.png"
    subtitle="Svelte, Express"
    redirect="https://github.com/smcgovern-proj/pomelo"
    />
    <Card
    title="Products Service, Caliche"
    bg="https://user-images.githubusercontent.com/84145162/133371600-f29c2773-4979-4cf1-b1b1-27dfa33106eb.png"
    subtitle="Express, MongoDB, Pandas"
    redirect="https://github.com/smcgovern-proj/products-caliche"
    />
  </div>
</main>

<style>
  main {
   display: grid;
   grid-template-columns: minmax(300px, 25%) 1fr;
  }

  .sidebar {
    margin-left: 1rem;
    margin-top: 1rem;
  }

  .body {
    display: flex;
    flex-flow: column nowrap;
    justify-content: start;
    margin-left: 10rem;
    padding-left: 5rem;
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
    text-align: left;
  }

  .photo {
    width: 273px;
    height: 273px;
  }

  .photo img {
    width: 100%;
  }

  .sidebar-content {
    max-width: 20rem;
  }

  .icon-bar {
    margin-top: 3rem;
    width: 90%;
    display: flex;
    justify-content: space-between;
  }

  a {
    color: black;
  }

  a:hover {
    color: #BB371A;
  }
</style>
