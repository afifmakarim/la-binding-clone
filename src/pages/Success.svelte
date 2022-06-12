<script>
  import { navigate } from "svelte-navigator";
  setTimeout(() => {
    navigate("/consent");
  }, 5000);
</script>

<main>
  <div class="wrapper">
    <p>Penyambungan Berhasil!</p>
    <div class="description">
      Tunggu sebentar ya, kamu akan segera diarahkan kembali ke halaman Merchant
      App Test
    </div>
  </div>
</main>

<!-- markup (zero or more items) goes here -->
<style>
  main {
    max-width: 430px;
    margin: 0 auto;
    background-color: white;
    min-height: 100vh;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80vh;
  }

  .wrapper p {
    font-weight: 600;
  }

  .wrapper .description {
    font-size: 1rem; /* 16px */
    line-height: 1.5rem; /* 24px */
  }
</style>
