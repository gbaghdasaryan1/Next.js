import { ProductModel } from "./../../Interfaces/product.interface";
import { TopLevelCategory, TopPageModel } from "./../../Interfaces/page.iterface";

export interface TopPageComponentProps extends Record<string, unknown> {
  firstCategory: TopLevelCategory;
  page: TopPageModel;
  products: ProductModel[];
}
