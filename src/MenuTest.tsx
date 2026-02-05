import {
    Menu,
    MenuTrigger,
    MenuPopover,
    MenuList,
    MenuItem,
    MenuItemCheckbox,
    MenuItemRadio,
    MenuDivider,
    MenuGroup,
    MenuGroupHeader,
    MenuButton,
    Button,
} from "@fluentui/react-components";
import { CalendarMonthRegular } from "@fluentui/react-icons";
import * as React from 'react';

const label = "my-label";
const myFunc = (): string => { return "test" };

export const MenuTests = () => (
    <>
        {/* ============================================
            menu-button-needs-labelling tests
            ============================================ */}
        
        {/* ❌ FAIL: MenuButton without accessible name */}
        <MenuButton />
        {/* ❌ FAIL: Empty MenuButton */}
        <MenuButton></MenuButton>

        {/* ✅ PASS: MenuButton with text content */}
        <MenuButton>Open Menu</MenuButton>
        {/* ✅ PASS: MenuButton with text from variable */}
        <MenuButton>{label}</MenuButton>
        {/* ✅ PASS: MenuButton with text from function */}
        <MenuButton>{myFunc()}</MenuButton>

        {/* ✅ PASS: MenuButton with aria-label */}
        <MenuButton aria-label="Menu options" />
        {/* ✅ PASS: MenuButton with aria-label from variable */}
        <MenuButton aria-label={label} />
        {/* ✅ PASS: MenuButton with aria-label from function */}
        <MenuButton aria-label={myFunc()} />

        {/* ✅ PASS: MenuButton with aria-labelledby */}
        <span id="menu-btn-label">Menu Label</span>
        <MenuButton aria-labelledby="menu-btn-label" />

        {/* ❌ FAIL: Icon-only MenuButton without accessible name */}
        <MenuButton icon={<CalendarMonthRegular />} />
        {/* ✅ PASS: MenuButton with icon and text */}
        <MenuButton icon={<CalendarMonthRegular />}>Calendar Menu</MenuButton>
        {/* ✅ PASS: Icon-only MenuButton with aria-label */}
        <MenuButton icon={<CalendarMonthRegular />} aria-label="Calendar menu" />

        {/* ============================================
            menu-item-needs-labelling tests
            ============================================ */}
        
        <Menu>
            <MenuTrigger>
                <Button>Open Menu</Button>
            </MenuTrigger>
            <MenuPopover>
                <MenuList>
                    {/* ❌ FAIL: MenuItem without accessible name */}
                    <MenuItem />
                    {/* ❌ FAIL: Empty MenuItem */}
                    <MenuItem></MenuItem>
                    {/* ✅ PASS: MenuItem with text content */}
                    <MenuItem>Item with text</MenuItem>
                    {/* ✅ PASS: MenuItem with text from variable */}
                    <MenuItem>{label}</MenuItem>
                    {/* ✅ PASS: MenuItem with text from function */}
                    <MenuItem>{myFunc()}</MenuItem>
                    {/* ✅ PASS: MenuItem with aria-label */}
                    <MenuItem aria-label="Labeled item" />
                </MenuList>
            </MenuPopover>
        </Menu>

        <Menu>
            <MenuTrigger>
                <Button>Menu with icons</Button>
            </MenuTrigger>
            <MenuPopover>
                <MenuList>
                    {/* ❌ FAIL: Icon-only MenuItem without accessible name */}
                    <MenuItem icon={<CalendarMonthRegular />} />
                    {/* ✅ PASS: MenuItem with icon and text */}
                    <MenuItem icon={<CalendarMonthRegular />}>Calendar</MenuItem>
                    {/* ✅ PASS: Icon-only MenuItem with aria-label */}
                    <MenuItem icon={<CalendarMonthRegular />} aria-label="Calendar option" />
                </MenuList>
            </MenuPopover>
        </Menu>

        <Menu>
            <MenuTrigger>
                <Button>Checkbox Menu</Button>
            </MenuTrigger>
            <MenuPopover>
                <MenuList>
                    {/* ❌ FAIL: MenuItemCheckbox without accessible name */}
                    <MenuItemCheckbox name="options" value="opt1" />
                    {/* ✅ PASS: MenuItemCheckbox with text */}
                    <MenuItemCheckbox name="options" value="opt2">Option 2</MenuItemCheckbox>
                    {/* ✅ PASS: MenuItemCheckbox with aria-label */}
                    <MenuItemCheckbox name="options" value="opt3" aria-label="Option 3" />
                </MenuList>
            </MenuPopover>
        </Menu>

        <Menu>
            <MenuTrigger>
                <Button>Radio Menu</Button>
            </MenuTrigger>
            <MenuPopover>
                <MenuList>
                    {/* ❌ FAIL: MenuItemRadio without accessible name */}
                    <MenuItemRadio name="radio" value="r1" />
                    {/* ✅ PASS: MenuItemRadio with text */}
                    <MenuItemRadio name="radio" value="r2">Radio 2</MenuItemRadio>
                    {/* ✅ PASS: MenuItemRadio with aria-label */}
                    <MenuItemRadio name="radio" value="r3" aria-label="Radio 3" />
                </MenuList>
            </MenuPopover>
        </Menu>

        {/* ✅ PASS: Complete menu with groups and labeled items */}
        <Menu>
            <MenuTrigger>
                <Button>Grouped Menu</Button>
            </MenuTrigger>
            <MenuPopover>
                <MenuList>
                    <MenuGroup>
                        <MenuGroupHeader>Group Header</MenuGroupHeader>
                        <MenuItem>Group Item 1</MenuItem>
                        <MenuItem>Group Item 2</MenuItem>
                    </MenuGroup>
                    <MenuDivider />
                    <MenuItem>Other Item</MenuItem>
                </MenuList>
            </MenuPopover>
        </Menu>
    </>
);
