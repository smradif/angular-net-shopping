import { BaseComponent } from "src/app/components/base.component";
import { ErrorComponent } from "src/app/components/error/error.component";
import { NotFoundComponent } from "src/app/components/not-found/not-found.component";
import { FooterComponent } from "../components/footer/footer.component";
import { HeaderComponent } from "../components/header/header.component";
import { NavigationComponent } from "../components/navigation/navigation.component";
import { ThemeManagerComponent } from "../../components/theme/theme-manager.component";
import { ShellComponent } from "../shell.component";
import { PageTitleComponent } from "../components/page-title/page-title.component";
import { SearchComponent } from "src/app/shell/components/search/search-component";

export const declarations = [
  ShellComponent,
  NotFoundComponent,
  ErrorComponent,
  BaseComponent,
  HeaderComponent,
  ThemeManagerComponent,
  FooterComponent,
  NavigationComponent,
  PageTitleComponent,
  SearchComponent
];
