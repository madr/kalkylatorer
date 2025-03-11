<script lang="ts">
    import svelteLogo from "./assets/svelte.svg";
    import viteLogo from "/vite.svg";
    import { navigate } from "./lib/common";
    import { currentView } from "./lib/store";
    import FatPercentage from "./lib/FatPercentage.svelte";
</script>

{#if $currentView === "fatcalc"}
    <FatPercentage />
{/if}
{#if $currentView === "start"}
    <button onclick={() => navigate("fatcalc")}>Kroppsfettkalkylator</button>
{/if}

<style>
</style>
