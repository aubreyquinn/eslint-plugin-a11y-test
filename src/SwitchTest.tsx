import { Switch, Label, Field } from "@fluentui/react-components";
import * as React from 'react';
const label = "my-label"; const myFunc = (): string => { return "test"};
export const SwitchTests = () => (
    <>
        {/* ============================================
            switch-needs-labelling tests
            ============================================ */}
        
        {/* ❌ FAIL: Switch without label */}
        <Switch />
        {/* ❌ FAIL: Empty Switch */}
        <Switch></Switch>
        {/* ❌ FAIL: Switch with child text (not valid label pattern) */}
        <Switch>hello</Switch>       
        {/* ✅ PASS: Switch with label prop */}
        <Switch label="hello"></Switch>
        {/* ✅ PASS: Switch wrapped in Label */}
        <Label> hello
            <Switch />
        </Label>
        {/* ✅ PASS: Switch with aria-label */}
        <Switch aria-label="abc" />

        {/* ✅ PASS: Label with htmlFor pointing to Switch id */}
        <Label htmlFor="my-label-2">yes</Label>
        <Switch id="my-label-2" />

        {/* ✅ PASS: Switch with aria-labelledby */}
        <Label id="my-label">yes</Label>
        <Switch aria-labelledby="my-label" />

        {/* ✅ PASS: Switch with label prop */}
        <Switch label="hello"></Switch>
        {/* ❌ FAIL: Switch inside Field - Field provides label but rule may not detect this pattern */}
        <Field label="helllo">
            <Switch />
        </Field>
    </>      
);