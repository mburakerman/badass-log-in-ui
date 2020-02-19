<script>
  import Footer from "./Footer.svelte";
  let name = "";
  let password = "";
  let letters = "abcdefghijklmnopqrstuvwxyz".split("");
  var nameRangeVal = 0;
  var passwordRangeVal = 0;
  var selectedNameLetter = "a";
  var selectedPasswordLetter = "a";
  var alertIsVisible = false;
  var successIsVisible = false;

  function bindNameRange() {
    var val = this.value;
    selectedNameLetter = letters[val];
  }
  function bindPasswordRange() {
    var val = this.value;
    selectedPasswordLetter = letters[val];
  }

  function bindLogin() {
    if (name.length < 1 || password.length < 1) {
      alert("Please fill out the form.");
      return;
    }

    if (name == "peter" && password == "ck") {
      alertIsVisible = false;
      successIsVisible = true;
      resetState();
      return;
    }

    resetState();
    alertIsVisible = true;
    successIsVisible = false;

    function resetState() {
      name = "";
      password = "";
      nameRangeVal = 0;
      passwordRangeVal = 0;
      selectedNameLetter = "a";
      selectedPasswordLetter = "a";
    }
  }
</script>

<style>
  form {
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    padding: 20px;
    display: block;
    max-width: 300px;
    margin: 20px auto;
  }
  .input-holder {
    width: 100%;
    margin-bottom: 10px;
  }
  .input-holder input[type="text"],
  .input-holder input[type="password"] {
    display: block;
    width: 100%;
  }
  .range-holder {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .range-holder > input {
    width: 60%;
  }
  output {
    display: inline-block;
    width: 40px;
    text-align: center;
    font-size: 16px;
    border: 1px solid rgba(0, 0, 0, 0.5);
  }
</style>

<h1>Log In</h1>
<form>
  <div class="input-holder">
    <label>Name</label>
    <input type="text" bind:value={name} readonly />
    <div class="range-holder">
      <input
        type="range"
        id="nameRange"
        bind:value={nameRangeVal}
        step="1"
        max="25"
        on:input={bindNameRange} />
      <output for="nameRange">{selectedNameLetter}</output>
      <button on:click={() => (name += selectedNameLetter)} type="button">
        Add
      </button>
    </div>
  </div>

  <div class="input-holder">
    <label>Password</label>
    <input type="password" bind:value={password} readonly />
    <div class="range-holder">
      <input
        type="range"
        id="passwordRange"
        bind:value={passwordRangeVal}
        step="1"
        max="25"
        on:input={bindPasswordRange} />
      <output for="passwordRange">{selectedPasswordLetter}</output>
      <button
        on:click={() => (password += selectedPasswordLetter)}
        type="button">
        Add
      </button>
    </div>
  </div>

  <br />
  <hr />
  <button type="button" on:click={bindLogin}>LOG IN</button>

  <p
    style="margin-top:10px; font-size:13px;"
    class="simptip-position-top simptip-movable"
    data-tooltip="Name: peter Password: ck">
    ℹ️
  </p>
  {#if alertIsVisible}
    <p style="margin-top:15px;color:#ff3e00;">🛑 Ooops, try again.</p>
  {/if}
  {#if successIsVisible}
    <p style="display:flex; align-items:center;margin-top:15px;color:#00CC32;">
      <img
        width="50"
        src="https://i.hizliresim.com/AGZJov.png"
        alt="Peter Griffin Chicken" />
      You succesfully logged in.
    </p>
  {/if}
</form>
<Footer />
