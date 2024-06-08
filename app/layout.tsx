import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./sidebar.css"
import "./globals.css";
import { ThemeProvider } from "./provider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muhana Naufal's Portfolio",
  description: "Modern & Minimalist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.svg" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
