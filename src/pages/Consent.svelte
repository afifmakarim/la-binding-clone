<script>
  import logo from "../assets/logo-main.png";
  import Button from "../lib/Button.svelte";

  import Fa from "svelte-fa";
  import {
    faPhone,
    faUser,
    faRupiahSign,
  } from "@fortawesome/free-solid-svg-icons";

  const data = {
    merchantName: "Merchant App Test",
  };

  let description =
    "Dengan menghubungkan LinkAja, kamu akan memberikan info dibawah ini ke ";

  let defaultCheckbox = false;
</script>

<main>
  <div class="wrapper">
    <div class="title-wrapper">
      <img src={logo} alt="Logo" />
      <span>{description} <b>{data.merchantName}</b></span>
    </div>
    <div class="icon-wrapper">
      <div class="icon-items">
        <div class="ic">
          <Fa icon={faPhone} />
        </div>
        <p>Nomor handphone</p>
      </div>
      <div class="icon-items">
        <div class="ic">
          <Fa icon={faUser} />
        </div>
        <p>Nama akun Linkaja</p>
      </div>
      <div class="icon-items">
        <div class="ic">
          <Fa icon={faRupiahSign} />
        </div>
        <p>Info saldo Linkaja</p>
      </div>
    </div>
    <div class="tnc-wrapper">
      <input
        class="tnc-checkbox"
        type="checkbox"
        id="tnc"
        bind:checked={defaultCheckbox}
      />
      <label class="tnc-label" for="tnc"
        >Saya telah membaca dan menyetujui <a href="#">Ketentuan Layanan</a> penyambungan
        akun LinkAja</label
      >
    </div>
    <div class="button-wrapper">
      <Button destination={"/bind"} {defaultCheckbox} />
    </div>
  </div>
</main>

<style>
  main {
    max-width: 430px;
    margin: 0 auto;
    background-color: #e1e1ed;
    min-height: 100vh;
  }

  img {
    width: 48px;
    margin: 8px 0;
  }

  .title-wrapper {
    display: flex;
    flex-direction: column;
    padding: 8px;
    background: white;
  }

  .title-wrapper span {
    font-size: 1rem; /* 16px */
    line-height: 1.5rem; /* 24px */
    color: rgb(30 41 59);
  }

  .icon-wrapper {
    padding: 1rem;
    background: white;
    display: flex;
    flex-direction: column;
  }

  .icon-items {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .icon-wrapper p {
    font-weight: bold;
    padding-bottom: 0.6rem;
    border-bottom: 2px solid gainsboro;
    width: 100%;
  }

  .ic {
    padding-right: 20px;
  }
  .tnc-wrapper {
    margin-top: 10px;
    background: white;
    font-size: 0.875rem; /* 14px */
    line-height: 1.25rem; /* 20px */
    padding: 1rem;
  }

  input.tnc-checkbox {
    width: 16px;
    height: 16px;
  }

  .button-wrapper {
    background: white;
    margin: 0 auto;
    padding: 0.8rem;
  }
</style>
