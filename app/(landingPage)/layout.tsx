import Header from "../components/LandingPage/Header";
import Footer from "../components/LandingPage/Footer";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="flex-shrink-0">
        <Header />
      </header>
      <main className="flex-1">{children}</main>
      <footer className="flex-shrink-0">
        <Footer />
      </footer>
    </div>
  );
}
