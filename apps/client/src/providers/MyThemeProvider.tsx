import * as React from "react";
import { ThemeProvider } from "next-themes";

const MyThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      enableColorScheme
    >
      {children}
    </ThemeProvider>
  );
};

export default MyThemeProvider;
