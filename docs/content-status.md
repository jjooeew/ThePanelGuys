# Client content integration — updated 25 September 2026

Source: client-supplied `The Panel Guys Questionaire.odt` and `Logo TPG.2 png.png`.

Later sources take precedence: Joe's corrections on 20 September and Grant Kiely's two emails dated 21 September, supplied by Joe on 23 September.

## Incorporated

- The supplied full logo, including its chiller/freezer tagline. The original raster is preserved in `public/brand/the-panel-guys.png`; CSS trims only blank outside margins. No redraw, invented compact mark or recolouring.
- Navy/grey branding, preserving the approved typography, photography, layout and project hierarchy.
- Design and construction of custom commercial cool rooms and freezers; storage rooms; repairs and maintenance.
- Coverage from Northland to Taupō, based on the specific “Top of North Island down to Taupo” answer rather than the broader introductory wording.
- Revised homepage, service register, enquiry copy, footer and search/social metadata. Sharing currently uses the supplied logo, avoiding the previous preview's outdated headline.
- No pricing or new guarantees.
- Logo enlarged in the header and footer, with header spacing adjusted to preserve clearance.
- Public email corrected to `enquiry@thepanelguys.co.nz` throughout the contact page, including mail links and the error fallback. This supersedes the earlier confirmation of the `info` address.
- Hours published as 4 am–6 pm, 6 days a week. Specific weekdays have not been supplied and are not assumed. These hours supersede 6:30 am–6 pm.
- Prompt pricing/quotes and assistance during the planning phase added to the homepage enquiry section and contact introduction. No exact turnaround or free-service guarantee is claimed.

## Confirmed by Joe

- The correct experience figure is 25 years. The earlier 15-year figure was an invented placeholder and must not be used. No new experience claim is added as part of the 23 September edits.
- Existing project names, photographs and testimonials are accurate and approved for publication. Grant will still review the full website for final sign-off.
- The first invoice has been paid, as reported by Joe on 23 September.

## Awaiting client confirmation

- Grant's public phone number: requested in his email but not included in the supplied text. Awaiting Joe's answer; no number is invented.
- The form's delivery recipient is configured separately by `CONTACT_TO_EMAIL` in Vercel. Updating the displayed email does not update that environment setting; verify it before the live delivery test.
- Exact repairs/maintenance scope, especially refrigeration equipment. Current wording is limited to enclosures.
- Extra project scope/outcome details are optional enhancements, not a publication-permission blocker.
- Vector/transparent/compact logo assets. A small-scale favicon and updated photography-based social composition can follow the approved asset pack.

## Remaining launch checks (not completed by this content update)

- Real email delivery and reply test against the intended Vercel environment.
- Privacy notice, canonical domain, sitemap and robots settings.
- Complete cross-device launch QA and client sign-off.
- Vercel deployment through the existing GitHub workflow; no Sites/Cloudflare adapter is needed for that workflow.

## Project updates — launch scope

- On 25 September, Joe deferred the client admin area. Project content stays in `app/constants.ts`; photography stays in `public/images/` and is hosted with the website.
- The experimental admin, database integration, migrations and upload endpoints have been removed. No remote database or owner account was created by this task.
- Future additions can be handled as data/photo updates followed by a normal deployment.
- See `launch-checklist.md` for the remaining release checks. No deployment or email delivery test has been performed by this cleanup.

`client-follow-up-email.md` is an archived, unsent draft that predates these confirmations. Joe is writing the client email himself. Do not send any email without his explicit approval.
