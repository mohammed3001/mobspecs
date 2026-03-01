# Level 1 - Phone Specification Model

## Design Goals
- Support complete phone spec sheets across many brands and generations.
- Handle regional versions and variant-specific values.
- Keep normalization for analytics, search, and comparison performance.
- Allow multilingual labels and values for Arabic and English.

## Specification Taxonomy

### Group: Network
- Technology (GSM / HSPA / LTE / 5G)
- Bands 2G, 3G, 4G, 5G
- Speed

### Group: Launch
- Announced
- Status

### Group: Body
- Dimensions
- Weight
- Build
- SIM
- Protection

### Group: Display
- Type
- Size
- Resolution
- Refresh rate
- Brightness

### Group: Platform
- OS
- Chipset
- CPU
- GPU

### Group: Memory
- Card slot
- Internal variants

### Group: Main Camera
- Camera modules
- Features
- Video

### Group: Selfie Camera
- Module details
- Video

### Group: Sound
- Loudspeaker
- 3.5mm jack

### Group: Communications
- WLAN
- Bluetooth
- Positioning
- NFC
- USB

### Group: Features
- Sensors

### Group: Battery
- Type
- Wired charging
- Wireless charging

### Group: Misc
- Colors
- Models
- SAR
- Price

## Data Model Structure

| Layer | Description |
|---|---|
| `spec_groups` | Top-level visual/semantic grouping. |
| `spec_definitions` | Canonical spec keys and data type metadata. |
| `phone_spec_values` | Value entries linked to phone model and optionally version. |
| `spec_value_translations` | Localized rendering for non-numeric values. |

## Value Type Standardization
- `string`: free text (`"Gorilla Glass Victus 2"`).
- `number`: numeric scalar (`5000`).
- `boolean`: feature present/absent.
- `enum`: one value from predefined options.
- `list`: multiple item values.
- `json`: structured nested blocks (e.g., camera array).

## Normalization Rules

1. Canonical units stored separately when possible:
   - Battery capacity in `mAh` as integer.
   - Weight in grams.
   - Display size in inches as decimal.
2. Human-readable display string generated from normalized values.
3. Keep historical entries for changed manufacturer claims.
4. Support confidence score for auto-extracted specs.

## Variant and Region Strategy
- `phone_models` stores canonical model family.
- `phone_versions` stores storage, RAM, region, SKU.
- `phone_spec_values.version_id` optional override.
- If null: applies to all versions.

## Comparison Readiness
- Every spec definition has:
  - `comparable` boolean.
  - `comparison_priority` integer.
  - `comparison_operator` (`higher_better`, `lower_better`, `equal_match`).
- Comparison engine can produce winners per category.

## AI Extraction Model

1. Input: manufacturer page, trusted feeds, manual draft.
2. NER + parser maps labels to known `spec_definitions`.
3. Validator checks unit and range plausibility.
4. Ambiguous values flagged for editor review.
5. Persist with source attribution and confidence.

## SEO-Aware Spec Rendering
- Generate SEO snippets from high-value specs.
- Inject product schema key highlights.
- Build consistent tables for rich results eligibility.

