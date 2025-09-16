import { Button, Textarea, Toolbar, ToggleButton, Label, Combobox, Text, Input, Badge, Select } from "@fluentui/react-components";
import { CalendarMonthRegular} from "@fluentui/react-icons";
import * as React from 'react';
import { ButtonTests } from "./ButtonTests";
import { InputTests } from "./InputTests";
const label = "myLabel";
export const App = () => (
    <>
    <ButtonTests />
    <InputTests />
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


      <Input aria-describedby="paragraph_label"></Input>
      <Label id="paragraph_label">type here</Label>

      <Button aria-describedby="hello"></Button>
      <p id="hello">type here</p>

      <Badge />
      <Badge>Abc</Badge>
      <Badge size="medium" appearance="filled" />
      <Badge role="img" aria-label="Active" appearance="filled" color="brand" />
      <Badge appearance="filled" color="brand" />
      <Badge icon={<CalendarMonthRegular aria-label="paste" />} />
      <Badge icon={<CalendarMonthRegular />} />
      <Badge appearance="tint">999+</Badge>
      <Badge size="medium" icon={<CalendarMonthRegular />} />
      <Badge size="medium" icon={<CalendarMonthRegular />}>Abc</Badge>

      <Select size="large">
        <option>Red</option>
        <option>Green</option>
        <option>Blue</option>
      </Select>

      <label htmlFor={`-med`}>Medium</label>
      <Select id={`-med`} size="medium">
        <option>Red</option>
        <option>Green</option>
        <option>Blue</option>
      </Select>

  </>      
);