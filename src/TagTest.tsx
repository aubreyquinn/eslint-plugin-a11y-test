import {
    Tag,
    TagGroup,
    InteractionTag,
    InteractionTagPrimary,
    InteractionTagSecondary,
} from "@fluentui/react-components";
import { CalendarMonthRegular, DismissRegular } from "@fluentui/react-icons";
import * as React from 'react';

const label = "my-label";
const myFunc = (): string => { return "test" };

export const TagTests = () => (
    <>
        {/* tag-needs-labelling tests */}
        <Tag />
        <Tag></Tag>

        <Tag>Tag text</Tag>
        <Tag>{label}</Tag>
        <Tag>{myFunc()}</Tag>

        <Tag aria-label="Category tag" />
        <Tag aria-label={label} />
        <Tag aria-label={myFunc()} />

        <span id="tag-label">Important</span>
        <Tag aria-labelledby="tag-label" />

        <Tag icon={<CalendarMonthRegular />} />
        <Tag icon={<CalendarMonthRegular />}>Calendar</Tag>
        <Tag icon={<CalendarMonthRegular />} aria-label="Calendar tag" />

        <Tag appearance="brand">Brand Tag</Tag>
        <Tag appearance="outline">Outline Tag</Tag>
        <Tag appearance="filled">Filled Tag</Tag>

        <Tag size="small">Small Tag</Tag>
        <Tag size="medium">Medium Tag</Tag>
        <Tag size="extra-small">Extra Small Tag</Tag>

        <Tag shape="circular">Circular Tag</Tag>
        <Tag shape="rounded">Rounded Tag</Tag>

        <Tag disabled>Disabled Tag</Tag>
        <Tag disabled aria-label="Disabled tag" />

        {/* tag-dismissible-needs-labelling tests */}
        <Tag dismissible />
        <Tag dismissible></Tag>

        <Tag dismissible>Dismissible Tag</Tag>
        <Tag dismissible>{label}</Tag>
        <Tag dismissible>{myFunc()}</Tag>

        <Tag dismissible aria-label="Dismissible tag" />
        <Tag dismissible aria-label={label} />
        <Tag dismissible aria-label={myFunc()} />

        <Tag dismissible dismissIcon={<DismissRegular />}>Custom dismiss</Tag>
        <Tag dismissible dismissIcon={<DismissRegular />} aria-label="Custom dismiss tag" />

        {/* TagGroup tests */}
        <TagGroup>
            <Tag>Tag 1</Tag>
            <Tag>Tag 2</Tag>
        </TagGroup>

        <TagGroup aria-label="Category tags">
            <Tag>Tag 1</Tag>
            <Tag>Tag 2</Tag>
        </TagGroup>

        <TagGroup dismissible>
            <Tag>Dismissible 1</Tag>
            <Tag>Dismissible 2</Tag>
        </TagGroup>

        <TagGroup dismissible aria-label="Dismissible tags">
            <Tag>Dismissible 1</Tag>
            <Tag>Dismissible 2</Tag>
        </TagGroup>

        {/* InteractionTag tests */}
        <InteractionTag>
            <InteractionTagPrimary />
        </InteractionTag>

        <InteractionTag>
            <InteractionTagPrimary>Primary content</InteractionTagPrimary>
        </InteractionTag>

        <InteractionTag>
            <InteractionTagPrimary aria-label="Interactive tag" />
        </InteractionTag>

        <InteractionTag>
            <InteractionTagPrimary icon={<CalendarMonthRegular />}>Calendar</InteractionTagPrimary>
            <InteractionTagSecondary aria-label="Remove" />
        </InteractionTag>

        <InteractionTag>
            <InteractionTagPrimary>Removable tag</InteractionTagPrimary>
            <InteractionTagSecondary aria-label="Remove tag" />
        </InteractionTag>
    </>
);
