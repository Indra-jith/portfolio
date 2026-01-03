import type { Metadata } from "next";
import "./globals.css";
import { Anonymous_Pro, Inter, Poppins } from "next/font/google";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "@/components/context/theme-context";
import { SmoothScroll } from "@/components/smooth-scroll";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-inter",
  display: "swap",
});

const anonymousPro = Anonymous_Pro({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-anonymous-pro",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Indrajith M P | Portfolio",
  description: "Explore the portfolio of Indrajith M P, a Computer Science student and AI/ML engineer specializing in robotics, computer vision, and intelligent systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${anonymousPro.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className="antialiased bg-secondary font-primary text-white overflow-x-hidden transition-colors duration-300">
        <SmoothScroll>
          <InteractiveGridPattern className="opacity-40" />
          <ThemeProvider>
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={true}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
              transition={Slide}
              toastStyle={{ fontFamily: 'var(--font-primary)' }}
            />
            {children}
          </ThemeProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
