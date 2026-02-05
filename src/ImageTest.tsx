import { Image } from "@fluentui/react-components";
import * as React from 'react';

const label = "my-label";
const myFunc = (): string => { return "test" };

export const ImageTests = () => (
    <>
        {/* image-needs-alt tests */}
        <Image src="https://example.com/image.jpg" />
        <Image src="https://example.com/image.jpg"></Image>

        <Image src="https://example.com/image.jpg" alt="" />
        <Image src="https://example.com/image.jpg" alt="A beautiful sunset" />
        <Image src="https://example.com/image.jpg" alt={label} />
        <Image src="https://example.com/image.jpg" alt={myFunc()} />

        <Image src="https://example.com/image.jpg" aria-label="Decorative image" />
        <Image src="https://example.com/image.jpg" aria-label={label} />

        <span id="image-label">Product photo</span>
        <Image src="https://example.com/image.jpg" aria-labelledby="image-label" />

        <Image src="https://example.com/image.jpg" aria-hidden="true" />
        <Image src="https://example.com/image.jpg" aria-hidden={true} />

        <Image src="https://example.com/image.jpg" role="presentation" />
        <Image src="https://example.com/image.jpg" role="none" />

        <Image src="https://example.com/image.jpg" fit="none" alt="Fitted image" />
        <Image src="https://example.com/image.jpg" fit="center" alt="Centered image" />
        <Image src="https://example.com/image.jpg" fit="contain" alt="Contained image" />
        <Image src="https://example.com/image.jpg" fit="cover" alt="Covered image" />

        <Image src="https://example.com/image.jpg" shape="circular" alt="Circular image" />
        <Image src="https://example.com/image.jpg" shape="rounded" alt="Rounded image" />
        <Image src="https://example.com/image.jpg" shape="square" alt="Square image" />

        <Image src="https://example.com/image.jpg" bordered alt="Bordered image" />
        <Image src="https://example.com/image.jpg" shadow alt="Shadow image" />
    </>
);
