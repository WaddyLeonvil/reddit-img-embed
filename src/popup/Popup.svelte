<script>
  import PowerButton from '../components/PowerButton.svelte'
  import { onMount } from 'svelte'

  let on = true

  onMount(() => {
    chrome.storage.local.get('on', (result) => {
      if (result.on !== undefined) {
        on = result.on
      }
    })
  })
</script>

<main>
  <div class="title">Reddit Image Embedder</div>
  <div class="content">
    <section>
      <button
        class="power"
        href="#button"
        id="button"
        class:on
        on:click={() => {
          on = !on
          chrome.storage.local.set({ on })
          chrome.runtime.sendMessage({ action: on ? 'turn_on' : 'turn_off' })
        }}
      >
        <PowerButton bind:on />
      </button>
      <span />
    </section>
  </div>
</main>

<style>
  main {
    width: 220px;
    color: rgb(240, 240, 240);
    border-radius: 5px;
    background: linear-gradient(
      135deg,
      rgba(62, 62, 62, 1) 0%,
      rgba(59, 59, 59, 1) 50%,
      rgba(62, 62, 62, 1) 100%
    );
    font-size: 12px;
  }
  .title {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 8px 0;
    background-color: #232323;
    border-radius: 5px 5px 0 0;
    box-shadow: 0px 2px 5px rgb(1, 1, 1);
    font-size: 18px;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
  }
  .content {
    padding: 8px 12px;
  }
  :global(body) {
    background-color: #1f1f1f;
    margin: 0px !important;
    border: 0px !important;
  }

  .settings {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  section {
    position: relative;
    width: 75px;
    height: 95px;
    margin: 0 auto;
    text-align: center;
    z-index: 1;
  }
  :active,
  :focus {
    outline: 0;
  }
  .power {
    color: rgb(37, 37, 37);
    text-shadow: 0px 1px 1px rgba(250, 250, 250, 0.1);
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    text-decoration: none;
    background-color: rgb(83, 87, 93);
    box-shadow:
      0px 3px 0px 0px rgb(34, 34, 34),
      /* 1st Shadow */ 0px 7px 10px 0px rgb(17, 17, 17),
      /* 2nd Shadow */ inset 0px 1px 1px 0px rgba(250, 250, 250, 0.2),
      /* 3rd Shadow */ inset 0px -12px 35px 0px rgba(0, 0, 0, 0.5); /* 4th Shadow */
    width: 70px;
    height: 70px;
    border: 0;
    border-radius: 50%;
    line-height: 79px;
    cursor: pointer;
    transition:
      color 350ms,
      text-shadow 350ms;
    -o-transition:
      color 350ms,
      text-shadow 350ms;
    -moz-transition:
      color 350ms,
      text-shadow 350ms;
    -webkit-transition:
      color 350ms,
      text-shadow 350ms;
  }
  .power:before {
    content: '';
    width: 80px;
    height: 80px;
    display: block;
    z-index: -2;
    position: absolute;
    background-color: rgb(26, 27, 29);
    left: -5px;
    top: -2px;
    border-radius: 40px;
    box-shadow:
      0px 1px 0px 0px rgba(250, 250, 250, 0.1),
      inset 0px 1px 2px rgba(0, 0, 0, 0.5);
  }
  .power + span {
    display: block;
    width: 8px;
    height: 8px;
    background-color: rgb(226, 0, 0);
    box-shadow:
      inset 0px 1px 0px 0px rgba(250, 250, 250, 0.5),
      0px 0px 3px 2px rgba(226, 0, 0, 0.5);
    border-radius: 4px;
    clear: both;
    position: absolute;
    bottom: 0;
    left: 42%;
    transition:
      background-color 350ms,
      box-shadow 700ms;
    -o-transition:
      background-color 350ms,
      box-shadow 700ms;
    -moz-transition:
      background-color 350ms,
      box-shadow 700ms;
    -webkit-transition:
      background-color 350ms,
      box-shadow 700ms;
  }
  .power:active {
    box-shadow:
      0px 0px 0px 0px rgb(34, 34, 34),
      /* 1st Shadow */ 0px 3px 7px 0px rgb(17, 17, 17),
      /* 2nd Shadow */ inset 0px 1px 1px 0px rgba(250, 250, 250, 0.2),
      /* 3rd Shadow */ inset 0px -10px 35px 5px rgba(0, 0, 0, 0.5); /* 4th Shadow */
    background-color: rgb(83, 87, 93);
    top: 3px;
  }
  .power.on {
    box-shadow:
      0px 0px 0px 0px rgb(34, 34, 34),
      0px 3px 7px 0px rgb(17, 17, 17),
      inset 0px 1px 1px 0px rgba(250, 250, 250, 0.2),
      inset 0px -10px 35px 5px rgba(0, 0, 0, 0.5);
    background-color: rgb(83, 87, 93);
    top: 3px;
    color: #fff;
    text-shadow: 0px 0px 3px rgb(250, 250, 250);
  }
  .power:active:before,
  .power.on:before {
    top: -5px;
    background-color: rgb(26, 27, 29);
    box-shadow:
      0px 1px 0px 0px rgba(250, 250, 250, 0.1),
      inset 0px 1px 2px rgba(0, 0, 0, 0.5);
  }
  .power.on + span {
    box-shadow:
      inset 0px 1px 0px 0px rgba(250, 250, 250, 0.5),
      0px 0px 3px 2px rgba(135, 187, 83, 0.5);
    background-color: rgb(135, 187, 83);
  }
</style>
