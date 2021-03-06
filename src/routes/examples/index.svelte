<script lang="ts">
  import Breadcrumbs from "../../components/Breadcrumbs.svelte";
  import PhaseBanner from "../../components/PhaseBanner.svelte";
</script>

<div class="govuk-width-container">
  <PhaseBanner phase="example">This is a prototype example</PhaseBanner>
  <Breadcrumbs items={[{ text: "Home", href: "." }, { text: "Examples" }]} />

  <main class="govuk-main-wrapper" id="main-content" role="main">
    <div class="govuk-grid-row">
      <div class="govuk-grid-column-two-thirds">
        <h1 class="govuk-heading-xl">Examples</h1>

        <p class="govuk-body">
          To make it easier to get started, we've prepared some examples for
          you.
        </p>

        <ul class="govuk-list">
          <li>
            <a class="govuk-link" href="examples/simple-form/start"
              >Simple form example</a
            >
          </li>
        </ul>
      </div>
    </div>
  </main>
</div>
