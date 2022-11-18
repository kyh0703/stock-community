const API_HOST = `https://apis.data.go.kr/1160100/service/GetStockSecuritiesInfoService`;

const ENCODING_API_KEY = `9McbVFO9ibgLwHC8kXzDW3Rm7sgbWZj3eZ6iugOLmJbE6okv2FVN%2FvFmR0lQJBjoPQN9QHeRfKyV63F17Mi8Cg%3D%3D
`;

const DECODING_API_KEY = `
9McbVFO9ibgLwHC8kXzDW3Rm7sgbWZj3eZ6iugOLmJbE6okv2FVN/vFmR0lQJBjoPQN9QHeRfKyV63F17Mi8Cg==
`;

interface StocksPriceRequest {
  serviceKey: string; // 서비스 키
  numOfRows: number; // 한 페이지 결과 수
  pageNo: number; // 페이지 번호
  resultType: 'xml' | 'json'; // 결과 형식
  baseDt: string; // 기준 일자
  beginBaseDt: string; // 기준 일자
  endBaseDt: string; // 기준 일자
  likeBaseDt: string; // 기준 일자
  likeSrtnCd: string; // 단축코드
  isinCd?: string; // ISIN 코드
  likeIsinCd?: string; // ISIN 코드
  itemNm: string; // 종목명
  likeItemsNm: string; // 종목명
  mrktCtg: string; // 시장구분
  beginVs: number; // 대비
  endVs: number; // 대비
  beginFltRt: number; // 등락률
  endFltRt: number; // 등락률
  beginTrqu: number; // 거래량
  endTrqu: number; // 거래량
  beginTrPrc: number; // 거래대금
  entTrPrc: number; // 거래대금
  beginMrktTotAmt: number; // 시가 총액
  endMrktTotAmt: number; // 시가 총액
  likePurRgtScrtltmsCd?: string; // 목적주권 종목코드
  purRgtScrtItems?: string; // 목적주권 종목명
  likePurRgtScrtltmsNm?: string; // 목적주권 종목명
}

interface StocksPriceResponse {
  resultCode: number; // 결과코드
  resultMsg: string; // 결과메시지
  numOfRows: number; // 한 페이지 결과 수
  pageNo: number; // 페이지 번호
  totalCount: number; // 페이지 번호
  baseDt: string; // 기준 일자
  srtnCd: string; // 단축코드
  isinCd: string; // ISIN 코드(국제 채권 식별 번호)
  itemNm: string; // 종목명
  mrktCtg: 'KOSPI' | 'KOSDAQ' | 'KONEX'; // 시장 구분
  clpr: number; // 종가
  vs: string; // 전일 대비 등락
  fltRt: number; // 등락률
  mkp: number; // 시가
  hipr: number; // 고가
  lopr: number; // 저가
  trPrc: string; // 거래량
  mrktTotAmt: number; // 시가총액
  lstgCtfCnt: number; // 상장증서수
  nstlssPrc: number; // 신주발행가
  dltDt: string; // 상장폐지일
  purRgtScrtltmsCd: string; // 목적주권 종목코드
  purRgtScrtltmsNm: string; // 목적주권 종목명
  purRgtScrtltmsClpr: string; // 목적주권 종가
}
