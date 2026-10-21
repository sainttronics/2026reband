import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: { default: "Sainttronics — Engineering & Retro Computing", template: "%s | Sainttronics" },
  description: "Retro computing, electronics projects, embedded systems, source code and technical downloads."
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
