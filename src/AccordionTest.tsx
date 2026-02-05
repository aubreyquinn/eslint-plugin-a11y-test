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
        {/* accordion-header-needs-labelling tests */}
        <Accordion>
            <AccordionItem value="1">
                <AccordionHeader></AccordionHeader>
                <AccordionPanel>Content</AccordionPanel>
            </AccordionItem>
        </Accordion>

        <Accordion>
            <AccordionItem value="1">
                <AccordionHeader>Header Text</AccordionHeader>
                <AccordionPanel>Content</AccordionPanel>
            </AccordionItem>
        </Accordion>

        <Accordion>
            <AccordionItem value="1">
                <AccordionHeader icon={<CalendarMonthRegular />}></AccordionHeader>
                <AccordionPanel>Content</AccordionPanel>
            </AccordionItem>
        </Accordion>

        <Accordion>
            <AccordionItem value="1">
                <AccordionHeader icon={<CalendarMonthRegular />} aria-label="Calendar header"></AccordionHeader>
                <AccordionPanel>Content</AccordionPanel>
            </AccordionItem>
        </Accordion>

        <Accordion>
            <AccordionItem value="1">
                <AccordionHeader icon={<CalendarMonthRegular />}>{label}</AccordionHeader>
                <AccordionPanel>Content</AccordionPanel>
            </AccordionItem>
        </Accordion>

        {/* accordion-item-needs-header-and-panel tests */}
        <Accordion>
            <AccordionItem value="1">
            </AccordionItem>
        </Accordion>

        <Accordion>
            <AccordionItem value="1">
                <AccordionHeader>Header Only</AccordionHeader>
            </AccordionItem>
        </Accordion>

        <Accordion>
            <AccordionItem value="1">
                <AccordionPanel>Panel Only</AccordionPanel>
            </AccordionItem>
        </Accordion>

        <Accordion>
            <AccordionItem value="1">
                <AccordionHeader>Complete Header</AccordionHeader>
                <AccordionPanel>Complete Panel</AccordionPanel>
            </AccordionItem>
        </Accordion>
    </>
);
