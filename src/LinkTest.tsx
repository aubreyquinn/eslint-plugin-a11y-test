import { Link, Image, Label } from "@fluentui/react-components";
import * as React from 'react';
const label = "my-label"; const myFunc = (): string => { return "test"};
export const ButtonTests = () => (
    <>
        {/* ============================================
            link-missing-labelling tests
            ============================================ */}
        
        {/* ❌ FAIL: Link without href or content */}
        <Link />
        {/* ❌ FAIL: Link with href but no text content */}
        <Link href="https://msn.com" />
        {/* ✅ PASS: Link with href and function content */}
        <Link href="https://msn.com">{myFunc()}</Link>
        {/* ✅ PASS: Link with href and text content */}
        <Link href="https://msn.com">msn</Link>
        {/* ✅ PASS: Link with text content (no href) */}
        <Link>msn</Link>

        {/* ============================================
            Link with Image child tests
            ============================================ */}

        {/* ❌ FAIL: Link with Image without alt or aria-label */}
        <Link href="https://msn.com">
            <Image src="https://msn.com" />
        </Link>

        {/* ✅ PASS: Link with Image with alt text */}
        <Link href="https://msn.com">
            <Image src="https://msn.com" alt="abc"/>
        </Link>

        {/* ❌ FAIL: Link with Image with empty alt */}
        <Link href="https://msn.com">
            <Image src="https://msn.com" alt=""/>
        </Link>

        {/* ✅ PASS: Link with Image with aria-label */}
        <Link href="https://msn.com">
            <Image src="https://msn.com" aria-label="abc"/>
        </Link>
                
        {/* ❌ FAIL: Image aria-hidden means no accessible name */}
        <Link href="https://msn.com">
            <Image src="https://msn.com" aria-label="abc" aria-hidden="true" />
        </Link>

        {/* ✅ PASS: Link with aria-label wrapping unlabeled Image */}
        <Link href="https://msn.com" aria-label="abc">
            <Image src="https://msn.com" />
        </Link>

        {/* ❌ FAIL: Link with title attribute only (prefer aria-label) - Image has no alt */}
        <Link href="https://msn.com" title="abc">
            <Image src="https://msn.com" />
        </Link>

        {/* ❌ FAIL: Image title is not sufficient for accessibility */}
        <Link href="https://msn.com">
            <Image src="https://msn.com" title="abc" />
        </Link>

        {/* ✅ PASS: Image with aria-labelledby referencing Label */}
        <Label id="my-label">abc</Label>
        <Link href="https://msn.com">
            <Image src="https://msn.com" aria-labelledby="my-label" />
        </Link>

        {/* ✅ PASS: Link with aria-labelledby */}
        <Label id="my-label">abc</Label>
        <Link href="https://msn.com" aria-labelledby="my-label">
            <Image src="https://msn.com" />
        </Link>

        {/* ❌ FAIL: Link with aria-describedby only - needs primary label */}
        <Label id="my-label">abc</Label>
        <Link href="https://msn.com" aria-describedby="my-label">
            <Image src="https://msn.com" />
        </Link>
        
        {/* ✅ PASS: Link with aria-label from function */}
        <Link href="https://msn.com" aria-label={myFunc()}>
            <Image src="https://msn.com" />
        </Link>

        {/* ✅ PASS: Link with hidden Image and text content */}
        <Link href="https://msn.com">
            <Image src="https://msn.com" aria-hidden="true" />Hello
        </Link>

        {/* ✅ PASS: Link with text content surrounding hidden Image */}
        <Link href="https://msn.com">
            Hello
            <Image src="https://msn.com" aria-hidden="true" />
            Hello
        </Link>
    </>      
);