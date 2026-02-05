import {
    DataGrid,
    DataGridHeader,
    DataGridHeaderCell,
    DataGridBody,
    DataGridRow,
    DataGridCell,
} from "@fluentui/react-components";
import * as React from 'react';

const label = "my-label";
const myFunc = (): string => { return "test" };

const columns = [
    { columnKey: "name", label: "Name" },
    { columnKey: "age", label: "Age" },
];

const items = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
];

export const DataGridTests = () => (
    <>
        {/* datagrid-needs-labelling tests */}
        <DataGrid items={items} columns={columns}>
            <DataGridHeader>
                <DataGridRow>
                    <DataGridHeaderCell>Name</DataGridHeaderCell>
                    <DataGridHeaderCell>Age</DataGridHeaderCell>
                </DataGridRow>
            </DataGridHeader>
            <DataGridBody>
                <DataGridRow>
                    <DataGridCell>John</DataGridCell>
                    <DataGridCell>30</DataGridCell>
                </DataGridRow>
            </DataGridBody>
        </DataGrid>

        <DataGrid items={items} columns={columns} aria-label="User data grid">
            <DataGridHeader>
                <DataGridRow>
                    <DataGridHeaderCell>Name</DataGridHeaderCell>
                </DataGridRow>
            </DataGridHeader>
        </DataGrid>

        <DataGrid items={items} columns={columns} aria-label={label}>
            <DataGridBody>
                <DataGridRow>
                    <DataGridCell>Data</DataGridCell>
                </DataGridRow>
            </DataGridBody>
        </DataGrid>

        <DataGrid items={items} columns={columns} aria-label={myFunc()}>
            <DataGridBody>
                <DataGridRow>
                    <DataGridCell>Data</DataGridCell>
                </DataGridRow>
            </DataGridBody>
        </DataGrid>

        <span id="grid-label">Data Table</span>
        <DataGrid items={items} columns={columns} aria-labelledby="grid-label">
            <DataGridBody>
                <DataGridRow>
                    <DataGridCell>Data</DataGridCell>
                </DataGridRow>
            </DataGridBody>
        </DataGrid>

        <DataGrid items={items} columns={columns} aria-describedby="grid-desc">
            <DataGridBody>
                <DataGridRow>
                    <DataGridCell>Data</DataGridCell>
                </DataGridRow>
            </DataGridBody>
        </DataGrid>
        <p id="grid-desc">This is a data grid description</p>
    </>
);
