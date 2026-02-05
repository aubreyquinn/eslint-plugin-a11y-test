import { Image } from "@fluentui/react-components";
import * as React from 'react';

const label = "my-label";
const myFunc = (): string => { return "test" };

export const ImageTests = () => (
    <>
        {/* ============================================
            image-needs-alt tests
            ============================================ */}
        
        {/* ❌ FAIL: Image without alt text */}
        <Image src="https://example.com/image.jpg" />
        {/* ❌ FAIL: Empty Image without alt text */}
        <Image src="https://example.com/image.jpg"></Image>

        {/* ✅ PASS: Image with empty alt (decorative image) */}
        <Image src="https://example.com/image.jpg" alt="" />
        {/* ✅ PASS: Image with descriptive alt text */}
        <Image src="https://example.com/image.jpg" alt="A beautiful sunset" />
        {/* ✅ PASS: Image with alt from variable */}
        <Image src="https://example.com/image.jpg" alt={label} />
        {/* ✅ PASS: Image with alt from function */}
        <Image src="https://example.com/image.jpg" alt={myFunc()} />

        {/* ✅ PASS: Image with aria-label */}
        <Image src="https://example.com/image.jpg" aria-label="Decorative image" />
        {/* ✅ PASS: Image with aria-label from variable */}
        <Image src="https://example.com/image.jpg" aria-label={label} />

        {/* ✅ PASS: Image with aria-labelledby */}
        <span id="image-label">Product photo</span>
        <Image src="https://example.com/image.jpg" aria-labelledby="image-label" />

        {/* ✅ PASS: Image with aria-hidden (decorative) */}
        <Image src="https://example.com/image.jpg" aria-hidden="true" />
        {/* ✅ PASS: Image with aria-hidden boolean */}
        <Image src="https://example.com/image.jpg" aria-hidden={true} />

        {/* ✅ PASS: Image with role="presentation" (decorative) */}
        <Image src="https://example.com/image.jpg" role="presentation" />
        {/* ✅ PASS: Image with role="none" (decorative) */}
        <Image src="https://example.com/image.jpg" role="none" />

        {/* ✅ PASS: Image with fit prop and alt */}
        <Image src="https://example.com/image.jpg" fit="none" alt="Fitted image" />
        <Image src="https://example.com/image.jpg" fit="center" alt="Centered image" />
        <Image src="https://example.com/image.jpg" fit="contain" alt="Contained image" />
        <Image src="https://example.com/image.jpg" fit="cover" alt="Covered image" />

        {/* ✅ PASS: Image with shape prop and alt */}
        <Image src="https://example.com/image.jpg" shape="circular" alt="Circular image" />
        <Image src="https://example.com/image.jpg" shape="rounded" alt="Rounded image" />
        <Image src="https://example.com/image.jpg" shape="square" alt="Square image" />

        {/* ✅ PASS: Image with styling props and alt */}
        <Image src="https://example.com/image.jpg" bordered alt="Bordered image" />
        <Image src="https://example.com/image.jpg" shadow alt="Shadow image" />
    </>
);
