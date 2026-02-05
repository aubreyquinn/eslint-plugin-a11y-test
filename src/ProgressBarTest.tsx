import { ProgressBar, Field, Label } from "@fluentui/react-components";
import * as React from 'react';

const label = "my-label";
const myFunc = (): string => { return "test" };

export const ProgressBarTests = () => (
    <>
        {/* ============================================
            progressbar-needs-labelling tests
            ============================================ */}
        
        {/* ❌ FAIL: ProgressBar without accessible name */}
        <ProgressBar />
        {/* ❌ FAIL: Empty ProgressBar */}
        <ProgressBar></ProgressBar>

        {/* ❌ FAIL: ProgressBar with value but no accessible name */}
        <ProgressBar value={0.5} />
        {/* ❌ FAIL: ProgressBar with value but no accessible name */}
        <ProgressBar value={0.75} />

        {/* ✅ PASS: ProgressBar with aria-label */}
        <ProgressBar aria-label="Loading progress" />
        {/* ✅ PASS: ProgressBar with aria-label from variable */}
        <ProgressBar aria-label={label} />
        {/* ✅ PASS: ProgressBar with aria-label from function */}
        <ProgressBar aria-label={myFunc()} />

        {/* ✅ PASS: ProgressBar with value and aria-label */}
        <ProgressBar value={0.5} aria-label="50% complete" />
        {/* ✅ PASS: ProgressBar with value and aria-label from variable */}
        <ProgressBar value={0.5} aria-label={label} />

        {/* ✅ PASS: ProgressBar with aria-labelledby */}
        <span id="progress-label">Upload progress</span>
        <ProgressBar aria-labelledby="progress-label" />

        {/* ✅ PASS: ProgressBar with Label and aria-labelledby */}
        <Label id="prog-label">Download progress</Label>
        <ProgressBar aria-labelledby="prog-label" value={0.3} />

        {/* ❌ FAIL: ProgressBar with aria-describedby only - needs primary label */}
        <ProgressBar aria-describedby="progress-desc" />
        <p id="progress-desc">File upload in progress</p>

        {/* ✅ PASS: ProgressBar inside Field with label */}
        <Field label="Loading...">
            <ProgressBar value={0.5} />
        </Field>

        {/* ❌ FAIL: ProgressBar with thickness but no accessible name */}
        <ProgressBar thickness="medium" />
        {/* ✅ PASS: ProgressBar with thickness and aria-label */}
        <ProgressBar thickness="medium" aria-label="Medium progress" />

        {/* ❌ FAIL: ProgressBar with thickness and value but no accessible name */}
        <ProgressBar thickness="large" value={0.8} />
        {/* ✅ PASS: ProgressBar with thickness, value, and aria-label */}
        <ProgressBar thickness="large" value={0.8} aria-label="Large progress" />

        {/* ❌ FAIL: ProgressBar with shape but no accessible name */}
        <ProgressBar shape="rounded" />
        {/* ✅ PASS: ProgressBar with shape and aria-label */}
        <ProgressBar shape="rounded" aria-label="Rounded progress" />

        {/* ❌ FAIL: ProgressBar with shape and value but no accessible name */}
        <ProgressBar shape="square" value={0.6} />
        {/* ✅ PASS: ProgressBar with shape, value, and aria-label */}
        <ProgressBar shape="square" value={0.6} aria-label="Square progress" />

        {/* ❌ FAIL: ProgressBar with color but no accessible name */}
        <ProgressBar color="brand" />
        {/* ✅ PASS: ProgressBar with color and aria-label */}
        <ProgressBar color="success" aria-label="Success progress" />
        {/* ✅ PASS: ProgressBar with color and aria-label */}
        <ProgressBar color="warning" aria-label="Warning progress" />
        {/* ✅ PASS: ProgressBar with color and aria-label */}
        <ProgressBar color="error" aria-label="Error progress" />

        {/* ❌ FAIL: Indeterminate ProgressBar without accessible name */}
        <ProgressBar />
        {/* ✅ PASS: Indeterminate ProgressBar with aria-label */}
        <ProgressBar aria-label="Loading..." />
    </>
);
