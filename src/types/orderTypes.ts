type StatusType = "ONLINE" | "PAUSED" | "STOPPED" | "DRAFT";

type SiteIdType = 1 | 2 | 3;

// Tests response type
export interface ITest {
  id: number;
  name: string;
  type: string;
  status: StatusType;
  siteId: SiteIdType;
}

// Sites response type
export interface ISite {
  id: SiteIdType;
  url: string;
}

// Final result type
export interface IOrder {
  id: string;
  name: string;
  type: string;
  status: StatusType;
  site: string;
}
