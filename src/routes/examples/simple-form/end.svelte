<script lang="ts">
  import { attachToSession } from "../../../utils/session";
  import type { SimpleFormSession } from "./_types";

  const { value } = attachToSession<SimpleFormSession, "simple-form">(
    "simple-form"
  );
</script>

{#if value.answer === (Math.random() > 0.5 ? "Yes" : "No")}
  <div class="govuk-panel govuk-panel--confirmation">
    <h1 class="govuk-panel__title">Congratulations!</h1>
    <div class="govuk-panel__body">You got the answer right!</div>
  </div>

  <p class="govuk-body">Was that a lucky guess?</p>
{:else}
  <div class="govuk-panel govuk-panel--confirmation">
    <h1 class="govuk-panel__title">Commiserations...</h1>
    <div class="govuk-panel__body">You got the answer wrong.</div>
  </div>

  <p class="govuk-body">Better luck next time!</p>
{/if}
