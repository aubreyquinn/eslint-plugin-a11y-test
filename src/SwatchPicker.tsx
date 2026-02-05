import { Switch, Label, Field } from "@fluentui/react-components";
import * as React from 'react';
const label = "my-label"; const myFunc = (): string => { return "test"};
export const SwitchTests = () => (
    <>
       <Switch />
       <Switch></Switch>
       <Switch>hello</Switch>       
       <Switch label="hello"></Switch>
        <Label> hello
       <Switch />
       </Label>
       <Switch aria-label="abc" />

       <Label htmlFor="my-label-2">yes</Label>
       <Switch id="my-label-2" />

        <Label id="my-label">yes</Label>
       <Switch aria-labelledby="my-label" />

       <Switch label="hello"></Switch>
        <Field label="helllo">
       <Switch />
       </Field>
    </>      
);