import { Button } from "@fluentui/react-components";
import { CalendarMonthRegular } from '@fluentui/react-icons';
import * as React from 'react';
export const App = () => (
    <>
      <div id="address_label">Enter your address</div>
      <Button icon={<CalendarMonthRegular />}></Button>
      <Button appearance="primary">Primary</Button>
      <Button appearance="outline">Outline</Button>
      <Button appearance="subtle">Subtle</Button>
      <Button appearance="transparent">Transparent</Button>
  </>
);