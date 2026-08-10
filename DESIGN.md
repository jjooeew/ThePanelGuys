# The Panel Guys — Design Direction

Status: proposed design direction after discovery. This file governs the redesign; it is not an implementation specification and does not approve unverified marketing claims.

## North star

Build an architectural casebook for a specialist insulated-panel contractor.

The site should feel as exact, durable, and purpose-built as the finished environments in the photographs. The work is the visual identity: long panel seams, controlled thresholds, deep warehouse perspectives, clinical corridors, safety rails, and the scale of rooms operating around people and products.

Working concept: **Cold-Chain Casebook**.

The design must pass this test: if the words and photographs were replaced, could the same page plausibly sell SaaS, plumbing, or a marketing agency? If yes, the composition is too generic and must be revised.

## Business position

Present The Panel Guys as a capable, precise, professional specialist contractor for commercial cool rooms, insulated panel environments, food production, healthcare, and logistics.

The tone is matter-of-fact and confident. Prefer evidence to adjectives: completed work, named clients, clear scope, real operating environments, project facts, and one attributable testimonial. Do not claim scale, duration, coverage, response times, years of experience, compliance, savings, or availability until the business confirms them.

## Visual concept

Treat the page like a set of constructed planes rather than a stack of marketing modules.

- Use panel seams, datum lines, thresholds, and project captions as the graphic language.
- Use controlled asymmetry: a tall photograph against a wide text field, or a wide room view followed by a narrow technical image.
- Let white panel surfaces and graphite fields create calm; let the photographs carry operational colour.
- Make image scale communicate project scale. Avoid giving every project the same dimensions or visual weight.
- Use hard edges and one-pixel rules. Rounded corners, shadows, and floating containers are exceptional, not defaults.

## Typography

Use no more than two type families.

1. **Barlow Semi Condensed** — display, project titles, navigation, and short labels. Use 500–700 weights. It has the compact, engineered character of site signage without copying the existing generic geometric display style.
2. **IBM Plex Sans** — body copy, forms, long testimonial text, and functional UI. Use 400–600 weights with tabular numerals where project data is shown.

Type rules:

- H1: sentence case, 64–104 px desktop and 42–54 px mobile, compact line-height, never gradient-filled.
- H2: 44–64 px desktop and 34–44 px mobile.
- Body: 17–20 px for introductory copy; 16–18 px elsewhere; keep lines to roughly 55–72 characters.
- Uppercase is reserved for navigation, project metadata, and small technical labels. Do not turn every heading into uppercase signage.
- Use visibly different scale, not repeated font weight, to establish hierarchy.

## Colour

Use a controlled, high-contrast palette derived from the current logo and the installed environments.

- **Graphite** `#11161A` — primary text and dark fields.
- **Panel white** `#F2F4F2` — primary background; slightly warmer than pure white.
- **Stainless** `#A7B0B4` — rules, secondary data, and quiet surfaces.
- **Panel Guys blue** `#50B5ED` — the single brand accent. Pair it with graphite text when used as a filled control; do not put small white text on this blue.
- **Pure white** `#FFFFFF` — limited to clean contrast and form surfaces.

Do not introduce decorative gradients. Safety yellow, orange racking, red doors, teal steel, and product colour should remain powerful accents inside the photography rather than becoming competing UI tokens.

## Grid and spacing

- Desktop: 12 columns; tablet: 6; mobile: 4.
- Maximum content width: approximately 1440 px, with 32–64 px desktop gutters and 20–24 px mobile gutters.
- Align text, captions, rules, and image edges to shared vertical seams.
- Default project proportions should vary: 7/5, 8/4, or full-width followed by an inset detail. Do not alternate identical 60/40 rows mechanically.
- Use a spacing scale of 8, 12, 20, 32, 48, 72, 112, and 160 px. Sections should have enough air to feel architectural, but each section must have one clear purpose.
- Full-bleed images and edge-to-edge bands are allowed when they reveal scale. Containers are not required around content that is already understandable.

