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
- The home page is React components under src/components/algonex reading all event facts from src/lib/event-config.ts; edit details only there so links and dates stay consistent.
- The home opener is a dismissible, session-scoped overlay in the shared root, with an inert underlying page; this preserves direct page access and prevents hidden controls receiving focus.
- Steel surfaces use the shared SteelBackdrop for layered lighting and scroll-linked depth; reduced-motion users receive static layers to preserve readability.
- Total prize displays and prize metadata derive from EVENT.prizePoolAmount and EVENT.prizePoolLabel; podium awards remain separate so changes to the total do not invent a new split.
- Home-specific light-mode art direction is scoped under .light-an .algonex-home; this keeps dark mode and standalone pages independent of home layout refinements.
- Home-page copy is never duplicated: each story (event intro, organisers, host) lives in exactly one section, and those single-instance blocks share the bordered emblem-left box layout in Sections2.tsx (University/Club) so new sections reuse it instead of repeating text.

