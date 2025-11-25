import type { Metadata } from "next";
import "./globals.css";
import DashboardWrapper from "./dashboardWrapper";

export const metadata: Metadata = {
  title: "JSP Worksheet",
  description: "Project Management Tool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans" suppressHydrationWarning>
        <DashboardWrapper>{children}</DashboardWrapper>
      </body>
    </html>
  );
}
