import { Switch, Label, Field } from "@fluentui/react-components";
import * as React from 'react';
const label = "my-label"; const myFunc = (): string => { return "test"};
export const SwitchTests = () => (
    <>
       <Field>
        <Switch />
       </Field>

       <Field label="helllo">
        <Switch />
       </Field>

       <Field label={myFunc()}>
        <Switch />
       </Field>
       
       <Field label={label}>
        <Switch />
       </Field>
    </>      
);