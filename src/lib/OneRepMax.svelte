<script lang="ts">
    import { navigate } from "./common";

    let oneRepMax = $state(0);
    let reps = $state(null);
    let weight = $state(null);

    // https://www.athlegan.com/calculate-1rm

    const calculate = () => {
        if (weight && reps) {
            oneRepMax = weight / (1.0278 - 0.0278 * reps);
        }
    };
</script>

<main>
    <header>
        <span>
            <button onclick={() => navigate("start")}>Tillbaka</button>
        </span>
        <h1>1RM</h1>
    </header>
    <output>
        {#if oneRepMax > 0}
            <span>{Math.round(oneRepMax * 100) / 100}</span>
        {/if}
    </output>
    <form>
        <label>
            Reps
            <input
                onchange={() => calculate()}
                bind:value={reps}
                type="number"
                id="reps"
                name="reps"
                size="5"
            />
        </label>
        <label>
            Vikt
            <input
                onchange={() => calculate()}
                type="number"
                bind:value={weight}
                id="weight"
                name="weight"
                size="5"
            />
        </label>
    </form>
</main>

<style>
</style>
