// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ESLint } from "eslint";
import * as path from "path";

const srcDir = path.resolve(__dirname, "../src");

// Helper to run ESLint on a file and get error counts by rule
async function getLintErrorsByRule(fileName: string): Promise<Map<string, number>> {
    const eslint = new ESLint({
        useEslintrc: true,
        cwd: path.resolve(__dirname, ".."),
    });

    const filePath = path.join(srcDir, fileName);
    const results = await eslint.lintFiles([filePath]);
    const fileResult = results[0];

    const errorsByRule = new Map<string, number>();
    if (fileResult) {
        for (const message of fileResult.messages) {
            if (message.ruleId) {
                const count = errorsByRule.get(message.ruleId) || 0;
                errorsByRule.set(message.ruleId, count + 1);
            }
        }
    }
    return errorsByRule;
}

// Helper to create a test for expected lint errors
function expectLintErrors(fileName: string, ruleId: string, expectedCount: number) {
    it(`should have ${expectedCount} "${ruleId}" errors`, async () => {
        const errorsByRule = await getLintErrorsByRule(fileName);
        const actualCount = errorsByRule.get(ruleId) || 0;
        expect(actualCount).toBe(expectedCount);
    });
}

// ============================================================================
// Test Suites
// ============================================================================

describe("AccordionTest.tsx", () => {
    expectLintErrors("AccordionTest.tsx", "@microsoft/fluentui-jsx-a11y/accordion-header-needs-labelling", 1);
    expectLintErrors("AccordionTest.tsx", "@microsoft/fluentui-jsx-a11y/accordion-item-needs-header-and-panel", 3);
});

describe("AvatarTest.tsx", () => {
    expectLintErrors("AvatarTest.tsx", "@microsoft/fluentui-jsx-a11y/avatar-needs-name", 5);
});

describe("BadgeTest.tsx", () => {
    expectLintErrors("BadgeTest.tsx", "@microsoft/fluentui-jsx-a11y/badge-needs-accessible-name", 14);
    expectLintErrors("BadgeTest.tsx", "@microsoft/fluentui-jsx-a11y/counter-badge-needs-count", 2);
});

describe("ButtonTests.tsx", () => {
    expectLintErrors("ButtonTests.tsx", "@microsoft/fluentui-jsx-a11y/no-empty-buttons", 3);
    expectLintErrors("ButtonTests.tsx", "@microsoft/fluentui-jsx-a11y/image-button-missing-aria", 4);
});

describe("CardTest.tsx", () => {
    expectLintErrors("CardTest.tsx", "@microsoft/fluentui-jsx-a11y/card-needs-accessible-name", 6);
});

describe("CheckboxTest.tsx", () => {
    expectLintErrors("CheckboxTest.tsx", "@microsoft/fluentui-jsx-a11y/checkbox-needs-labelling", 4);
});

describe("ComboboxTest.tsx", () => {
    expectLintErrors("ComboboxTest.tsx", "@microsoft/fluentui-jsx-a11y/combobox-needs-labelling", 4);
});

describe("DataGridTest.tsx", () => {
    expectLintErrors("DataGridTest.tsx", "@microsoft/fluentui-jsx-a11y/datagrid-needs-labelling", 2);
});

describe("DialogTest.tsx", () => {
    expectLintErrors("DialogTest.tsx", "@microsoft/fluentui-jsx-a11y/dialogbody-needs-title-content-and-actions", 8);
    expectLintErrors("DialogTest.tsx", "@microsoft/fluentui-jsx-a11y/dialogsurface-needs-aria", 10);
});

describe("DropdownTest.tsx", () => {
    expectLintErrors("DropdownTest.tsx", "@microsoft/fluentui-jsx-a11y/dropdown-needs-labelling", 1);
});

describe("ImageTest.tsx", () => {
    expectLintErrors("ImageTest.tsx", "@microsoft/fluentui-jsx-a11y/image-needs-alt", 9);
});

describe("InfoLabelTest.tsx", () => {
    expectLintErrors("InfoLabelTest.tsx", "@microsoft/fluentui-jsx-a11y/infolabel-needs-labelling", 7);
});

describe("InputTests.tsx", () => {
    expectLintErrors("InputTests.tsx", "@microsoft/fluentui-jsx-a11y/input-components-require-accessible-name", 4);
});

describe("LinkTest.tsx", () => {
    expectLintErrors("LinkTest.tsx", "@microsoft/fluentui-jsx-a11y/link-missing-labelling", 9);
});

