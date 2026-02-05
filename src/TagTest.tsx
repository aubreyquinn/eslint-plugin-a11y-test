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
        {/* ============================================
            tag-needs-labelling tests
            ============================================ */}
        
        {/* ❌ FAIL: Tag without content or accessible name */}
        <Tag />
        {/* ❌ FAIL: Empty Tag */}
        <Tag></Tag>

        {/* ✅ PASS: Tag with text content */}
        <Tag>Tag text</Tag>
        {/* ✅ PASS: Tag with variable content */}
        <Tag>{label}</Tag>
        {/* ✅ PASS: Tag with function content */}
        <Tag>{myFunc()}</Tag>

        {/* ✅ PASS: Tag with aria-label */}
        <Tag aria-label="Category tag" />
        {/* ✅ PASS: Tag with aria-label from variable */}
        <Tag aria-label={label} />
        {/* ✅ PASS: Tag with aria-label from function */}
        <Tag aria-label={myFunc()} />

        {/* ✅ PASS: Tag with aria-labelledby */}
        <span id="tag-label">Important</span>
        <Tag aria-labelledby="tag-label" />

        {/* ❌ FAIL: Tag with icon only - no accessible name */}
        <Tag icon={<CalendarMonthRegular />} />
        {/* ✅ PASS: Tag with icon and text */}
        <Tag icon={<CalendarMonthRegular />}>Calendar</Tag>
        {/* ✅ PASS: Tag with icon and aria-label */}
        <Tag icon={<CalendarMonthRegular />} aria-label="Calendar tag" />

        {/* ✅ PASS: Tag with brand appearance and text */}
        <Tag appearance="brand">Brand Tag</Tag>
        {/* ✅ PASS: Tag with outline appearance and text */}
        <Tag appearance="outline">Outline Tag</Tag>
        {/* ✅ PASS: Tag with filled appearance and text */}
        <Tag appearance="filled">Filled Tag</Tag>

        {/* ✅ PASS: Tag with size and text */}
        <Tag size="small">Small Tag</Tag>
        <Tag size="medium">Medium Tag</Tag>
        <Tag size="extra-small">Extra Small Tag</Tag>

        {/* ✅ PASS: Tag with shape and text */}
        <Tag shape="circular">Circular Tag</Tag>
        <Tag shape="rounded">Rounded Tag</Tag>

        {/* ✅ PASS: Disabled Tag with text */}
        <Tag disabled>Disabled Tag</Tag>
        {/* ✅ PASS: Disabled Tag with aria-label */}
        <Tag disabled aria-label="Disabled tag" />

        {/* ============================================
            tag-dismissible-needs-labelling tests
            ============================================ */}

        {/* ❌ FAIL: Dismissible Tag without content or accessible name */}
        <Tag dismissible />
        {/* ❌ FAIL: Empty dismissible Tag */}
        <Tag dismissible></Tag>

        {/* ✅ PASS: Dismissible Tag with text */}
        <Tag dismissible>Dismissible Tag</Tag>
        {/* ✅ PASS: Dismissible Tag with variable content */}
        <Tag dismissible>{label}</Tag>
        {/* ✅ PASS: Dismissible Tag with function content */}
        <Tag dismissible>{myFunc()}</Tag>

        {/* ✅ PASS: Dismissible Tag with aria-label */}
        <Tag dismissible aria-label="Dismissible tag" />
        {/* ✅ PASS: Dismissible Tag with aria-label from variable */}
        <Tag dismissible aria-label={label} />
        {/* ✅ PASS: Dismissible Tag with aria-label from function */}
        <Tag dismissible aria-label={myFunc()} />

        {/* ✅ PASS: Dismissible Tag with custom dismiss icon and text */}
        <Tag dismissible dismissIcon={<DismissRegular />}>Custom dismiss</Tag>
        {/* ✅ PASS: Dismissible Tag with custom dismiss icon and aria-label */}
        <Tag dismissible dismissIcon={<DismissRegular />} aria-label="Custom dismiss tag" />

        {/* ============================================
            TagGroup tests
            ============================================ */}

        {/* ✅ PASS: TagGroup with labeled tags */}
        <TagGroup>
            <Tag>Tag 1</Tag>
            <Tag>Tag 2</Tag>
        </TagGroup>

        {/* ✅ PASS: TagGroup with aria-label */}
        <TagGroup aria-label="Category tags">
            <Tag>Tag 1</Tag>
            <Tag>Tag 2</Tag>
        </TagGroup>

        {/* ✅ PASS: Dismissible TagGroup with labeled tags */}
        <TagGroup dismissible>
            <Tag>Dismissible 1</Tag>
            <Tag>Dismissible 2</Tag>
        </TagGroup>

        {/* ✅ PASS: Dismissible TagGroup with aria-label */}
        <TagGroup dismissible aria-label="Dismissible tags">
            <Tag>Dismissible 1</Tag>
            <Tag>Dismissible 2</Tag>
        </TagGroup>

        {/* ============================================
            InteractionTag tests
            ============================================ */}

        {/* ❌ FAIL: InteractionTag with empty primary content */}
        <InteractionTag>
            <InteractionTagPrimary />
        </InteractionTag>

        {/* ✅ PASS: InteractionTag with text content */}
        <InteractionTag>
            <InteractionTagPrimary>Primary content</InteractionTagPrimary>
        </InteractionTag>

        {/* ✅ PASS: InteractionTag with aria-label */}
        <InteractionTag>
            <InteractionTagPrimary aria-label="Interactive tag" />
        </InteractionTag>

        {/* ✅ PASS: InteractionTag with secondary action */}
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
