import "@workspace/ui/globals.css";

import { ThemeToggle } from "@workspace/ui/components/custom/ThemeToggle";

import MyTRPCProvider from "#src/providers/MyTRPCProvider";
import MyThemeProvider from "#src/providers/MyThemeProvider";

import Layout from "#src/components/Layout";

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
