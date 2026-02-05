import { Label, Radio, Field } from "@fluentui/react-components";
import * as React from 'react';
const label = "my-label"; const myFunc = (): string => { return "test"};
export const ButtonTests = () => (
    <>
        {/* ============================================
            radio-button-missing-label tests
            ============================================ */}
        
        {/* ❌ FAIL: Radio without label */}
        <Radio />
        {/* ✅ PASS: Radio wrapped in Label */}
        <Label>hello <Radio /></Label>
        {/* ✅ PASS: Radio with aria-label */}
        <Radio aria-label="hello" />
        {/* ✅ PASS: Radio inside Field with label */}
        <Field label='xyz'><Radio /></Field>
        {/* ✅ PASS: Radio with label prop */}
        <Radio value="apple" label="Apple" />

        {/* ✅ PASS: Label with htmlFor pointing to Radio id */}
        <Label htmlFor="my-radio">apple</Label>
        <Radio id="my-radio" />

        {/* ✅ PASS: Radio with aria-labelledby */}
        <Label id="my-radio-2">apple</Label>
        <Radio aria-labelledby="my-radio-2" />

        {/* ❌ FAIL: Radio with aria-describedby only - needs primary label */}
        <Label id="my-radio-3">apple</Label>
        <Radio aria-describedby="my-radio-3" />

        {/* ✅ PASS: Radio with aria-labelledby from function */}
        <Label id={myFunc()}>apple</Label>
        <Radio aria-labelledby={myFunc()} />

        {/* ✅ PASS: Radio with aria-labelledby from variable */}
        <Label id={label}>apple</Label>
        <Radio aria-labelledby={label} />
    </>      
);