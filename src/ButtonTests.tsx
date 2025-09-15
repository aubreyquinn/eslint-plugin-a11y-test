import { Button, Textarea, Toolbar, ToggleButton, Label, Combobox, Text, Input, Badge, Select, CompoundButton, Tooltip } from "@fluentui/react-components";
import { CalendarMonthRegular} from "@fluentui/react-icons";
import * as React from 'react';
const label = "myLabel"; const myFunc = (): string => { return "test"};
export const ButtonTests = () => (
    <>
        <Button></Button>
        <Button />
        <Button>Test</Button>

        <Button>{'Test'}</Button>

        <Button>{label}</Button>        
        <Button>{myFunc()}</Button>

        <Button icon={<CalendarMonthRegular />} title="hello"></Button>
        <Button icon={<CalendarMonthRegular />} aria-label="hello"></Button>
        <Button icon={<CalendarMonthRegular />} aria-label={label}></Button>
        <Button icon={<CalendarMonthRegular />} aria-label={myFunc()}></Button>

        <Button icon={<CalendarMonthRegular />}></Button>
        <Button icon={<CalendarMonthRegular />}>{'Hello'}</Button>
        <Button icon={<CalendarMonthRegular />}>{label}</Button>        
        <Button icon={<CalendarMonthRegular />}>{myFunc()}</Button>
        <ToggleButton icon={<CalendarMonthRegular />}></ToggleButton>
        <Button appearance="primary">Primary</Button>
        <Button appearance="outline">Outline</Button>
        <Button appearance="subtle">Subtle</Button>
        <Button appearance="transparent">Transparent</Button>

        <Button aria-describedby="hello"></Button>
        <p id="hello">type here</p>

        <Button icon={<CalendarMonthRegular />} aria-labelledby="hello"></Button>
        <span id="hello">type here</span>

        <CompoundButton
          icon={<CalendarMonthRegular />}
          secondaryContent="Secondary content"
        >
          Example
        </CompoundButton>

        <CompoundButton icon={<CalendarMonthRegular />} />
        <CompoundButton icon={<CalendarMonthRegular />} aria-label="abc" />

        <CompoundButton
          icon={<CalendarMonthRegular />}
        >
          Example
        </CompoundButton>

        <CompoundButton
          icon={<CalendarMonthRegular />}
          secondaryContent="Secondary content"
        >
        </CompoundButton>

        <Tooltip content="With calendar icon only" relationship="label">
          <CompoundButton icon={<CalendarMonthRegular />} />
        </Tooltip>

        
        <Tooltip content="With calendar icon only" relationship="label">
          <Button icon={<CalendarMonthRegular />} />
        </Tooltip>
  </>      
);