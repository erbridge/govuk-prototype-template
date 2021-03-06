<script lang="ts">
  import Button from "../../../components/Button.svelte";
  import { attachToSession } from "../../../utils/session";

  const { reset } = attachToSession("simple-form");
</script>

<h1 class="govuk-heading-xl">Simple form example</h1>

<p class="govuk-body">This example demonstrates how to:</p>
<ul class="govuk-list govuk-list--bullet">
  <li>implement a linear form</li>
  <li>set session data</li>
  <li>access session data</li>
  <li>reset the session</li>
</ul>

<Button
  classes="govuk-!-margin-top-2 govuk-!-margin-bottom-8"
  href="examples/simple-form/question"
  isStartButton
  on:click={reset}
>
  Start now
</Button>
