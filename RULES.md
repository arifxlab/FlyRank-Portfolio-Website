# Project Engineering Rules

## Project Name

Arif Khan Portfolio Website

---

# 1. Development Philosophy

This project follows production-oriented engineering practices.

The goal is not only to make a website work, but to build something that is:

- Clean
- Maintainable
- Understandable
- Professional
- Easy to extend

Every implementation decision should have a reason.

---

# 2. File Management Rules

## Creating Files

Before creating a new file:

- Understand its purpose
- Decide where it belongs
- Avoid unnecessary files

No random file creation.

---

## Modifying Files

When changing existing files:

1. Read the complete file.
2. Understand the current structure.
3. Apply the required changes.
4. Verify the complete file.
5. Test before committing.

Avoid partial edits that create inconsistent code.

---

# 3. Code Quality Rules

Code must be:

- Readable
- Simple
- Reusable
- Properly structured

Avoid:

- Duplicate code
- Unnecessary dependencies
- Overengineering
- Temporary hacks

---

# 4. Git Workflow Rules

Git commits must represent meaningful changes.

## Commit Format

Use:


type: description


Examples:


feat: create portfolio hero section

fix: correct responsive navigation

docs: update deployment guide

chore: configure project tooling


Avoid:


update

changes

final

test123


---

# 5. Documentation Rules

Every major feature or decision should be documented.

Required project documents:


README.md
SPEC.md
PLAN.md
WHY_THIS_PROJECT.md
RULES.md


Infrastructure documentation:


docs/
└── dns-walkthrough.md


---

# 6. Testing Rules

Before deployment:

Verify:

- Application runs locally
- Production build succeeds
- All links work
- No console errors exist
- Mobile layout works

---

# 7. Deployment Rules

Before publishing:

Check:

- Production build completed
- HTTPS enabled
- Public URL accessible
- Private browser testing completed

Deployment should always represent a stable version.

---

# 8. Portfolio Quality Rules

Everything visible publicly must be:

- Professional
- Recruiter-friendly
- Accurate
- Easy to understand

Avoid:

- Placeholder text
- Broken links
- Generic descriptions

---

# 9. Dependency Rules

Before adding a dependency:

Ask:

- Do we actually need it?
- Does it improve the project?
- Is there a simpler solution?

Prefer lightweight and trusted tools.

---

# 10. FlyRank Submission Rules

Final submission must include:

## Deliverables

- Live HTTPS URL
- DNS walkthrough
- Publicly accessible website

## Verification

The project must be tested:

- Logged out
- Private browser window
- Different device if possible

---

# 11. Learning Rules

Do not blindly copy solutions.

For every technology used, understand:

- Why it exists
- How it works
- When to use it
- What alternatives exist

The goal is engineering knowledge, not only completion.

---

# 12. Completion Standard

A feature is complete only when:

1. Implementation finished
2. Tested successfully
3. Documented if necessary
4. Committed to Git

---

# Project Principle

Build like an engineer.

Document like a professional.

Deploy like it matters.