<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules
- Club facts (contacts, names, address, links, PDF) live only in `src/lib/site.ts`; page copy in `src/lib/content.ts` — single source so facts never drift between pages.
- Photos are CDN assets (WebP `-lg`/`-sm` pairs) registered in `src/lib/photos.ts` and rendered via `components/site/Photo` — keeps the repo light and images responsive.
- Each menu section is its own route with its own `head()` (via `lib/seo.ts`) — shareable URLs and per-page SEO.
- Never put `backdrop-filter` on an element that contains `position: fixed` children (it breaks the mobile menu overlay).
