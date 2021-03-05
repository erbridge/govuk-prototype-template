<script lang="ts">
  import classnames from "classnames";

  export let collapseOnMobile = false;
  export let items: { text: string; href?: string }[];
</script>

<div
  class={classnames("govuk-breadcrumbs", {
    "govuk-breadcrumbs--collapse-on-mobile": collapseOnMobile,
  })}
>
  <ol class="govuk-breadcrumbs__list">
    {#each items as { text, href }}
      <li
        class="govuk-breadcrumbs__list-item"
        aria-current={href === undefined ? "page" : undefined}
      >
        {#if href}
          <a class="govuk-link" {href}>{text}</a>
        {:else}
          {text}
        {/if}
      </li>
    {/each}
  </ol>
</div>
