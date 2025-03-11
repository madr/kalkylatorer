<script lang="ts">
    import { navigate } from "./common";

    let fatPercentage = $state(0);
    let gender = $state("male");
    let height = $state(null);
    let waist = $state(null);
    let neck = $state(null);
    let hips = $state(null);

    // https://www.gigacalculator.com/calculators/army-body-fat-calculator.php

    const male = (waist: number, neck: number, height: number) =>
        86.01 * Math.log10(waist - neck) - 70.041 * Math.log10(height) + 30.3;

    const female = (
        waist: number,
        neck: number,
        hips: number,
        height: number,
    ) =>
        163.205 * Math.log10(waist + hips - neck) -
        97.684 * Math.log10(height) -
        104.912;

    const calculate = () => {
        if (gender == "male") {
            if (!waist || !neck || !height) {
                return;
            }
            fatPercentage = male(waist, neck, height);
        } else {
            if (!waist || !neck || !height || !hips) {
                return;
            }
            fatPercentage = female(waist, neck, hips, height);
        }
    };
</script>

<main>
    <header>
        <span>
            <button onclick={() => navigate("start")}>Tillbaka</button>
        </span>
        <h1>Kroppsfettkalkylator</h1>
    </header>
    <output>
        {#if fatPercentage > 0}
            <span>{Math.round(fatPercentage * 100) / 100}</span>
        {/if}
    </output>
    <form>
        <div class="gender">
            <label>
                Man
                <input
                    bind:group={gender}
                    type="radio"
                    name="gender"
                    value="male"
                    id="male"
                />
            </label>
            <label>
                Kvinna
                <input
                    bind:group={gender}
                    type="radio"
                    name="gender"
                    value="female"
                    id="female"
                />
            </label>
        </div>
        <label>
            Kroppslängd
            <input
                onchange={() => calculate()}
                bind:value={height}
                type="number"
                id="height"
                name="height"
                size="5"
            />
        </label>
        <label>
            Midja
            <input
                onchange={() => calculate()}
                type="number"
                bind:value={waist}
                id="waist"
                name="waist"
                size="5"
            />
        </label>
        {#if gender == "female"}
            <label>
                Höft
                <input
                    onchange={() => calculate()}
                    type="number"
                    bind:value={hips}
                    id="hips"
                    name="hips"
                    size="5"
                />
            </label>
        {/if}
        <label>
            Hals
            <input
                onchange={() => calculate()}
                type="number"
                bind:value={neck}
                id="neck"
                name="neck"
                size="5"
            />
        </label>
    </form>
</main>

<style>
    main {
        min-width: 100vw;
        min-height: 100vh;
        display: grid;
        gap: 1em;
        padding: 1em;
        box-sizing: border-box;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(7, 1fr);
    }

    output {
        background: rgba(0, 0, 0, 0.25);
        display: grid;
        grid-column: 1 / 4;
        grid-row: 2 / 4;
        grid-template-columns: subgrid;
        font-size: 2em;

        > span {
            grid-column: 1 / 6;
            grid-row: 1 / 2;
            text-align: right;

            &::before {
                content: "=";
                color: #888;
            }

            &::after {
                content: "%";
                color: #888;
            }
        }
    }

    form {
        background: rgba(255, 255, 255, 0.25);
        display: grid;
        grid-column: 1 / 4;
        grid-row: 4 / 8;
        grid-template-columns: subgrid;
    }

    .gender {
        grid-column: 1 / 2;
        grid-row: 1 / 4;
    }

    input {
        max-width: 4em;
        display: block;
    }

    header {
        display: grid;
        grid-column: 1 / 4;
        grid-row: 1 / 1;
        grid-template-columns: subgrid;
    }

    h1 {
        grid-column: 2 / 4;
    }
</style>
