import {
    Table,
    TableHeader,
    TableHeaderCell,
    TableBody,
    TableRow,
    TableCell,
    TableCellLayout,
    TableSelectionCell,
} from "@fluentui/react-components";
import * as React from 'react';

const label = "my-label";
const myFunc = (): string => { return "test" };

export const TableTests = () => (
    <>
        {/* ============================================
            table-needs-labelling tests
            ============================================ */}
        
        {/* ❌ FAIL: Table without accessible name */}
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHeaderCell>Name</TableHeaderCell>
                    <TableHeaderCell>Age</TableHeaderCell>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell>John</TableCell>
                    <TableCell>30</TableCell>
                </TableRow>
            </TableBody>
        </Table>

        {/* ✅ PASS: Table with aria-label */}
        <Table aria-label="User data table">
            <TableHeader>
                <TableRow>
                    <TableHeaderCell>Name</TableHeaderCell>
                    <TableHeaderCell>Age</TableHeaderCell>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell>John</TableCell>
                    <TableCell>30</TableCell>
                </TableRow>
            </TableBody>
        </Table>

        {/* ✅ PASS: Table with aria-label from variable */}
        <Table aria-label={label}>
            <TableBody>
                <TableRow>
                    <TableCell>Data</TableCell>
                </TableRow>
            </TableBody>
        </Table>

        {/* ✅ PASS: Table with aria-label from function */}
        <Table aria-label={myFunc()}>
            <TableBody>
                <TableRow>
                    <TableCell>Data</TableCell>
                </TableRow>
            </TableBody>
        </Table>

        {/* ✅ PASS: Table with aria-labelledby */}
        <span id="table-label">Employee List</span>
        <Table aria-labelledby="table-label">
            <TableHeader>
                <TableRow>
                    <TableHeaderCell>Name</TableHeaderCell>
                </TableRow>
            </TableHeader>
        </Table>

        {/* ❌ FAIL: Table with aria-describedby only - needs primary label */}
        <Table aria-describedby="table-desc">
            <TableBody>
                <TableRow>
                    <TableCell>Data</TableCell>
                </TableRow>
            </TableBody>
        </Table>
        <p id="table-desc">This table shows employee information</p>

        {/* ❌ FAIL: Table with size but no accessible name */}
        <Table size="small">
            <TableBody>
                <TableRow>
                    <TableCell>Small</TableCell>
                </TableRow>
            </TableBody>
        </Table>

        {/* ✅ PASS: Table with size and aria-label */}
        <Table size="small" aria-label="Small table">
            <TableBody>
                <TableRow>
                    <TableCell>Small</TableCell>
                </TableRow>
            </TableBody>
        </Table>

        {/* ✅ PASS: Table with size and aria-label */}
        <Table size="extra-small" aria-label="Extra small table">
            <TableBody>
                <TableRow>
                    <TableCell>Extra Small</TableCell>
                </TableRow>
            </TableBody>
        </Table>

        {/* ✅ PASS: Table with size and aria-label */}
        <Table size="medium" aria-label="Medium table">
            <TableBody>
                <TableRow>
                    <TableCell>Medium</TableCell>
                </TableRow>
            </TableBody>
        </Table>

        {/* ✅ PASS: Sortable Table with aria-label */}
        <Table sortable aria-label="Sortable table">
            <TableHeader>
                <TableRow>
                    <TableHeaderCell>Sortable Column</TableHeaderCell>
                </TableRow>
            </TableHeader>
        </Table>

        {/* ✅ PASS: Selectable Table with aria-label */}
        <Table aria-label="Selectable table">
            <TableHeader>
                <TableRow>
                    <TableSelectionCell />
                    <TableHeaderCell>Name</TableHeaderCell>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableSelectionCell />
                    <TableCell>John</TableCell>
                </TableRow>
            </TableBody>
        </Table>

        {/* ✅ PASS: Table with cell layouts and aria-label */}
        <Table aria-label="Table with cell layouts">
            <TableBody>
                <TableRow>
                    <TableCell>
                        <TableCellLayout>Cell content</TableCellLayout>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </>
);
