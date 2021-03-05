<script lang="ts">
  import { afterUpdate } from "svelte";
  import Footer from "../components/Footer.svelte";
  import Header from "../components/Header.svelte";

  afterUpdate(async () => {
    const { initAll } = await import("govuk-frontend/govuk/all");

    initAll();
  });
</script>

<svelte:head>
  <!-- TODO: Replace this title with your project name -->
  <title>GOV.UK Prototype</title>
</svelte:head>

<Header />

<slot />

<Footer />

<style lang="scss" global>
  @import "govuk-frontend/govuk/all";
</style>
