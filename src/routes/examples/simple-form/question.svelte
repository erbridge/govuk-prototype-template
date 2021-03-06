<script lang="ts">
  import RadiosQuestion from "../../../components/RadiosQuestion.svelte";
</script>

<RadiosQuestion
  namespace="simple-form"
  name="answer"
  question="What’s the answer?"
  items={[
    { text: "Yes", value: "Yes" },
    { text: "No", value: "No" },
  ]}
  next="examples/simple-form/check"
/>
