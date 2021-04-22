export type BreadcrumbItem = {
  text?: string;
  url?: string;
}

export type Breadcrumb = { [key: string]: BreadcrumbItem[] };
