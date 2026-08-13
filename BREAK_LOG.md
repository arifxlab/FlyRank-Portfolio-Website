# Portfolio Hardening / Break Log

## FlyRank Week 09 — Break Your Own Site

**Project:** Arif Khan Portfolio Website

**Audit Date:** August 13, 2026

**Goal:** Deliberately test the portfolio's failure cases, validate findability and performance, and fix issues discovered during hardening.

---

## 1. Form Failure Testing

### Empty submission

**Test:** Submitted the contact form without entering any fields.

**Result:** Browser validation prevented submission and displayed the required-field message.

**Classification:** Known limitation / expected browser validation

**Status:** Passed

---

### Invalid email

**Test:** Entered an invalid email address.

**Result:** Browser validation rejected the value and required a valid email format.

**Classification:** Known limitation / expected browser validation

**Status:** Passed

---

### Valid submission

**Test:** Submitted the form using valid name, email, and message values.

**Result:** Form submitted successfully and displayed the success confirmation.

**Classification:** Working as intended

**Status:** Passed

---

### Rapid duplicate submission

**Test:** Submitted the valid form twice rapidly.

**Result:** Only one submission was received during testing.

**Classification:** Working as intended

**Status:** Passed

---

## 2. Cross-Device / Browser Testing

The live portfolio was opened on additional mobile phones and desktop devices.

**Result:** The site loaded correctly and remained usable.

Verified:

- Navigation
- Hero section
- Project cards
- Contact form
- Footer
- External links
- Responsive layout

**Classification:** Working as intended

**Status:** Passed

---

## 3. External Link Testing

Verified the portfolio's important external destinations:

- GitHub profile
- RAGForge repository
- Dev Assistant AI repository
- LinkedIn profile
- Resume
- Google Calendar
- CarpeFlow repository

**Result:** URLs were verified and working.

**Classification:** Working as intended

**Status:** Passed

---

## 4. SEO / Social Metadata Testing

### Finding #1 — Duplicate Twitter image metadata

**Test:** Inspected both local and production HTML metadata.

**Finding:** The deployed site contained two `twitter:image` declarations, including an outdated `/og-image.png` path.

**Classification:** Fix-now

**Fix:** Removed the obsolete duplicate Twitter image metadata.

**Validation:**

- `npm run lint` — passed
- `npm run build` — passed
- `git diff --check` — passed
- Commit: `0aa0f79`
- Pushed to `main`
- Live Netlify HTML rechecked

**Production result:** Exactly one `twitter:image` remains and points to `/arif-khan-og-preview.png`.

**Status:** Fixed

---

## 5. Findability

### Search test

**Test:** Searched for:

`Arif Khan Backend AI Engineer`

**Result:** The portfolio appears in search results.

**Classification:** Working as intended

**Status:** Passed

---

## 6. Performance / Quality Audit

PageSpeed results:

| Category | Score |
|---|---:|
| Performance | 98 |
| Accessibility | 94 |
| Best Practices | 100 |
| SEO | 92 |
| Agentic Browsing | 2/3 |

No major performance blocker was identified during the audit.

Image assets were previously audited and were small:

- `hero.png` — approximately 13 KB
- `arif-khan-og-preview.png` — approximately 59 KB
- `favicon.svg` — approximately 9 KB
- `icons.svg` — approximately 5 KB

**Classification:** Working as intended

**Status:** Passed

---

## 7. Known Limitations

### Google Calendar

The Booking link currently points to the Google Calendar interface rather than a dedicated appointment-selection page.

This remains functional but could be replaced with a dedicated scheduling destination in the future.

**Classification:** Known limitation

**Status:** Accepted

---

### LinkedIn automated requests

LinkedIn blocks automated HTTP requests with HTTP 999.

The URL was manually verified through a normal browser session.

**Classification:** External-service limitation

**Status:** Accepted

---

## 8. Triage Summary

### Fix-now

| Finding | Action | Status |
|---|---|---|
| Duplicate Twitter image metadata | Removed obsolete `/og-image.png` tag | Fixed |

### Known limitations

| Finding | Reason | Status |
|---|---|---|
| Google Calendar uses general calendar interface | No dedicated scheduling page currently configured | Accepted |
| LinkedIn blocks automated HTTP checks | External service anti-automation behavior | Accepted |

---

## Final Hardening Status

**Break testing:** Passed

**Form validation:** Passed

**Cross-device testing:** Passed

**External links:** Passed

**Findability:** Passed

**Performance:** Passed

**SEO metadata:** Passed

**Fix-now findings:** Addressed

**Known limitations:** Documented

**Production verification:** Passed

**Status:** Ready for hardening review and Week 09 submission.
