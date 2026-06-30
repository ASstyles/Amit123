# Amit Ke Circuits PRD Review

Reviewed against:
- `Microsite PRD.docx`
- `PRD The AR Experiment (1).docx`

## Extracted Requirements

Phase 1 microsite must provide a mobile-first, story-led Amit Ke Circuits journey with:
- Opening spark/circuit scene and Hinglish positioning line.
- Story Mode and Quick Mode navigation.
- Seven prop-led member reveals: Sopan, Prashant, Prachi, Amit, Tejaswini, Shikha, Shubham.
- Reusable `member.html?id=...` detail page powered by `js/data.js`.
- Member contact CTAs, referral clarity, right/not-ideal referrals, downloads, proof, and sticky mobile actions.
- Toolkit page and downloadable resources.
- Basic analytics hooks for journey, member, WhatsApp, call, download, toolkit, and AR actions.
- Optional AR entry point that does not block the normal microsite.

AR POC must provide:
- Mobile page with camera permission flow.
- Badge/marker scanning path.
- Amit Ke Circuits overlay with glow/pulse animation.
- "Meet the Circuits" CTA.
- Fallback copy and "Open Microsite" CTA.

## Implementation Status

Implemented:
- Static HTML/CSS/JavaScript microsite with no backend requirement.
- Homepage story flow, prop map, reveal panel, quick member list, guide, toolkit CTA, final referral CTA.
- Reusable member detail page backed by `window.CIRCUIT_TEAM` in `js/data.js`.
- Placeholder downloadable PDFs for all seven members.
- Basic analytics wrapper in `js/analytics.js`.
- AR page with camera permission flow, AR.js/A-Frame loading, overlay, member icon orbit, CTA, and fallback.
- Homepage AR section and mobile sticky AR action.
- Presentation-safe AR preview mode for demos where camera, HTTPS, or marker tracking is not available.
- Printable/openable `ar-marker.html` test marker page for the current AR.js validation flow.
- `assets/ar/circuit-ar-badge.png` added for the PRD file structure.

Known limitation:
- `js/ar.js` currently uses AR.js's built-in `hiro` marker for quick technical validation. Use `ar-marker.html` for this demo flow. For the final printed Circuit AR Badge, convert the badge artwork into an AR.js `.patt` marker or MindAR `.mind` image target and update the marker configuration.

## Test Notes

Local browser testing can verify page rendering, navigation, downloads, and the AR preview path.

Real AR marker testing requires:
- HTTPS hosting or localhost on a mobile browser.
- Android Chrome and optionally iPhone Safari.
- Printed marker at roughly 35 mm or larger.
- Indoor lighting test at 20-40 cm distance.
