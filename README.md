# Components for Nutriso Project
- components for Nutriso Project.
- Can use storybook to display components and confirm how to use.

## The way of install and use

```
npm i @pinkymini/nutriso-components-new
```

Add this setting content in ts.config.

```
"paths": {
  "@pinkymini/nutriso-components-new": ["node_modules/@pinkymini/nutriso-components-new/dist/*"]
},
```

import css in main.tsx.

```
import '@pinkymini/nutriso-components-new/dist/style.css';
```

## The way of run storybook

```
npm install
```
```
npm run storybook
```

## The requirements of environment
- node: ^18.0.0
- vite: ^5.2.0,
- react: ^18.2.0,
- tailwindcss: ^3.4.3,