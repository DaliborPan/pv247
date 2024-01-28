import "./globals.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { PropsWithChildren } from "react";

const poppins = Poppins({
  subsets: ["latin-ext"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "PV247",
};

export default function RootLayout({ children }: PropsWithChildren<{}>) {
  return (
    <html lang="en">
      <body
        className={`flex min-h-screen flex-col bg-gray-100 ${poppins.className}`}
      >
        {children}
      </body>
    </html>
  );
}
