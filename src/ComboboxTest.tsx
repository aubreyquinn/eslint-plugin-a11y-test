import { Combobox, Option, Label, Field } from "@fluentui/react-components";
import * as React from 'react';

const label = "my-label";
const myFunc = (): string => { return "test" };

export const ComboboxTests = () => (
    <>
        {/* combobox-needs-labelling tests */}
        <Combobox />
        <Combobox></Combobox>

        <Combobox aria-label="Select an option">
            <Option>Option 1</Option>
            <Option>Option 2</Option>
        </Combobox>

        <Combobox aria-label={label}>
            <Option>Option 1</Option>
        </Combobox>

        <Combobox aria-label={myFunc()}>
            <Option>Option 1</Option>
        </Combobox>

        <label id="combobox-label">Choose item</label>
        <Combobox aria-labelledby="combobox-label">
            <Option>Option 1</Option>
        </Combobox>

        <Label htmlFor="combobox-id">Select option</Label>
        <Combobox id="combobox-id">
            <Option>Option 1</Option>
        </Combobox>

        <Label id="combo-label">Pick one</Label>
        <Combobox aria-labelledby="combo-label">
            <Option>Option 1</Option>
            <Option>Option 2</Option>
        </Combobox>

        <Field label="Combobox field">
            <Combobox>
                <Option>Option 1</Option>
            </Combobox>
        </Field>

        <Combobox placeholder="Select...">
            <Option>Option 1</Option>
        </Combobox>

        <Combobox placeholder="Select..." aria-label="Selection">
            <Option>Option 1</Option>
        </Combobox>

        <Combobox multiselect>
            <Option>Option 1</Option>
            <Option>Option 2</Option>
        </Combobox>

        <Combobox multiselect aria-label="Multi-select">
            <Option>Option 1</Option>
            <Option>Option 2</Option>
        </Combobox>
    </>
);
