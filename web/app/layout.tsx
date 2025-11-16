import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NeynarProvider } from "@neynar/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chain Canvas",
  description: "Collaborative canvas mini app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NeynarProvider
            apiKey={process.env.NEXT_PUBLIC_NEYNAR_API_KEY}
            clientId={process.env.NEXT_PUBLIC_NEYNAR_CLIENT_ID}
            features={['neynar-degen-react']}
            fcVersion="v2"
        >
          {children}
        </NeynarProvider>
      </body>
    </html>
  );
}