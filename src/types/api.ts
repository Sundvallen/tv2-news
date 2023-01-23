interface Cover {
  url: string;
  contentType: string;
  caption: string;
  attribution: string | null;
}

export interface PortalResponseDoc {
  _id: string;
  slug: string;
  name: string;
  description: string;
  category: string;
  archived?: boolean;
  theme?: string;
  kicker?: string;
  background?: any;
  hidden: boolean;
  deleted: boolean;
  key: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  lastPostPublishedAt: string;
  cover: any;
  video: any;
  adUnitPath: string;
  id: string;
  newCount: number;
}

export interface PortalResponse {
  docs: PortalResponseDoc[];
  // MetaData
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
}

interface Person {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  fullName: string;
}

interface ContentFile {
  filename: string;
  path: string;
  contentType: string;
  fileSize: number;
  attribution: string | null;
  caption: string;
  version: number;
  createdAt: string;
  updatedAt: string;
  id: string;
  url: string;
}

interface Content {
  type: string;
  data?: any; // not sure yet what types are possible
  files: ContentFile[];
  orderIndex: number;
  createdAt: string;
  updatedAt: string;
  id: string;
}

export interface Article {
  id: string;
  title: string;
  category: string;
  content: Content[];
  portals: Partial<PortalResponseDoc>[];
  topics: string[];
  pinned: boolean;
  important: boolean;
  publishedAt: string;
  publishedBy: Person;
  createdBy: Person;
  deleted: boolean;
  createdAt: string;
  updatedAt: string;
  related?: any;
}
