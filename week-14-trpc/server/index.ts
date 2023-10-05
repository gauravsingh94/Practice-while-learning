import { router, publicProcedure } from "./trpc";
import { z } from "zod";
import { createHTTPServer } from "@trpc/server/adapters/standalone";

const todoInputType = z.object({
  title: z.string(),
});

const appRouter = router({
  createTodo: publicProcedure.input(todoInputType).mutation(async (opts) => {
    const title = opts.input.title;

    // Do some database related stuff

    console.log(opts.ctx.username);

    return {
      id: "1",
    };
  }),
});

const server = createHTTPServer({
  router: appRouter,
  createContext(opts) {
    let authHeader = opts.req.headers["authorization"];
    console.log(authHeader);
    return {
      username: "123",
    };
  },
});

const port = 3000;
server.listen(port);
console.log(`Server is running at ${port}`);

export type AppRouter = typeof appRouter;
