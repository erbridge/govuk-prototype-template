<script lang="ts">
  import Breadcrumbs from "../../../components/Breadcrumbs.svelte";
  import PhaseBanner from "../../../components/PhaseBanner.svelte";
</script>

<div class="govuk-width-container">
  <PhaseBanner phase="example">This is a prototype example</PhaseBanner>
  <Breadcrumbs
    items={[
      { text: "Home", href: "." },
      { text: "Examples", href: "examples" },
      { text: "Simple form example", href: "examples/simple-form/start" },
    ]}
  />

  <main class="govuk-main-wrapper" id="main-content" role="main">
    <div class="govuk-grid-row">
      <div class="govuk-grid-column-two-thirds">
        <slot />
      </div>
    </div>
  </main>
</div>
