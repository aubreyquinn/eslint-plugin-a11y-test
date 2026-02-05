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
        {/* menu-button-needs-labelling tests */}
        <MenuButton />
        <MenuButton></MenuButton>

        <MenuButton>Open Menu</MenuButton>
        <MenuButton>{label}</MenuButton>
        <MenuButton>{myFunc()}</MenuButton>

        <MenuButton aria-label="Menu options" />
        <MenuButton aria-label={label} />
        <MenuButton aria-label={myFunc()} />

        <span id="menu-btn-label">Menu Label</span>
        <MenuButton aria-labelledby="menu-btn-label" />

        <MenuButton icon={<CalendarMonthRegular />} />
        <MenuButton icon={<CalendarMonthRegular />}>Calendar Menu</MenuButton>
        <MenuButton icon={<CalendarMonthRegular />} aria-label="Calendar menu" />

        {/* menu-item-needs-labelling tests */}
        <Menu>
            <MenuTrigger>
                <Button>Open Menu</Button>
            </MenuTrigger>
            <MenuPopover>
                <MenuList>
                    <MenuItem />
                    <MenuItem></MenuItem>
                    <MenuItem>Item with text</MenuItem>
                    <MenuItem>{label}</MenuItem>
                    <MenuItem>{myFunc()}</MenuItem>
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
                    <MenuItem icon={<CalendarMonthRegular />} />
                    <MenuItem icon={<CalendarMonthRegular />}>Calendar</MenuItem>
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
                    <MenuItemCheckbox name="options" value="opt1" />
                    <MenuItemCheckbox name="options" value="opt2">Option 2</MenuItemCheckbox>
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
                    <MenuItemRadio name="radio" value="r1" />
                    <MenuItemRadio name="radio" value="r2">Radio 2</MenuItemRadio>
                    <MenuItemRadio name="radio" value="r3" aria-label="Radio 3" />
                </MenuList>
            </MenuPopover>
        </Menu>

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
