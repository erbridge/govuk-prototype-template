<script lang="ts">
  export let phase: string;
</script>

<div class="govuk-phase-banner">
  <p class="govuk-phase-banner__content">
    <strong class="govuk-tag govuk-phase-banner__content__tag">
      {phase}
    </strong>
    <span class="govuk-phase-banner__text">
      <slot />
    </span>
  </p>
</div>
