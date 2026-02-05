import { Input, Label, Field } from "@fluentui/react-components";

import * as React from 'react';

export const InputTests3 = () => {
    const myId = "my-id"; const myId2 = "my-id-2"; const myLabel = "my-label"; const myFunc = (): string => { return "my-function-id" };

    return (
        <>
            {/* ============================================
                input-components-require-accessible-name tests
                (patterns with variable references)
                ============================================ */}

            {/* ❌ FAIL: Input without accessible name */}
            <Input />
            {/* ❌ FAIL: Empty Input */}
            <Input></Input>
  
            {/* ✅ PASS: Input with aria-label from variable */}
            <Input aria-label={myLabel}></Input>
            <Input aria-label={myLabel} />
  
            {/* ❌ FAIL: Input with aria-describedby only - needs primary label */}
            <Input aria-describedby="paragraph_label-1"></Input>
            <Label id="paragraph_label-1">type here</Label> 
  
            {/* ✅ PASS: Input with aria-labelledby using variable id */}
            <Label id={myId}>type here</Label>
            <Input aria-labelledby={myId}></Input>
  
            {/* ✅ PASS: Input with aria-labelledby using variable id (label element) */}
            <label id={myId2}>type here</label>
            <Input aria-labelledby={myId2}></Input>
  
            {/* ✅ PASS: Input with aria-labelledby using function result */}
            <Input aria-labelledby={myFunc()}></Input>
            <p id={myFunc()}>type here</p>
  
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
  
            {/* ✅ PASS: label element with htmlFor pointing to Input id */}
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
}
   
