<script>
  import { tweened } from "svelte/motion";

  import { count } from "../store";

  // 5 Minutes Counter

  $: minutes = Math.floor($count / 60);
  $: seconds = Math.floor($count - minutes * 60);
</script>

<div class="progress">Selesaikan proses dalam {minutes}:{seconds}</div>

<style>
  .progress {
    background: white;
    padding: 0 0.8rem 0.8rem 0.8rem;
    display: flex;
    justify-content: center;
    font-size: 0.75rem; /* 12px */
    line-height: 1rem; /* 16px */
  }
</style>
