import { Spinner, Label } from "@fluentui/react-components";
import * as React from 'react';

const label = "my-label";
const myFunc = (): string => { return "test" };

export const SpinnerTests = () => (
    <>
        {/* spinner-needs-labelling tests */}
        <Spinner />
        <Spinner></Spinner>

        <Spinner aria-label="Loading" />
        <Spinner aria-label={label} />
        <Spinner aria-label={myFunc()} />

        <span id="spinner-label">Please wait...</span>
        <Spinner aria-labelledby="spinner-label" />

        <Label id="spin-lbl">Loading content</Label>
        <Spinner aria-labelledby="spin-lbl" />

        <Spinner label="Loading..." />
        <Spinner label={label} />
        <Spinner label={myFunc()} />

        <Spinner labelPosition="before" label="Loading" />
        <Spinner labelPosition="after" label="Loading" />
        <Spinner labelPosition="above" label="Loading" />
        <Spinner labelPosition="below" label="Loading" />

        <Spinner size="extra-tiny" />
        <Spinner size="extra-tiny" aria-label="Extra tiny spinner" />

        <Spinner size="tiny" />
        <Spinner size="tiny" aria-label="Tiny spinner" />

        <Spinner size="extra-small" />
        <Spinner size="extra-small" aria-label="Extra small spinner" />

        <Spinner size="small" />
        <Spinner size="small" aria-label="Small spinner" />

        <Spinner size="medium" />
        <Spinner size="medium" aria-label="Medium spinner" />

        <Spinner size="large" />
        <Spinner size="large" aria-label="Large spinner" />

        <Spinner size="extra-large" />
        <Spinner size="extra-large" aria-label="Extra large spinner" />

        <Spinner size="huge" />
        <Spinner size="huge" aria-label="Huge spinner" />

        <Spinner appearance="primary" />
        <Spinner appearance="primary" aria-label="Primary spinner" />

        <Spinner appearance="inverted" />
        <Spinner appearance="inverted" aria-label="Inverted spinner" />

        <Spinner delay={500} />
        <Spinner delay={500} aria-label="Delayed spinner" />
    </>
);
