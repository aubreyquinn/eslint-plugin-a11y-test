import { Input, Label, Field } from "@fluentui/react-components";

import * as React from 'react';

export const InputTests = () => (
    <>
        {/* ============================================
            input-components-require-accessible-name tests
            ============================================ */}

        {/* ❌ FAIL: Input without accessible name */}
        <Input />
        {/* ❌ FAIL: Empty Input */}
        <Input></Input>

        {/* ✅ PASS: Input with aria-label */}
        <Input aria-label="Name"></Input>
        <Input aria-label="Name" />

        {/* ❌ FAIL: Input with aria-describedby only - needs primary label */}
        <Input aria-describedby="paragraph_label-1"></Input>
        <Label id="paragraph_label-1">type here</Label> 

        {/* ✅ PASS: Input with aria-labelledby referencing Label */}
        <Label id="paragraph_label-2">type here</Label>
        <Input aria-labelledby="paragraph_label-2"></Input>

        {/* ✅ PASS: Input with aria-labelledby referencing label element */}
        <label id="paragraph_label-3">type here</label>
        <Input aria-labelledby="paragraph_label-3"></Input>

        {/* ✅ PASS: Input with aria-labelledby referencing p element */}
        <Input aria-labelledby="paragraph_label-4"></Input>
        <p id="paragraph_label-4">type here</p>

        {/* ✅ PASS: Input with aria-labelledby referencing div element */}
        <Input aria-labelledby="paragraph_label-5"></Input>
        <div id="paragraph_label-5">type here</div>

        {/* ✅ PASS: Input with aria-labelledby referencing h2 element */}
        <Input aria-labelledby="paragraph_label-6"></Input>
        <h2 id="paragraph_label-6">type here</h2>

        {/* ✅ PASS: Input with aria-labelledby referencing h6 element */}
        <Input aria-labelledby="paragraph_label-8"></Input>
        <h6 id="paragraph_label-8">type here</h6>

        {/* ✅ PASS: Input with aria-labelledby referencing span element */}
        <Input aria-labelledby="paragraph_label-7"></Input>
        <span id="paragraph_label-7">type here</span>

        {/* ✅ PASS: Input wrapped in Label component */}
        <Label>Name<Input /></Label>
        {/* ✅ PASS: Input wrapped in label element */}
        <label>Name<Input /></label>

        {/* ✅ PASS: Label with htmlFor pointing to Input id */}
        <Label htmlFor="input-id-1">Label name</Label> 
        <Input id="input-id-1"/>

        {/* ✅ PASS: label with htmlFor pointing to Input id */}
        <label htmlFor="input-id-2">Label name</label>
        <Input id="input-id-2"/>


        {/* ✅ PASS: Input inside Field with label */}
        <Field label="Name">
            <Input />
        </Field> 

        {/* ❌ FAIL: Label htmlFor doesn't match Input id (no id on Input) */}
        <Label htmlFor="input-id-3">Label name</Label>
        <Input/>
    </>      
);