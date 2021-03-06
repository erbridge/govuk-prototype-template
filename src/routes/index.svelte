<script lang="ts">
  import Breadcrumbs from "../components/Breadcrumbs.svelte";
  import PhaseBanner from "../components/PhaseBanner.svelte";
</script>

<div class="govuk-width-container">
  <PhaseBanner phase="prototype">This is a prototype</PhaseBanner>
  <Breadcrumbs items={[{ text: "Home" }]} />

  <main class="govuk-main-wrapper" id="main-content" role="main">
    <div class="govuk-grid-row">
      <div class="govuk-grid-column-two-thirds">
        <h1 class="govuk-heading-xl">GOV.UK Prototype</h1>

        <p class="govuk-body">Welcome to your GOV.UK prototype!</p>

        <p class="govuk-body">
          This page is <code>src/routes/index.svelte</code>. Make changes there
          and see them appear here!
        </p>

        <p class="govuk-body">
          If you need some inspiration, take a look at the <a
            class="govuk-link"
            href="examples">examples</a
          >.
        </p>
      </div>
    </div>
  </main>
</div>
