import { Checkbox, Label, Field } from "@fluentui/react-components";
import * as React from 'react';
const label = "my-label"; const myFunc = (): string => { return "test"};
export const CheckboxTests = () => (
    <>
        {/* ============================================
            checkbox-needs-labelling tests
            ============================================ */}
        
        {/* ❌ FAIL: Checkbox without label */}
        <Checkbox />
        {/* ❌ FAIL: Empty Checkbox */}
        <Checkbox></Checkbox>
        {/* ❌ FAIL: Checkbox with child text (not valid label pattern) */}
        <Checkbox>hello</Checkbox>       
        {/* ✅ PASS: Checkbox with label prop */}
        <Checkbox label="hello"></Checkbox>
        {/* ✅ PASS: Checkbox wrapped in Label */}
        <Label> hello
            <Checkbox />
        </Label>
        {/* ✅ PASS: Checkbox with aria-label */}
        <Checkbox aria-label="abc" />

        {/* ✅ PASS: Label with htmlFor pointing to Checkbox id */}
        <Label htmlFor="my-label-2">yes</Label>
        <Checkbox id="my-label-2" />

        {/* ✅ PASS: Checkbox with aria-labelledby */}
        <Label id="my-label">yes</Label>
        <Checkbox aria-labelledby="my-label" />

        {/* ✅ PASS: Checkbox with label prop */}
        <Checkbox label="hello"></Checkbox>
        {/* ❌ FAIL: Checkbox inside Field - Field provides label but rule may not detect this pattern */}
        <Field label="helllo">
            <Checkbox />
        </Field>
    </>      
);