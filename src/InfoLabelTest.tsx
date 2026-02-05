import { InfoLabel, Label } from "@fluentui/react-components";
import * as React from 'react';

const label = "my-label";
const myFunc = (): string => { return "test" };

export const InfoLabelTests = () => (
    <>
        {/* ============================================
            infolabel-needs-labelling tests
            ============================================ */}
        
        {/* ❌ FAIL: InfoLabel without any content or info */}
        <InfoLabel />
        {/* ❌ FAIL: Empty InfoLabel */}
        <InfoLabel></InfoLabel>

        {/* ❌ FAIL: InfoLabel with info but no label text */}
        <InfoLabel info="This is helpful information" />
        {/* ❌ FAIL: InfoLabel with info from variable but no label text */}
        <InfoLabel info={label} />
        {/* ❌ FAIL: InfoLabel with info from function but no label text */}
        <InfoLabel info={myFunc()} />

        {/* ✅ PASS: InfoLabel with info and text content */}
        <InfoLabel info="Info text">Label text</InfoLabel>
        {/* ✅ PASS: InfoLabel with info and text from variable */}
        <InfoLabel info="Info text">{label}</InfoLabel>
        {/* ✅ PASS: InfoLabel with info and text from function */}
        <InfoLabel info="Info text">{myFunc()}</InfoLabel>

        {/* ❌ FAIL: InfoLabel with info and aria-label but no visible text */}
        <InfoLabel info="Info" aria-label="Information label" />
        {/* ❌ FAIL: InfoLabel with aria-label from variable */}
        <InfoLabel info="Info" aria-label={label} />

        {/* ✅ PASS: InfoLabel with aria-labelledby */}
        <span id="info-label">Information</span>
        <InfoLabel info="Details" aria-labelledby="info-label" />

        {/* ❌ FAIL: InfoLabel with size but no label text */}
        <InfoLabel info="Info" size="small" />
        {/* ✅ PASS: InfoLabel with size and label text */}
        <InfoLabel info="Info" size="medium">Medium label</InfoLabel>
        {/* ✅ PASS: InfoLabel with size and label text */}
        <InfoLabel info="Info" size="large">Large label</InfoLabel>

        {/* ❌ FAIL: Required InfoLabel without label text */}
        <InfoLabel info="Required field" required />
        {/* ✅ PASS: Required InfoLabel with label text */}
        <InfoLabel info="Required field" required>Required Label</InfoLabel>

        {/* ✅ PASS: InfoLabel with weight and label text */}
        <InfoLabel info="Weight info" weight="regular">Regular</InfoLabel>
        {/* ✅ PASS: InfoLabel with weight and label text */}
        <InfoLabel info="Weight info" weight="semibold">Semibold</InfoLabel>
    </>
);
