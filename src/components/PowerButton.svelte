<script>
  import { onMount } from 'svelte'
  export let on

  let noTransition = true

  onMount(() => {
    setTimeout(() => {
      noTransition = false
    }, 200)
  })
</script>

<svg
  class:on
  class:noTransition
  xmlns="http://www.w3.org/2000/svg"
  height="1em"
  viewBox="0 0 512 512"
>
  <path
    d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V256c0 17.7 14.3 32 32 32s32-14.3 32-32V32zM143.5 120.6c13.6-11.3 15.4-31.5 4.1-45.1s-31.5-15.4-45.1-4.1C49.7 115.4 16 181.8 16 256c0 132.5 107.5 240 240 240s240-107.5 240-240c0-74.2-33.8-140.6-86.6-184.6c-13.6-11.3-33.8-9.4-45.1 4.1s-9.4 33.8 4.1 45.1c38.9 32.3 63.5 81 63.5 135.4c0 97.2-78.8 176-176 176s-176-78.8-176-176c0-54.4 24.7-103.1 63.5-135.4z"
  />
</svg>

<style>
  svg {
    transition: all 0.35s;
  }
  svg.noTransition {
    transition: none;
  }
  svg.on {
    filter: drop-shadow(0px 0px 3px rgb(250, 250, 250)) invert(100%) sepia(100%) saturate(0%)
      hue-rotate(309deg) brightness(100%) contrast(100%);
  }
</style>
