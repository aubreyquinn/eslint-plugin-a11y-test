import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbDivider,
    BreadcrumbButton,
  } from "@fluentui/react-components";
import { CalendarMonthRegular} from "@fluentui/react-icons";
import * as React from 'react';
const label = "myLabel"; const myFunc = (): string => { return "test"};

export const ButtonTests = () => (
    <>
        {/* ============================================
            breadcrumb-needs-labelling tests
            ============================================ */}
        
        {/* ❌ FAIL: Breadcrumb without accessible name */}
        <Breadcrumb></Breadcrumb>

        {/* ✅ PASS: Breadcrumb with aria-labelledby */}
        <p id={label}></p>
        <Breadcrumb aria-labelledby={label}>
            <BreadcrumbItem>
                <BreadcrumbButton href={label}>Item 1</BreadcrumbButton>
            </BreadcrumbItem>
        </Breadcrumb>

        {/* ✅ PASS: Breadcrumb with aria-label */}
        <Breadcrumb aria-label="Breadcrumb default example">
            <BreadcrumbItem>
                <BreadcrumbButton href={label}>Item 1</BreadcrumbButton>
            </BreadcrumbItem>
        </Breadcrumb>

        {/* ❌ FAIL: Breadcrumb without accessible name */}
        <Breadcrumb>
            <BreadcrumbItem>
                <BreadcrumbButton href={label}>Item 1</BreadcrumbButton>
            </BreadcrumbItem>
        </Breadcrumb>
    </>      
);