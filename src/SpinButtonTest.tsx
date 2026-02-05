import { SpinButton, Label, Field } from "@fluentui/react-components";
import * as React from 'react';

const label = "my-label";
const myFunc = (): string => { return "test" };

export const SpinButtonTests = () => (
    <>
        {/* spin-button-needs-labelling tests */}
        <SpinButton />
        <SpinButton></SpinButton>

        <SpinButton value={5} />
        <SpinButton defaultValue={10} />

        <SpinButton aria-label="Quantity" />
        <SpinButton aria-label={label} />
        <SpinButton aria-label={myFunc()} />

        <SpinButton value={5} aria-label="Select quantity" />
        <SpinButton value={5} aria-label={label} />

        <span id="spin-label">Number of items</span>
        <SpinButton aria-labelledby="spin-label" />

        <Label id="spinbtn-label">Count</Label>
        <SpinButton aria-labelledby="spinbtn-label" value={3} />

        <Label htmlFor="spin-id">Quantity</Label>
        <SpinButton id="spin-id" />

        <Field label="Select quantity">
            <SpinButton />
        </Field>

        <Field label={label}>
            <SpinButton value={10} />
        </Field>

        {/* spin-button-unrecommended-labelling tests */}
        <SpinButton title="Quantity selector" />
        <SpinButton placeholder="Enter number" />

        <SpinButton aria-describedby="spin-desc" />
        <p id="spin-desc">Enter a number between 1 and 100</p>

        <SpinButton min={0} max={100} />
        <SpinButton min={0} max={100} aria-label="Value between 0 and 100" />

        <SpinButton step={5} />
        <SpinButton step={5} aria-label="Increment by 5" />

        <SpinButton precision={2} />
        <SpinButton precision={2} aria-label="Decimal value" />

        <SpinButton size="small" />
        <SpinButton size="small" aria-label="Small spin button" />

        <SpinButton size="medium" value={50} />
        <SpinButton size="medium" value={50} aria-label="Medium spin button" />

        <SpinButton appearance="outline" />
        <SpinButton appearance="outline" aria-label="Outline spin button" />

        <SpinButton appearance="underline" />
        <SpinButton appearance="underline" aria-label="Underline spin button" />

        <SpinButton appearance="filled-darker" />
        <SpinButton appearance="filled-darker" aria-label="Filled darker spin button" />

        <SpinButton appearance="filled-lighter" />
        <SpinButton appearance="filled-lighter" aria-label="Filled lighter spin button" />
    </>
);
