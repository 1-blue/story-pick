// 더 구체적인 타입
export interface IContext {
  /** 요청 객체 */
  req: Request;
  /** 응답 객체 */
  res: Response;

  /** 유저 정보 */
  user: {} | null;

  /** 현재 시간 */
  timestamp: number;
  /** IP 주소 */
  ip: string | null;
  /** 요청 ID */
  requestId: string;
  /** 사용자 에이전트 */
  userAgent: string | null;

  // 오류 상태
  error?: boolean;
}
