<script lang="ts">
  export let name: string;
  export let items: { text: string; value: string }[];
  export let initialValue: string | null = null;
</script>

<div class="govuk-radios">
  {#each items as { text, value }}
    <div class="govuk-radios__item">
      <input
        class="govuk-radios__input"
        id="{name}-{value}"
        {name}
        type="radio"
        {value}
        checked={initialValue === value}
      />
      <label class="govuk-label govuk-radios__label" for="{name}-{value}">
        {text}
      </label>
    </div>
  {/each}
</div>
