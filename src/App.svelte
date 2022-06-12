<script>
  import { Router, Link, Route } from "svelte-navigator";

  import logo from "./assets/svelte.png";
  import Counter from "./lib/Counter.svelte";
  import ConsentPage from "./pages/Consent.svelte";
  import BindPage from "./pages/Bind.svelte";
  import OtpPage from "./pages/Otp.svelte";
  import SuccessPage from "./pages/Success.svelte";
  import FailedPage from "./pages/Failed.svelte";
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<Router>
  <Route path="consent">
    <ConsentPage />
  </Route>
  <Route path="bind">
    <BindPage />
  </Route>
  <Route path="otp">
    <OtpPage />
  </Route>
  <Route path="success">
    <SuccessPage />
  </Route>
  <Route path="failed">
    <FailedPage />
  </Route>
</Router>

<style>
  :root {
    font-family: "Poppins", sans-serif;
  }
</style>
