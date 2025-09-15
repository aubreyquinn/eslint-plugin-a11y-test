import { Checkbox, Label, Field } from "@fluentui/react-components";
import * as React from 'react';
const label = "my-label"; const myFunc = (): string => { return "test"};
export const CheckboxTests = () => (
    <>
       <Checkbox />
       <Checkbox></Checkbox>
       <Checkbox>hello</Checkbox>       
       <Checkbox label="hello"></Checkbox>
        <Label> hello
       <Checkbox />
       </Label>
       <Checkbox aria-label="abc" />

       <Label htmlFor="my-label-2">yes</Label>
       <Checkbox id="my-label-2" />

        <Label id="my-label">yes</Label>
       <Checkbox aria-labelledby="my-label" />

       <Checkbox label="hello"></Checkbox>
        <Field label="helllo">
       <Checkbox />
       </Field>
    </>      
);