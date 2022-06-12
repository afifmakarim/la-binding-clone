<script>
  import HeadBG from "../assets/login-banner.png";
  import Button from "../lib/Button.svelte";
  import Counter from "../lib/Counter.svelte";

  let inputPin = "";
  $: char = inputPin.length;
</script>

<main>
  <div class="banner-wrapper">
    <img class="banner" src={HeadBG} alt="banner" />
  </div>
  <div class="input-wrapper">
    <div class="head-title">Masukkan nomor dan PIN LinkAja kamu</div>
    <form class="input-field" autocomplete="off">
      <label for="msisdn">Nomor Handphone</label>
      <input
        class="msisdn"
        id="msisdn"
        type="text"
        size="12"
        autocomplete="false"
        maxlength="12"
        placeholder="Masukkan Nomer LinkAja"
      />

      <label for="pin">PIN LinkAja</label>
      <input
        id="pin"
        class="pin"
        type="password"
        autocomplete="false"
        maxlength="6"
        placeholder="Masukkan 6 digit PIN LinkAja"
        bind:value={inputPin}
      />
      {#if char < 6 && char !== 0}
        <span class="invalid">Minimum 6 Digit PIN </span>
      {/if}
    </form>
  </div>
  <div class="forget-pin-wrapper">
    <div class="forgot-pin">Lupa PIN?</div>
    <div class="forgot-pin-faq">Cek cara Reset PIN di sini</div>
  </div>
  <div class="button-wrapper">
    <Button destination={"/otp"} defaultCheckbox={char === 6 ? true : false} />
  </div>
  <Counter />
</main>

<!-- markup (zero or more items) goes here -->
<style>
  main {
    max-width: 430px;
    margin: 0 auto;
    background-color: #e1e1ed;
    min-height: 100vh;
  }

  .banner-wrapper {
    background: white;
  }
  .banner {
    width: 100%;
  }

  .input-wrapper {
    padding: 1rem;
    background: white;
  }

  .head-title {
    font-size: 1rem; /* 16px */
    line-height: 1.5rem; /* 24px */
  }

  .input-field {
    margin-top: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .input-field label {
    font-weight: 600;
  }

  .input-field input {
    border-radius: 4px;
    padding: 0.6rem;
    background: #f8f7fc;
    border: 2px solid #e1e1ed;
  }

  .input-field input:focus {
    outline: none;
    border: 2px solid red;
  }

  .forget-pin-wrapper {
    margin-top: 10px;
    padding: 0.8rem;
    background: white;
    font-size: 0.875rem; /* 14px */
    line-height: 1.25rem; /* 20px */
  }

  .forgot-pin {
    font-weight: 600;
  }

  .button-wrapper {
    padding: 0.8rem;
    background: white;
  }

  .invalid {
    font-size: 0.75rem; /* 12px */
    line-height: 1rem; /* 16px */
    color: red;
  }
</style>
