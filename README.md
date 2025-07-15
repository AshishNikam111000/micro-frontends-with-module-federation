# Micro Frontends with Module Federation

This repository demonstrates an example of **micro frontends architecture** using **Webpack Module Federation**. It consists of two main parts:

- **Remote**: The independently built and deployed micro frontend application.
- **Host**: The container application that dynamically loads and uses the remote micro frontend.

## Project Structure

- `/remote` — Micro frontend app exposing modules using Module Federation.
- `/host` — Host app consuming the remote modules at runtime.

## Getting Started

To run the host app successfully, you first need to build and preview the remote app.

### Steps:

1. **Build and run the remote**
   ```bash
   cd remote
   yarn install
   yarn run build
   yarn run preview
   ```

2. **Build and run the host**
   ```bash
   cd host
   yarn install
   yarn run dev
   ```
