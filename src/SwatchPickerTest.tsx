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
        {/* swatchpicker-needs-labelling tests */}
        <SwatchPicker />
        <SwatchPicker></SwatchPicker>

        <SwatchPicker aria-label="Color selection" />
        <SwatchPicker aria-label={label} />
        <SwatchPicker aria-label={myFunc()} />

        <span id="swatch-label">Choose a color</span>
        <SwatchPicker aria-labelledby="swatch-label" />

        <SwatchPicker aria-label="Colors">
            <ColorSwatch color="#FF0000" value="red" aria-label="Red" />
            <ColorSwatch color="#00FF00" value="green" aria-label="Green" />
            <ColorSwatch color="#0000FF" value="blue" aria-label="Blue" />
        </SwatchPicker>

        {/* colorswatch-needs-labelling tests */}
        <ColorSwatch color="#FF0000" value="red" />
        <ColorSwatch color="#FF0000" value="red"></ColorSwatch>

        <ColorSwatch color="#FF0000" value="red" aria-label="Red color" />
        <ColorSwatch color="#FF0000" value="red" aria-label={label} />
        <ColorSwatch color="#FF0000" value="red" aria-label={myFunc()} />

        <span id="color-label">Red</span>
        <ColorSwatch color="#FF0000" value="red" aria-labelledby="color-label" />

        <ColorSwatch color="brand" value="brand" aria-label="Brand color" />
        <ColorSwatch color="success" value="success" aria-label="Success color" />
        <ColorSwatch color="warning" value="warning" aria-label="Warning color" />
        <ColorSwatch color="danger" value="danger" aria-label="Danger color" />

        <ColorSwatch color="#FF0000" value="red" disabled />
        <ColorSwatch color="#FF0000" value="red" disabled aria-label="Disabled red" />

        <ColorSwatch color="#FF0000" value="red" size="small" />
        <ColorSwatch color="#FF0000" value="red" size="small" aria-label="Small red" />

        <ColorSwatch color="#FF0000" value="red" size="medium" />
        <ColorSwatch color="#FF0000" value="red" size="medium" aria-label="Medium red" />

        <ColorSwatch color="#FF0000" value="red" size="large" />
        <ColorSwatch color="#FF0000" value="red" size="large" aria-label="Large red" />

        <ColorSwatch color="#FF0000" value="red" shape="square" />
        <ColorSwatch color="#FF0000" value="red" shape="square" aria-label="Square red" />

        <ColorSwatch color="#FF0000" value="red" shape="circular" />
        <ColorSwatch color="#FF0000" value="red" shape="circular" aria-label="Circular red" />

        <ColorSwatch color="#FF0000" value="red" shape="rounded" />
        <ColorSwatch color="#FF0000" value="red" shape="rounded" aria-label="Rounded red" />

        {/* emptyswatch-needs-labelling tests */}
        <EmptySwatch />
        <EmptySwatch></EmptySwatch>

        <EmptySwatch aria-label="Empty color slot" />
        <EmptySwatch aria-label={label} />
        <EmptySwatch aria-label={myFunc()} />

        <span id="empty-label">No color selected</span>
        <EmptySwatch aria-labelledby="empty-label" />

        <EmptySwatch disabled />
        <EmptySwatch disabled aria-label="Disabled empty swatch" />

        <EmptySwatch size="small" />
        <EmptySwatch size="small" aria-label="Small empty swatch" />

        <EmptySwatch size="medium" />
        <EmptySwatch size="medium" aria-label="Medium empty swatch" />

        <EmptySwatch size="large" />
        <EmptySwatch size="large" aria-label="Large empty swatch" />

        {/* imageswatch-needs-labelling tests */}
        <ImageSwatch src="https://example.com/pattern.jpg" value="pattern1" />
        <ImageSwatch src="https://example.com/pattern.jpg" value="pattern1"></ImageSwatch>

        <ImageSwatch src="https://example.com/pattern.jpg" value="pattern1" aria-label="Pattern 1" />
        <ImageSwatch src="https://example.com/pattern.jpg" value="pattern1" aria-label={label} />
        <ImageSwatch src="https://example.com/pattern.jpg" value="pattern1" aria-label={myFunc()} />

        <span id="image-swatch-label">Wood pattern</span>
        <ImageSwatch src="https://example.com/wood.jpg" value="wood" aria-labelledby="image-swatch-label" />

        <ImageSwatch src="https://example.com/pattern.jpg" value="pattern1" disabled />
        <ImageSwatch src="https://example.com/pattern.jpg" value="pattern1" disabled aria-label="Disabled pattern" />

        <ImageSwatch src="https://example.com/pattern.jpg" value="pattern1" size="small" />
        <ImageSwatch src="https://example.com/pattern.jpg" value="pattern1" size="small" aria-label="Small pattern" />

        <ImageSwatch src="https://example.com/pattern.jpg" value="pattern1" size="medium" />
        <ImageSwatch src="https://example.com/pattern.jpg" value="pattern1" size="medium" aria-label="Medium pattern" />

        <ImageSwatch src="https://example.com/pattern.jpg" value="pattern1" size="large" />
        <ImageSwatch src="https://example.com/pattern.jpg" value="pattern1" size="large" aria-label="Large pattern" />
    </>
);
