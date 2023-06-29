<script>
  import { setContext } from "svelte";

  setContext("cartState", {
    isOpen: true,
  });
</script>

<div>
  <slot />
</div>
