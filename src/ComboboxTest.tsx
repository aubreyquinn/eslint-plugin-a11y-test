import { Combobox, Option, Label, Field } from "@fluentui/react-components";
import * as React from 'react';

const label = "my-label";
const myFunc = (): string => { return "test" };

export const ComboboxTests = () => (
    <>
        {/* ============================================
            combobox-needs-labelling tests
            ============================================ */}
        
        {/* ❌ FAIL: Combobox without any label */}
        <Combobox />
        {/* ❌ FAIL: Empty Combobox without label */}
        <Combobox></Combobox>

        {/* ✅ PASS: Combobox with aria-label */}
        <Combobox aria-label="Select an option">
            <Option>Option 1</Option>
            <Option>Option 2</Option>
        </Combobox>

        {/* ✅ PASS: Combobox with aria-label from variable */}
        <Combobox aria-label={label}>
            <Option>Option 1</Option>
        </Combobox>

        {/* ✅ PASS: Combobox with aria-label from function */}
        <Combobox aria-label={myFunc()}>
            <Option>Option 1</Option>
        </Combobox>

        {/* ✅ PASS: Combobox with aria-labelledby using native label */}
        <label id="combobox-label">Choose item</label>
        <Combobox aria-labelledby="combobox-label">
            <Option>Option 1</Option>
        </Combobox>

        {/* ✅ PASS: Combobox with htmlFor/id association */}
        <Label htmlFor="combobox-id">Select option</Label>
        <Combobox id="combobox-id">
            <Option>Option 1</Option>
        </Combobox>

        {/* ✅ PASS: Combobox with FluentUI Label and aria-labelledby */}
        <Label id="combo-label">Pick one</Label>
        <Combobox aria-labelledby="combo-label">
            <Option>Option 1</Option>
            <Option>Option 2</Option>
        </Combobox>

        {/* ✅ PASS: Combobox inside Field with label */}
        <Field label="Combobox field">
            <Combobox>
                <Option>Option 1</Option>
            </Combobox>
        </Field>

        {/* ❌ FAIL: Combobox with placeholder only - placeholder is not accessible name */}
        <Combobox placeholder="Select...">
            <Option>Option 1</Option>
        </Combobox>

        {/* ✅ PASS: Combobox with placeholder and aria-label */}
        <Combobox placeholder="Select..." aria-label="Selection">
            <Option>Option 1</Option>
        </Combobox>

        {/* ❌ FAIL: Multiselect Combobox without label */}
        <Combobox multiselect>
            <Option>Option 1</Option>
            <Option>Option 2</Option>
        </Combobox>

        {/* ✅ PASS: Multiselect Combobox with aria-label */}
        <Combobox multiselect aria-label="Multi-select">
            <Option>Option 1</Option>
            <Option>Option 2</Option>
        </Combobox>
    </>
);
