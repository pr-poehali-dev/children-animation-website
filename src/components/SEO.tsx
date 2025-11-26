import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
}

const SEO = ({
  title = 'ЛяЛя-БуБу - Аниматоры и ростовые куклы для детских праздников',
  description = 'Профессиональные аниматоры в ростовых куклах для детских праздников, дней рождения и корпоративов. Заказать аниматоров в Москве. Широкий выбор персонажей.',
  keywords = 'аниматоры, ростовые куклы, детский праздник, день рождения, аниматоры на праздник, детские аниматоры, заказать аниматора',
  ogImage = 'https://cdn.poehali.dev/projects/6d81855f-6506-447a-8722-8789a16ddfa9/files/df115368-fd0f-403d-8013-b858c96a8d46.jpg',
  canonical = 'https://lyalya-bubu.ru'
}: SEOProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      <link rel="canonical" href={canonical} />
      
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "ЛяЛя-БуБу",
          "description": description,
          "url": canonical,
          "telephone": "+7-999-123-45-67",
          "email": "info@lyalya-bubu.ru",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Москва",
            "addressCountry": "RU"
          },
          "priceRange": "3000-6000 ₽",
          "image": ogImage,
          "sameAs": []
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
