import { Avatar } from "@fluentui/react-components";
import * as React from 'react';

const label = "my-label";
const myFunc = (): string => { return "test" };

export const AvatarTests = () => (
    <>
        {/* ============================================
            avatar-needs-name tests
            ============================================ */}
        
        {/* ❌ FAIL: Avatar without any accessible name */}
        <Avatar />
        {/* ❌ FAIL: Empty Avatar without accessible name */}
        <Avatar></Avatar>

        {/* ✅ PASS: Avatar with name prop */}
        <Avatar name="John Doe" />
        {/* ✅ PASS: Avatar with name from variable */}
        <Avatar name={label} />
        {/* ✅ PASS: Avatar with name from function */}
        <Avatar name={myFunc()} />

        {/* ✅ PASS: Avatar with aria-label */}
        <Avatar aria-label="User avatar" />
        {/* ✅ PASS: Avatar with aria-label from variable */}
        <Avatar aria-label={label} />
        {/* ✅ PASS: Avatar with aria-label from function */}
        <Avatar aria-label={myFunc()} />

        {/* ✅ PASS: Avatar with aria-labelledby */}
        <Avatar aria-labelledby="avatar-label" />
        <span id="avatar-label">User Profile</span>

        {/* ❌ FAIL: Avatar with image but no name */}
        <Avatar image={{ src: "https://example.com/image.jpg" }} />
        {/* ✅ PASS: Avatar with image and name */}
        <Avatar image={{ src: "https://example.com/image.jpg" }} name="John" />
        {/* ✅ PASS: Avatar with image and aria-label */}
        <Avatar image={{ src: "https://example.com/image.jpg" }} aria-label="Profile" />

        {/* ❌ FAIL: Avatar with initials but no name - initials alone don't provide accessible name */}
        <Avatar initials="JD" />
        {/* ✅ PASS: Avatar with initials and name */}
        <Avatar initials="JD" name="John Doe" />

        {/* ❌ FAIL: Avatar with icon but no accessible name */}
        <Avatar icon={<span>Icon</span>} />
        {/* ✅ PASS: Avatar with icon and aria-label */}
        <Avatar icon={<span>Icon</span>} aria-label="User icon" />
    </>
);
