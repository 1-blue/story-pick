import "@sp/ui/globals.css";

import { ThemeToggle } from "@sp/ui/components/custom/ThemeToggle";

import MyTRPCProvider from "#client/providers/MyTRPCProvider";
import MyThemeProvider from "#client/providers/MyThemeProvider";

import Layout from "#client/components/Layout";

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <MyThemeProvider>
          <MyTRPCProvider>
            <ThemeToggle />
            <Layout>{children}</Layout>
          </MyTRPCProvider>
        </MyThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