## Photography direction

Photography is the dominant visual anchor and should appear above the fold, immediately after the introduction, and throughout project proof.

Rules:

- Preserve each image's natural strength. Portrait aisle photographs should remain tall; do not force them into landscape cards. Wide room views should be allowed to span the page.
- Avoid dark overlays and blur over completed work. When text must overlap a photograph, use a restrained local scrim or place text in a separate plane.
- Use square corners and no decorative shadow.
- Apply only restrained correction: exposure, white balance, lens/perspective correction, and consistent neutral grading. Do not remove site evidence or manufacture a cleaner project unless the edited image is explicitly approved.
- Caption every important image with verified client/project, sector, and location or scope. Captions should feel like drawing notes, not badges.
- Supply distinct desktop and mobile crops where needed. Set deliberate focal positions instead of relying on centre-crop.
- Use responsive AVIF/WebP derivatives, accurate `sizes`, useful alt text, and lazy loading below the fold. Preserve full-resolution originals outside delivery assets.

### Priority images

1. **Sawmill Brewery / 5.jpg** — lead hero choice. The portrait format, strong one-point perspective, repeated racking, and visible Sawmill product create depth, scale, and identifiable proof. Use in a split desktop hero, not as a cropped full-width backdrop.
2. **Primor Produce / 40.jpg** — strongest wide scale image. The open controlled volume, repeated doors, reflective floor, forklift, and workers show the size of the installation. Use as a full-width proof moment.
3. **Healthcare Logistics / 21.jpg** — strong portrait feature. Tall racking and a centred aisle make the controlled logistics environment immediately legible.
4. **Aroa Biosurgery / 28.jpg** — strongest evidence of precision and sector range. The numbered clinical corridor and repeated clean-panel doors communicate controlled environments beyond food.
5. **Manly Park Kitchen / 17.jpg** — strongest human and operational image. Use with the attributable Manly Park Kitchen testimonial to show the completed environment in use.
6. **Primor Produce / 34-tidied.png** — useful clean architectural elevation and good brand-compatible blue/yellow detail. Keep overlays off it and avoid very large reproduction because it is a lower-resolution edited derivative.
7. **Gilmores / 68.jpg** and **Tokyo Foods / 63.jpg** — strong secondary features once those projects and their scope are confirmed in the content model.

### Project prominence

- **Primor Produce** has the best current case-study depth: five files representing four main views plus a cleaned derivative. It should receive the deepest homepage and project-page treatment.
- **Gilmores** has four views and can support a substantial case study, but the project is currently absent from site data.
- **Sawmill Brewery, Healthcare Logistics, Manly Park Kitchen, and Tokyo Foods** each have two useful views. They can support concise project features, not long case studies without more facts or assets.
- **Aroa Biosurgery** has one strong photograph. Treat it as a proof point or short project entry until more material is supplied.

## Homepage narrative

Keep the homepage to six purposeful sections. Completed work appears early and repeatedly.

### 1. Identity — specialist statement

Use an asymmetric split hero: a graphite or panel-white text plane on the left and Sawmill Brewery `5.jpg` as a tall image on the right. Include a clear H1, one short positioning paragraph, one primary CTA (`Discuss a project` or verified equivalent), and a small project caption. Do not add a second filled CTA, scroll mouse, badge, stat, or decorative snowflake.

The copy should establish the actual work, for example: specialist commercial cool rooms and insulated-panel environments for Auckland food, healthcare, and logistics businesses. Final wording must be verified.

### 2. Proof — selected environments

Move completed work directly after the hero. Use three differently scaled image/text compositions rather than cards:

- Primor Produce as the wide anchor.
- Healthcare Logistics as a tall counterpoint.
- Aroa Biosurgery as the precise clinical proof.

Each item needs only verified project name, sector, location/scope, and a direct project link.

### 3. Capabilities — a concise scope register

Present capabilities as ruled typographic rows, not icon cards. Each row should connect a real service to a real project image or project reference. Current service labels require business verification; likely groups are commercial cool rooms/freezers, insulated production or controlled environments, and repair/maintenance.

