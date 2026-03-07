# Kokomo Sunset Resort Development Details

This document provides a detailed breakdown of features, components, and steps for building the resort website using Next.js, React, and Tailwind CSS. It’s organized so that **a developer or designer can build both the public frontend and the corresponding admin panel** that allows non‑technical staff to manage every part of the site.

## Admin Panel Overview

The admin panel (or headless CMS) should mirror the structure of the public site but present it in an editable UI. When reading this plan focus not only on what the public pages need, but how those data models map to admin forms and screens.

### Core requirements

- **Authentication & roles** – secure login, roles (admin, editor, marketer) and permission checks on every route.
- **Dashboard** – quick stats (total bookings, new messages, visitors) and shortcuts to common content types.
- **Content types** – CRUD editors for pages, rooms, amenities, offers, packages, gallery items, blog posts, etc. Each item should include fields for text, images, and SEO metadata.
- **Media library** – upload/manage images and files, with drag‑and‑drop and cropping.
- **Site settings** – contact info, social links, opening hours, theme/style selection, SEO defaults.
- **SEO controls** – per‑item meta title, description, canonical URL, schema markup, and sitemap management.
- **User management** – create/edit users, assign roles, view activity logs.
- **Marketing & subscriptions** – manage subscriber list, send email campaigns, track open/click rates, create promotional offers.
- **Design & theme** – allow selecting a theme or setting colors/fonts; preview changes live.
- **Extensibility** – plugin/module system so new features (e.g. reviews, events) can be added without touching core.
- **API endpoints** – provide REST/GraphQL interfaces used by both admin and public frontends; support real‑time webhooks for ISR.

> The rest of this document describes the public site structure and data models; refer back to this section to translate those into admin screens during implementation.

## 1. Project Setup

- **Framework**: Next.js 13+ with the new `app` directory.
- **Language**: TypeScript.
- **Styling**: Tailwind CSS with configuration already present.
- **Existing structure**: `src/app`, `src/components`, `src/data` containing initial files.

## 2. Pages and Routes

Each page corresponds to a user-facing route with specific components and data requirements:

1. **Home (`/`)**
   - Hero banner and introduction.
   - Overview sections for rooms, offers, packages, dining, etc.
   - Call-to-action buttons linking to booking or contact.

2. **Accommodations (`/accommodations`)**
   - List all rooms from `src/data/rooms.ts`.
   - Each card links to the dynamic detail page.
   - Filtering by type or capacity may be added later.

3. **Room Detail (`/accommodations/[id]`)**
   - Show name, description, gallery of images, list of amenities.
   - Booking button that navigates to `/booking` with room preselected.

4. **Amenities (`/amenities`)**
   - Display resort facilities like pool, spa, fitness center.
   - Could include a small gallery or icons.

5. **Booking (`/booking`)**
   - Form capturing guest name, contact info, dates, room choice, party size.
   - Front-end validation (required fields, date logic).
   - Submit to `/api/booking` for processing.
   - Show success or error message.

6. **Contact (`/contact`)**
   - Form for inquiries: name, email, message.
   - API route `/api/contact` to send email or store data.
   - Include resort address, phone, map embed.

7. **Dining (`/dining`)**
   - Outline restaurants, menus, meal times.
   - Could include images or downloadable menus.

8. **Gallery (`/gallery`)**
   - Visual showcase of the resort.
   - Filter by categories: rooms, dining, amenities, events.

9. **Offers (`/offers`)**
   - List current promotions, discount codes.
   - Possibility to display expiration date or terms.

10. **Packages (`/packages`)
    - Predefined bundles (e.g., "Romantic Getaway", "Family Fun").
    - Details of what's included and pricing.

## 3. Components

Reusable React components:

- `Navbar` and `Footer` for global layout.
- `Hero` for banner sections.
- `Accommodations` for room list/grid.
- `Amenities`, `Dining`, `Gallery`, `Packages`, `Offers` for content blocks.
- `BookingForm`: controlled form logic split into smaller input components.
- `ContactForm`.
- `Feedback`/`FAQ` optional helpers.
- `FloatingButton` for persistent call-to-action (e.g., Book Now).
- `ThemeProvider` & `ThemeSwitcher` for dark/light modes.

Components should accept props for flexibility and be styleable via Tailwind classes.

## 4. Data Handling

- **Static Data**: `src/data/rooms.ts` exports an array of room objects.

### Booking Data

- Represent bookings with interface fields (roomId, guest details, dates, status, total price).
- Store temporarily in static `src/data/bookings.ts` during development; persist in a database for production (Postgres, Mongo, etc.).
- Administrators must be able to view / edit / cancel bookings via the admin panel.
- Use server-side validation to check room availability and date conflicts.

- **API Routes**:
  - `pages/api/booking.ts` (or under app router `/app/api/booking/route.ts`):
    - POST endpoint to create new booking; validates input, checks availability, calculates total, sends confirmation email, and writes to storage.
    - GET endpoint (admin-only) to list existing bookings, filter by status/date/room.
    - PUT / DELETE endpoints for updating or cancelling a booking.
  - `pages/api/contact.ts` or equivalent: similar handling for inquiries.
- **Future Expansion**: integrate with a headless CMS (Sanity, Contentful) or database (Postgres, Mongo).

## 5. Forms and Validation

- Use React Hook Form or simple controlled components.
- Client-side checks: required fields, correct email format, date logic (start < end), room availability.
- Server-side mirror validations in API routes.
- Success and error states displayed to user.

## 6. Theming and UX

- Implement light/dark theme toggle persisted via `localStorage` or cookies.
- Responsive design using Tailwind breakpoints (`sm`, `md`, `lg`, `xl`).
- Accessibility: ARIA roles, label associations, keyboard navigation.
- Optimize images with `next/image` and appropriate sizes.

