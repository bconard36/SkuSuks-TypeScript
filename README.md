# SkuSuks — TypeScript + Vite Refactor

A refactored version of a custom-coded e-commerce website. Originally written in vanilla JS, then refactored to React using Create React App, this newly refactored version incorporates TypeScript, TSX, and React Hook Form via Vite.

This is the third iteration of the SkuSuks project — the [Original Vanilla JS Build](https://github.com/bconard36/SkuSuks) and the [Create React App](https://github.com/bconard36/SkuSuks-React-Refactor) versions both live in separate repositories on my GitHub. This repo picks up where the CRA version left off and rebuilds it on Vite with full
TypeScript coverage.

# Status

Actively refactoring. Not yet feature-complete or production ready.

9 pages have been converted from `.js/.jsx` to `.tsx` so far. Current focus is on properly typing and capturing form components — starting with the contact form's input fields then moving to the donation page's radio button group.

# Folder List

public: houses all public files to be served - images: houses all relevant background, logo, product, and cycler images for all components
src: parent folder for components, stylesheets, and hooks - components: parent folder for all components (excluding Shopify specific and Root) - Accessories.jsx - App.jsx - Apparel.jsx - Cart.tsx - Contact.tsx - Donate.tsx - Footer.tsx - Home.tsx - ImageCycler.tsx - Mission.tsx - NavMenu.tsx - NewDrops.tsx - PreOrder.tsx - ProductCard.jsx - Products.jsx - RadioButton.tsx - data: parent folder for JSON data used for testing - db.json - hooks: parent folder for custom, reusable hooks - useClickOutside.ts - useFetch.ts - Shopify: parent folder for Shopify Storefront API - ShopifyClient.js (uses .env variables for domain, version, and token values) - useShopifyProducts.js (custom query and hook to gather product data from Shopify) - styles: houses the stylesheets for the program - cart.css - contact.css - imageCycler.css - index.css - navbar.css - notFound.css - pages.css - textStyles.css - main.jsx - types.ts
.gitignore
.esling.config.js
index.html
package.json
package-lock.json
README.md
tsconfig.json
tsconfig.node.json
vite.config.ts

# Progress Log

Keeping an honest, dated record of what got done and what got learned, rather than just a snapshot of the finished product.

## Day 1

- Converted 9 pages from `.js/.jsx` to `.tsx`.
- Refactored the `Contact` component to use `React Hook Form`.
  - Previous version tracked the state and change handlers of each form input.

## Day 2

- Refactored `Donate` and `Radio Button` from a manually-controlled `useState` radio group into a `React Hook Form`-managed group using Controller.
- Learned/debugged along the way:
  - Typing destructured components props correctly (`({ ... }: PropsType) => ()`), not annotating after the arrow.
  - Avoiding type-name collisions between a component and its own props type.
  - The `Controller` render-prop shape and why it replaces the manually tracked `checked`/`onChange` state.
  - Replacing `any` with a proper function signature `(value: string) => void` once the real shape of a prop is understood.
  - Introduced to TypeScript generics while refactoring useClickOutside:
    - Original hook only worked on `HTMLDivElement`, hardcoded — not reusable for other element types.
    - Refactored to accept a generic `T`, using React's `RefObject<T>` instead of a custom ref type.
    - Learned about generic constraints (T extends HTMLElement) to keep methods like .contains() available without locking the hook to one specific element.
    - Hit and resolved a subtle mismatch between a constrained generic and React's ref type always allowing null — a good example of a "small fix, real understanding required" bug.

# Tools Used

- Vite
- React
- TypeScript
- React Hook Form
- Shopify Storefront API (credentials pending — carried over from the previous iteration)
- GitHub

# Known Limitations

- Some components still need to be converted from JSX to TSX.
- The "Other" donation amount option doesn't yet have a conditional text input for a custom value — planned as a follow-up
- Shopify credentials from the client are still pending: product data is currently placeholder/JSON based
- A full styling pass is planned once the TypeScript refactor is further along
