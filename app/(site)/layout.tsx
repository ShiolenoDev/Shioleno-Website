import { BackToTop } from "@/components/site/BackToTop";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      {children}
      <Footer />
      <BackToTop />
    </div>
  );
}
