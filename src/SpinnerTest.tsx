import { Spinner, Label } from "@fluentui/react-components";
import * as React from 'react';

const label = "my-label";
const myFunc = (): string => { return "test" };

export const SpinnerTests = () => (
    <>
        {/* ============================================
            spinner-needs-labelling tests
            ============================================ */}
        
        {/* ❌ FAIL: Spinner without accessible name */}
        <Spinner />
        {/* ❌ FAIL: Empty Spinner */}
        <Spinner></Spinner>

        {/* ✅ PASS: Spinner with aria-label */}
        <Spinner aria-label="Loading" />
        {/* ✅ PASS: Spinner with aria-label from variable */}
        <Spinner aria-label={label} />
        {/* ✅ PASS: Spinner with aria-label from function */}
        <Spinner aria-label={myFunc()} />

        {/* ✅ PASS: Spinner with aria-labelledby */}
        <span id="spinner-label">Please wait...</span>
        <Spinner aria-labelledby="spinner-label" />

        {/* ✅ PASS: Spinner with Label and aria-labelledby */}
        <Label id="spin-lbl">Loading content</Label>
        <Spinner aria-labelledby="spin-lbl" />

        {/* ✅ PASS: Spinner with label prop */}
        <Spinner label="Loading..." />
        {/* ✅ PASS: Spinner with label from variable */}
        <Spinner label={label} />
        {/* ✅ PASS: Spinner with label from function */}
        <Spinner label={myFunc()} />

        {/* ✅ PASS: Spinner with label and labelPosition */}
        <Spinner labelPosition="before" label="Loading" />
        <Spinner labelPosition="after" label="Loading" />
        <Spinner labelPosition="above" label="Loading" />
        <Spinner labelPosition="below" label="Loading" />

        {/* ❌ FAIL: Spinner with size but no accessible name */}
        <Spinner size="extra-tiny" />
        {/* ✅ PASS: Spinner with size and aria-label */}
        <Spinner size="extra-tiny" aria-label="Extra tiny spinner" />

        {/* ❌ FAIL: Spinner with size but no accessible name */}
        <Spinner size="tiny" />
        {/* ✅ PASS: Spinner with size and aria-label */}
        <Spinner size="tiny" aria-label="Tiny spinner" />

        {/* ❌ FAIL: Spinner with size but no accessible name */}
        <Spinner size="extra-small" />
        {/* ✅ PASS: Spinner with size and aria-label */}
        <Spinner size="extra-small" aria-label="Extra small spinner" />

        {/* ❌ FAIL: Spinner with size but no accessible name */}
        <Spinner size="small" />
        {/* ✅ PASS: Spinner with size and aria-label */}
        <Spinner size="small" aria-label="Small spinner" />

        {/* ❌ FAIL: Spinner with size but no accessible name */}
        <Spinner size="medium" />
        {/* ✅ PASS: Spinner with size and aria-label */}
        <Spinner size="medium" aria-label="Medium spinner" />

        {/* ❌ FAIL: Spinner with size but no accessible name */}
        <Spinner size="large" />
        {/* ✅ PASS: Spinner with size and aria-label */}
        <Spinner size="large" aria-label="Large spinner" />

        {/* ❌ FAIL: Spinner with size but no accessible name */}
        <Spinner size="extra-large" />
        {/* ✅ PASS: Spinner with size and aria-label */}
        <Spinner size="extra-large" aria-label="Extra large spinner" />

        {/* ❌ FAIL: Spinner with size but no accessible name */}
        <Spinner size="huge" />
        {/* ✅ PASS: Spinner with size and aria-label */}
        <Spinner size="huge" aria-label="Huge spinner" />

        {/* ❌ FAIL: Spinner with appearance but no accessible name */}
        <Spinner appearance="primary" />
        {/* ✅ PASS: Spinner with appearance and aria-label */}
        <Spinner appearance="primary" aria-label="Primary spinner" />

        {/* ❌ FAIL: Spinner with appearance but no accessible name */}
        <Spinner appearance="inverted" />
        {/* ✅ PASS: Spinner with appearance and aria-label */}
        <Spinner appearance="inverted" aria-label="Inverted spinner" />

        {/* ❌ FAIL: Spinner with delay but no accessible name */}
        <Spinner delay={500} />
        {/* ✅ PASS: Spinner with delay and aria-label */}
        <Spinner delay={500} aria-label="Delayed spinner" />
    </>
);
