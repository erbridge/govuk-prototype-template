<script lang="ts">
  import Button from "../../../components/Button.svelte";
  import { attachToSession } from "../../../utils/session";
  import type { SimpleFormSession } from "./_types";

  const { value } = attachToSession<SimpleFormSession, "simple-form">(
    "simple-form"
  );
</script>

<h1 class="govuk-heading-l">Check your answers</h1>

<dl class="govuk-summary-list govuk-!-margin-bottom-9">
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">What’s the answer?</dt>
    <dd class="govuk-summary-list__value">{value.answer}</dd>
    <dd class="govuk-summary-list__actions">
      <a class="govuk-link" href="examples/simple-form/question">
        Change<span class="govuk-visually-hidden"> answer</span>
      </a>
    </dd>
  </div>
</dl>

<h2 class="govuk-heading-m">Now submit your answers</h2>

<p class="govuk-body">
  By submitting your answers you are confirming that you’re finished and you
  want to see the results.
</p>

<Button href="examples/simple-form/end">Submit my answers</Button>
