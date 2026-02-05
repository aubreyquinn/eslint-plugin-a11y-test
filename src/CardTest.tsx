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
        {/* card-needs-accessible-name tests */}
        <Card />
        <Card></Card>

        <Card aria-label="Product card" />
        <Card aria-label={label} />
        <Card aria-label={myFunc()} />

        <span id="card-label">User Profile Card</span>
        <Card aria-labelledby="card-label" />

        <Card aria-roledescription="Product card">
            <CardHeader header="Product Name" />
        </Card>

        <Card>
            <CardHeader header="Product Name" />
            <CardPreview>
                <img src="preview.jpg" alt="Preview" />
            </CardPreview>
        </Card>

        <Card focusMode="off" />
        <Card focusMode="no-tab" aria-label="No tab card" />
        <Card focusMode="tab-exit" aria-label="Tab exit card" />
        <Card focusMode="tab-only" aria-label="Tab only card" />

        <Card selected />
        <Card selected aria-label="Selected card" />

        <Card onClick={() => {}}>
            <CardHeader header="Clickable Card" />
        </Card>

        <Card onClick={() => {}} aria-label="Clickable card">
            <CardHeader header="Clickable Card" />
            <CardFooter>Footer content</CardFooter>
        </Card>
    </>
);
