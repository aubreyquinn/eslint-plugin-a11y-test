import { Dropdown, Option } from "@fluentui/react-components";
import * as React from 'react';
const label = "my-label"; const myFunc = (): string => { return "test"};
export const SwitchTests = () => (
    <>
       <Dropdown></Dropdown>

       <Dropdown aria-label="hello">
          <Option>
            yes
          </Option>
      </Dropdown>

      <label id='dropdownId'>Best pet</label>
      <Dropdown aria-labelledby="dropdownId">
          <Option>
            yes
          </Option>
      </Dropdown>

      <label htmlFor='dropdownId2'>Best pet</label>
      <Dropdown id="dropdownId2">
          <Option>
            yes
          </Option>
      </Dropdown>

    </>      
);