# node-express

# Setup

- Requires Node 16.13.0 (Gallium) or above.
- SQL Server 2017
- Redis

---

## Installation

Clone the repository, install the dependencies and get started right away. Make sure you already have `nodejs`, `npm` and `yarn` installed in your system.

```sh
git git@github.com:Prabeshpd/node-express.git
cd node-express
cp .env.example .env
yarn
```

---

## Environment Variables

Set environment variables in your env file:

---

## Database Migrations

You can run the migrations by the following command

```bash
yarn migrate
```

---

## Start Application

To start the application in dev.

```bash
yarn start:dev
```

---

### RUN TEST

```bash
yarn test
```
