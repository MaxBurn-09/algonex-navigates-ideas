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
