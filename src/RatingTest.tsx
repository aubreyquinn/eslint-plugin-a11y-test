import { Rating, RatingDisplay, Label, Field } from "@fluentui/react-components";
import * as React from 'react';

const label = "my-label";
const myFunc = (): string => { return "test" };

export const RatingTests = () => (
    <>
        {/* rating-needs-name tests */}
        <Rating />
        <Rating></Rating>

        <Rating value={3} />
        <Rating value={4.5} />

        <Rating aria-label="Product rating" />
        <Rating aria-label={label} />
        <Rating aria-label={myFunc()} />

        <Rating value={3} aria-label="Rate this item" />
        <Rating value={3} aria-label={label} />

        <span id="rating-label">Rate your experience</span>
        <Rating aria-labelledby="rating-label" />

        <Label id="rate-label">Quality rating</Label>
        <Rating aria-labelledby="rate-label" value={4} />

        <Label htmlFor="rating-id">Service rating</Label>
        <Rating id="rating-id" />

        <Field label="Rate this product">
            <Rating />
        </Field>

        <Rating name="product-rating" />
        <Rating name="product-rating" aria-label="Product rating" />

        <Rating max={10} />
        <Rating max={10} aria-label="Rating out of 10" />

        <Rating size="small" />
        <Rating size="small" aria-label="Small rating" />

        <Rating size="medium" value={3} />
        <Rating size="medium" value={3} aria-label="Medium rating" />

        <Rating size="large" value={5} />
        <Rating size="large" value={5} aria-label="Large rating" />

        <Rating color="brand" />
        <Rating color="brand" aria-label="Brand colored rating" />

        <Rating color="marigold" value={4} />
        <Rating color="marigold" value={4} aria-label="Marigold rating" />

        {/* RatingDisplay tests */}
        <RatingDisplay value={3.5} />
        <RatingDisplay value={3.5} aria-label="Average rating" />

        <RatingDisplay value={4} count={125} />
        <RatingDisplay value={4} count={125} aria-label="Rating with count" />
    </>
);
