import path from "node:path";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: path.join("prisma", "schema.prisma"),
  migrations: {
    path: path.join("prisma", "migrations"),
    // Configura aquí tu comando de ejecución para el seed
    seed: "tsx prisma/seed.ts", 
  },
});
