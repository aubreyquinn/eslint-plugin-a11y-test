import { Rating, RatingDisplay, Label, Field } from "@fluentui/react-components";
import * as React from 'react';

const label = "my-label";
const myFunc = (): string => { return "test" };

export const RatingTests = () => (
    <>
        {/* ============================================
            rating-needs-name tests
            ============================================ */}
        
        {/* ❌ FAIL: Rating without accessible name */}
        <Rating />
        {/* ❌ FAIL: Empty Rating */}
        <Rating></Rating>

        {/* ❌ FAIL: Rating with value but no accessible name */}
        <Rating value={3} />
        {/* ❌ FAIL: Rating with value but no accessible name */}
        <Rating value={4.5} />

        {/* ✅ PASS: Rating with aria-label */}
        <Rating aria-label="Product rating" />
        {/* ✅ PASS: Rating with aria-label from variable */}
        <Rating aria-label={label} />
        {/* ✅ PASS: Rating with aria-label from function */}
        <Rating aria-label={myFunc()} />

        {/* ✅ PASS: Rating with value and aria-label */}
        <Rating value={3} aria-label="Rate this item" />
        {/* ✅ PASS: Rating with value and aria-label from variable */}
        <Rating value={3} aria-label={label} />

        {/* ✅ PASS: Rating with aria-labelledby */}
        <span id="rating-label">Rate your experience</span>
        <Rating aria-labelledby="rating-label" />

        {/* ✅ PASS: Rating with Label and aria-labelledby */}
        <Label id="rate-label">Quality rating</Label>
        <Rating aria-labelledby="rate-label" value={4} />

        {/* ✅ PASS: Rating with htmlFor/id association */}
        <Label htmlFor="rating-id">Service rating</Label>
        <Rating id="rating-id" />

        {/* ✅ PASS: Rating inside Field with label */}
        <Field label="Rate this product">
            <Rating />
        </Field>

        {/* ❌ FAIL: Rating with name only - name is for form submission, not accessible name */}
        <Rating name="product-rating" />
        {/* ✅ PASS: Rating with name and aria-label */}
        <Rating name="product-rating" aria-label="Product rating" />

        {/* ❌ FAIL: Rating with max but no accessible name */}
        <Rating max={10} />
        {/* ✅ PASS: Rating with max and aria-label */}
        <Rating max={10} aria-label="Rating out of 10" />

        {/* ❌ FAIL: Rating with size but no accessible name */}
        <Rating size="small" />
        {/* ✅ PASS: Rating with size and aria-label */}
        <Rating size="small" aria-label="Small rating" />

        {/* ❌ FAIL: Rating with size and value but no accessible name */}
        <Rating size="medium" value={3} />
        {/* ✅ PASS: Rating with size, value, and aria-label */}
        <Rating size="medium" value={3} aria-label="Medium rating" />

        {/* ❌ FAIL: Rating with size and value but no accessible name */}
        <Rating size="large" value={5} />
        {/* ✅ PASS: Rating with size, value, and aria-label */}
        <Rating size="large" value={5} aria-label="Large rating" />

        {/* ❌ FAIL: Rating with color but no accessible name */}
        <Rating color="brand" />
        {/* ✅ PASS: Rating with color and aria-label */}
        <Rating color="brand" aria-label="Brand colored rating" />

        {/* ❌ FAIL: Rating with color and value but no accessible name */}
        <Rating color="marigold" value={4} />
        {/* ✅ PASS: Rating with color, value, and aria-label */}
        <Rating color="marigold" value={4} aria-label="Marigold rating" />

        {/* ============================================
            RatingDisplay tests (read-only rating display)
            ============================================ */}
        
        {/* ✅ PASS: RatingDisplay is read-only, may not require accessible name */}
        <RatingDisplay value={3.5} />
        {/* ✅ PASS: RatingDisplay with aria-label */}
        <RatingDisplay value={3.5} aria-label="Average rating" />

        {/* ✅ PASS: RatingDisplay with count */}
        <RatingDisplay value={4} count={125} />
        {/* ✅ PASS: RatingDisplay with count and aria-label */}
        <RatingDisplay value={4} count={125} aria-label="Rating with count" />
    </>
);
