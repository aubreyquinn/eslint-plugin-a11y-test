import { Switch, Label, Field } from "@fluentui/react-components";
import * as React from 'react';
const label = "my-label"; const myFunc = (): string => { return "test"};
export const SwitchTests = () => (
    <>
        {/* ============================================
            Field component tests
            ============================================ */}
        
        {/* ❌ FAIL: Switch inside Field without label prop */}
        <Field>
            <Switch />
        </Field>

        {/* ✅ PASS: Switch inside Field with label prop */}
        <Field label="helllo">
            <Switch />
        </Field>

        {/* ✅ PASS: Switch inside Field with label from function */}
        <Field label={myFunc()}>
            <Switch />
        </Field>
       
        {/* ✅ PASS: Switch inside Field with label from variable */}
        <Field label={label}>
            <Switch />
        </Field>
    </>      
);