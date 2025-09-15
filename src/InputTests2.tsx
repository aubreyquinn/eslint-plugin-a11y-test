import { Input, Label  } from "@fluentui/react-components";

import * as React from 'react';

export const InputTests2 = () => (
    <>

      <Input aria-describedby={"paragraph_label-1"}></Input>
      <Label id={"paragraph_label-1"}>type here</Label> 

      <Label id={"paragraph_label-2"}>type here</Label>
      <Input aria-labelledby={"paragraph_label-2"}></Input>

      <label id={"paragraph_label-3"}>type here</label>
      <Input aria-labelledby={"paragraph_label-3"}></Input>

      <Input aria-labelledby="paragraph_label-4"></Input>
      <p id="paragraph_label-4">type here</p>

      <Input aria-labelledby="paragraph_label-5"></Input>
      <div id="paragraph_label-5">type here</div>

      <Input aria-labelledby="paragraph_label-6"></Input>
      <h2 id="paragraph_label-6">type here</h2>

      <Input aria-labelledby="paragraph_label-8"></Input>
      <h6 id="paragraph_label-8">type here</h6>

      <Input aria-labelledby="paragraph_label-7"></Input>
      <span id="paragraph_label-7">type here</span>

      <Label htmlFor="input-id-1">Label name</Label> 
      <Input id="input-id-1"/>

      <label htmlFor="input-id-2">Label name</label>
      <Input id="input-id-2"/>


  </>      
);