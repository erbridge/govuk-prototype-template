<script lang="ts">
  import classnames from "classnames";

  export let classes = "";
  export let href: string;
  export let isStartButton = false;
</script>

<a
  {href}
  role="button"
  draggable="false"
  class={classnames("govuk-button", classes, {
    "govuk-button--start": isStartButton,
  })}
  data-module="govuk-button"
  on:click
>
  <slot />
  {#if isStartButton}
    <svg
      class="govuk-button__start-icon"
      xmlns="http://www.w3.org/2000/svg"
      width="17.5"
      height="19"
      viewBox="0 0 33 40"
      aria-hidden="true"
      focusable="false"
    >
      <path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z" />
    </svg>
  {/if}
</a>
