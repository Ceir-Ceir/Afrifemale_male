import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Afri-Female Institute Inc. | Empowering Future Leaders",
  description: "Established in 1998, Afri-Female Institute Inc. is a non-profit dedicated to developing purpose and character in youth ages 9-18.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
