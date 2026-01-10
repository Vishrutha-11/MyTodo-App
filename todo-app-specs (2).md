# Todo App Design Specifications

A clean, modern todo app with a teal color scheme and warm accents.

---

## Typography

### Font Families
- **Display/Header Font**: `DM Serif Display` (Google Fonts)
- **Body Font**: `DM Sans` (Google Fonts)

### Font Sizes
| Element | Size | Weight |
|---------|------|--------|
| Header title | 24px (mobile), 30px (desktop) | 400 (regular) |
| Todo item text | 16px | 400 |
| Input placeholder | 16px | 400 |
| Button text | 16px | 600 (semibold) |
| Filter tabs | 14px | 500 (medium) |
| Item count | 14px | 400, number is 600 |
| Color filter label | 12px | 500, uppercase, letter-spacing: wider |
| Keyboard hint | 14px | 400 |
| Kbd element | 12px | mono font |

---

## Color Palette

### Primary Colors (Teal)
| Name | Hex Code | Usage |
|------|----------|-------|
| Primary 50 | `#f0fdfa` | - |
| Primary 100 | `#ccfbf1` | - |
| Primary 500 | `#14b8a6` | Buttons, active states, checked checkbox |
| Primary 600 | `#0d9488` | Button hover, item count number |
| Primary 700 | `#0f766e` | Header background |

### Surface Colors (Warm Grays)
| Name | Hex Code | Usage |
|------|----------|-------|
| Surface 50 | `#fafaf9` | Input background, footer background |
| Surface 100 | `#f5f5f4` | Page background |
| Surface 200 | `#e7e5e4` | Borders, dividers |
| Surface 300 | `#d6d3d1` | Checkbox border (unchecked) |
| Surface 400 | `#a8a29e` | Placeholder text, muted text, icons |

### Accent Colors (Tags)
| Name | Hex Code |
|------|----------|
| Coral | `#f97066` |
| Amber | `#f59e0b` |
| Violet | `#8b5cf6` |
| Sky | `#0ea5e9` |
| Emerald | `#10b981` |

### Other Colors
| Usage | Color |
|-------|-------|
| White | `#ffffff` |
| Todo text | `#1f2937` (gray-800) |
| Completed todo text | `#a8a29e` (surface-400) |

---

## Spacing

### Page Layout
- Page horizontal padding: 16px (mobile), 16px (desktop, but max-width constrains it)
- Page vertical padding: 32px (mobile), 48px (desktop)
- Max content width: 672px (42rem)

### Card
- Card border radius: 16px
- Input section padding: 20px (mobile), 24px (desktop)

### Input Section
- Gap between input and button: 12px
- Input horizontal padding: 16px
- Input vertical padding: 12px
- Input border radius: 12px
- Button horizontal padding: 20px
- Button vertical padding: 12px
- Button border radius: 12px

### Todo Items
- Item horizontal padding: 20px (mobile), 24px (desktop)
- Item vertical padding: 16px
- Gap between checkbox and text: 16px
- Gap between text and right elements: 16px
- Gap between tag and delete icon: 8px

### Footer
- Desktop footer padding: 24px horizontal, 16px vertical
- Mobile stats row padding: 20px horizontal, 12px vertical
- Mobile filter row padding: 12px
- Color filter section padding: 20px horizontal, 16px vertical
- Gap between color checkboxes: 8px
- Gap between filter tabs: 4px
- Filter tab padding: 16px horizontal, 6px vertical (desktop), 8px vertical (mobile)

---

## Borders & Dividers

| Element | Border |
|---------|--------|
| Input field | 1px solid `#e7e5e4` |
| Card sections divider | 1px solid `#e7e5e4` |
| Todo items divider | 1px solid `#f5f5f4` (lighter) |
| Filter tab container | 1px solid `#e7e5e4` |
| Kbd element | 1px solid `#e7e5e4` |

---

## Border Radius

| Element | Radius |
|---------|--------|
| Main card | 16px |
| Input field | 12px |
| Add button | 12px |
| Filter tabs container | 8px |
| Individual filter tab | 6px |
| Checkbox | 6px |
| Color tag (circle) | 50% (full circle) |
| Color checkbox | 4px |
| Kbd element | 4px |

---

## Shadows

### Card Shadow (layered for depth)
```
box-shadow: 
  0 4px 6px -1px rgba(0, 0, 0, 0.05),
  0 10px 15px -3px rgba(0, 0, 0, 0.08),
  0 20px 25px -5px rgba(0, 0, 0, 0.05);
```

### Input Inner Shadow
```
box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.04);
```

### Input Focus Ring
```
box-shadow: 0 0 0 3px rgba(20, 184, 166, 0.15);
```

### Color Checkbox Checked State
```
box-shadow: 0 0 0 2px white, 0 0 0 4px currentColor;
```

---

## Component Sizes

### Checkbox
- Size: 22px × 22px
- Border width: 2px
- Checkmark icon size: 14px

### Color Tag (on todo items)
- Size: 12px × 12px (circle)

### Color Filter Checkbox
- Size: 18px × 18px

### Delete Icon
- Size: 20px × 20px
- Stroke width: 2px
- Padding around icon: 4px

---

## States & Interactions

### Checkbox
- Unchecked: `#d6d3d1` border, transparent background
- Hover: `#14b8a6` border
- Checked: `#14b8a6` background and border, white checkmark

### Add Button
- Default: `#14b8a6` background
- Hover: `#0d9488` background
- Active: scale down to 95%

### Todo Item Row
- Default: white background
- Hover: `#fafaf9` background

### Delete Button
- Default: hidden (opacity 0)
- Parent hover: visible (opacity 1)
- Icon color: `#a8a29e`
- Icon hover: `#f97066` (coral)

### Filter Tabs
- Active: `#14b8a6` background, white text
- Inactive: transparent background, `#a8a29e` text
- Inactive hover: `#f5f5f4` background, `#374151` text

### Completed Todo
- Text: strikethrough decoration
- Text color: `#a8a29e`
- Color tag: 50% opacity

---

## Transitions

All interactive elements use:
```
transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
```

---

## Responsive Breakpoints

- Mobile: default (< 768px)
- Desktop: 768px and above (`md:` prefix in Tailwind)

### Key Responsive Changes
1. **Header title**: 24px → 30px
2. **Card padding**: 20px → 24px
3. **Footer layout**: Stacked (mobile) → Single row (desktop)
4. **Filter tabs**: Centered below stats (mobile) → Inline between stats (desktop)

---

## Icons Used

### Delete/Trash Icon (SVG)
- Viewbox: 0 0 24 24
- Style: Outline (stroke only, no fill)
- Stroke width: 2px
- Stroke linecap: round
- Stroke linejoin: round

---

## Additional Notes

1. The completed todo items have their color tags at 50% opacity
2. The delete button only appears on hover (desktop) - consider always showing on mobile for touch
3. The kbd element uses a monospace font
4. Header text uses the serif display font, everything else uses the sans-serif body font
5. The "items left" count shows the number in the primary color, rest in muted gray
