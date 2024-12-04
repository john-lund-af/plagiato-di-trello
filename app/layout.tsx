import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Plagiato di Trello",
  description: "Homage to Trello",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
