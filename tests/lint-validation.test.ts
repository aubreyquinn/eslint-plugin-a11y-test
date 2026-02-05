// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ESLint } from "eslint";
import * as path from "path";

interface ExpectedErrors {
    file: string;
    ruleId: string;
    expectedCount: number;
}

// Define expected lint errors for each test file
const expectedErrors: ExpectedErrors[] = [
    // AccordionTest.tsx
    { file: "AccordionTest.tsx", ruleId: "@microsoft/fluentui-jsx-a11y/accordion-header-needs-labelling", expectedCount: 2 },
    { file: "AccordionTest.tsx", ruleId: "@microsoft/fluentui-jsx-a11y/accordion-item-needs-header-and-panel", expectedCount: 3 },

    // AvatarTest.tsx
    { file: "AvatarTest.tsx", ruleId: "@microsoft/fluentui-jsx-a11y/avatar-needs-name", expectedCount: 4 },

    // BadgeTest.tsx
    { file: "BadgeTest.tsx", ruleId: "@microsoft/fluentui-jsx-a11y/badge-needs-accessible-name", expectedCount: 5 },
    { file: "BadgeTest.tsx", ruleId: "@microsoft/fluentui-jsx-a11y/counter-badge-needs-count", expectedCount: 2 },

    // ButtonTests.tsx
    { file: "ButtonTests.tsx", ruleId: "@microsoft/fluentui-jsx-a11y/no-empty-buttons", expectedCount: 2 },
    { file: "ButtonTests.tsx", ruleId: "@microsoft/fluentui-jsx-a11y/image-button-missing-aria", expectedCount: 2 },

    // CardTest.tsx
    { file: "CardTest.tsx", ruleId: "@microsoft/fluentui-jsx-a11y/card-needs-accessible-name", expectedCount: 3 },

    // CheckboxTest.tsx
    { file: "CheckboxTest.tsx", ruleId: "@microsoft/fluentui-jsx-a11y/checkbox-needs-labelling", expectedCount: 2 },

    // ComboboxTest.tsx
    { file: "ComboboxTest.tsx", ruleId: "@microsoft/fluentui-jsx-a11y/combobox-needs-labelling", expectedCount: 2 },

    // DataGridTest.tsx
    { file: "DataGridTest.tsx", ruleId: "@microsoft/fluentui-jsx-a11y/datagrid-needs-labelling", expectedCount: 2 },

    // DialogTest.tsx
    { file: "DialogTest.tsx", ruleId: "@microsoft/fluentui-jsx-a11y/dialogbody-needs-title-content-and-actions", expectedCount: 4 },
    { file: "DialogTest.tsx", ruleId: "@microsoft/fluentui-jsx-a11y/dialogsurface-needs-aria", expectedCount: 1 },

    // DropdownTest.tsx
    { file: "DropdownTest.tsx", ruleId: "@microsoft/fluentui-jsx-a11y/dropdown-needs-labelling", expectedCount: 1 },

    // ImageTest.tsx
    { file: "ImageTest.tsx", ruleId: "@microsoft/fluentui-jsx-a11y/image-needs-alt", expectedCount: 2 },

    // InfoLabelTest.tsx
    { file: "InfoLabelTest.tsx", ruleId: "@microsoft/fluentui-jsx-a11y/infolabel-needs-labelling", expectedCount: 2 },

    // InputTests.tsx
    { file: "InputTests.tsx", ruleId: "@microsoft/fluentui-jsx-a11y/input-components-require-accessible-name", expectedCount: 2 },

    // LinkTest.tsx
    { file: "LinkTest.tsx", ruleId: "@microsoft/fluentui-jsx-a11y/link-missing-labelling", expectedCount: 1 },

    // MenuTest.tsx
    { file: "MenuTest.tsx", ruleId: "@microsoft/fluentui-jsx-a11y/menu-item-needs-labelling", expectedCount: 5 },

    // ProgressBarTest.tsx
    { file: "ProgressBarTest.tsx", ruleId: "@microsoft/fluentui-jsx-a11y/progressbar-needs-labelling", expectedCount: 8 },

    // RadioButtonTest.tsx
    { file: "RadioButtonTest.tsx", ruleId: "@microsoft/fluentui-jsx-a11y/radio-button-missing-label", expectedCount: 1 },

    // RadioGroup.tsx
    { file: "RadioGroup.tsx", ruleId: "@microsoft/fluentui-jsx-a11y/radiogroup-missing-label", expectedCount: 1 },

    // RatingTest.tsx
    { file: "RatingTest.tsx", ruleId: "@microsoft/fluentui-jsx-a11y/rating-needs-name", expectedCount: 8 },

    // SpinButtonTest.tsx
    { file: "SpinButtonTest.tsx", ruleId: "@microsoft/fluentui-jsx-a11y/spin-button-needs-labelling", expectedCount: 10 },
    { file: "SpinButtonTest.tsx", ruleId: "@microsoft/fluentui-jsx-a11y/spin-button-unrecommended-labelling", expectedCount: 2 },

    // SpinnerTest.tsx
    { file: "SpinnerTest.tsx", ruleId: "@microsoft/fluentui-jsx-a11y/spinner-needs-labelling", expectedCount: 10 },

    // SwatchPicker.tsx (existing file for Switch tests)
    { file: "SwatchPicker.tsx", ruleId: "@microsoft/fluentui-jsx-a11y/switch-needs-labelling", expectedCount: 2 },

    // SwatchPickerTest.tsx
    { file: "SwatchPickerTest.tsx", ruleId: "@microsoft/fluentui-jsx-a11y/swatchpicker-needs-labelling", expectedCount: 2 },
    { file: "SwatchPickerTest.tsx", ruleId: "@microsoft/fluentui-jsx-a11y/colorswatch-needs-labelling", expectedCount: 8 },
    { file: "SwatchPickerTest.tsx", ruleId: "@microsoft/fluentui-jsx-a11y/emptyswatch-needs-labelling", expectedCount: 5 },
    { file: "SwatchPickerTest.tsx", ruleId: "@microsoft/fluentui-jsx-a11y/imageswatch-needs-labelling", expectedCount: 5 },

    // SwitchTest.tsx
    { file: "SwitchTest.tsx", ruleId: "@microsoft/fluentui-jsx-a11y/switch-needs-labelling", expectedCount: 2 },

    // TableTest.tsx
    { file: "TableTest.tsx", ruleId: "@microsoft/fluentui-jsx-a11y/table-needs-labelling", expectedCount: 3 },

    // TabListTest.tsx
    { file: "TabListTest.tsx", ruleId: "@microsoft/fluentui-jsx-a11y/tablist-and-tabs-need-labelling", expectedCount: 6 },

    // TagTest.tsx
    { file: "TagTest.tsx", ruleId: "@microsoft/fluentui-jsx-a11y/tag-needs-labelling", expectedCount: 4 },
    { file: "TagTest.tsx", ruleId: "@microsoft/fluentui-jsx-a11y/tag-dismissible-needs-labelling", expectedCount: 2 },

    // ToolbarTest.tsx
    { file: "ToolbarTest.tsx", ruleId: "@microsoft/fluentui-jsx-a11y/toolbar-missing-aria", expectedCount: 1 },

    // TooltipTest.tsx
    { file: "TooltipTest.tsx", ruleId: "@microsoft/fluentui-jsx-a11y/tooltip-not-recommended", expectedCount: 2 },

    // TreeTest.tsx
    { file: "TreeTest.tsx", ruleId: "@microsoft/fluentui-jsx-a11y/tree-needs-labelling", expectedCount: 1 },

    // A11yPatternsTest.tsx
    { file: "A11yPatternsTest.tsx", ruleId: "@microsoft/fluentui-jsx-a11y/avoid-using-aria-describedby-for-primary-labelling", expectedCount: 2 },
    { file: "A11yPatternsTest.tsx", ruleId: "@microsoft/fluentui-jsx-a11y/no-empty-components", expectedCount: 4 },
    { file: "A11yPatternsTest.tsx", ruleId: "@microsoft/fluentui-jsx-a11y/prefer-aria-over-title-attribute", expectedCount: 4 },
    { file: "A11yPatternsTest.tsx", ruleId: "@microsoft/fluentui-jsx-a11y/prefer-disabledfocusable-over-disabled", expectedCount: 4 },
];

