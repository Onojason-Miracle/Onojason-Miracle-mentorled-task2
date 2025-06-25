import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Head from "next/head";
import "./globals.css";

// font
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Coffee Store",
  description: "Browse your favorite coffee and baked goods",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-p+U77X1J1lP4AGzUJ9FODlLoZzg6FZnYqlzKUHgDHzVoG0Pec5MjKhy0JZTqn5NnIC1CyUeKTGBaByH6e3gJ0Q=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>

      <body className={`${openSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
