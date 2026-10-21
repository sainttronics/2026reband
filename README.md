# Sainttronics rebuild

Next.js foundation for the Sainttronics website redesign.

## Design direction

- Charcoal backgrounds and amber accents
- Retro-computing / engineering workshop aesthetic
- Responsive homepage, project index and example technical article
- Minimal custom publishing tool planned for a later milestone

## Local development

Requirements: Node.js 20.9+ and npm.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Run checks with `npm run lint` and `npm run build`.

## Current milestone

- Public homepage and project index
- Example article template
- Shared site header/footer and responsive styles

Not yet implemented: admin editor, authentication, database, scheduled publishing worker, real content migration, production deployment.

Scheduled publication should use `Europe/Dublin` in the admin UI and store instants in UTC. Drafts must remain private until published server-side.
