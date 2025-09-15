import { RadioGroup, Field, Radio, Label } from "@fluentui/react-components";
import * as React from 'react';
const label = "my-label"; const myFunc = (): string => { return "test"};

export const ButtonTests = () => (
    <>

        <RadioGroup />

        <RadioGroup label="my-radio-2">
                <Radio value="apple" label="Apple" />
                <Radio value="pear" label="Pear" />
                <Radio value="banana" label="Banana" />
                <Radio value="orange" label="Orange" />
            </RadioGroup>

        <Label id="my-radio-2">apple</Label>
        <RadioGroup aria-labelledby="my-radio-2">
                <Radio value="apple" label="Apple" />
                <Radio value="pear" label="Pear" />
                <Radio value="banana" label="Banana" />
                <Radio value="orange" label="Orange" />
            </RadioGroup>

        <RadioGroup aria-label="avc">
                <Radio value="apple" label="Apple" />
                <Radio value="pear" label="Pear" />
                <Radio value="banana" label="Banana" />
                <Radio value="orange" label="Orange" />
            </RadioGroup>

        <Field label="Favorite Fruit">
            <RadioGroup>
                <Radio value="apple" label="Apple" />
                <Radio value="pear" label="Pear" />
                <Radio value="banana" label="Banana" />
                <Radio value="orange" label="Orange" />
            </RadioGroup>
        </Field>

        <Label>
            Favourite Fruit
            <RadioGroup>
                <Radio value="apple" label="Apple" />
                <Radio value="pear" label="Pear" />
                <Radio value="banana" label="Banana" />
                <Radio value="orange" label="Orange" />
            </RadioGroup>
        </Label>

        <Label htmlFor="my-radio">apple</Label>
        <RadioGroup id="my-radio">
                <Radio value="apple" label="Apple" />
                <Radio value="pear" label="Pear" />
                <Radio value="banana" label="Banana" />
                <Radio value="orange" label="Orange" />
            </RadioGroup>


        {/* <Radio />
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
        <Radio aria-labelledby={label} /> */}
    </>      
);