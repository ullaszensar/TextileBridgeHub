import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Since this is a static website, we don't need any API routes
  // We'll just serve the static files

  const httpServer = createServer(app);

  return httpServer;
}
