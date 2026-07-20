# Housing Direct — Jekyll site

The marketing site converted to Jekyll. All pages share one layout, the header/footer live in one place, and the blog is generated from real posts.

## Run locally

```bash
bundle install
bundle exec jekyll serve
# → http://localhost:4000
```

## Structure

```
_config.yml            Site settings (set url/baseurl before deploying)
_layouts/default.html  Shared <head>, header include, footer include
_layouts/post.html     Blog article chrome (byline, cover, share bar, "Keep reading")
_includes/header.html  Site header — nav highlighting + per-page CTA button
_includes/footer.html  Site footer
_includes/post-card.html  Blog card used by the index grid and related-posts
_posts/                Blog posts (one per article, named YYYY-MM-DD-slug.html)
blog/index.html        Blog listing — featured slot + grid, generated from _posts
assets/                marketing.css, hd_logo.svg, img/, image-slot.js
*.html                 The pages (about, contact, for-landlords, …)
```

## Page front matter

Each page controls its own metadata:

```yaml
---
layout: default
title: "For Landlords"                        # short title
tab_title: "For Landlords · Housing Direct"   # exact <title> tag
description: "…"                              # meta description
permalink: /for-landlords/
nav_active: landlords    # home | landlords | councils | housing-teams (omit for none)
header_cta: list         # "list" → List your property button; omit → Book a demo
---
```

## Adding a blog post

Create `_posts/YYYY-MM-DD-your-slug.html`:

```yaml
---
title: "Post title"
description: "Standfirst / card excerpt."
category: Compliance
author: Daniel Okoro          # defaults to "Housing Direct Team"
author_role: Head of Product  # defaults to "Editorial"
read_time: 4 min read
featured: true                # optional — puts it in the featured slot on /blog/
---
<p class="lead-in">Opening paragraph…</p>
<h2>Section</h2>
<p>…</p>
```

The listing page, related-posts section, dates and URLs all update automatically. Posts publish at `/blog/<slug>/`.

## Deploying to GitHub Pages

This uses Jekyll 4, so use the Actions-based deploy (Settings → Pages → Source: **GitHub Actions**, pick the Jekyll workflow). For a *project* site (served at `https://user.github.io/repo/`), set in `_config.yml`:

```yaml
url: "https://user.github.io"
baseurl: "/repo"
```

All internal links use `relative_url`, so they'll respect the baseurl.

## Notes on the conversion

- **Blog posts**: only one article ("Why councils make better tenants…") had full content in the original bundle — the other six cards linked to the same page. They're now individual stub posts carrying their real titles, dates, categories and excerpts, each marked with a `TODO` comment where the body content goes.
- **Careers**: `/careers/` is driven by `_data/roles.yml`. With an empty list it shows the "No open roles right now" state (the current setup); add entries (title, team, location, type, optional `apply_url`) and it switches to the jobs list automatically. The separate `careers-empty.html` page from the original bundle is gone — both states live in one page now.
- **`image-slot.js`** wasn't referenced by any page (it's a leftover editor scaffold); it's kept in `assets/js/` in case you want it, and is safe to delete.
- Sign in and "List your property" buttons still point to `#` as in the original.
