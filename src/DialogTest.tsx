import {
    Dialog,
    DialogSurface,
    DialogTitle,
    DialogBody,
    DialogContent,
    DialogActions,
    DialogTrigger,
    Button,
} from "@fluentui/react-components";
import * as React from 'react';

const label = "my-label";
const myFunc = (): string => { return "test" };

export const DialogTests = () => (
    <>
        {/* ============================================
            dialogsurface-needs-aria tests
            ============================================ */}
        
        {/* ❌ FAIL: DialogSurface without aria attributes (relies on DialogTitle for labelling) */}
        <Dialog>
            <DialogTrigger>
                <Button>Open Dialog</Button>
            </DialogTrigger>
            <DialogSurface>
                <DialogBody>
                    <DialogTitle>Title</DialogTitle>
                    <DialogContent>Content</DialogContent>
                    <DialogActions>
                        <Button>Close</Button>
                    </DialogActions>
                </DialogBody>
            </DialogSurface>
        </Dialog>

        {/* ❌ FAIL: DialogSurface with aria-label but missing aria-describedby */}
        <Dialog>
            <DialogSurface aria-label="Custom dialog">
                <DialogBody>
                    <DialogTitle>Title</DialogTitle>
                    <DialogContent>Content</DialogContent>
                </DialogBody>
            </DialogSurface>
        </Dialog>

        {/* ❌ FAIL: DialogSurface with aria-label but incomplete DialogBody */}
        <Dialog>
            <DialogSurface aria-label={label}>
                <DialogBody>
                    <DialogContent>Content</DialogContent>
                </DialogBody>
            </DialogSurface>
        </Dialog>

        {/* ❌ FAIL: DialogSurface with aria-labelledby but missing DialogActions */}
        <Dialog>
            <DialogSurface aria-labelledby="dialog-title">
                <DialogBody>
                    <DialogTitle id="dialog-title">Dialog Title</DialogTitle>
                    <DialogContent>Content</DialogContent>
                </DialogBody>
            </DialogSurface>
        </Dialog>

        {/* ❌ FAIL: DialogSurface with aria-describedby but missing DialogActions */}
        <Dialog>
            <DialogSurface aria-describedby="dialog-desc">
                <DialogBody>
                    <DialogTitle>Title</DialogTitle>
                    <DialogContent id="dialog-desc">Description content</DialogContent>
                </DialogBody>
            </DialogSurface>
        </Dialog>

        {/* ============================================
            dialogbody-needs-title-content-and-actions tests
            ============================================ */}
        
        {/* ❌ FAIL: Empty DialogBody - missing title, content, and actions */}
        <Dialog>
            <DialogSurface>
                <DialogBody>
                </DialogBody>
            </DialogSurface>
        </Dialog>

        {/* ❌ FAIL: DialogBody with title only - missing content and actions */}
        <Dialog>
            <DialogSurface>
                <DialogBody>
                    <DialogTitle>Title Only</DialogTitle>
                </DialogBody>
            </DialogSurface>
        </Dialog>

        {/* ❌ FAIL: DialogBody with content only - missing title and actions */}
        <Dialog>
            <DialogSurface>
                <DialogBody>
                    <DialogContent>Content Only</DialogContent>
                </DialogBody>
            </DialogSurface>
        </Dialog>

        {/* ❌ FAIL: DialogBody with actions only - missing title and content */}
        <Dialog>
            <DialogSurface>
                <DialogBody>
                    <DialogActions>
                        <Button>Action Only</Button>
                    </DialogActions>
                </DialogBody>
            </DialogSurface>
        </Dialog>

        {/* ✅ PASS: Complete DialogBody with title, content, and actions */}
        <Dialog>
            <DialogSurface>
                <DialogBody>
                    <DialogTitle>Complete Dialog</DialogTitle>
                    <DialogContent>This is the content</DialogContent>
                    <DialogActions>
                        <Button>OK</Button>
                        <Button>Cancel</Button>
                    </DialogActions>
                </DialogBody>
            </DialogSurface>
        </Dialog>
    </>
);
