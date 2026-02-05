import { RadioGroup, Field, Radio, Label } from "@fluentui/react-components";
import * as React from 'react';
const label = "my-label"; const myFunc = (): string => { return "test"};

export const ButtonTests = () => (
    <>
        {/* ============================================
            radiogroup-missing-label tests
            ============================================ */}

        {/* ❌ FAIL: RadioGroup without accessible name */}
        <RadioGroup />

        {/* ✅ PASS: RadioGroup with label prop */}
        <RadioGroup label="my-radio-2">
            <Radio value="apple" label="Apple" />
            <Radio value="pear" label="Pear" />
            <Radio value="banana" label="Banana" />
            <Radio value="orange" label="Orange" />
        </RadioGroup>

        {/* ✅ PASS: RadioGroup with aria-labelledby */}
        <Label id="my-radio-2">apple</Label>
        <RadioGroup aria-labelledby="my-radio-2">
            <Radio value="apple" label="Apple" />
            <Radio value="pear" label="Pear" />
            <Radio value="banana" label="Banana" />
            <Radio value="orange" label="Orange" />
        </RadioGroup>

        {/* ✅ PASS: RadioGroup with aria-label */}
        <RadioGroup aria-label="avc">
            <Radio value="apple" label="Apple" />
            <Radio value="pear" label="Pear" />
            <Radio value="banana" label="Banana" />
            <Radio value="orange" label="Orange" />
        </RadioGroup>

        {/* ✅ PASS: RadioGroup inside Field with label */}
        <Field label="Favorite Fruit">
            <RadioGroup>
                <Radio value="apple" label="Apple" />
                <Radio value="pear" label="Pear" />
                <Radio value="banana" label="Banana" />
                <Radio value="orange" label="Orange" />
            </RadioGroup>
        </Field>

        {/* ✅ PASS: RadioGroup wrapped in Label */}
        <Label>
            Favourite Fruit
            <RadioGroup>
                <Radio value="apple" label="Apple" />
                <Radio value="pear" label="Pear" />
                <Radio value="banana" label="Banana" />
                <Radio value="orange" label="Orange" />
            </RadioGroup>
        </Label>

        {/* ✅ PASS: Label with htmlFor pointing to RadioGroup id */}
        <Label htmlFor="my-radio">apple</Label>
        <RadioGroup id="my-radio">
            <Radio value="apple" label="Apple" />
            <Radio value="pear" label="Pear" />
            <Radio value="banana" label="Banana" />
            <Radio value="orange" label="Orange" />
        </RadioGroup>


        {/* Commented out Radio tests - moved to RadioButtonTest.tsx
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
        <Radio aria-labelledby={label} /> */}
    </>      
);