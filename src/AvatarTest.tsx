import { Avatar } from "@fluentui/react-components";
import * as React from 'react';

const label = "my-label";
const myFunc = (): string => { return "test" };

export const AvatarTests = () => (
    <>
        {/* avatar-needs-name tests */}
        <Avatar />
        <Avatar></Avatar>

        <Avatar name="John Doe" />
        <Avatar name={label} />
        <Avatar name={myFunc()} />

        <Avatar aria-label="User avatar" />
        <Avatar aria-label={label} />
        <Avatar aria-label={myFunc()} />

        <Avatar aria-labelledby="avatar-label" />
        <span id="avatar-label">User Profile</span>

        <Avatar image={{ src: "https://example.com/image.jpg" }} />
        <Avatar image={{ src: "https://example.com/image.jpg" }} name="John" />
        <Avatar image={{ src: "https://example.com/image.jpg" }} aria-label="Profile" />

        <Avatar initials="JD" />
        <Avatar initials="JD" name="John Doe" />

        <Avatar icon={<span>Icon</span>} />
        <Avatar icon={<span>Icon</span>} aria-label="User icon" />
    </>
);
