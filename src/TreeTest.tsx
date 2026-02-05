import {
    Tree,
    TreeItem,
    TreeItemLayout,
    TreeItemPersonaLayout,
} from "@fluentui/react-components";
import { CalendarMonthRegular, FolderRegular, DocumentRegular } from "@fluentui/react-icons";
import * as React from 'react';

const label = "my-label";
const myFunc = (): string => { return "test" };

export const TreeTests = () => (
    <>
        {/* ============================================
            tree-needs-labelling tests
            ============================================ */}
        
        {/* ❌ FAIL: Tree without accessible name */}
        <Tree>
            <TreeItem itemType="branch">
                <TreeItemLayout>Item 1</TreeItemLayout>
                <Tree>
                    <TreeItem itemType="leaf">
                        <TreeItemLayout>Nested Item</TreeItemLayout>
                    </TreeItem>
                </Tree>
            </TreeItem>
        </Tree>

        {/* ✅ PASS: Tree with aria-label */}
        <Tree aria-label="File explorer">
            <TreeItem itemType="branch">
                <TreeItemLayout>Folder</TreeItemLayout>
                <Tree>
                    <TreeItem itemType="leaf">
                        <TreeItemLayout>File</TreeItemLayout>
                    </TreeItem>
                </Tree>
            </TreeItem>
        </Tree>

        {/* ✅ PASS: Tree with aria-label from variable */}
        <Tree aria-label={label}>
            <TreeItem itemType="leaf">
                <TreeItemLayout>Item</TreeItemLayout>
            </TreeItem>
        </Tree>

        {/* ✅ PASS: Tree with aria-label from function */}
        <Tree aria-label={myFunc()}>
            <TreeItem itemType="leaf">
                <TreeItemLayout>Item</TreeItemLayout>
            </TreeItem>
        </Tree>

        {/* ✅ PASS: Tree with aria-labelledby */}
        <span id="tree-label">Navigation tree</span>
        <Tree aria-labelledby="tree-label">
            <TreeItem itemType="leaf">
                <TreeItemLayout>Item</TreeItemLayout>
            </TreeItem>
        </Tree>

        {/* ✅ PASS: Tree with icons and aria-label */}
        <Tree aria-label="Tree with icons">
            <TreeItem itemType="branch">
                <TreeItemLayout iconBefore={<FolderRegular />}>Folder</TreeItemLayout>
                <Tree>
                    <TreeItem itemType="leaf">
                        <TreeItemLayout iconBefore={<DocumentRegular />}>Document</TreeItemLayout>
                    </TreeItem>
                </Tree>
            </TreeItem>
        </Tree>

        {/* ✅ PASS: Tree with multiple icon positions and aria-label */}
        <Tree aria-label="Tree with actions">
            <TreeItem itemType="leaf">
                <TreeItemLayout
                    iconBefore={<FolderRegular />}
                    iconAfter={<CalendarMonthRegular />}
                >
                    Item with icons
                </TreeItemLayout>
            </TreeItem>
        </Tree>

        {/* ============================================
            TreeItemLayout tests
            ============================================ */}

        {/* ✅ PASS: Tree with various TreeItemLayout content types */}
        <Tree aria-label="Layout variations">
            {/* TreeItemLayout without content */}
            <TreeItem itemType="leaf">
                <TreeItemLayout />
            </TreeItem>
            {/* TreeItemLayout with empty content */}
            <TreeItem itemType="leaf">
                <TreeItemLayout></TreeItemLayout>
            </TreeItem>
            {/* TreeItemLayout with text content */}
            <TreeItem itemType="leaf">
                <TreeItemLayout>Text content</TreeItemLayout>
            </TreeItem>
            {/* TreeItemLayout with variable content */}
            <TreeItem itemType="leaf">
                <TreeItemLayout>{label}</TreeItemLayout>
            </TreeItem>
            {/* TreeItemLayout with function content */}
            <TreeItem itemType="leaf">
                <TreeItemLayout>{myFunc()}</TreeItemLayout>
            </TreeItem>
        </Tree>

        {/* ============================================
            TreeItemPersonaLayout tests
            ============================================ */}

        {/* ✅ PASS: Tree with persona layouts and aria-label */}
        <Tree aria-label="Persona tree">
            {/* Persona with name */}
            <TreeItem itemType="leaf">
                <TreeItemPersonaLayout>Person Name</TreeItemPersonaLayout>
            </TreeItem>
            {/* Persona with media icon */}
            <TreeItem itemType="leaf">
                <TreeItemPersonaLayout
                    media={<CalendarMonthRegular />}
                >
                    Person with media
                </TreeItemPersonaLayout>
            </TreeItem>
            {/* Persona with description */}
            <TreeItem itemType="leaf">
                <TreeItemPersonaLayout
                    description="Description text"
                >
                    Person with description
                </TreeItemPersonaLayout>
            </TreeItem>
        </Tree>

        {/* ============================================
            Tree size and appearance variants
            ============================================ */}

        {/* ✅ PASS: Small tree with aria-label */}
        <Tree size="small" aria-label="Small tree">
            <TreeItem itemType="leaf">
                <TreeItemLayout>Small item</TreeItemLayout>
            </TreeItem>
        </Tree>

        {/* ✅ PASS: Medium tree with aria-label */}
        <Tree size="medium" aria-label="Medium tree">
            <TreeItem itemType="leaf">
                <TreeItemLayout>Medium item</TreeItemLayout>
            </TreeItem>
        </Tree>

        {/* ✅ PASS: Subtle appearance tree with aria-label */}
        <Tree appearance="subtle" aria-label="Subtle tree">
            <TreeItem itemType="leaf">
                <TreeItemLayout>Subtle item</TreeItemLayout>
            </TreeItem>
        </Tree>

        {/* ✅ PASS: Subtle-alpha appearance tree with aria-label */}
        <Tree appearance="subtle-alpha" aria-label="Subtle alpha tree">
            <TreeItem itemType="leaf">
                <TreeItemLayout>Subtle alpha item</TreeItemLayout>
            </TreeItem>
        </Tree>

        {/* ✅ PASS: Transparent appearance tree with aria-label */}
        <Tree appearance="transparent" aria-label="Transparent tree">
            <TreeItem itemType="leaf">
                <TreeItemLayout>Transparent item</TreeItemLayout>
            </TreeItem>
        </Tree>
    </>
);
