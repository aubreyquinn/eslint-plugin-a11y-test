import {
    Toolbar,
    ToolbarButton,
    ToolbarDivider,
    ToolbarGroup,
    ToolbarRadioButton,
    ToolbarRadioGroup,
    ToolbarToggleButton,
} from "@fluentui/react-components";
import {
    CalendarMonthRegular,
    TextBoldRegular,
    TextItalicRegular,
    TextUnderlineRegular,
    AlignLeftRegular,
    AlignCenterRegular,
    AlignRightRegular,
} from "@fluentui/react-icons";
import * as React from 'react';

const label = "my-label";
const myFunc = (): string => { return "test" };

export const ToolbarTests = () => (
    <>
        {/* toolbar-missing-aria tests */}
        <Toolbar>
            <ToolbarButton>Button</ToolbarButton>
        </Toolbar>

        <Toolbar aria-label="Editor toolbar">
            <ToolbarButton>Button</ToolbarButton>
        </Toolbar>

        <Toolbar aria-label={label}>
            <ToolbarButton>Button</ToolbarButton>
        </Toolbar>

        <Toolbar aria-label={myFunc()}>
            <ToolbarButton>Button</ToolbarButton>
        </Toolbar>

        <span id="toolbar-label">Formatting toolbar</span>
        <Toolbar aria-labelledby="toolbar-label">
            <ToolbarButton>Button</ToolbarButton>
        </Toolbar>

        <Toolbar aria-label="Text formatting">
            <ToolbarButton icon={<TextBoldRegular />} aria-label="Bold" />
            <ToolbarButton icon={<TextItalicRegular />} aria-label="Italic" />
            <ToolbarButton icon={<TextUnderlineRegular />} aria-label="Underline" />
        </Toolbar>

        <Toolbar aria-label="Toolbar with divider">
            <ToolbarButton>Action 1</ToolbarButton>
            <ToolbarDivider />
            <ToolbarButton>Action 2</ToolbarButton>
        </Toolbar>

        <Toolbar aria-label="Toolbar with groups">
            <ToolbarGroup>
                <ToolbarButton icon={<TextBoldRegular />} aria-label="Bold" />
                <ToolbarButton icon={<TextItalicRegular />} aria-label="Italic" />
            </ToolbarGroup>
            <ToolbarDivider />
            <ToolbarGroup>
                <ToolbarButton icon={<CalendarMonthRegular />} aria-label="Calendar" />
            </ToolbarGroup>
        </Toolbar>

        <Toolbar aria-label="Toggle buttons toolbar">
            <ToolbarToggleButton icon={<TextBoldRegular />} aria-label="Toggle bold" />
            <ToolbarToggleButton icon={<TextItalicRegular />} aria-label="Toggle italic" />
            <ToolbarToggleButton icon={<TextUnderlineRegular />} aria-label="Toggle underline" />
        </Toolbar>

        <Toolbar aria-label="Radio buttons toolbar">
            <ToolbarRadioGroup>
                <ToolbarRadioButton name="align" value="left" icon={<AlignLeftRegular />} aria-label="Align left" />
                <ToolbarRadioButton name="align" value="center" icon={<AlignCenterRegular />} aria-label="Align center" />
                <ToolbarRadioButton name="align" value="right" icon={<AlignRightRegular />} aria-label="Align right" />
            </ToolbarRadioGroup>
        </Toolbar>

        <Toolbar size="small" aria-label="Small toolbar">
            <ToolbarButton>Small Button</ToolbarButton>
        </Toolbar>

        <Toolbar size="medium" aria-label="Medium toolbar">
            <ToolbarButton>Medium Button</ToolbarButton>
        </Toolbar>

        <Toolbar size="large" aria-label="Large toolbar">
            <ToolbarButton>Large Button</ToolbarButton>
        </Toolbar>

        <Toolbar vertical aria-label="Vertical toolbar">
            <ToolbarButton icon={<TextBoldRegular />} aria-label="Bold" />
            <ToolbarButton icon={<TextItalicRegular />} aria-label="Italic" />
        </Toolbar>

        {/* ToolbarButton without labels */}
        <Toolbar aria-label="Toolbar with unlabeled buttons">
            <ToolbarButton icon={<CalendarMonthRegular />} />
            <ToolbarButton icon={<CalendarMonthRegular />} aria-label="Calendar action" />
            <ToolbarButton>Text Button</ToolbarButton>
        </Toolbar>
    </>
);
