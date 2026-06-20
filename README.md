# Suraksha Life Care

This is a monorepo containing both the frontend and backend applications.

## How to Run Locally

To run both the frontend (Vite dev server) and backend (Express server) concurrently with a single command, run the following at the root directory of this repository:

1. **Install Dependencies**:
   ```bash
   npm run install-all
   ```

2. **Start Dev Servers**:
   ```bash
   npm run dev
   ```

This command will start:
- The backend server on [http://localhost:5000](http://localhost:5000)
- The frontend dev server on [http://localhost:5173](http://localhost:5173) (or the next available port)

---

## Local Development & Database Connectivity
- The backend is configured to connect to MongoDB Atlas by default.
- If your local IP address is not whitelisted on MongoDB Atlas, the backend will **gracefully fallback to a local MongoDB connection** (`mongodb://127.0.0.1:27017/suraksha_lifecare`).
- If local MongoDB is also not available, the server will **switch to MOCK DATABASE mode** instead of crashing.
- In **MOCK DATABASE** mode, inquiries are mock-saved in-memory and logged to the terminal console. This allows complete frontend and form submission testing without any local setup or connection errors.
