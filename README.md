# Micro Frontends with Vite and Module Federation

This repository demonstrates an example of a **micro frontends architecture** using **Vite** and **Module Federation**. It consists of two main parts:
- **Remote**: An independently built and deployed micro frontend application.
- **Host**: A container application that dynamically loads and uses the remote micro frontend at runtime.

## Project Structure
- `/remote` — Micro frontend app exposing modules using Vite's Module Federation plugin.
- `/host` — Host app consuming the remote modules at runtime.

## Getting Started
To run the host app successfully, you first need to build and preview the remote app.

### Steps:
1. **Build and preview the remote**
   ```bash
   cd remote
   yarn install
   yarn run build
   yarn run preview
   ```

2. **Run the host while remote server is running**
   ```bash
   cd host
   yarn install
   yarn run dev
   ```
