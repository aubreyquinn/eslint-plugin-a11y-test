import { ProgressBar, Field, Label } from "@fluentui/react-components";
import * as React from 'react';

const label = "my-label";
const myFunc = (): string => { return "test" };

export const ProgressBarTests = () => (
    <>
        {/* progressbar-needs-labelling tests */}
        <ProgressBar />
        <ProgressBar></ProgressBar>

        <ProgressBar value={0.5} />
        <ProgressBar value={0.75} />

        <ProgressBar aria-label="Loading progress" />
        <ProgressBar aria-label={label} />
        <ProgressBar aria-label={myFunc()} />

        <ProgressBar value={0.5} aria-label="50% complete" />
        <ProgressBar value={0.5} aria-label={label} />

        <span id="progress-label">Upload progress</span>
        <ProgressBar aria-labelledby="progress-label" />

        <Label id="prog-label">Download progress</Label>
        <ProgressBar aria-labelledby="prog-label" value={0.3} />

        <ProgressBar aria-describedby="progress-desc" />
        <p id="progress-desc">File upload in progress</p>

        <Field label="Loading...">
            <ProgressBar value={0.5} />
        </Field>

        <ProgressBar thickness="medium" />
        <ProgressBar thickness="medium" aria-label="Medium progress" />

        <ProgressBar thickness="large" value={0.8} />
        <ProgressBar thickness="large" value={0.8} aria-label="Large progress" />

        <ProgressBar shape="rounded" />
        <ProgressBar shape="rounded" aria-label="Rounded progress" />

        <ProgressBar shape="square" value={0.6} />
        <ProgressBar shape="square" value={0.6} aria-label="Square progress" />

        <ProgressBar color="brand" />
        <ProgressBar color="success" aria-label="Success progress" />
        <ProgressBar color="warning" aria-label="Warning progress" />
        <ProgressBar color="error" aria-label="Error progress" />

        {/* Indeterminate progress */}
        <ProgressBar />
        <ProgressBar aria-label="Loading..." />
    </>
);
