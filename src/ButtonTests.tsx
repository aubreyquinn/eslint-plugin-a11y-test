import { Button, Textarea, Toolbar, ToggleButton, Label, Combobox, Text, Input, Badge, Select, CompoundButton, Tooltip } from "@fluentui/react-components";
import { CalendarMonthRegular} from "@fluentui/react-icons";
import * as React from 'react';
const label = "myLabel"; const myFunc = (): string => { return "test"};
export const ButtonTests = () => (
    <>
        {/* ============================================
            buttons-needs-labelling tests
            ============================================ */}
        
        {/* ❌ FAIL: Empty Button */}
        <Button></Button>
        {/* ❌ FAIL: Self-closing Button */}
        <Button />
        {/* ✅ PASS: Button with text content */}
        <Button>Test</Button>

        {/* ✅ PASS: Button with string expression */}
        <Button>{'Test'}</Button>

        {/* ✅ PASS: Button with variable content */}
        <Button>{label}</Button>        
        {/* ✅ PASS: Button with function result content */}
        <Button>{myFunc()}</Button>

        {/* ❌ FAIL: Icon button with title instead of aria-label (prefer-aria-over-title) */}
        <Button icon={<CalendarMonthRegular />} title="hello"></Button>
        {/* ✅ PASS: Icon button with aria-label */}
        <Button icon={<CalendarMonthRegular />} aria-label="hello"></Button>
        {/* ✅ PASS: Icon button with aria-label from variable */}
        <Button icon={<CalendarMonthRegular />} aria-label={label}></Button>
        {/* ✅ PASS: Icon button with aria-label from function */}
        <Button icon={<CalendarMonthRegular />} aria-label={myFunc()}></Button>

        {/* ❌ FAIL: Icon-only button without accessible name */}
        <Button icon={<CalendarMonthRegular />}></Button>
        {/* ✅ PASS: Icon button with text content */}
        <Button icon={<CalendarMonthRegular />}>{'Hello'}</Button>
        {/* ✅ PASS: Icon button with variable content */}
        <Button icon={<CalendarMonthRegular />}>{label}</Button>        
        {/* ✅ PASS: Icon button with function content */}
        <Button icon={<CalendarMonthRegular />}>{myFunc()}</Button>
        {/* ❌ FAIL: Icon-only ToggleButton without accessible name */}
        <ToggleButton icon={<CalendarMonthRegular />}></ToggleButton>
        
        {/* ✅ PASS: Button with appearance variants and text */}
        <Button appearance="primary">Primary</Button>
        <Button appearance="outline">Outline</Button>
        <Button appearance="subtle">Subtle</Button>
        <Button appearance="transparent">Transparent</Button>

        {/* ❌ FAIL: Button with aria-describedby only - needs primary label */}
        <Button aria-describedby="hello"></Button>
        <p id="hello">type here</p>

        {/* ✅ PASS: Icon button with aria-labelledby */}
        <Button icon={<CalendarMonthRegular />} aria-labelledby="hello"></Button>
        <span id="hello">type here</span>

        {/* ============================================
            compound-button-needs-labelling tests
            ============================================ */}

        {/* ✅ PASS: CompoundButton with icon, text, and secondary content */}
        <CompoundButton
          icon={<CalendarMonthRegular />}
          secondaryContent="Secondary content"
        >
          Example
        </CompoundButton>

        {/* ❌ FAIL: Icon-only CompoundButton without accessible name */}
        <CompoundButton icon={<CalendarMonthRegular />} />
        {/* ✅ PASS: CompoundButton with icon and aria-label */}
        <CompoundButton icon={<CalendarMonthRegular />} aria-label="abc" />

        {/* ✅ PASS: CompoundButton with icon and text */}
        <CompoundButton
          icon={<CalendarMonthRegular />}
        >
          Example
        </CompoundButton>

        {/* ❌ FAIL: CompoundButton with only secondary content - needs primary label */}
        <CompoundButton
          icon={<CalendarMonthRegular />}
          secondaryContent="Secondary content"
        >
        </CompoundButton>

        {/* ✅ PASS: CompoundButton with Tooltip as label */}
        <Tooltip content="With calendar icon only" relationship="label">
          <CompoundButton icon={<CalendarMonthRegular />} />
        </Tooltip>

        {/* ✅ PASS: Button with Tooltip as label */}
        <Tooltip content="With calendar icon only" relationship="label">
          <Button icon={<CalendarMonthRegular />} />
        </Tooltip>
  </>      
);