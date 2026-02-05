import { Tooltip, Button, Link } from "@fluentui/react-components";
import { CalendarMonthRegular, InfoRegular } from "@fluentui/react-icons";
import * as React from 'react';

const label = "my-label";
const myFunc = (): string => { return "test" };

export const TooltipTests = () => (
    <>
        {/* ============================================
            tooltip-not-recommended tests
            ============================================ */}
        
        {/* ⚠️ WARNING: Using tooltip with relationship="label" is not recommended
            Screen reader users may not always hear the tooltip content */}
        <Tooltip content="Tooltip text" relationship="label">
            <Button>Button with tooltip</Button>
        </Tooltip>

        {/* ⚠️ WARNING: Tooltip as label from variable */}
        <Tooltip content={label} relationship="label">
            <Button>Button</Button>
        </Tooltip>

        {/* ⚠️ WARNING: Tooltip as label from function */}
        <Tooltip content={myFunc()} relationship="label">
            <Button>Button</Button>
        </Tooltip>

        {/* ✅ PASS: Tooltip with relationship="description" - provides supplementary info */}
        <Tooltip content="Description" relationship="description">
            <Button aria-label="Action">Action</Button>
        </Tooltip>

        {/* ✅ PASS: Descriptive tooltip on icon button with aria-label */}
        <Tooltip content="More info" relationship="description">
            <Button icon={<CalendarMonthRegular />} aria-label="Calendar" />
        </Tooltip>

        {/* ⚠️ WARNING: Icon-only button with tooltip as label - not recommended */}
        <Tooltip content="Icon button label" relationship="label">
            <Button icon={<CalendarMonthRegular />} />
        </Tooltip>

        {/* ⚠️ WARNING: Another icon-only button with tooltip as label */}
        <Tooltip content="This is the label" relationship="label">
            <Button icon={<InfoRegular />} />
        </Tooltip>

        {/* ============================================
            Proper labeling patterns (recommended)
            ============================================ */}

        {/* ✅ PASS: Icon button with aria-label - preferred approach */}
        <Button aria-label="Calendar">
            <CalendarMonthRegular />
        </Button>

        {/* ✅ PASS: Icon button with aria-label AND descriptive tooltip */}
        <Tooltip content="Additional info" relationship="description">
            <Button aria-label="Calendar">
                <CalendarMonthRegular />
            </Button>
        </Tooltip>

        {/* ============================================
            Tooltip positioning variants
            ============================================ */}

        {/* ⚠️ WARNING: Tooltip as label with above positioning */}
        <Tooltip content="Tooltip text" relationship="label" positioning="above">
            <Button>Above tooltip</Button>
        </Tooltip>

        {/* ⚠️ WARNING: Tooltip as label with below positioning */}
        <Tooltip content="Tooltip text" relationship="label" positioning="below">
            <Button>Below tooltip</Button>
        </Tooltip>

        {/* ⚠️ WARNING: Tooltip as label with before positioning */}
        <Tooltip content="Tooltip text" relationship="label" positioning="before">
            <Button>Before tooltip</Button>
        </Tooltip>

        {/* ⚠️ WARNING: Tooltip as label with after positioning */}
        <Tooltip content="Tooltip text" relationship="label" positioning="after">
            <Button>After tooltip</Button>
        </Tooltip>

        {/* ⚠️ WARNING: Visible tooltip as label */}
        <Tooltip content="Visible tooltip" relationship="label" visible>
            <Button>Visible tooltip</Button>
        </Tooltip>

        {/* ⚠️ WARNING: Tooltip with arrow as label */}
        <Tooltip content="With arrow" relationship="label" withArrow>
            <Button>With arrow</Button>
        </Tooltip>

        {/* ⚠️ WARNING: Link with tooltip as label */}
        <Tooltip content="Link tooltip" relationship="label">
            <Link href="#">Link with tooltip</Link>
        </Tooltip>

        {/* ✅ PASS: Descriptive tooltip with inverted appearance */}
        <Tooltip content="Inverted appearance" relationship="description" appearance="inverted">
            <Button>Inverted tooltip</Button>
        </Tooltip>

        {/* Nested tooltips example */}
        <Tooltip content="Outer tooltip" relationship="description">
            <div>
                <Tooltip content="Inner tooltip" relationship="label">
                    <Button>Nested tooltips</Button>
                </Tooltip>
            </div>
        </Tooltip>
    </>
);
