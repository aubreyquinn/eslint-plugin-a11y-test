import { TabList, Tab, Label } from "@fluentui/react-components";
import { CalendarMonthRegular } from "@fluentui/react-icons";
import * as React from 'react';

const label = "my-label";
const myFunc = (): string => { return "test" };

export const TabListTests = () => (
    <>
        {/* tablist-and-tabs-need-labelling tests */}
        <TabList>
            <Tab value="tab1">Tab 1</Tab>
            <Tab value="tab2">Tab 2</Tab>
        </TabList>

        <TabList aria-label="Navigation tabs">
            <Tab value="tab1">Tab 1</Tab>
            <Tab value="tab2">Tab 2</Tab>
        </TabList>

        <TabList aria-label={label}>
            <Tab value="tab1">Tab 1</Tab>
        </TabList>

        <TabList aria-label={myFunc()}>
            <Tab value="tab1">Tab 1</Tab>
        </TabList>

        <span id="tablist-label">Content tabs</span>
        <TabList aria-labelledby="tablist-label">
            <Tab value="tab1">Tab 1</Tab>
            <Tab value="tab2">Tab 2</Tab>
        </TabList>

        {/* Tab tests */}
        <TabList aria-label="Tabs">
            <Tab value="tab1" />
            <Tab value="tab2"></Tab>
            <Tab value="tab3">Tab with text</Tab>
            <Tab value="tab4">{label}</Tab>
            <Tab value="tab5">{myFunc()}</Tab>
        </TabList>

        <TabList aria-label="Tabs with aria-label">
            <Tab value="tab1" aria-label="First tab" />
            <Tab value="tab2" aria-label={label} />
            <Tab value="tab3" aria-label={myFunc()} />
        </TabList>

        <span id="tab-label">Tab Label</span>
        <TabList aria-label="Tabs with aria-labelledby">
            <Tab value="tab1" aria-labelledby="tab-label" />
        </TabList>

        <TabList aria-label="Tabs with icons">
            <Tab value="tab1" icon={<CalendarMonthRegular />} />
            <Tab value="tab2" icon={<CalendarMonthRegular />}>Calendar</Tab>
            <Tab value="tab3" icon={<CalendarMonthRegular />} aria-label="Calendar tab" />
        </TabList>

        <TabList vertical aria-label="Vertical tabs">
            <Tab value="tab1">Vertical Tab 1</Tab>
            <Tab value="tab2">Vertical Tab 2</Tab>
        </TabList>

        <TabList size="small" aria-label="Small tabs">
            <Tab value="tab1">Small Tab</Tab>
        </TabList>

        <TabList size="medium" aria-label="Medium tabs">
            <Tab value="tab1">Medium Tab</Tab>
        </TabList>

        <TabList size="large" aria-label="Large tabs">
            <Tab value="tab1">Large Tab</Tab>
        </TabList>

        <TabList appearance="subtle" aria-label="Subtle tabs">
            <Tab value="tab1">Subtle Tab</Tab>
        </TabList>

        <TabList appearance="transparent" aria-label="Transparent tabs">
            <Tab value="tab1">Transparent Tab</Tab>
        </TabList>

        <TabList disabled aria-label="Disabled tabs">
            <Tab value="tab1">Disabled Tab 1</Tab>
            <Tab value="tab2">Disabled Tab 2</Tab>
        </TabList>

        <TabList aria-label="Tabs with disabled items">
            <Tab value="tab1" disabled>Disabled Tab</Tab>
            <Tab value="tab2">Enabled Tab</Tab>
        </TabList>
    </>
);
