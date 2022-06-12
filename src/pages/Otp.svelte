<script>
  import HeadBG from "../assets/login-banner.png";
  import Button from "../lib/Button.svelte";
  import Counter from "../lib/Counter.svelte";
  import { navigate } from "svelte-navigator";
  import { tweened } from "svelte/motion";

  let otp = new Array(6);
  let staticOtp = "654321";
  $: exact_otp = otp.join("");
  $: console.log(otp, exact_otp);
  let otp_true;
  let error_msg;

  $: if (exact_otp === staticOtp) {
    console.log("otp benar");
    navigate("/success", { replace: true });
  } else if (exact_otp.length === 6 && exact_otp !== staticOtp) {
    otp_true = false;
    error_msg = "OTP Invalid";
  }

  const handleInput = (ev, i) =>
    i < otp.length - 1 && ev.target.nextSibling.focus();

  function validate() {
    if (exact_otp.length < 6) {
      otp_true = false;
      error_msg = "Digit Kurang";
    } else if (exact_otp !== staticOtp) {
      otp_true = false;
      error_msg = "OTP Invalid";
    }
  }

  // OTP Countdown
  let original = 1 * 60; // TYPE NUMBER OF SECONDS HERE
  let timer = tweened(original);
  let otp_expired;

  setInterval(() => {
    if ($timer === 0) otp_expired = true;
    if ($timer > 0) $timer--;
  }, 1000);

  $: minutes = Math.floor($timer / 60);
  $: seconds = Math.floor($timer - minutes * 60);
</script>

<main>
  <div class="banner-wrapper">
    <img class="banner" src={HeadBG} alt="banner" />
  </div>
  <div class="title-wrapper">
    Masukkan kode verifikasi yang dikirim melalui SMS ke nomor ********2502
  </div>

  <form class="input-field-wrapper" on:submit|preventDefault={validate}>
    {#each otp as v, i}
      <input
        type="text"
        class="otp-field"
        bind:value={v}
        autocomplete="off"
        maxlength="1"
        size="1"
        on:input={(ev) => handleInput(ev, i)}
      />
    {/each}
    <button type="submit" hidden />
  </form>
  {#if otp_true === false}
    <span class="invalid">{error_msg}</span>
  {/if}
  <div class="faq">
    Belum menerima kode?<br />
    Tunggu {minutes}:{seconds} untuk kirim ulang
    <a href="#">{otp_expired == true ? "Retry OTP" : ""}</a>
  </div>
  <Button destination={"/success"} defaultCheckbox={true} />
  <div class="banner-wrapper">
    <Counter />
  </div>
</main>

<style>
  main {
    max-width: 430px;
    margin: 0 auto;
    background-color: #e1e1ed;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .banner {
    width: 100%;
  }

  .banner-wrapper {
    padding-top: 10px;
    background: white;
  }

  .title-wrapper,
  .faq {
    background: white;
    padding: 0.8rem;
    font-size: 12px;
  }

  .faq a {
    color: red;
  }

  .input-field-wrapper {
    background: white;
    padding: 0 0.8rem 0.8rem 0.8rem;
  }

  .input-field-wrapper input {
    width: 24px;
    height: 24px;
    background: #f8f7fc;
    border-radius: 4px;
    border: 2px solid #e1e1ed;
    margin-right: 10px;
  }

  .otp-field {
    color: gray;
    font-weight: 600;
    text-align: center;
  }

  .invalid {
    padding-left: 0.8rem;
    background: white;
    font-size: 0.75rem; /* 12px */
    line-height: 1rem; /* 16px */
    color: red;
  }
</style>
