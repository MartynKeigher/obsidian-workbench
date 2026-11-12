# Contributing to Workbench for Obsidian

These notes are for working on the theme itself. If you only want to use it, see the
[README](README.md).

## Requirements

Node 20 or later. The build has no dependencies, so there's nothing to install.

## Building

```bash
npm run build
```

## How the repository fits together

- `theme/src/` holds the sources. `npm run build` joins them into the root `theme.css` and copies
  `theme/manifest.json` to the root. Both are committed, because Obsidian installs themes from the
  repository root. Don't edit the root `theme.css` or `manifest.json` by hand.
- `theme/src/tokens.css` is Workbench UI's token file with only its selectors changed. To update to
  a new [Workbench UI](https://github.com/MartynKeigher/workbench-ui) release, paste the new values
  in.
- `theme/fonts/` holds Source Sans 3, Source Code Pro and their licences. The build embeds the fonts named in
  `theme/src/fonts.css` into `theme.css` as data URIs.
- To try a change, copy the built `theme.css` and `manifest.json` into
  `<your vault>/.obsidian/themes/Workbench/` and reload Obsidian.

## Releasing

1. Bump `version` in `theme/manifest.json` and run `npm run build`.
2. Add the new version to `versions.json`, mapped to the `minAppVersion` it needs.
3. If the look has changed, retake the README screenshots in `images/` and the 512×288
   `cover.png` used by the community theme browser.
