<script lang="ts">
</script>

<dialog class="modal">
<slot></slot>
</dialog>

<style>
.modal {
  position: absolute;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
  z-index: 50;
}
</style>
