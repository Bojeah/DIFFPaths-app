import Header from "../components/LandingPage/Header";
import Footer from "../components/LandingPage/Footer";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="flex-shrink-0 w-full">
        <Header />
      </header>
      <main className="flex-1 w-full px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
        {children}
      </main>
      <footer className="flex-shrink-0 w-full">
        <Footer />
      </footer>
    </div>
  );
}
