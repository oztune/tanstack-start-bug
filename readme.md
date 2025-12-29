This is a reproduction of a bug in Tanstack Start.

The bug is that I can't create a route that start with an underscore. (for example `/_hello`)

This only happens when the Tanstack Start app is inside of a monorepo!!!

## Running it

Install the dependencies:
```
pnpm install
```

Run the development server:
```
pnpm dev
```

Visit http://localhost:3000/_hello and notice that the page is not found.