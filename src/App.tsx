import { Button, Textarea, Toolbar, ToggleButton, Label, Combobox, Text } from "@fluentui/react-components";
import { CalendarMonthRegular } from '@fluentui/react-icons';
import * as React from 'react';
const label = "myLabel";
export const App = () => (
    <>
      <Toolbar />
      <div id="address_label">Enter your address</div>
      <Button icon={<CalendarMonthRegular />}></Button>
      <Button icon={<CalendarMonthRegular />}>{'Hello'}</Button>
      <Button icon={<CalendarMonthRegular />}>{label}</Button>
      <ToggleButton icon={<CalendarMonthRegular />}></ToggleButton>
      <Button appearance="primary">Primary</Button>
      <Button appearance="outline">Outline</Button>
      <Button appearance="subtle">Subtle</Button>
      <Button appearance="transparent">Transparent</Button>
      <Button />
      <Textarea />
      <Button icon={<CalendarMonthRegular />} />
      <Label></Label>
      <Text></Text>
      <Combobox />
      <Button icon={<CalendarMonthRegular />} title="hello"></Button>
  </>
);