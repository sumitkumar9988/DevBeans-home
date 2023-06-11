import "./globals.css";
import Script from "next/script";
import { Plus_Jakarta_Sans, Inter, Roboto_Mono } from "next/font/google";

const plus = Plus_Jakarta_Sans({
  variable: "--font-plus",
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800"]
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono"
});

export const metadata = {
  title: "DevBeans",
  description:
    "DevBeans is a tool for frontend developer to convert figma design into react+tailwind css code."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${roboto_mono.variable} ${plus.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
