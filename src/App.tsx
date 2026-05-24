import { AnnouncementBar } from '@/components/AnnouncementBar';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/sections/HeroSection';
import { MostPopularSection } from '@/sections/MostPopularSection';
import { FeaturedVideoSection } from '@/sections/FeaturedVideoSection';
import { RecentPaymentsSection } from '@/sections/RecentPaymentsSection';
import { CustomerReviewsSection } from '@/sections/CustomerReviewsSection';
import { SocialWidgetSection } from '@/sections/SocialWidgetSection';
import { FAQSection } from '@/sections/FAQSection';

export default function App() {
  return (
    <div className="min-h-screen bg-rm-bg">
      <AnnouncementBar />
      <Navbar />
      <main>
        <HeroSection />
        <MostPopularSection />
        <FeaturedVideoSection />
        <RecentPaymentsSection />
        <CustomerReviewsSection />
        <SocialWidgetSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
