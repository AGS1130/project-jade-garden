# unplugin-jade-garden

## 0.2.0

### Minor Changes

- a794d21: ## **Breaking Changes**

  The primary updates simplify the packages for specific development intention.

  If you are a app/product developer that is focused on building type-safe UI components that adheres to a consistent design system, use `jade-garden`.

  If you ara a UI/UX engineer that is focused on creating a UI Library or a shareable design system for front-end developers, use `unplugin-jade-garden`.

  ### `jade-garden`

  - Removes `CVATraits`, `SVATraits`, `rawCVA`, `rawSVA`, and `traits`.
  - Refactors `defineSVA` to require `_slots` (`readonly string[]`) as input.

  ```ts
  const cardSlots = ["content", "footer", "header"] as const;
  type CardSlots = typeof cardSlots[number];

  // Before
  defineSVA<CardSlots>()({
    slots: { ... },
    variants: { ... }
  });

  // After
  defineSVA(cardSlots)({
    slots: { ... },
    variants: { ... }
  });
  ```

  ### `unplugin-jade-garden`

  - Moves `CVATraits`, `SVATraits`, `rawCVA`, `rawSVA`, and `traits` here.
  - Removes `rawCVA` and `rawSVA` and refactors to single function: `getClasses`.
    - `getClasses` takes in either `JadeGarden.CVAConfig` or `JadeGarden.SVAConfig`.
    - Utilizes [function overloads](https://www.typescriptlang.org/docs/handbook/2/functions.html#function-overloads) for defining separate, explicit contracts for each valid input type.
  - Exports the above as **helpers** (`unplugin-jade-garden/helpers`).

### Patch Changes

- 2b3bf25: update dependencies

  **Deprecated**

  Removed `projects` directory. Have no capacity to maintain 😞

  - `@project-jade-garden/radix-ui`
  - `@project-jade-garden/base-ui`
  - `@project-jade-garden/bits-ui`
  - `@project-jade-garden/kobalte`
  - `@project-jade-garden/reka-ui`
  - `@project-jade-garden/ark-ui`

- Updated dependencies [2b3bf25]
- Updated dependencies [a794d21]
  - jade-garden@1.2.0

## 0.1.3

### Patch Changes

- e35d0a1: - Remove workspaces protocol in `projects`
  - Refactors clean package output for publications

## 0.1.2

### Patch Changes

- 10ffe72: Remove redundant type checking
- e1a924b: Update dependencies
- 11bb816: Fixes breaking installation of packages due to no [bun publishing](https://bun.sh/docs/install/catalogs#publishing) command in project.

## 0.1.1

### Patch Changes

- b477fc2: Move internal types in `jade-garden` to the `JadeGarden` namespace.
- 38911b6: Fixes ["Typescript inferred type cannot be named without reference"](https://stackoverflow.com/questions/72041763/typescript-inferred-type-cannot-be-named-without-reference) by exposing all types in index.

## 0.1.0

### Minor Changes

- 8d7a2f7: Feat: Add cache for faster builds
- f597937: Docs: Significantly enhanced README documentation for `jade-garden` and `unplugin-jade-garden`.
