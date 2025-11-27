# Books Project

A small React + TypeScript + Vite app for adding more books to the inventory.

The frontend lives in the `books-project/` directory.
The repo also includes a [`devbox.json`](./devbox.json) at the root so it will be easier to test without installing anything.

---

## Getting started

You have two options:
1. **Use Devbox** (recommended for the people who don't want to install Node/pnpm)
2. **Use your own Node + pnpm installation**

---

## Option 1: Using DevBox (no global Node/pnpm needed)

Devbox provides an isolated development env.
Install Devbox from here: https://www.jetify.com/devbox

### Start the Devbox env
```bash
devbox shell
```

### Install frontend dependencies
```bash
cd books-project
pnpm install
```

### Run the development server
```bash
pnpm dev
```

### Run tests
```bash
pnpm test
```

---

## Option 2: Using your own Node + pnpm

### Install frontend dependencies
```bash
cd books-project
pnpm install
```

### Run the development server
```bash
pnpm dev
```

### Run tests
```bash
pnpm test
```