interface StructuredDataProps {
  type: 'article' | 'website';
  title: string;
  description: string;
  url: string;
  datePublished?: string;
  author?: string;
  image?: string;
}

export default function StructuredData({
  type,
  title,
  description,
  url,
  datePublished,
  author = 'Arden',
  image = '/home/attie.png',
}: StructuredDataProps) {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || 'https://ardenspace.vercel.app';

  const structuredData =
    type === 'article'
      ? {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: title,
          description: description,
          image: `${baseUrl}${image}`,
          datePublished: datePublished,
          dateModified: datePublished,
          author: {
            '@type': 'Person',
            name: author,
            url: baseUrl,
          },
          publisher: {
            '@type': 'Person',
            name: author,
            logo: {
              '@type': 'ImageObject',
              url: `${baseUrl}${image}`,
            },
          },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': url,
          },
        }
      : {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: title,
          description: description,
          url: url,
          author: {
            '@type': 'Person',
            name: author,
          },
        };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}
