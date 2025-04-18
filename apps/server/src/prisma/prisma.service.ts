import {
  Injectable,
  OnModuleInit,
  OnModuleDestroy,
  Logger,
} from "@nestjs/common";
import { PrismaClient } from "@sp/db";

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  private readonly logger = new Logger(PrismaService.name);

  constructor() {
    super();
    // super({ log: ["query"] });
  }

  async onModuleInit() {
    try {
      this.logger.log("🕹️ 데이터베이스 연결 시작");
      await this.$connect();
      this.logger.log("🟢 데이터베이스 연결이 완료");
    } catch (error) {
      this.logger.error(`🔴 데이터베이스 연결 실패 >> `, { error });
      throw error;
    }
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
