import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/Footer";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Task Management System",
  description: "404 - Not found!",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
