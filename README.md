# Module resolution behaves differently when `typeRoots` is specified [#59329](https://github.com/microsoft/TypeScript/issues/59329)

## Steps to Reproduce

1. Clone the repository and `npm install`
2. Run `npm test` and see compiler errors
3. Toggle `"typeRoots"` in `tsconfig.json` and see *different* compiler errors
