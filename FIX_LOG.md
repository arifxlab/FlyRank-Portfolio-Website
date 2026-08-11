# Portfolio Trustworthiness Fix Log

## FlyRank Week 07

**Project:** Arif Khan Portfolio Website

**Audit Date:** August 11, 2026

**Goal:** Verify and improve the portfolio for mobile usability, readability, accessibility, performance, and link reliability.

---

## Baseline Audit

### Real Device

The portfolio was opened and tested on a physical mobile phone rather than relying only on browser responsive emulation.

### Mobile Results

| Area | Result |
|---|---|
| Navbar | Passed |
| Mobile navigation | Passed |
| Hero section | Passed |
| Hero buttons | Passed |
| About section | Passed |
| Projects section | Passed |
| Technology badges | Passed |
| Skills section | Passed |
| Contact section | Passed |
| Footer | Passed |
| Horizontal overflow | None detected |
| Text readability | Passed |
| Tap targets | Passed |
| Image containment | Passed |

### Baseline Conclusion

The existing portfolio was already responsive and usable on a real mobile device.

No major mobile layout defects were identified during the initial physical-device audit.

---

## Issues Found

### Issue #1 — LinkedIn URL Data Error

**Before**

The LinkedIn URL was stored using Markdown link syntax inside the application data instead of as a plain URL.

**Impact**

The link could potentially fail because the browser receives malformed URL data.

**Fix**

Replace the Markdown-formatted value with the direct LinkedIn URL.

**After**

LinkedIn is stored as a valid direct URL.

**Status:** Pending

---

### Issue #2 — Project Repository Links

**Before**

Some projects point to the general GitHub profile instead of their specific repositories.

**Impact**

A recruiter must manually search for the project repository.

**Fix**

Verify the actual repositories and use direct project repository URLs where available.

**After**

Project links should point directly to the corresponding repositories.

**Status:** Pending

---

### Issue #3 — Booking Link

**Before**

The Booking link points to the general Google Calendar interface.

**Impact**

The visitor may not immediately reach a booking workflow.

**Fix**

Verify the intended booking destination and replace the generic calendar URL if a dedicated booking link exists.

**After**

The Booking action should lead directly to the intended scheduling workflow.

**Status:** Pending

---

## Asset Audit

Current image assets are small:

- `hero.png` — approximately 13 KB
- `arif-khan-og-preview.png` — approximately 59 KB
- `favicon.svg` — approximately 9 KB
- `icons.svg` — approximately 5 KB

No oversized raster assets were identified during the initial audit.

---

## Accessibility / Readability Baseline

Initial physical-device inspection confirmed:

- Text is readable.
- Navigation is usable.
- Buttons are tappable.
- Project cards fit within the viewport.
- Technology badges wrap correctly.
- No horizontal scrolling was observed.
- Footer content fits the mobile viewport.

A further accessibility review will be performed before final submission.

---

## Before / After Evidence

### Before

Screenshots from the initial mobile audit will be stored in:

`docs/screenshots/`

### After

Screenshots will be captured after all fixes are completed.

---

## Final Verification

Pending:

- [ ] Verify all external links
- [ ] Fix LinkedIn URL
- [ ] Verify project repository URLs
- [ ] Verify booking destination
- [ ] Accessibility audit
- [ ] Tablet audit
- [ ] Desktop audit
- [ ] Performance/image audit
- [ ] Production build
- [ ] Final live-site verification
- [ ] Capture final screenshots
- [ ] Deploy updated portfolio
- [ ] Submit FlyRank track update