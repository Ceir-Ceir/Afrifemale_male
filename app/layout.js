import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Afri-Female and Male Institute, Inc. | Building Purpose. Shaping Leaders.",
  description: "The Afri-Female and Male Institute empowers youth ages 8–18 through mentoring, STEAM-based learning, and culturally grounded education.",
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
