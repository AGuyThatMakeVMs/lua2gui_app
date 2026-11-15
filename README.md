# Lua 2 Gui App

Desktop Windows and Android app packaging of the Lua 2 Gui converter.

## Included
- The same converter, editor, static preview, hierarchy/inspector, component library, watermark, and RBXMX/ZIP/source export as the web project.
- Windows desktop app packaged as an x64 NSIS installer (.exe) with Electron.
- Android app packaged as a debug APK using Capacitor.
- Android export files are written under Documents/Lua2Gui and can be shared from the Android share sheet.
- No account or login required.

## Build locally
Requirements: Node.js 22; Windows build requires Windows; Android build requires Java 21 and Android SDK.

```bash
npm install
npm start
npm run build:win
npx cap add android
npm run cap:sync
```

Open the generated `android/` project in Android Studio, or run `cd android && ./gradlew assembleDebug`.

## GitHub Actions builds
Run **Actions → Build Lua 2 Gui apps → Run workflow**. The workflow builds:
- `Lua2Gui-Setup-1.0.0-x64.exe`
- `app-debug.apk` (unsigned debug APK)

Download both from the workflow run's Artifacts section. The APK is installable for testing but is not Play Store signed. A signed release requires a separately configured signing key.

## Project structure
- `index.html`, `assets/`: shared converter web UI and functionality.
- `electron/main.cjs`: secure desktop shell and external-link handling.
- `scripts/copy-web.mjs`: copies shared web app into the package.
- `capacitor.config.json`: Android wrapper configuration.
- `.github/workflows/build-apps.yml`: builds EXE and APK.

## Safety and functionality notes
The app does not execute arbitrary Luau in the converter. Preview remains a static simulation. The optional original LocalScript export is source text; Roblox Studio may execute it after import, so only run scripts you trust. Android app requires internet for Google Fonts and Flaticon icon fonts; core converter assets are bundled locally.

See [CHANGELOG.md](CHANGELOG.md).
