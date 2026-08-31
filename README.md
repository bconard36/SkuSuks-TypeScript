# SkuSuks — TypeScript + Vite Refactor

A refactored version of a custom-coded e-commerce website. Originally written in vanilla JS, then refactored to React using Create React App, this newly refactored version incorporates TypeScript, TSX, and React Hook Form via Vite.

This is the third iteration of the SkuSuks project — the [Original Vanilla JS Build](https://github.com/bconard36/SkuSuks) and the [Create React App](https://github.com/bconard36/SkuSuks-React-Refactor) versions both live in separate repositories on my GitHub. This repo picks up where the CRA version left off and rebuilds it on Vite with full
TypeScript coverage.

# Status

Live Site: [SkuSuks Clothing](https://sku-suks-clothing.vercel.app/).

All pages have been converted from `.js/.jsx` to `.tsx` as part of the TypeScript refactor. The Contact and Donate forms now use React Hook Form for input tracking and validation, with improved conditional feedback and submission handling. Product navigation has also been updated to provide more useful links to the client's Instagram profile rather than placeholder or inactive destinations.

The Pre Order and New Drop pages have been temporarily commented out while the project remains in development. These features can be reimplemented once Shopify integration and updated product content are available.

Shopify and EmailJS integration remain planned for future development pending discussion with the client.

# Folder List

public: houses all public files to be served

- images: houses all relevant background, logo, product, and cycler images for all components
  src: parent folder for components, stylesheets, and hooks
- components: parent folder for all components (excluding Shopify specific and Root)
  - Accessories.jsx
  - App.jsx
  - Apparel.jsx
  - Cart.tsx
  - Contact.tsx
  - Donate.tsx
  - Footer.tsx
  - Home.tsx
  - ImageCycler.tsx
  - Mission.tsx
  - NavMenu.tsx
  - NewDrops.tsx
  - PreOrder.tsx
  - ProductCard.jsx
  - Products.jsx
  - RadioButton.tsx
- data: parent folder for JSON data used for testing
  - db.json
- hooks: parent folder for custom, reusable hooks
  - useClickOutside.ts
    - useFetch.ts
- Shopify: parent folder for Shopify Storefront API
  - ShopifyClient.js (uses .env variables for domain, version, and token values)
    - useShopifyProducts.js (custom query and hook to gather product data from Shopify)
- styles: houses the stylesheets for the program
  - cart.css
  - contact.css
  - imageCycler.css
  - index.css
  - navbar.css
  - notFound.css
  - pages.css
  - textStyles.css
  - main.jsx
  - types.ts

- .gitignore
- .esling.config.js
- index.html
- package.json
- package-lock.json
- README.md
- tsconfig.json
- tsconfig.node.json
- vite.config.ts

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

## Day 3

- Added a conditional text input for the Other donation option, using React Hook Form's watch method to track and capture the custom donation amount.
- Refactored `db.json` product data and `ProductCard` component:
  - Replaced placeholder product and accessory names with actual product names.
  - Replaced Order Now with View Product, linking users to the client's Instagram profile.
  - Removed placeholder product prices.
- Added validate and pattern rules to the Contact and Donate forms to validate user input before submission.
- Refactored the Donate component to conditionally display the custom donation input and dynamically display the submitted donation amount on the confirmation screen.
- Replaced the inactive donation link with a link to the client's Instagram donation section.
- Commented out the Pre Order and New Drop navigation links and related imports until those features are ready to be reimplemented.

# Tools Used

- Vite
- React
- TypeScript
- React Hook Form
- Shopify Storefront API (credentials pending — carried over from the previous iteration)
- GitHub
- Vercel

# Known Limitations

- Shopify credentials from the client are still pending: product data is currently placeholder/JSON based
