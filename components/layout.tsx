import { PropsWithChildren } from "react";
import { cls } from "../libs/utils";
import TabBar from "./tabbar";
import Header from "./header";

interface LayoutProps {
  title?: string;
  canGoBack?: boolean;
  hasTabBar?: boolean;
}

export default function Layout({
  title,
  canGoBack,
  hasTabBar,
  children,
}: PropsWithChildren<LayoutProps>) {
  return (
    <div className="max-w-xl mx-auto">
      <Header title={title} canGoBack={canGoBack} />
      <div className={cls("pt-12", hasTabBar ? "pb-24" : "")}>{children}</div>
      {hasTabBar && <TabBar />}
    </div>
  );
}
