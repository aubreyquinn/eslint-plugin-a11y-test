import {
    Accordion,
    AccordionHeader,
    AccordionItem,
    AccordionPanel,
} from "@fluentui/react-components";
import { CalendarMonthRegular } from "@fluentui/react-icons";
import * as React from 'react';

const label = "my-label";
const myFunc = (): string => { return "test" };

export const AccordionTests = () => (
    <>
        {/* ============================================
            accordion-header-needs-labelling tests
            ============================================ */}
        
        {/* ❌ FAIL: Empty AccordionHeader has no accessible name */}
        <Accordion>
            <AccordionItem value="1">
                <AccordionHeader></AccordionHeader>
                <AccordionPanel>Content</AccordionPanel>
            </AccordionItem>
        </Accordion>

        {/* ✅ PASS: AccordionHeader has text content */}
        <Accordion>
            <AccordionItem value="1">
                <AccordionHeader>Header Text</AccordionHeader>
                <AccordionPanel>Content</AccordionPanel>
            </AccordionItem>
        </Accordion>

        {/* ❌ FAIL: Icon-only AccordionHeader without aria-label */}
        <Accordion>
            <AccordionItem value="1">
                <AccordionHeader icon={<CalendarMonthRegular />}></AccordionHeader>
                <AccordionPanel>Content</AccordionPanel>
            </AccordionItem>
        </Accordion>

        {/* ✅ PASS: Icon-only AccordionHeader with aria-label */}
        <Accordion>
            <AccordionItem value="1">
                <AccordionHeader icon={<CalendarMonthRegular />} aria-label="Calendar header"></AccordionHeader>
                <AccordionPanel>Content</AccordionPanel>
            </AccordionItem>
        </Accordion>

        {/* ✅ PASS: AccordionHeader with icon and text content */}
        <Accordion>
            <AccordionItem value="1">
                <AccordionHeader icon={<CalendarMonthRegular />}>{label}</AccordionHeader>
                <AccordionPanel>Content</AccordionPanel>
            </AccordionItem>
        </Accordion>

        {/* ============================================
            accordion-item-needs-header-and-panel tests
            ============================================ */}
        
        {/* ❌ FAIL: Empty AccordionItem - missing both header and panel */}
        <Accordion>
            <AccordionItem value="1">
            </AccordionItem>
        </Accordion>

        {/* ❌ FAIL: AccordionItem with header only - missing panel */}
        <Accordion>
            <AccordionItem value="1">
                <AccordionHeader>Header Only</AccordionHeader>
            </AccordionItem>
        </Accordion>

        {/* ❌ FAIL: AccordionItem with panel only - missing header */}
        <Accordion>
            <AccordionItem value="1">
                <AccordionPanel>Panel Only</AccordionPanel>
            </AccordionItem>
        </Accordion>

        {/* ✅ PASS: Complete AccordionItem with both header and panel */}
        <Accordion>
            <AccordionItem value="1">
                <AccordionHeader>Complete Header</AccordionHeader>
                <AccordionPanel>Complete Panel</AccordionPanel>
            </AccordionItem>
        </Accordion>
    </>
);
