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
        {/* tree-needs-labelling tests */}
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

        <Tree aria-label={label}>
            <TreeItem itemType="leaf">
                <TreeItemLayout>Item</TreeItemLayout>
            </TreeItem>
        </Tree>

        <Tree aria-label={myFunc()}>
            <TreeItem itemType="leaf">
                <TreeItemLayout>Item</TreeItemLayout>
            </TreeItem>
        </Tree>

        <span id="tree-label">Navigation tree</span>
        <Tree aria-labelledby="tree-label">
            <TreeItem itemType="leaf">
                <TreeItemLayout>Item</TreeItemLayout>
            </TreeItem>
        </Tree>

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

        {/* TreeItemLayout tests */}
        <Tree aria-label="Layout variations">
            <TreeItem itemType="leaf">
                <TreeItemLayout />
            </TreeItem>
            <TreeItem itemType="leaf">
                <TreeItemLayout></TreeItemLayout>
            </TreeItem>
            <TreeItem itemType="leaf">
                <TreeItemLayout>Text content</TreeItemLayout>
            </TreeItem>
            <TreeItem itemType="leaf">
                <TreeItemLayout>{label}</TreeItemLayout>
            </TreeItem>
            <TreeItem itemType="leaf">
                <TreeItemLayout>{myFunc()}</TreeItemLayout>
            </TreeItem>
        </Tree>

        {/* TreeItemPersonaLayout tests */}
        <Tree aria-label="Persona tree">
            <TreeItem itemType="leaf">
                <TreeItemPersonaLayout>Person Name</TreeItemPersonaLayout>
            </TreeItem>
            <TreeItem itemType="leaf">
                <TreeItemPersonaLayout
                    media={<CalendarMonthRegular />}
                >
                    Person with media
                </TreeItemPersonaLayout>
            </TreeItem>
            <TreeItem itemType="leaf">
                <TreeItemPersonaLayout
                    description="Description text"
                >
                    Person with description
                </TreeItemPersonaLayout>
            </TreeItem>
        </Tree>

        <Tree size="small" aria-label="Small tree">
            <TreeItem itemType="leaf">
                <TreeItemLayout>Small item</TreeItemLayout>
            </TreeItem>
        </Tree>

        <Tree size="medium" aria-label="Medium tree">
            <TreeItem itemType="leaf">
                <TreeItemLayout>Medium item</TreeItemLayout>
            </TreeItem>
        </Tree>

        <Tree appearance="subtle" aria-label="Subtle tree">
            <TreeItem itemType="leaf">
                <TreeItemLayout>Subtle item</TreeItemLayout>
            </TreeItem>
        </Tree>

        <Tree appearance="subtle-alpha" aria-label="Subtle alpha tree">
            <TreeItem itemType="leaf">
                <TreeItemLayout>Subtle alpha item</TreeItemLayout>
            </TreeItem>
        </Tree>

        <Tree appearance="transparent" aria-label="Transparent tree">
            <TreeItem itemType="leaf">
                <TreeItemLayout>Transparent item</TreeItemLayout>
            </TreeItem>
        </Tree>
    </>
);
