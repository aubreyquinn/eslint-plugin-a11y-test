import { Tooltip, Button, Link } from "@fluentui/react-components";
import { CalendarMonthRegular, InfoRegular } from "@fluentui/react-icons";
import * as React from 'react';

const label = "my-label";
const myFunc = (): string => { return "test" };

export const TooltipTests = () => (
    <>
        {/* tooltip-not-recommended tests */}
        <Tooltip content="Tooltip text" relationship="label">
            <Button>Button with tooltip</Button>
        </Tooltip>

        <Tooltip content={label} relationship="label">
            <Button>Button</Button>
        </Tooltip>

        <Tooltip content={myFunc()} relationship="label">
            <Button>Button</Button>
        </Tooltip>

        <Tooltip content="Description" relationship="description">
            <Button aria-label="Action">Action</Button>
        </Tooltip>

        <Tooltip content="More info" relationship="description">
            <Button icon={<CalendarMonthRegular />} aria-label="Calendar" />
        </Tooltip>

        {/* Tooltip as label (not recommended pattern) */}
        <Tooltip content="Icon button label" relationship="label">
            <Button icon={<CalendarMonthRegular />} />
        </Tooltip>

        <Tooltip content="This is the label" relationship="label">
            <Button icon={<InfoRegular />} />
        </Tooltip>

        {/* Proper labeling patterns */}
        <Button aria-label="Calendar">
            <CalendarMonthRegular />
        </Button>

        <Tooltip content="Additional info" relationship="description">
            <Button aria-label="Calendar">
                <CalendarMonthRegular />
            </Button>
        </Tooltip>

        <Tooltip content="Tooltip text" relationship="label" positioning="above">
            <Button>Above tooltip</Button>
        </Tooltip>

        <Tooltip content="Tooltip text" relationship="label" positioning="below">
            <Button>Below tooltip</Button>
        </Tooltip>

        <Tooltip content="Tooltip text" relationship="label" positioning="before">
            <Button>Before tooltip</Button>
        </Tooltip>

        <Tooltip content="Tooltip text" relationship="label" positioning="after">
            <Button>After tooltip</Button>
        </Tooltip>

        <Tooltip content="Visible tooltip" relationship="label" visible>
            <Button>Visible tooltip</Button>
        </Tooltip>

        <Tooltip content="With arrow" relationship="label" withArrow>
            <Button>With arrow</Button>
        </Tooltip>

        <Tooltip content="Link tooltip" relationship="label">
            <Link href="#">Link with tooltip</Link>
        </Tooltip>

        <Tooltip content="Inverted appearance" relationship="description" appearance="inverted">
            <Button>Inverted tooltip</Button>
        </Tooltip>

        {/* Multiple nested tooltips */}
        <Tooltip content="Outer tooltip" relationship="description">
            <div>
                <Tooltip content="Inner tooltip" relationship="label">
                    <Button>Nested tooltips</Button>
                </Tooltip>
            </div>
        </Tooltip>
    </>
);
