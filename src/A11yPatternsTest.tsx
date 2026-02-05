import {
    Button,
    Input,
    Checkbox,
    Switch,
    Link,
    Label,
    Field,
} from "@fluentui/react-components";
import { CalendarMonthRegular } from "@fluentui/react-icons";
import * as React from 'react';

const label = "my-label";
const myFunc = (): string => { return "test" };

export const A11yPatternsTests = () => (
    <>
        {/* avoid-using-aria-describedby-for-primary-labelling tests */}
        <Button aria-describedby="desc-only" />
        <p id="desc-only">This describes the button</p>

        <Button aria-describedby="desc-1" aria-label="Proper label" />
        <p id="desc-1">Additional description</p>

        <Button aria-describedby="desc-2">Button Text</Button>
        <p id="desc-2">Additional description</p>

        <Input aria-describedby="input-desc" />
        <p id="input-desc">Enter your name</p>

        <Input aria-describedby="input-desc-2" aria-label="Name input" />
        <p id="input-desc-2">Additional info</p>

        {/* no-empty-components tests */}
        <Button></Button>
        <Button />
        <Button>Content</Button>
        <Button aria-label="Labeled" />

        <Link></Link>
        <Link />
        <Link href="#">Link text</Link>
        <Link href="#" aria-label="Labeled link" />

        {/* prefer-aria-over-title-attribute tests */}
        <Button title="Button title" icon={<CalendarMonthRegular />} />
        <Button aria-label="Button label" icon={<CalendarMonthRegular />} />

        <Button title="Title only">Text</Button>
        <Button aria-label="Aria label">Text</Button>

        <Link href="#" title="Link title">Link</Link>
        <Link href="#" aria-label="Link label">Link</Link>

        <Input title="Input title" />
        <Input aria-label="Input label" />

        {/* prefer-disabledfocusable-over-disabled tests */}
        <Button disabled>Disabled button</Button>
        <Button disabled={true}>Disabled button</Button>
        <Button disabledFocusable>Disabled focusable button</Button>
        <Button disabledFocusable={true}>Disabled focusable button</Button>

        <Checkbox disabled label="Disabled checkbox" />
        <Checkbox disabledFocusable label="Disabled focusable checkbox" />

        <Switch disabled label="Disabled switch" />
        <Switch disabledFocusable label="Disabled focusable switch" />

        <Input disabled />
        <Input disabledFocusable />

        {/* visual-label-better-than-aria-suggestion tests */}
        <Input aria-label="Email address" />
        <Label htmlFor="email-input">Email address</Label>
        <Input id="email-input" />

        <Field label="Email address">
            <Input />
        </Field>

        <Checkbox aria-label="Accept terms" />
        <Checkbox label="Accept terms" />

        <Switch aria-label="Enable notifications" />
        <Switch label="Enable notifications" />

        {/* Multiple labeling strategies */}
        <Label id="combo-label">Search</Label>
        <Input aria-labelledby="combo-label" />

        <Label htmlFor="direct-label">Username</Label>
        <Input id="direct-label" />

        <Field label="Password">
            <Input type="password" />
        </Field>

        {/* Wrapped label patterns */}
        <Label>
            Wrapped input
            <Input />
        </Label>

        <Label>
            Wrapped checkbox
            <Checkbox />
        </Label>

        <Label>
            Wrapped switch
            <Switch />
        </Label>
    </>
);
