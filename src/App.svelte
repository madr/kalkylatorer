<script lang="ts">
    import svelteLogo from "./assets/svelte.svg";
    import viteLogo from "/vite.svg";
    import { navigate } from "./lib/common";
    import { currentView } from "./lib/store";
    import ArmyFatPercentage from "./lib/ArmyFatPercentage.svelte";
    import NavyFatPercentage from "./lib/NavyFatPercentage.svelte";
    import OneRepMax from "./lib/OneRepMax.svelte";
</script>

{#if $currentView === "armyfatcalc"}
    <ArmyFatPercentage />
{/if}
{#if $currentView === "navyfatcalc"}
    <NavyFatPercentage />
{/if}
{#if $currentView === "onerepmax"}
    <OneRepMax />
{/if}
{#if $currentView === "start"}
    <main>
        <nav>
            <button onclick={() => navigate("armyfatcalc")}
                >Kroppsfettkalkylator, Army</button
            >
            <button onclick={() => navigate("navyfatcalc")}
                >Kroppsfettkalkylator, Navy</button
            >
            <button onclick={() => navigate("onerepmax")}>1RM-kalkylator</button
            >
        </nav>
    </main>
{/if}

<style>
    nav {
        display: grid;
        grid-template: subgrid / subgrid;
        grid-column: 2 / 2;
        grid-row: 2 / 6;
    }
</style>
