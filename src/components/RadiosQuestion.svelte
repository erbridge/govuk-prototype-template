<script lang="ts">
  import { attachToSession } from "../utils/session";
  import Radios from "./Radios.svelte";

  export let namespace: string;
  export let name: string;
  export let question: string;
  export let items: { text: string; value: string }[];
  export let next: string | ((value: string) => string);

  export let submitText = "Save and continue";

  const { value, handleFormSubmit } = attachToSession(namespace);
</script>

<form novalidate on:submit|preventDefault={handleFormSubmit(name, next)}>
  <div class="govuk-form-group">
    <fieldset class="govuk-fieldset">
      <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
        <h1 class="govuk-heading-xl">{question}</h1>
      </legend>

      <slot name="hint" />

      <Radios {name} {items} initialValue={value[name]} />
    </fieldset>
  </div>

  <button class="govuk-button" data-module="govuk-button">
    {submitText}
  </button>
</form>
