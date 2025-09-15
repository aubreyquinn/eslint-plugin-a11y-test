import { Input, Label, Field } from "@fluentui/react-components";

import * as React from 'react';

export const InputTests3 = () => {
    const myId = "my-id"; const myId2 = "my-id-2"; const myLabel = "my-label"; const myFunc = (): string => { return "my-function-id" };

    return (
        <>

        <Input />
        <Input></Input>
  
        <Input aria-label={myLabel}></Input>
        <Input aria-label={myLabel} />
  
        <Input aria-describedby="paragraph_label-1"></Input>
        <Label id="paragraph_label-1">type here</Label> 
  
        <Label id={myId}>type here</Label>
        <Input aria-labelledby={myId}></Input>
  
        <label id={myId2}>type here</label>
        <Input aria-labelledby={myId2}></Input>
  
        <Input aria-labelledby={myFunc()}></Input>
        <p id={myFunc()}>type here</p>
  
        <Input aria-labelledby="paragraph_label-5"></Input>
        <div id="paragraph_label-5">type here</div>
  
        <Input aria-labelledby="paragraph_label-6"></Input>
        <h2 id="paragraph_label-6">type here</h2>
  
        <Input aria-labelledby="paragraph_label-8"></Input>
        <h6 id="paragraph_label-8">type here</h6>
  
        <Input aria-labelledby="paragraph_label-7"></Input>
        <span id="paragraph_label-7">type here</span>
  
        <Label>Name<Input /></Label>
        <label>Name<Input /></label>
  
        <Label htmlFor="input-id-1">Label name</Label> 
        <Input id="input-id-1"/>
  
        <label htmlFor="input-id-2">Label name</label>
        <Input id="input-id-2"/>
  
  
        <Field label="Name">
          <Input />
        </Field> 
  
        <Label htmlFor="input-id-3">Label name</Label>
        <Input/>
    </>           
    );
}
   
