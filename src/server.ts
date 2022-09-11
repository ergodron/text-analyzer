import * as Hapi from "@hapi/hapi";
import plugins from "./lib/hapi/plugins";
import dotenv from "dotenv";
import routes from "./routes";
dotenv.config({ path: "../.env" });

export const server: Hapi.Server = Hapi.server({
  port: process.env.PORT || 3000,
  host: process.env.HOST || "0.0.0.0",
});

export const init = async function (): Promise<Hapi.Server> {
  await server.register(plugins);
  server.route(routes);

  await server.start();
  console.log(`Server running on ${server.info.uri}`);

  return server;
};

process.on("unhandledRejection", (err: Error) => {
  console.error("unhandledRejection");
  console.log(err);
  process.exit(1);
});
