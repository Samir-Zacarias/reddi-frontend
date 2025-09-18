import "./globals.css";
// Importanción de fuentes
import { Poppins, Roboto, Inter } from "next/font/google";

// Weights: 400 = normal, 500 = medium, 700 = bold, 900 = black
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-poppins",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-roboto",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-roboto",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${poppins.variable} ${roboto.variable} ${inter.variable}`}
    >
      <body className="flex flex-col min-h-screen font-poppins">
        {/* Layout UI */}
        {/* Place children where you want to render a page or nested layout */}
        {children}
      </body>
    </html>
  );
}
