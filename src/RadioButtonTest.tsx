import { Label, Radio, Field } from "@fluentui/react-components";
import * as React from 'react';
const label = "my-label"; const myFunc = (): string => { return "test"};
export const ButtonTests = () => (
    <>
        <Radio />
        <Label>hello <Radio /></Label>
        <Radio aria-label="hello" />
        <Field label='xyz'><Radio /></Field>
        <Radio value="apple" label="Apple" />

        <Label htmlFor="my-radio">apple</Label>
        <Radio id="my-radio" />

        <Label id="my-radio-2">apple</Label>
        <Radio aria-labelledby="my-radio-2" />

        <Label id="my-radio-3">apple</Label>
        <Radio aria-describedby="my-radio-3" />

        <Label id={myFunc()}>apple</Label>
        <Radio aria-labelledby={myFunc()} />

        <Label id={label}>apple</Label>
        <Radio aria-labelledby={label} />
    </>      
);