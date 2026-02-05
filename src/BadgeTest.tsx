import { Badge, CounterBadge } from "@fluentui/react-components";
import * as React from 'react';

const label = "my-label";
const myFunc = (): string => { return "test" };

export const BadgeTests = () => (
    <>
        {/* ============================================
            badge-needs-accessible-name tests
            ============================================ */}
        
        {/* ❌ FAIL: Badge without accessible name */}
        <Badge />
        {/* ❌ FAIL: Empty Badge without accessible name */}
        <Badge></Badge>

        {/* ✅ PASS: Badge with aria-label */}
        <Badge aria-label="New items" />
        {/* ✅ PASS: Badge with aria-label from variable */}
        <Badge aria-label={label} />
        {/* ✅ PASS: Badge with aria-label from function */}
        <Badge aria-label={myFunc()} />

        {/* ✅ PASS: Badge with role and aria-label */}
        <Badge role="status" aria-label="3 notifications" />

        {/* ✅ PASS: Badge with aria-labelledby */}
        <span id="badge-label">Important</span>
        <Badge aria-labelledby="badge-label" />

        {/* ❌ FAIL: Badge with appearance but no accessible name */}
        <Badge appearance="filled" />
        {/* ✅ PASS: Badge with appearance and aria-label */}
        <Badge appearance="filled" aria-label="Filled badge" />

        {/* ❌ FAIL: Badge with color but no accessible name */}
        <Badge color="brand" />
        {/* ✅ PASS: Badge with color and aria-label */}
        <Badge color="brand" aria-label="Brand badge" />

        {/* ❌ FAIL: Badge with size but no accessible name */}
        <Badge size="small" />
        {/* ✅ PASS: Badge with size and aria-label */}
        <Badge size="medium" aria-label="Medium badge" />
        {/* ✅ PASS: Badge with size and aria-label */}
        <Badge size="large" aria-label="Large badge" />

        {/* ============================================
            counter-badge-needs-count tests
            ============================================ */}
        
        {/* ❌ FAIL: CounterBadge without count */}
        <CounterBadge />
        {/* ❌ FAIL: Empty CounterBadge without count */}
        <CounterBadge></CounterBadge>

        {/* ✅ PASS: CounterBadge with count */}
        <CounterBadge count={5} />
        {/* ✅ PASS: CounterBadge with zero count */}
        <CounterBadge count={0} />
        {/* ✅ PASS: CounterBadge with large count */}
        <CounterBadge count={100} />

        {/* ✅ PASS: CounterBadge with count and aria-label */}
        <CounterBadge count={5} aria-label="5 new messages" />
        {/* ✅ PASS: CounterBadge with overflow */}
        <CounterBadge count={10} overflowCount={99} />

        {/* ✅ PASS: CounterBadge with dot (doesn't need count) */}
        <CounterBadge dot />
        {/* ✅ PASS: CounterBadge with dot and aria-label */}
        <CounterBadge dot aria-label="Has notifications" />

        {/* ✅ PASS: CounterBadge with showZero */}
        <CounterBadge showZero count={0} />
        {/* ✅ PASS: CounterBadge with showZero false */}
        <CounterBadge showZero={false} count={0} />
    </>
);
