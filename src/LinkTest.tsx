import { Link, Image, Label } from "@fluentui/react-components";
import * as React from 'react';
const label = "my-label"; const myFunc = (): string => { return "test"};
export const ButtonTests = () => (
    <>
        <Link />
        <Link href="https://msn.com" />
        <Link href="https://msn.com">{myFunc()}</Link>
        <Link href="https://msn.com">msn</Link>
        <Link>msn</Link>

        <Link href="https://msn.com">
            <Image src="https://msn.com" />
        </Link>

        <Link href="https://msn.com">
            <Image src="https://msn.com" alt="abc"/>
        </Link>

        <Link href="https://msn.com">
            <Image src="https://msn.com" alt=""/>
        </Link>

        <Link href="https://msn.com">
            <Image src="https://msn.com" aria-label="abc"/>
        </Link>
                
        <Link href="https://msn.com">
            <Image src="https://msn.com" aria-label="abc" aria-hidden="true" />
        </Link>

        <Link href="https://msn.com" aria-label="abc">
            <Image src="https://msn.com" />
        </Link>

        <Link href="https://msn.com" title="abc">
            <Image src="https://msn.com" />
        </Link>

        <Link href="https://msn.com">
            <Image src="https://msn.com" title="abc" />
        </Link>

        <Label id="my-label">abc</Label>
        <Link href="https://msn.com">
            <Image src="https://msn.com" aria-labelledby="my-label" />
        </Link>

        <Label id="my-label">abc</Label>
        <Link href="https://msn.com" aria-labelledby="my-label">
            <Image src="https://msn.com" />
        </Link>

        <Label id="my-label">abc</Label>
        <Link href="https://msn.com" aria-describedby="my-label">
            <Image src="https://msn.com" />
        </Link>
        
        <Link href="https://msn.com" aria-label={myFunc()}>
            <Image src="https://msn.com" />
        </Link>

        <Link href="https://msn.com">
            <Image src="https://msn.com" aria-hidden="true" />Hello
        </Link>

        <Link href="https://msn.com">
            Hello
            <Image src="https://msn.com" aria-hidden="true" />
            Hello
        </Link>
    </>      
);