import "./globals.css";
import { Inter } from "next/font/google";
import { Fredericka_the_Great } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const fredericka_the_Great = Fredericka_the_Great({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Cristina | Design & Tech Consultant",
  description: "Cristina | Design & Tech Consultant",
  icons: {
    icon: "./public/images/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={fredericka_the_Great.className}>{children}</body>
    </html>
  );
}