describe("MenuTest.tsx", () => {
    expectLintErrors("MenuTest.tsx", "@microsoft/fluentui-jsx-a11y/menu-item-needs-labelling", 3);
});

describe("ProgressBarTest.tsx", () => {
    expectLintErrors("ProgressBarTest.tsx", "@microsoft/fluentui-jsx-a11y/progressbar-needs-labelling", 27);
});

describe("RadioButtonTest.tsx", () => {
    expectLintErrors("RadioButtonTest.tsx", "@microsoft/fluentui-jsx-a11y/radio-button-missing-label", 2);
});

describe("RadioGroup.tsx", () => {
    expectLintErrors("RadioGroup.tsx", "@microsoft/fluentui-jsx-a11y/radiogroup-missing-label", 1);
});

describe("RatingTest.tsx", () => {
    expectLintErrors("RatingTest.tsx", "@microsoft/fluentui-jsx-a11y/rating-needs-name", 12);
});

describe("SpinButtonTest.tsx", () => {
    expectLintErrors("SpinButtonTest.tsx", "@microsoft/fluentui-jsx-a11y/spin-button-needs-labelling", 30);
    expectLintErrors("SpinButtonTest.tsx", "@microsoft/fluentui-jsx-a11y/spin-button-unrecommended-labelling", 14);
});

describe("SpinnerTest.tsx", () => {
    expectLintErrors("SpinnerTest.tsx", "@microsoft/fluentui-jsx-a11y/spinner-needs-labelling", 36);
});

describe("SwatchPickerTest.tsx", () => {
    expectLintErrors("SwatchPickerTest.tsx", "@microsoft/fluentui-jsx-a11y/swatchpicker-needs-labelling", 0);
    expectLintErrors("SwatchPickerTest.tsx", "@microsoft/fluentui-jsx-a11y/colorswatch-needs-labelling", 10);
    expectLintErrors("SwatchPickerTest.tsx", "@microsoft/fluentui-jsx-a11y/emptyswatch-needs-labelling", 6);
    expectLintErrors("SwatchPickerTest.tsx", "@microsoft/fluentui-jsx-a11y/imageswatch-needs-labelling", 6);
});

describe("SwitchTest.tsx", () => {
    expectLintErrors("SwitchTest.tsx", "@microsoft/fluentui-jsx-a11y/switch-needs-labelling", 4);
});

describe("TableTest.tsx", () => {
    expectLintErrors("TableTest.tsx", "@microsoft/fluentui-jsx-a11y/table-needs-labelling", 3);
});

describe("TabListTest.tsx", () => {
    expectLintErrors("TabListTest.tsx", "@microsoft/fluentui-jsx-a11y/tablist-and-tabs-need-labelling", 4);
});

describe("TagTest.tsx", () => {
    expectLintErrors("TagTest.tsx", "@microsoft/fluentui-jsx-a11y/tag-needs-labelling", 0);
    expectLintErrors("TagTest.tsx", "@microsoft/fluentui-jsx-a11y/tag-dismissible-needs-labelling", 10);
});

describe("ToolbarTest.tsx", () => {
    expectLintErrors("ToolbarTest.tsx", "@microsoft/fluentui-jsx-a11y/toolbar-missing-aria", 1);
});

describe("TooltipTest.tsx", () => {
    expectLintErrors("TooltipTest.tsx", "@microsoft/fluentui-jsx-a11y/tooltip-not-recommended", 0);
});

describe("TreeTest.tsx", () => {
    expectLintErrors("TreeTest.tsx", "@microsoft/fluentui-jsx-a11y/tree-needs-labelling", 1);
});

describe("A11yPatternsTest.tsx", () => {
    expectLintErrors("A11yPatternsTest.tsx", "@microsoft/fluentui-jsx-a11y/avoid-using-aria-describedby-for-primary-labelling", 3);
    // no-empty-components rule may not be enabled
    expectLintErrors("A11yPatternsTest.tsx", "@microsoft/fluentui-jsx-a11y/no-empty-components", 0);
    expectLintErrors("A11yPatternsTest.tsx", "@microsoft/fluentui-jsx-a11y/prefer-aria-over-title-attribute", 1);
    // prefer-disabledfocusable-over-disabled rule may not be enabled
    expectLintErrors("A11yPatternsTest.tsx", "@microsoft/fluentui-jsx-a11y/prefer-disabledfocusable-over-disabled", 0);
});