## 7. SEO and Meta

- Add `metadata` or `<Head>` tags per page for title, description, Open Graph.
- Use semantic HTML elements (`<section>`, `<article>`, `<nav>`).

## 8. Testing

- Basic unit tests for components using Jest/React Testing Library (setup not present but can be added).
- E2E tests with Cypress or Playwright for form flows.

## 9. Deployment

- Host on Vercel for seamless Next.js support.
- Set environment variables for email service, etc.
- Use incremental static regeneration (ISR) for pages that update frequently.

## 10. Next Steps

1. Begin with layout components and global CSS.
2. Build home page skeleton, confirm navigation works.
3. Implement accommodations list and dynamic pages.
4. Add booking/contact forms and API endpoints.
5. Style, add interactivity, and finalize content.
6. Monitor analytics and user feedback for improvements.

---

## 11. Unmanageable Areas (without a CMS/Admin)

Several aspects of the current static code‑based setup are **hard or impossible to manage** for non‑developers:

- **Page content** (text, images, meta) requires editing source files and redeploying.
- **Room types, offers, packages** must be updated in `rooms.ts` or component props.
- **Gallery images** need manual file uploads and path edits in code.
- **Contact/booking information** (address, phone, email) is baked into components.
- **SEO metadata** is hard‑coded per page; no interface for marketing.
- **Design or theme changes** require developer changes to Tailwind config or CSS.
- **User management/permissions** are nonexistent; adding new admin users means editing auth logic.
- **Subscription lists & email marketing** have no backend; manual export/import via an external service is required.

Making these areas editable via an admin panel or headless CMS is the key goal stated earlier.  For implementation, each bullet above should correspond to a dedicated admin screen or setting:

1. **Page content** → generic "Pages" section with WYSIWYG editor and metadata fields.
2. **Rooms/offers/packages** → content types with repeatable fields, image galleries, pricing.
3. **Gallery** → media library plus category/tagging UI.
4. **Contact/booking info** → site settings section (text inputs, map embed).
5. **SEO metadata** → include on every editable entity and in global SEO settings.
6. **Design/theme** → theme chooser screen, custom color palette inputs.
7. **User management** → users list, roles assignment, activity log.
8. **Subscriptions/marketing** → subscriber list UI, campaign composer, analytics.

These mappings will guide the admin panel design and ensure the public site becomes fully manageable.

---

## 12. Building the Admin Panel – Step-by-step

In order to translate the requirements above into an operational interface, follow these general phases:

1. **Choose the infrastructure** – decide between an existing headless CMS (Strapi, Sanity, Directus) or building a custom admin area with Next.js / React. Consider factors like ease of use, flexibility, and integration with your existing codebase. chose best option for me free, i dont want to pay for cms, i want to build it myself with nextjs and react, i have experience with nextjs and react, so i will build it myself, i will use nextauth for authentication and authorization, i will use tailwind css for styling, i will use prisma for database management, i will use postgresql as database, i will use cloudinary for media storage, i will use nodemailer for sending emails, i will use react hook form for form handling, i will use yup for form validation, i will use jest and react testing library for testing, i will use cypress for e2e testing, i will deploy on vercel.
2. **Define the data schema** – model pages, rooms, offers, gallery items, settings, users, etc., and generate API endpoints or use the CMS schema editor.
3. **Setup authentication & roles** – use NextAuth, auth0, or the CMS’s built-in user system. Define roles and permission rules for each content type.
4. **Create UI scaffolding** – build or configure layout components (sidebar, header, dashboard tiles) and generic form/list components.
5. **Implement CRUD screens** – one per content type, reusing form components, including field validation and media upload widgets.
6. **Add media library** – implement drag-and-drop uploads, cropping, and automatic CDN storage (e.g., Cloudinary, S3).
7. **Include SEO & settings editors** – each editable item should expose meta fields; add a global settings page for site defaults.
8. **Marketing integration** – wire up newsletter subscription endpoints, campaign composer, and connect with services like Mailchimp or SendGrid.
9. **Theme & design controls** – add a theme section where colors, fonts, and layout variants can be chosen and previewed.
10. **Testing & feedback** – have non-technical staff exercise the admin, adjust UI/UX, and fix permission issues.
11. **Deploy and iterate** – configure webhooks or ISR to update the public site when admin users save content.

> This section ensures that anyone reading the plan can take the abstract requirements and execute a concrete admin panel design.

## 13. Additional Feature Ideas

To make the system feel even more like a full CMS/CRM platform, consider these future enhancements:

1. **Multilingual Support** – localize content, manage translations in admin, and use locale routing.
2. **Booking/Reservation Engine** – real-time availability, seasonal pricing, payment integration, confirmations.
3. **Event & Activity Management** – events creation, signups, ticketing.
4. **Blog / News / Announcements** – separate content model, social sharing.
5. **Analytics & Reporting** – dashboard stats, exportable reports for bookings and marketing.
7. **Customer Portal / Account Area** – guests view/manage bookings and profiles.
9. **Third‑party Integrations** – marketing platforms.
10. **Accessibility & Compliance Tools** – cookie consent, GDPR/CCPA data handling.
11. **Advanced SEO & Marketing** – schema editor, A/B testing, meta history.
12. **Performance Enhancements** – CDN, PWA support, image compression.
13. **Admin Customization & Extensibility** – plugin system, drag‑and‑drop theme builder.
 
15. **Security & Audit** – activity logs, two-factor auth, role access audits.

> Treat these as “future epics”; add them to your roadmap as needed during scaling and feature development.

---

> This file complements the high‑level plan with tangible details suited for implementation and collaboration. Feel free to adapt or expand with project milestones and task assignments.