# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## TODO: 13.8.2025

komponenta: co treba urobit

- NoteActions.jsx:

  1. nastavit, kedy sa ma zobrazit archive note alebo restore note
  2. pridat eventy, pre jednotlive buttons

- NotesWorkspace.jsx:

  1. dorobit css, napr. rozlozenie: sirku pre jednotlive komponenty
  2. nastavit nezobrazovanie NoteActions.jsx, ked sa pridava nova note - zrejme podmienene renderovanie

- SettingsMenu.jsx:
  1. zabezpecit, aby ked sa na jeden z Buttonov kliklo, tak aby sa zobrazila endIcona
