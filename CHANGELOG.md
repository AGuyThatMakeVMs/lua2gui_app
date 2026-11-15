# Changelog

## [1.0.0] - 2026-11-15

### Added
- Created the first Lua 2 Gui desktop and Android app project.
- Packaged the existing web converter, preview, UI Library Hub, hierarchy inspector, and RBXMX/ZIP/source exports.
- Added Electron desktop shell and Windows x64 NSIS installer workflow.
- Added Capacitor Android shell and APK build workflow.
- Added Android file export integration using Capacitor Filesystem and Share plugins.
- Added README build and artifact instructions.

### Known limitations
- Windows installer targets x64 Windows.
- Android workflow creates an unsigned debug APK for direct testing, not a Play Store release.
- Google Fonts and Flaticon icon fonts need internet access; converter code and styles are bundled.
- The preview is static and does not execute Luau runtime behavior.
