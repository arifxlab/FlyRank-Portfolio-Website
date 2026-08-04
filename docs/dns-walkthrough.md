Dattebayo Arif 🔥😎

Excellent. The engineering foundation is now almost complete.

Current Sprint 00 status:

✅ README.md
✅ SPEC.md
✅ PLAN.md
✅ WHY_THIS_PROJECT.md
✅ RULES.md

Now we complete the final documentation piece required by FlyRank:

Step 6 — DNS Walkthrough Documentation

File:

docs/dns-walkthrough.md

Purpose:

This document proves we understand the infrastructure behind a website:

DNS
Domains
CNAME records
Resolvers
Nameservers
Hosting connection
HTTPS flow

This is not just documentation for submission — it is a real engineering reference.

Open:

docs/dns-walkthrough.md

Replace the complete file with:

# DNS Walkthrough

## Purpose

This document explains how DNS works when connecting a custom domain to a hosted website.

The goal is to understand what happens when a user enters a website address and how the request reaches the correct server.

---

# What is DNS?

DNS (Domain Name System) is the system that translates human-readable domain names into machine-readable IP addresses.

Humans use names like:


arifkhan.com


Computers communicate using:


IP addresses


DNS acts like the internet's phonebook by connecting domain names with the correct servers.

---

# What Happens When Someone Visits a Website?

When a user enters a website address:


https://example.com


the following process happens:

---

## Step 1 — User Request

The browser checks if it already knows the website information through:

- Browser cache
- Operating system cache

If the information is not available, it asks a DNS resolver.

---

## Step 2 — DNS Resolver

The DNS resolver receives the request.

Example:


Where is example.com hosted?


The resolver searches through DNS infrastructure to find the answer.

---

## Step 3 — Nameserver Lookup

The resolver contacts the domain's nameservers.

Nameservers store DNS records that contain information about:

- Domain ownership
- Hosting destination
- Mail services
- Other configurations

---

## Step 4 — DNS Record Response

The nameserver returns the required DNS record.

For a website, this may be:

- A record
- AAAA record
- CNAME record

The resolver sends this information back to the browser.

---

## Step 5 — Browser Connects To Hosting Provider

The browser now knows where the website is hosted.

It sends an HTTPS request to the hosting provider.

Example:


Browser
|
|
DNS Lookup
|
|
Netlify Hosting
|
|
Website Response


The hosting provider returns the website files.

---

# What is a CNAME Record?

A CNAME (Canonical Name) record creates an alias from one domain name to another domain name.

Instead of pointing directly to an IP address, it points to another hostname.

Example:


portfolio.example.com

CNAME

arif-portfolio.netlify.app


This means:

"When someone visits portfolio.example.com, use the website hosted at arif-portfolio.netlify.app."

---

# Why Use CNAME?

Hosting providers use changing infrastructure.

The actual server IP may change over time.

A CNAME allows the hosting provider to manage infrastructure changes without requiring users to update DNS records manually.

---

# Future FlyRank Subdomain Process

When a FlyRank subdomain is provided:

Example:


arif.flyrank.ai


The process will be:

1. FlyRank creates the DNS record.
2. The domain points toward the hosting provider.
3. Netlify receives the custom domain configuration.
4. SSL certificate is generated.
5. HTTPS becomes active.
6. The website is available through the FlyRank domain.

---

# HTTPS and SSL

HTTPS encrypts communication between the user and the website.

When a custom domain is connected:

1. Hosting provider verifies domain ownership.
2. SSL certificate is generated.
3. Browser receives certificate information.
4. The padlock icon appears.

This allows users to safely access the website.

---

# Summary

The complete flow is:


User enters website address

    ↓

DNS Resolver finds domain information

    ↓

Nameserver returns DNS record

    ↓

CNAME points to hosting provider

    ↓

Hosting provider serves website

    ↓

HTTPS connection established

    ↓

Website loads in browser


DNS is the bridge between a human-friendly website address and the infras