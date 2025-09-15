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

      <Button />
      <Textarea />
      <Button icon={<CalendarMonthRegular />} />
      <Label></Label>
      <Text></Text>
      <Combobox />

      <Input aria-describedby="paragraph_label"></Input>
      <Label id="paragraph_label">type here</Label>



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