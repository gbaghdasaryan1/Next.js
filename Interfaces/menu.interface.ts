import { TopLevelCategory } from "./page.iterface";
export interface PageItem {
  alias: string;
  title: string;
  _id: string;
  category: string;
}

export interface MenuItem {
  _id: {
    secondCategory: string;
  };
  pages: PageItem[];
  isOpend?: boolean;
}

export interface FirstLevelMenuItem {
  route: string;
  name: string;
  icons: JSX.Element;
  id: TopLevelCategory;
}
