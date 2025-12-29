This is a reproduction of a bug in Tanstack Start where you can't create a route that starts with an underscore, but only in a monorepo.

## Running it

Install the dependencies:
```
pnpm install
```

Run the development server:
```
cd apps/tanstack-bug
pnpm dev
```

Visit http://localhost:3000/_hello and notice that the page is not found.
