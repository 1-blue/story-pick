import { Injectable } from "@nestjs/common";
import { ContextOptions, TRPCContext } from "nestjs-trpc";

@Injectable()
export class AppContext implements TRPCContext {
  constructor() {}

  async create(opts: ContextOptions): Promise<Record<string, unknown>> {
    try {
      const { req, res } = opts;

      const user = req.user || null;

      const timestamp = Date.now();
      const ip = req.ip || req.connection?.remoteAddress || null;
      const requestId =
        req.headers["x-request-id"] ||
        `req_${timestamp}_${Math.random().toString(36).substring(2, 15)}`;
      const userAgent = req.headers["user-agent"] || null;

      return {
        req,
        res,
        user,
        timestamp,
        ip,
        requestId,
        userAgent,
      };
    } catch (error) {
      console.error("Context creation error:", error);

      // 기본 컨텍스트는 최소한 제공
      return {
        req: opts.req,
        res: opts.res,
        error: true,
      };
    }
  }
}
