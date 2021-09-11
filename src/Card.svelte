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

<div class="card" style="" 
  on:click={handleClick} 
  on:mouseover={handleMouseOver} 
  on:focus={handleMouseOver}
  on:mouseout={handleMouseOut}
  on:blur={handleMouseOut}>
  <img src={bg} alt="portfolio piece" />
    {#if hover}
      <div class="card-overlay">
        <h1>{title}</h1> 
        <h3>{subtitle}</h3> 
      </div>
    {/if}
</div>

<style>
  .card {
    max-height: 35rem;
    max-width: 75rem;
    font-weight: 700;
    box-shadow: 2px 3px 3px rgba(0,0,0,25%);
    color: #fff;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-end;
  }

  .card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    justify-self: center;
    align-self:  center;
  }
  .card:hover {
    filter: brightness(.9)
  }
  
  .card-overlay {
    position: absolute;
    margin-left: 1rem;
    margin-bottom: .5rem;
  }
  .card h3 {
   margin-top: -.5rem;
   font-style: italic;
   font-weight: 400;
  }
</style>
