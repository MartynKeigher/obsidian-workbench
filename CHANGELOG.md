# Changelog

All notable changes to Workbench are listed here, newest first.

## [1.2.0] - 2026-11-24

### Added
- Support for **Pop color** in the [Workbench Companion](https://github.com/MartynKeigher/obsidian-workbench-companion) plugin. Pick one of 8 colors (Amber, Cobalt, Fuchsia, Lime, Raspberry, Signal Orange, Tomato or Ultraviolet) for links, the active file, tags, ticked tasks, highlights, note callouts, the line under the note title and the Sync icon, with a shade for light mode and one for dark.

### Changed
- Reading-view links now use Obsidian's link color variables instead of the accent directly. They look the same.

### Notes
- Without the plugin, or with Pop color set to None, Workbench looks exactly as before.

## [1.1.1] - 2026-11-24

### Fixed
- The help and settings icons stay in the ribbon when the ribbon is shown. 1.1.0 moved them into the vault footer even with the ribbon on.

### Docs
- New README screenshots and cover image.

## [1.1.0] - 2026-11-24

### Changed
- Design tokens synced to Workbench UI v0.7.0: warmer parchment hover, row, tile and chip fills, a deeper green header bar and accent, and new ink colors for headings, captions, bold text and the status bar.
- Light mode now reads these tokens directly instead of repeating hard-coded colors. Dark mode is unchanged.

### Fixed
- With **Show ribbon** turned off, the vault help and settings icons no longer sit half off the window edge. They now appear at the end of the vault footer row, or at the foot of the rail when the left sidebar is collapsed.

## [1.0.1] - 2026-11-12

### Fixed
- With the Hidden window frame style, the collapsed right sidebar toggle is no longer hidden under the minimize, maximize and close buttons, and it lines up with the tab-list arrow beside it.

### Docs
- README updated with badges and install steps from Obsidian's theme gallery.

## [1.0.0] - 2026-11-12

### Added
- First release of Workbench: warm parchment panels, deep green headings and a dark top bar, in light and dark modes.
- Built-in **Source Sans 3** and **Source Code Pro** fonts.
- Styling for callouts, canvas, code, embeds, properties, tables, tags, tasks, sidebars, the ribbon, status bar, prompts and mobile.

[1.2.0]: https://github.com/MartynKeigher/obsidian-workbench/compare/1.1.1...1.2.0
[1.1.1]: https://github.com/MartynKeigher/obsidian-workbench/compare/1.1.0...1.1.1
[1.1.0]: https://github.com/MartynKeigher/obsidian-workbench/compare/1.0.1...1.1.0
[1.0.1]: https://github.com/MartynKeigher/obsidian-workbench/compare/1.0.0...1.0.1
[1.0.0]: https://github.com/MartynKeigher/obsidian-workbench/releases/tag/1.0.0
