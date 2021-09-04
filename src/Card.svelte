<script lang="ts">
  export let title:string, bg:string, subtitle:string;
  let hover = false;
  const handleClick = () => {window.location.href="https://github.com/smcgovern-proj/pomelo"};
  const handleMouseOver = () => {
    hover = true;
  };
  const handleMouseOut = () => {
    hover = false;
  };
</script>

<div class="card" style="background-image: url({bg})" 
  on:click={handleClick} 
  on:mouseover={handleMouseOver} 
  on:focus={handleMouseOver}
  on:mouseout={handleMouseOut}
  on:blur={handleMouseOut}>
    {#if hover}
      <h1>{title}</h1> 
      <h3>{subtitle}</h3> 
    {/if}
</div>

<style>
  .card {
    height: 50vh;
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
