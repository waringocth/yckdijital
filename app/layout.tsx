import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "yckdijital | Performans Odaklı Dijital Ajans",
  description: "Google Ads, Meta reklamları ve dönüşüm odaklı web tasarım ile işletmenizi büyütün.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
