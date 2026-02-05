import {
    Card,
    CardHeader,
    CardPreview,
    CardFooter,
} from "@fluentui/react-components";
import * as React from 'react';

const label = "my-label";
const myFunc = (): string => { return "test" };

export const CardTests = () => (
    <>
        {/* ============================================
            card-needs-accessible-name tests
            ============================================ */}
        
        {/* ❌ FAIL: Card without accessible name */}
        <Card />
        {/* ❌ FAIL: Empty Card without accessible name */}
        <Card></Card>

        {/* ✅ PASS: Card with aria-label */}
        <Card aria-label="Product card" />
        {/* ✅ PASS: Card with aria-label from variable */}
        <Card aria-label={label} />
        {/* ✅ PASS: Card with aria-label from function */}
        <Card aria-label={myFunc()} />

        {/* ✅ PASS: Card with aria-labelledby */}
        <span id="card-label">User Profile Card</span>
        <Card aria-labelledby="card-label" />

        {/* ❌ FAIL: Card with aria-roledescription but no aria-label */}
        <Card aria-roledescription="Product card">
            <CardHeader header="Product Name" />
        </Card>

        {/* ❌ FAIL: Card with content but no accessible name on Card itself */}
        <Card>
            <CardHeader header="Product Name" />
            <CardPreview>
                <img src="preview.jpg" alt="Preview" />
            </CardPreview>
        </Card>

        {/* ❌ FAIL: Card with focusMode="off" but no accessible name */}
        <Card focusMode="off" />
        {/* ✅ PASS: Card with focusMode and aria-label */}
        <Card focusMode="no-tab" aria-label="No tab card" />
        {/* ✅ PASS: Card with focusMode and aria-label */}
        <Card focusMode="tab-exit" aria-label="Tab exit card" />
        {/* ✅ PASS: Card with focusMode and aria-label */}
        <Card focusMode="tab-only" aria-label="Tab only card" />

        {/* ❌ FAIL: Selected Card without accessible name */}
        <Card selected />
        {/* ✅ PASS: Selected Card with aria-label */}
        <Card selected aria-label="Selected card" />

        {/* ❌ FAIL: Clickable Card without accessible name */}
        <Card onClick={() => {}}>
            <CardHeader header="Clickable Card" />
        </Card>

        {/* ✅ PASS: Clickable Card with aria-label */}
        <Card onClick={() => {}} aria-label="Clickable card">
            <CardHeader header="Clickable Card" />
            <CardFooter>Footer content</CardFooter>
        </Card>
    </>
);
