// 02-example - 선언 파일

/** 출석체크 목록의 개별 항목을 나타내는 타입 */
export type APIAttendanceListItem = {
  uuid: string;
  content: string;
  published_at: Date;
  expired_at: Date;
  deleted_at: Date;
  created_at: Date;
  update_at: Date;
};
