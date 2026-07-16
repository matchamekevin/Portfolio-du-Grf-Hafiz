import "dotenv/config";
import app from "./app.js";
import { WebSocketServer } from "ws";
import { realtimeController } from "./controllers/realtimeController.js";

const PORT = process.env.PORT || 5000;

process.on("unhandledRejection", (err) => {
  console.error("[Unhandled Rejection]", err);
});

process.on("uncaughtException", (err) => {
  console.error("[Uncaught Exception]", err);
});

const server = app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

const wss = new WebSocketServer({ server });

wss.on("connection", (ws, req) => {
  const isAdmin = req.url.includes("role=admin");
  realtimeController.handleConnection(ws, isAdmin);

  ws.on("close", () => {
    realtimeController.handleDisconnection(ws);
  });
});

process.on("SIGINT", () => {
  wss.close();
  server.close(() => process.exit(0));
});
