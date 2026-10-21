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

<!-- LOVABLE:BEGIN -->
- The project can also be self-hosted on Cloudflare Workers: `wrangler.jsonc` at the project root points at the Nitro `cloudflare-module` build output (`.output/server/index.mjs` + `.output/public`); deploy with `npm run deploy`. Keep `nodejs_compat` and the assets binding — the SSR worker needs both.
<!-- LOVABLE:END -->
