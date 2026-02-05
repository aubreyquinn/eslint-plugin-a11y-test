import {
    SwatchPicker,
    ColorSwatch,
    EmptySwatch,
    ImageSwatch,
} from "@fluentui/react-components";
import * as React from 'react';

const label = "my-label";
const myFunc = (): string => { return "test" };

export const SwatchPickerTests = () => (
    <>
        {/* ============================================
            swatchpicker-needs-labelling tests
            ============================================ */}
        
        {/* ❌ FAIL: SwatchPicker without accessible name */}
        <SwatchPicker />
        {/* ❌ FAIL: Empty SwatchPicker */}
        <SwatchPicker></SwatchPicker>

        {/* ✅ PASS: SwatchPicker with aria-label */}
        <SwatchPicker aria-label="Color selection" />
        {/* ✅ PASS: SwatchPicker with aria-label from variable */}
        <SwatchPicker aria-label={label} />
        {/* ✅ PASS: SwatchPicker with aria-label from function */}
        <SwatchPicker aria-label={myFunc()} />

        {/* ✅ PASS: SwatchPicker with aria-labelledby */}
        <span id="swatch-label">Choose a color</span>
        <SwatchPicker aria-labelledby="swatch-label" />

        {/* ✅ PASS: SwatchPicker with labeled ColorSwatches */}
        <SwatchPicker aria-label="Colors">
            <ColorSwatch color="#FF0000" value="red" aria-label="Red" />
            <ColorSwatch color="#00FF00" value="green" aria-label="Green" />
            <ColorSwatch color="#0000FF" value="blue" aria-label="Blue" />
        </SwatchPicker>

        {/* ============================================
            colorswatch-needs-labelling tests
            ============================================ */}
        
        {/* ❌ FAIL: ColorSwatch without accessible name */}
        <ColorSwatch color="#FF0000" value="red" />
        {/* ❌ FAIL: Empty ColorSwatch */}
        <ColorSwatch color="#FF0000" value="red"></ColorSwatch>

        {/* ✅ PASS: ColorSwatch with aria-label */}
        <ColorSwatch color="#FF0000" value="red" aria-label="Red color" />
        {/* ✅ PASS: ColorSwatch with aria-label from variable */}
        <ColorSwatch color="#FF0000" value="red" aria-label={label} />
        {/* ✅ PASS: ColorSwatch with aria-label from function */}
        <ColorSwatch color="#FF0000" value="red" aria-label={myFunc()} />

        {/* ✅ PASS: ColorSwatch with aria-labelledby */}
        <span id="color-label">Red</span>
        <ColorSwatch color="#FF0000" value="red" aria-labelledby="color-label" />

        {/* ✅ PASS: ColorSwatches with semantic colors and aria-labels */}
        <ColorSwatch color="brand" value="brand" aria-label="Brand color" />
        <ColorSwatch color="success" value="success" aria-label="Success color" />
        <ColorSwatch color="warning" value="warning" aria-label="Warning color" />
        <ColorSwatch color="danger" value="danger" aria-label="Danger color" />

        {/* ❌ FAIL: Disabled ColorSwatch without accessible name */}
        <ColorSwatch color="#FF0000" value="red" disabled />
        {/* ✅ PASS: Disabled ColorSwatch with aria-label */}
        <ColorSwatch color="#FF0000" value="red" disabled aria-label="Disabled red" />

        {/* ❌ FAIL: ColorSwatch with size but no accessible name */}
        <ColorSwatch color="#FF0000" value="red" size="small" />
        {/* ✅ PASS: ColorSwatch with size and aria-label */}
        <ColorSwatch color="#FF0000" value="red" size="small" aria-label="Small red" />

        {/* ❌ FAIL: ColorSwatch with size but no accessible name */}
        <ColorSwatch color="#FF0000" value="red" size="medium" />
        {/* ✅ PASS: ColorSwatch with size and aria-label */}
        <ColorSwatch color="#FF0000" value="red" size="medium" aria-label="Medium red" />

        {/* ❌ FAIL: ColorSwatch with size but no accessible name */}
        <ColorSwatch color="#FF0000" value="red" size="large" />
        {/* ✅ PASS: ColorSwatch with size and aria-label */}
        <ColorSwatch color="#FF0000" value="red" size="large" aria-label="Large red" />

        {/* ❌ FAIL: ColorSwatch with shape but no accessible name */}
        <ColorSwatch color="#FF0000" value="red" shape="square" />
        {/* ✅ PASS: ColorSwatch with shape and aria-label */}
        <ColorSwatch color="#FF0000" value="red" shape="square" aria-label="Square red" />

        {/* ❌ FAIL: ColorSwatch with shape but no accessible name */}
        <ColorSwatch color="#FF0000" value="red" shape="circular" />
        {/* ✅ PASS: ColorSwatch with shape and aria-label */}
        <ColorSwatch color="#FF0000" value="red" shape="circular" aria-label="Circular red" />

        {/* ❌ FAIL: ColorSwatch with shape but no accessible name */}
        <ColorSwatch color="#FF0000" value="red" shape="rounded" />
        {/* ✅ PASS: ColorSwatch with shape and aria-label */}
        <ColorSwatch color="#FF0000" value="red" shape="rounded" aria-label="Rounded red" />

        {/* ============================================
            emptyswatch-needs-labelling tests
            ============================================ */}
        
        {/* ❌ FAIL: EmptySwatch without accessible name */}
        <EmptySwatch />
        {/* ❌ FAIL: Empty EmptySwatch */}
        <EmptySwatch></EmptySwatch>

        {/* ✅ PASS: EmptySwatch with aria-label */}
        <EmptySwatch aria-label="Empty color slot" />
        {/* ✅ PASS: EmptySwatch with aria-label from variable */}
        <EmptySwatch aria-label={label} />
        {/* ✅ PASS: EmptySwatch with aria-label from function */}
        <EmptySwatch aria-label={myFunc()} />

        {/* ✅ PASS: EmptySwatch with aria-labelledby */}
        <span id="empty-label">No color selected</span>
        <EmptySwatch aria-labelledby="empty-label" />

        {/* ❌ FAIL: Disabled EmptySwatch without accessible name */}
        <EmptySwatch disabled />
        {/* ✅ PASS: Disabled EmptySwatch with aria-label */}
        <EmptySwatch disabled aria-label="Disabled empty swatch" />

        {/* ❌ FAIL: EmptySwatch with size but no accessible name */}
        <EmptySwatch size="small" />
        {/* ✅ PASS: EmptySwatch with size and aria-label */}
        <EmptySwatch size="small" aria-label="Small empty swatch" />

        {/* ❌ FAIL: EmptySwatch with size but no accessible name */}
        <EmptySwatch size="medium" />
        {/* ✅ PASS: EmptySwatch with size and aria-label */}
        <EmptySwatch size="medium" aria-label="Medium empty swatch" />

        {/* ❌ FAIL: EmptySwatch with size but no accessible name */}
        <EmptySwatch size="large" />
        {/* ✅ PASS: EmptySwatch with size and aria-label */}
        <EmptySwatch size="large" aria-label="Large empty swatch" />

        {/* ============================================
            imageswatch-needs-labelling tests
            ============================================ */}
        
        {/* ❌ FAIL: ImageSwatch without accessible name */}
        <ImageSwatch src="https://example.com/pattern.jpg" value="pattern1" />
        {/* ❌ FAIL: Empty ImageSwatch */}
        <ImageSwatch src="https://example.com/pattern.jpg" value="pattern1"></ImageSwatch>

        {/* ✅ PASS: ImageSwatch with aria-label */}
        <ImageSwatch src="https://example.com/pattern.jpg" value="pattern1" aria-label="Pattern 1" />
        {/* ✅ PASS: ImageSwatch with aria-label from variable */}
        <ImageSwatch src="https://example.com/pattern.jpg" value="pattern1" aria-label={label} />
        {/* ✅ PASS: ImageSwatch with aria-label from function */}
        <ImageSwatch src="https://example.com/pattern.jpg" value="pattern1" aria-label={myFunc()} />

        {/* ✅ PASS: ImageSwatch with aria-labelledby */}
        <span id="image-swatch-label">Wood pattern</span>
        <ImageSwatch src="https://example.com/wood.jpg" value="wood" aria-labelledby="image-swatch-label" />

        {/* ❌ FAIL: Disabled ImageSwatch without accessible name */}
        <ImageSwatch src="https://example.com/pattern.jpg" value="pattern1" disabled />
        {/* ✅ PASS: Disabled ImageSwatch with aria-label */}
        <ImageSwatch src="https://example.com/pattern.jpg" value="pattern1" disabled aria-label="Disabled pattern" />

        {/* ❌ FAIL: ImageSwatch with size but no accessible name */}
        <ImageSwatch src="https://example.com/pattern.jpg" value="pattern1" size="small" />
        {/* ✅ PASS: ImageSwatch with size and aria-label */}
        <ImageSwatch src="https://example.com/pattern.jpg" value="pattern1" size="small" aria-label="Small pattern" />

        {/* ❌ FAIL: ImageSwatch with size but no accessible name */}
        <ImageSwatch src="https://example.com/pattern.jpg" value="pattern1" size="medium" />
        {/* ✅ PASS: ImageSwatch with size and aria-label */}
        <ImageSwatch src="https://example.com/pattern.jpg" value="pattern1" size="medium" aria-label="Medium pattern" />

        {/* ❌ FAIL: ImageSwatch with size but no accessible name */}
        <ImageSwatch src="https://example.com/pattern.jpg" value="pattern1" size="large" />
        {/* ✅ PASS: ImageSwatch with size and aria-label */}
        <ImageSwatch src="https://example.com/pattern.jpg" value="pattern1" size="large" aria-label="Large pattern" />
    </>
);
