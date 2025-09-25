import "./globals.css";
// Importanción de fuentes
import { Poppins, Roboto, Inter, Manrope, Montserrat } from "next/font/google";

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
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${poppins.variable} ${roboto.variable} ${inter.variable} ${manrope.variable} ${montserrat.variable}`}
    >
      <body className="flex flex-col min-h-screen font-poppins">
        {children}
      </body>
    </html>
  );
}
