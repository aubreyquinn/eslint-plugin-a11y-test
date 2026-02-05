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
        {/* ============================================
            avoid-using-aria-describedby-for-primary-labelling tests
            ============================================ */}
        
        {/* ❌ FAIL: Button with aria-describedby only - needs primary label */}
        <Button aria-describedby="desc-only" />
        <p id="desc-only">This describes the button</p>

        {/* ✅ PASS: Button with aria-describedby AND aria-label */}
        <Button aria-describedby="desc-1" aria-label="Proper label" />
        <p id="desc-1">Additional description</p>

        {/* ✅ PASS: Button with aria-describedby AND text content */}
        <Button aria-describedby="desc-2">Button Text</Button>
        <p id="desc-2">Additional description</p>

        {/* ❌ FAIL: Input with aria-describedby only - needs primary label */}
        <Input aria-describedby="input-desc" />
        <p id="input-desc">Enter your name</p>

        {/* ✅ PASS: Input with aria-describedby AND aria-label */}
        <Input aria-describedby="input-desc-2" aria-label="Name input" />
        <p id="input-desc-2">Additional info</p>

        {/* ============================================
            no-empty-components tests
            ============================================ */}

        {/* ❌ FAIL: Empty Button */}
        <Button></Button>
        {/* ❌ FAIL: Self-closing Button without content */}
        <Button />
        {/* ✅ PASS: Button with text content */}
        <Button>Content</Button>
        {/* ✅ PASS: Button with aria-label */}
        <Button aria-label="Labeled" />

        {/* ❌ FAIL: Empty Link */}
        <Link></Link>
        {/* ❌ FAIL: Self-closing Link */}
        <Link />
        {/* ✅ PASS: Link with text content */}
        <Link href="#">Link text</Link>
        {/* ✅ PASS: Link with aria-label */}
        <Link href="#" aria-label="Labeled link" />

        {/* ============================================
            prefer-aria-over-title-attribute tests
            ============================================ */}

        {/* ❌ FAIL: Icon button using title instead of aria-label */}
        <Button title="Button title" icon={<CalendarMonthRegular />} />
        {/* ✅ PASS: Icon button with aria-label */}
        <Button aria-label="Button label" icon={<CalendarMonthRegular />} />

        {/* ⚠️ WARNING: Button with title - aria-label preferred */}
        <Button title="Title only">Text</Button>
        {/* ✅ PASS: Button with aria-label */}
        <Button aria-label="Aria label">Text</Button>

        {/* ⚠️ WARNING: Link with title - aria-label preferred */}
        <Link href="#" title="Link title">Link</Link>
        {/* ✅ PASS: Link with aria-label */}
        <Link href="#" aria-label="Link label">Link</Link>

        {/* ⚠️ WARNING: Input with title - aria-label preferred */}
        <Input title="Input title" />
        {/* ✅ PASS: Input with aria-label */}
        <Input aria-label="Input label" />

        {/* ============================================
            prefer-disabledfocusable-over-disabled tests
            ============================================ */}

        {/* ⚠️ WARNING: Using disabled removes button from tab order */}
        <Button disabled>Disabled button</Button>
        <Button disabled={true}>Disabled button</Button>
        {/* ✅ PASS: disabledFocusable keeps button in tab order */}
        <Button disabledFocusable>Disabled focusable button</Button>
        <Button disabledFocusable={true}>Disabled focusable button</Button>

        {/* ⚠️ WARNING: Disabled checkbox - consider disabledFocusable */}
        <Checkbox disabled label="Disabled checkbox" />
        {/* ✅ PASS: disabledFocusable checkbox */}
        <Checkbox disabledFocusable label="Disabled focusable checkbox" />

        {/* ⚠️ WARNING: Disabled switch - consider disabledFocusable */}
        <Switch disabled label="Disabled switch" />
        {/* ✅ PASS: disabledFocusable switch */}
        <Switch disabledFocusable label="Disabled focusable switch" />

        {/* ⚠️ WARNING: Disabled input - consider disabledFocusable */}
        <Input disabled />
        {/* ✅ PASS: disabledFocusable input */}
        <Input disabledFocusable />

        {/* ============================================
            visual-label-better-than-aria-suggestion tests
            ============================================ */}

        {/* ⚠️ SUGGESTION: Visual label is better than aria-label for sighted users */}
        <Input aria-label="Email address" />
        {/* ✅ PASS: Visual Label with htmlFor */}
        <Label htmlFor="email-input">Email address</Label>
        <Input id="email-input" />

        {/* ✅ PASS: Field component provides visual label */}
        <Field label="Email address">
            <Input />
        </Field>

        {/* ⚠️ SUGGESTION: Checkbox with aria-label - consider visual label */}
        <Checkbox aria-label="Accept terms" />
        {/* ✅ PASS: Checkbox with visual label prop */}
        <Checkbox label="Accept terms" />

        {/* ⚠️ SUGGESTION: Switch with aria-label - consider visual label */}
        <Switch aria-label="Enable notifications" />
        {/* ✅ PASS: Switch with visual label prop */}
        <Switch label="Enable notifications" />

        {/* ============================================
            Multiple labeling strategies
            ============================================ */}

        {/* ✅ PASS: Label with id and Input with aria-labelledby */}
        <Label id="combo-label">Search</Label>
        <Input aria-labelledby="combo-label" />

        {/* ✅ PASS: Label with htmlFor pointing to Input id */}
        <Label htmlFor="direct-label">Username</Label>
        <Input id="direct-label" />

        {/* ✅ PASS: Field component wrapping Input */}
        <Field label="Password">
            <Input type="password" />
        </Field>

        {/* ============================================
            Wrapped label patterns
            ============================================ */}

        {/* ✅ PASS: Input wrapped in Label */}
        <Label>
            Wrapped input
            <Input />
        </Label>

        {/* ✅ PASS: Checkbox wrapped in Label */}
        <Label>
            Wrapped checkbox
            <Checkbox />
        </Label>

        {/* ✅ PASS: Switch wrapped in Label */}
        <Label>
            Wrapped switch
            <Switch />
        </Label>
    </>
);
