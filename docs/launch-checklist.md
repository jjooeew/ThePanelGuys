# Launch checklist — 25 September 2026

Scope: public website only. Projects are maintained in `app/constants.ts` and
photographs in `public/images/`, served by the existing Vercel deployment. No
client admin, database, login or separate storage service is needed for launch.

## Required before client handover

- [ ] Obtain Grant's public phone number and add a clickable phone link to Contact.
  His supplied email requested this number but did not include it.
- [ ] Ask Grant to review the current preview and give final approval. Already
  confirmed: enquiry@thepanelguys.co.nz; 4 am–6 pm, six days a week; project
  names/photos/testimonial; 25 years is the correct figure if experience is used.
  Do not assume specific working weekdays or new service guarantees.
- [ ] Confirm Vercel production has `RESEND_API_KEY`, `CONTACT_FROM_EMAIL` using
  a verified sender, and `CONTACT_TO_EMAIL=enquiry@thepanelguys.co.nz`.
  Updating the displayed address does not update the delivery recipient.
- [ ] With Joe's approval, send one labelled contact-form test and confirm Grant
  receives it and can reply to the submitter. Check inbox and spam. No test email
  has been sent as part of this cleanup.
- [ ] Confirm the intended public domain and access to its DNS settings. In Vercel,
  verify domain assignment, HTTPS and the chosen www/non-www redirect. Preserve
  existing email/MX records. Live hosting/DNS settings were not inspected here.
- [ ] Add and approve a plain-language privacy notice for enquiry data; link it
  beside the form and in the footer. Confirm actual storage/retention practices.
- [ ] Set the canonical production URL and add sitemap/robots metadata. These
  files are currently absent; metadata currently derives its base from the request
  host. Keep previews out of search indexing and verify production is crawlable.
- [ ] Complete browser checks on phone and desktop: menu, logo sizing, image crops,
  all seven project pages, keyboard focus, form validation/success/failure states,
  email/phone links, and missing-page handling.
- [ ] Push the reviewed release through the existing GitHub → Vercel workflow.
  Confirm the correct commit/environment is deployed and smoke-test the final domain.
  This cleanup does not push, deploy, change DNS or send emails.

## Can follow launch

- Additional project descriptions and photography.
- Vector/transparent logo variants, branded favicon and refined social-share image.
- Optional analytics and search-console registration.
- Client self-service project management only if there is a real need later.

## Maintenance and handover

Joe can add future projects by editing the data file, adding optimized photographs
and redeploying. Keep project IDs stable. Image dimensions/order are handled in
`lib/projects.ts`; add dimension overrides for new image sizes. Keep originals
backed up. No new external storage was provisioned by this work.

Record the approved release commit and previous healthy Vercel deployment for
rollback. Confirm who maintains hosting/domain renewals and future content changes.
The remaining $500 of the agreed $1,000 fee can be invoiced according to the agreed
handover terms; it is not a technical deployment requirement.
