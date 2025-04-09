declare namespace NodeJS {
  interface ProcessEnv {
    /** 실행 타입 */
    readonly NODE_ENV: "development" | "production";

    /** 클라이언트 URL */
    readonly CLIENT_URL: string;
    /** 서버 URL */
    readonly SERVER_URL: string;
  }
}
