import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Catecismo365",
  description: "Catecismo da Igreja Católica em 365 dias.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
