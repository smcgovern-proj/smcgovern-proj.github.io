<script lang="ts">
  export let title:string, bg:string, subtitle:string;
  const handleClick = () => {alert('coming *soon*')};
</script>

<div class="card" style="--bg: {bg}" on:click={handleClick}>
  <h1>{title}</h1>
  <h3>{subtitle}</h3>
</div>

<style>
  .card {
    height: 50vh;
    background-color: var(--bg);
    font-weight: 700;
    box-shadow: 2px 3px 3px rgba(0,0,0,25%);
    color: #fff;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-end;
    padding-left: 3rem;
    padding-bottom: 2rem;
  }
  .card:hover {
    filter: brightness(.9)
  }
  .card h3 {
   margin-top: -.5rem;
   font-style: italic;
   font-weight: 400;
  }
</style>
