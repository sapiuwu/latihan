import type { IncomingMessage, ServerResponse } from "http";

const http = require("http");
const fs = require("fs/promises"); // Untuk baca/tulis file secara async
const path = require("path");

// Type definitions
interface User {
  id: number;
  name: string;
  email: string;
}

interface ApiResponse<T = unknown> {
  success: boolean;
  message?: string;
  data?: T;
}

interface CreateUserPayload {
  name?: string;
  email?: string;
}

const PORT = 3000;
// Path absolut ke file user.json agar aman di semua OS
const DATA_FILE = path.join(__dirname, "user.json");



const server = http.createServer(async (req: IncomingMessage, res: ServerResponse) => {
});

server.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
  console.log(`📌 Endpoints:`);
  console.log(`   GET  /api/users`);
  console.log(`   POST /api/users`);
});