async function runLintTests(): Promise<void> {
    const eslint = new ESLint({
        useEslintrc: true,
        cwd: path.resolve(__dirname, ".."),
    });

    const srcDir = path.resolve(__dirname, "../src");

    console.log("Running ESLint validation tests...\n");

    // Group expected errors by file
    const errorsByFile = new Map<string, ExpectedErrors[]>();
    for (const expected of expectedErrors) {
        const existing = errorsByFile.get(expected.file) || [];
        existing.push(expected);
        errorsByFile.set(expected.file, existing);
    }

    let passed = 0;
    let failed = 0;

    for (const [fileName, expectations] of errorsByFile) {
        const filePath = path.join(srcDir, fileName);

        try {
            const results = await eslint.lintFiles([filePath]);
            const fileResult = results[0];

            if (!fileResult) {
                console.log(`❌ SKIP: ${fileName} - File not found`);
                failed++;
                continue;
            }

            // Count errors by rule
            const actualErrorsByRule = new Map<string, number>();
            for (const message of fileResult.messages) {
                if (message.ruleId) {
                    const count = actualErrorsByRule.get(message.ruleId) || 0;
                    actualErrorsByRule.set(message.ruleId, count + 1);
                }
            }

            // Check each expectation
            for (const expectation of expectations) {
                const actualCount = actualErrorsByRule.get(expectation.ruleId) || 0;

                if (actualCount === expectation.expectedCount) {
                    console.log(`✅ PASS: ${fileName} - ${expectation.ruleId}: ${actualCount} errors (expected ${expectation.expectedCount})`);
                    passed++;
                } else {
                    console.log(`❌ FAIL: ${fileName} - ${expectation.ruleId}: ${actualCount} errors (expected ${expectation.expectedCount})`);
                    failed++;
                }
            }
        } catch (error) {
            console.log(`❌ ERROR: ${fileName} - ${error}`);
            failed++;
        }
    }

    console.log(`\n${"=".repeat(50)}`);
    console.log(`Results: ${passed} passed, ${failed} failed`);
    console.log(`${"=".repeat(50)}`);

    if (failed > 0) {
        process.exit(1);
    }
}

// Run if executed directly
runLintTests().catch(console.error);
