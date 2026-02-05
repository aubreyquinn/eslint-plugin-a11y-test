import { Dropdown, Option } from "@fluentui/react-components";
import * as React from 'react';
const label = "my-label"; const myFunc = (): string => { return "test"};
export const SwitchTests = () => (
    <>
        {/* ============================================
            dropdown-needs-labelling tests
            ============================================ */}
        
        {/* ❌ FAIL: Dropdown without accessible name */}
        <Dropdown></Dropdown>

        {/* ✅ PASS: Dropdown with aria-label */}
        <Dropdown aria-label="hello">
            <Option>
                yes
            </Option>
        </Dropdown>

        {/* ✅ PASS: Dropdown with aria-labelledby */}
        <label id='dropdownId'>Best pet</label>
        <Dropdown aria-labelledby="dropdownId">
            <Option>
                yes
            </Option>
        </Dropdown>

        {/* ✅ PASS: Label with htmlFor pointing to Dropdown id */}
        <label htmlFor='dropdownId2'>Best pet</label>
        <Dropdown id="dropdownId2">
            <Option>
                yes
            </Option>
        </Dropdown>

    </>      
);