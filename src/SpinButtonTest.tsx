import { SpinButton, Label, Field } from "@fluentui/react-components";
import * as React from 'react';

const label = "my-label";
const myFunc = (): string => { return "test" };

export const SpinButtonTests = () => (
    <>
        {/* ============================================
            spin-button-needs-labelling tests
            ============================================ */}
        
        {/* ❌ FAIL: SpinButton without accessible name */}
        <SpinButton />
        {/* ❌ FAIL: Empty SpinButton */}
        <SpinButton></SpinButton>

        {/* ❌ FAIL: SpinButton with value but no accessible name */}
        <SpinButton value={5} />
        {/* ❌ FAIL: SpinButton with defaultValue but no accessible name */}
        <SpinButton defaultValue={10} />

        {/* ✅ PASS: SpinButton with aria-label */}
        <SpinButton aria-label="Quantity" />
        {/* ✅ PASS: SpinButton with aria-label from variable */}
        <SpinButton aria-label={label} />
        {/* ✅ PASS: SpinButton with aria-label from function */}
        <SpinButton aria-label={myFunc()} />

        {/* ✅ PASS: SpinButton with value and aria-label */}
        <SpinButton value={5} aria-label="Select quantity" />
        {/* ✅ PASS: SpinButton with value and aria-label from variable */}
        <SpinButton value={5} aria-label={label} />

        {/* ✅ PASS: SpinButton with aria-labelledby */}
        <span id="spin-label">Number of items</span>
        <SpinButton aria-labelledby="spin-label" />

        {/* ✅ PASS: SpinButton with Label and aria-labelledby */}
        <Label id="spinbtn-label">Count</Label>
        <SpinButton aria-labelledby="spinbtn-label" value={3} />

        {/* ✅ PASS: SpinButton with htmlFor/id association */}
        <Label htmlFor="spin-id">Quantity</Label>
        <SpinButton id="spin-id" />

        {/* ✅ PASS: SpinButton inside Field with label */}
        <Field label="Select quantity">
            <SpinButton />
        </Field>

        {/* ✅ PASS: SpinButton inside Field with label from variable */}
        <Field label={label}>
            <SpinButton value={10} />
        </Field>

        {/* ============================================
            spin-button-unrecommended-labelling tests
            ============================================ */}
        
        {/* ⚠️ WARN: SpinButton with title only - title is not recommended for labelling */}
        <SpinButton title="Quantity selector" />
        {/* ⚠️ WARN: SpinButton with placeholder only - placeholder is not accessible name */}
        <SpinButton placeholder="Enter number" />

        {/* ❌ FAIL: SpinButton with aria-describedby only - needs primary label */}
        <SpinButton aria-describedby="spin-desc" />
        <p id="spin-desc">Enter a number between 1 and 100</p>

        {/* ❌ FAIL: SpinButton with min/max but no accessible name */}
        <SpinButton min={0} max={100} />
        {/* ✅ PASS: SpinButton with min/max and aria-label */}
        <SpinButton min={0} max={100} aria-label="Value between 0 and 100" />

        {/* ❌ FAIL: SpinButton with step but no accessible name */}
        <SpinButton step={5} />
        {/* ✅ PASS: SpinButton with step and aria-label */}
        <SpinButton step={5} aria-label="Increment by 5" />

        {/* ❌ FAIL: SpinButton with precision but no accessible name */}
        <SpinButton precision={2} />
        {/* ✅ PASS: SpinButton with precision and aria-label */}
        <SpinButton precision={2} aria-label="Decimal value" />

        {/* ❌ FAIL: SpinButton with size but no accessible name */}
        <SpinButton size="small" />
        {/* ✅ PASS: SpinButton with size and aria-label */}
        <SpinButton size="small" aria-label="Small spin button" />

        {/* ❌ FAIL: SpinButton with size and value but no accessible name */}
        <SpinButton size="medium" value={50} />
        {/* ✅ PASS: SpinButton with size, value, and aria-label */}
        <SpinButton size="medium" value={50} aria-label="Medium spin button" />

        {/* ❌ FAIL: SpinButton with appearance but no accessible name */}
        <SpinButton appearance="outline" />
        {/* ✅ PASS: SpinButton with appearance and aria-label */}
        <SpinButton appearance="outline" aria-label="Outline spin button" />

        {/* ❌ FAIL: SpinButton with appearance but no accessible name */}
        <SpinButton appearance="underline" />
        {/* ✅ PASS: SpinButton with appearance and aria-label */}
        <SpinButton appearance="underline" aria-label="Underline spin button" />

        {/* ❌ FAIL: SpinButton with appearance but no accessible name */}
        <SpinButton appearance="filled-darker" />
        {/* ✅ PASS: SpinButton with appearance and aria-label */}
        <SpinButton appearance="filled-darker" aria-label="Filled darker spin button" />

        {/* ❌ FAIL: SpinButton with appearance but no accessible name */}
        <SpinButton appearance="filled-lighter" />
        {/* ✅ PASS: SpinButton with appearance and aria-label */}
        <SpinButton appearance="filled-lighter" aria-label="Filled lighter spin button" />
    </>
);
