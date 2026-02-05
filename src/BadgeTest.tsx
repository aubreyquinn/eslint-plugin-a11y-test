import { Badge, CounterBadge } from "@fluentui/react-components";
import * as React from 'react';

const label = "my-label";
const myFunc = (): string => { return "test" };

export const BadgeTests = () => (
    <>
        {/* badge-needs-accessible-name tests */}
        <Badge />
        <Badge></Badge>

        <Badge aria-label="New items" />
        <Badge aria-label={label} />
        <Badge aria-label={myFunc()} />

        <Badge role="status" aria-label="3 notifications" />

        <span id="badge-label">Important</span>
        <Badge aria-labelledby="badge-label" />

        <Badge appearance="filled" />
        <Badge appearance="filled" aria-label="Filled badge" />

        <Badge color="brand" />
        <Badge color="brand" aria-label="Brand badge" />

        <Badge size="small" />
        <Badge size="medium" aria-label="Medium badge" />
        <Badge size="large" aria-label="Large badge" />

        {/* counter-badge-needs-count tests */}
        <CounterBadge />
        <CounterBadge></CounterBadge>

        <CounterBadge count={5} />
        <CounterBadge count={0} />
        <CounterBadge count={100} />

        <CounterBadge count={5} aria-label="5 new messages" />
        <CounterBadge count={10} overflowCount={99} />

        <CounterBadge dot />
        <CounterBadge dot aria-label="Has notifications" />

        <CounterBadge showZero count={0} />
        <CounterBadge showZero={false} count={0} />
    </>
);