### 4. Deeper proof — Primor Produce case-study excerpt

Use `40.jpg` at large scale, followed by `34-tidied.png` or `45.jpg` as a smaller supporting view. Add only verified scope, constraints, and outcome. This is the homepage's principal demonstration of capacity.

### 5. Credibility — work in use

Pair Manly Park Kitchen `17.jpg` with Simon Roadley's existing testimonial. Present it as one editorial quotation with attribution, not a testimonial carousel or a card grid. If Simon's role/title can be verified, include it.

### 6. Enquiry — direct handoff

Finish with a compact enquiry band that states service area, real response channel, and one clear action. It should lead naturally into a reduced footer. No generic motivational headline is needed.

## Project presentation

- The project index is an editorial work index, not a uniform gallery. Give the strongest project the largest opening image and let portrait projects retain portrait proportions.
- Each project page should read as a short case study: verified title/sector/location, concise scope, dominant hero, challenge or constraint, supplied work, outcome, and a deliberately sequenced image set.
- Remove generic summary-card iconography. Present project data in a simple ruled table or caption block aligned to the content grid.
- Never fabricate missing facts to fill a template. A short page with one excellent image is more credible than a long page built from unsupported copy.
- Use project-to-project navigation at the end so visitors continue through the proof before reaching the enquiry action.

## Navigation and footer

- Use a compact, solid navigation bar on panel white or graphite with a one-pixel lower rule. Avoid oversized transparent navigation and blur-heavy glass effects.
- Primary navigation: `Work`, `Capabilities` (page or homepage anchor), and `Contact`. Add pages only when they contain real content.
- Use a clean vector/transparent redraw of the existing panel-door symbol and wordmark. The current raster logo is not suitable as a navigation asset.
- The primary navigation action is a squared text/button treatment: `Discuss a project →`.
- The footer should contain only the verified logo/wordmark, navigation, legal links that exist, and real contact details. Remove placeholder social icons and dead links.

## Buttons and links

- Default corner radius: 0–2 px.
- Primary action: Panel Guys blue fill with graphite text, medium weight, and a directional arrow.
- Secondary action: text link with an underline or rule that extends on hover. Do not create a second filled button beside the primary action above the fold.
- Project links should make the image and title jointly clickable, with a visible keyboard focus state.
- Avoid pills, badges, icon boxes, inflated shadows, and hover effects that hide essential content until pointer interaction.

## Motion and interaction

- Motion should suggest assembly: a short reveal along a panel seam, a rule drawing across, or an image uncovering from one edge.
- Use 350–600 ms transitions with restrained easing. Limit scroll reveals to the first entrance of major images or text blocks.
- Image hover scale should not exceed approximately 1.02. Prefer caption/rule movement to dramatic zoom.
- Remove the bouncing mouse indicator and generic fade-up on every repeated item.
- Respect `prefers-reduced-motion`; all content must remain visible and understandable with animation disabled.

## Mobile adaptation

- Keep the hierarchy, not the desktop geometry. Stack the hero copy, primary action, portrait Sawmill image, then caption.
- Use edge-to-edge imagery selectively while keeping text on the 4-column grid.
- Preserve portrait photography at roughly 3:4 or natural ratio; avoid shallow crops that erase depth.
- Do not turn the project index into identical cards. Alternate full-width images with inset captioned images through spacing and scale.
- Use a compact menu with a clear close state, 44 px minimum touch targets, and no oversized logo.
- Keep the enquiry form single-column and move supporting contact information after the principal action if necessary.

## Existing elements to preserve

- The Panel Guys name and the panel/door motif in the logo.
- The bright blue brand cue, refined into one controlled accent.
- All real project photography, retained as original source material.
- Named project/client material, once verified.
- Simon Roadley's testimonial.
- The simple core information architecture of Home, Work, and Contact.
- The working contact form flow, subject to real contact details and copy.

## Elements to change substantially

