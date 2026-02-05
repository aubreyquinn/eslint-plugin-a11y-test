import { InfoLabel, Label } from "@fluentui/react-components";
import * as React from 'react';

const label = "my-label";
const myFunc = (): string => { return "test" };

export const InfoLabelTests = () => (
    <>
        {/* infolabel-needs-labelling tests */}
        <InfoLabel />
        <InfoLabel></InfoLabel>

        <InfoLabel info="This is helpful information" />
        <InfoLabel info={label} />
        <InfoLabel info={myFunc()} />

        <InfoLabel info="Info text">Label text</InfoLabel>
        <InfoLabel info="Info text">{label}</InfoLabel>
        <InfoLabel info="Info text">{myFunc()}</InfoLabel>

        <InfoLabel info="Info" aria-label="Information label" />
        <InfoLabel info="Info" aria-label={label} />

        <span id="info-label">Information</span>
        <InfoLabel info="Details" aria-labelledby="info-label" />

        <InfoLabel info="Info" size="small" />
        <InfoLabel info="Info" size="medium">Medium label</InfoLabel>
        <InfoLabel info="Info" size="large">Large label</InfoLabel>

        <InfoLabel info="Required field" required />
        <InfoLabel info="Required field" required>Required Label</InfoLabel>

        <InfoLabel info="Weight info" weight="regular">Regular</InfoLabel>
        <InfoLabel info="Weight info" weight="semibold">Semibold</InfoLabel>
    </>
);
