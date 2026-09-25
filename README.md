# The Panel Guys

Next.js website hosted on Vercel. Project content is maintained in a data file;
photographs are served with the website. No database or client admin is required.

## Development

```sh
npm install
npm run dev
```

Open `http://localhost:3000`.

## Updating projects

- Edit `PROJECTS` in `app/constants.ts`: name, category, location, description,
  cover image and gallery paths. Keep existing IDs to preserve project URLs.
- Place photographs in `public/images/<project-name>/` and reference them as
  `/images/<project-name>/<filename>`. These are hosted by Vercel with the site;
  no separate storage account is needed for launch.
- `lib/projects.ts` supplies image dimensions and display ordering (Primor first).
  Update its dimensions mapping for any new image sizes, especially portraits.
- Preview changes, then use the existing GitHub → Vercel deployment workflow.
  Future project changes need a data/photo update and deployment, not an admin login.

## Contact form

Copy the variable names in `.env.example` into local/Vercel environment settings.
Configure Resend with a verified sender and the correct recipient. Never commit
credentials. Real email delivery needs a separately approved test.

## Checks

```sh
npm run lint
node --test tests/*.test.mjs
npm run build
```

See [launch checklist](docs/launch-checklist.md) and
[content status](docs/content-status.md) for remaining handover items.
