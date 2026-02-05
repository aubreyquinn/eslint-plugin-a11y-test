import { TabList, Tab, Label } from "@fluentui/react-components";
import { CalendarMonthRegular } from "@fluentui/react-icons";
import * as React from 'react';

const label = "my-label";
const myFunc = (): string => { return "test" };

export const TabListTests = () => (
    <>
        {/* ============================================
            tablist-and-tabs-need-labelling tests
            ============================================ */}
        
        {/* ❌ FAIL: TabList without accessible name */}
        <TabList>
            <Tab value="tab1">Tab 1</Tab>
            <Tab value="tab2">Tab 2</Tab>
        </TabList>

        {/* ✅ PASS: TabList with aria-label */}
        <TabList aria-label="Navigation tabs">
            <Tab value="tab1">Tab 1</Tab>
            <Tab value="tab2">Tab 2</Tab>
        </TabList>

        {/* ✅ PASS: TabList with aria-label from variable */}
        <TabList aria-label={label}>
            <Tab value="tab1">Tab 1</Tab>
        </TabList>

        {/* ✅ PASS: TabList with aria-label from function */}
        <TabList aria-label={myFunc()}>
            <Tab value="tab1">Tab 1</Tab>
        </TabList>

        {/* ✅ PASS: TabList with aria-labelledby */}
        <span id="tablist-label">Content tabs</span>
        <TabList aria-labelledby="tablist-label">
            <Tab value="tab1">Tab 1</Tab>
            <Tab value="tab2">Tab 2</Tab>
        </TabList>

        {/* ============================================
            Tab labelling tests
            ============================================ */}

        {/* ❌ FAIL: Tab without content or accessible name */}
        {/* ❌ FAIL: Tab with empty content */}
        {/* ✅ PASS: Tab with text content */}
        {/* ✅ PASS: Tab with variable content */}
        {/* ✅ PASS: Tab with function content */}
        <TabList aria-label="Tabs">
            <Tab value="tab1" />
            <Tab value="tab2"></Tab>
            <Tab value="tab3">Tab with text</Tab>
            <Tab value="tab4">{label}</Tab>
            <Tab value="tab5">{myFunc()}</Tab>
        </TabList>

        {/* ✅ PASS: Tabs with aria-label */}
        <TabList aria-label="Tabs with aria-label">
            <Tab value="tab1" aria-label="First tab" />
            <Tab value="tab2" aria-label={label} />
            <Tab value="tab3" aria-label={myFunc()} />
        </TabList>

        {/* ✅ PASS: Tab with aria-labelledby */}
        <span id="tab-label">Tab Label</span>
        <TabList aria-label="Tabs with aria-labelledby">
            <Tab value="tab1" aria-labelledby="tab-label" />
        </TabList>

        {/* ❌ FAIL: Tab with icon only - no accessible name */}
        {/* ✅ PASS: Tab with icon and text */}
        {/* ✅ PASS: Tab with icon and aria-label */}
        <TabList aria-label="Tabs with icons">
            <Tab value="tab1" icon={<CalendarMonthRegular />} />
            <Tab value="tab2" icon={<CalendarMonthRegular />}>Calendar</Tab>
            <Tab value="tab3" icon={<CalendarMonthRegular />} aria-label="Calendar tab" />
        </TabList>

        {/* ✅ PASS: Vertical TabList with aria-label */}
        <TabList vertical aria-label="Vertical tabs">
            <Tab value="tab1">Vertical Tab 1</Tab>
            <Tab value="tab2">Vertical Tab 2</Tab>
        </TabList>

        {/* ✅ PASS: Small TabList with aria-label */}
        <TabList size="small" aria-label="Small tabs">
            <Tab value="tab1">Small Tab</Tab>
        </TabList>

        {/* ✅ PASS: Medium TabList with aria-label */}
        <TabList size="medium" aria-label="Medium tabs">
            <Tab value="tab1">Medium Tab</Tab>
        </TabList>

        {/* ✅ PASS: Large TabList with aria-label */}
        <TabList size="large" aria-label="Large tabs">
            <Tab value="tab1">Large Tab</Tab>
        </TabList>

        {/* ✅ PASS: Subtle appearance TabList with aria-label */}
        <TabList appearance="subtle" aria-label="Subtle tabs">
            <Tab value="tab1">Subtle Tab</Tab>
        </TabList>

        {/* ✅ PASS: Transparent appearance TabList with aria-label */}
        <TabList appearance="transparent" aria-label="Transparent tabs">
            <Tab value="tab1">Transparent Tab</Tab>
        </TabList>

        {/* ✅ PASS: Disabled TabList with aria-label */}
        <TabList disabled aria-label="Disabled tabs">
            <Tab value="tab1">Disabled Tab 1</Tab>
            <Tab value="tab2">Disabled Tab 2</Tab>
        </TabList>

        {/* ✅ PASS: TabList with individually disabled tabs */}
        <TabList aria-label="Tabs with disabled items">
            <Tab value="tab1" disabled>Disabled Tab</Tab>
            <Tab value="tab2">Enabled Tab</Tab>
        </TabList>
    </>
);
