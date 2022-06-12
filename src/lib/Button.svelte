<script>
  import { navigate } from "svelte-navigator";

  export let defaultCheckbox;
  export let destination;

  function visitPage() {
    navigate(destination, { replace: true });
  }
</script>

<button
  class={defaultCheckbox === true ? "active" : "inactive"}
  disabled={!defaultCheckbox}
  on:click={visitPage}>Lanjut</button
>

<style>
  button.active {
    background: #e91e1e;
    color: whitesmoke;
  }

  button.inactive {
    color: rgb(73, 86, 106);
    background: rgb(142, 143, 145);
  }

  button {
    padding: 1rem 0.4rem;
    width: 100%;
    border: 0px;
    font-size: 0.875rem;
    border-radius: 6px;
    font-weight: bold;
    letter-spacing: 0.025em;
  }

  button.active:hover {
    background: #e84b4b;
    cursor: pointer;
  }
</style>