- Replace the centred, dark-overlay hero with the editorial split hero.
- Move project proof ahead of generic service marketing.
- Remove service cards, testimonial cards, icon boxes, the decorative snowflake, dotted `industrial-grid` backgrounds, excessive radius/shadow, and repeated centred CTA sections.
- Replace Inter/Outfit with the defined typography system.
- Reduce the number of blues/navies to the controlled palette.
- Rebuild the project index and detail pages around each photograph's native orientation and project depth.
- Redraw the logo as a clean vector/transparent asset; do not use the existing glowing raster in navigation.
- Consolidate and verify all business details before launch.

## Discovery audit and limitations

### Current routes and hierarchy

- Implemented: home, projects index, five project detail routes, and contact.
- `/about` and `/services` are referenced in constants/footer but return 404.
- Project detail pages omit the global navigation and footer.
- An unknown project ID returns a visually incomplete 200 response rather than a proper not-found page.
- The home page places three service cards before project proof, hides some useful location information until hover, then repeats generic reassurance, projects, testimonial, and CTA patterns.
- Portrait photography is repeatedly forced into square, 3:2, or 16:9 containers, losing the strongest aisle depth.

### Content integrity

- Footer constants currently use a US-format placeholder phone number, `.com` email, and `123 Industrial Way`; the contact page uses a different 0800 number, `.co.nz` email, and Greater Auckland.
- Social, privacy, and terms links are placeholders.
- Several current claims appear template-derived or unverified, including project sizes, project durations, free consultation/quote language, 24/7 availability, emergency response, wine-cellar scope, energy efficiency, and generic compliance/performance statements.
- `Industrial Scale Rooms` is unclear and may be an incorrect service label.
- Gilmores and Tokyo Foods photography is not represented in the project data at all.
- Primor's project gallery repeats `43.jpg`.
- One testimonial is available. Do not visually imply three or generate more to fill a grid.

### Asset inventory

- 18 project photographs across seven folders, plus one 1536 × 1024 raster logo.
- Total image payload in the repository is approximately 57.6 MB; individual originals are about 2.1–4.1 MB.
- Most project photographs are phone-camera documentation rather than commissioned architectural photography. They are credible and often compositionally strong, but exposure, perspective, clutter, and white balance vary.
- The current logo file is approximately 2.1 MB, contains a dark glowing background despite its `logo-no-bg.png` name, and has no vector equivalent.
- There are no dedicated team portraits, installation/process sequence, exterior/site context, close technical details, before/after pairs, certifications, partner/client marks, or confirmed project outcome data.

## Asset and content requests before final implementation

1. Confirm legal business name, service area, phone, email, physical address if public, hours, emergency/maintenance availability, and preferred enquiry wording.
2. Verify every project name, location, sector, scope, duration, scale, constraints, and measurable outcome. Delete any unsupported claim.
3. Confirm permission to name and show each client/site, especially healthcare and logistics work.
4. Add Gilmores and Tokyo Foods to the project inventory if approved, with concise scope notes.
5. Request 3–6 additional images for Aroa Biosurgery and at least one exterior/context, detail, and in-progress image for future case studies.
6. Obtain Simon Roadley's correct title/organisation and approval for the testimonial wording.
7. Obtain or recreate a flat vector logo and define the exact approved brand blue.
8. If possible, commission one short photography pass focused on completed wide establishing shots, square-on panel/door details, installers at work, and consistent before/after viewpoints.

## Non-negotiable anti-generic rules

- No bento grid, generic feature-card row, fake stat strip, decorative badge cluster, icon-box section, or gradient headline.
- No more than one primary CTA above the fold.
- No section exists solely to say the business is professional, reliable, or high quality; show a project, fact, or attributable statement instead.
- No repeated section template more than twice in succession.
- No image is treated as interchangeable decoration. Every major photograph must be tied to a named project or specific verified capability.
- No fabricated copy or stock imagery.
- If removing a container's border, radius, shadow, and fill does not reduce comprehension or usability, remove the container.
