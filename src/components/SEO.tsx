import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
}

const SEO = ({
  title = "Shri Velagapudi Ramakrishna Memorial College",
  description = "SVRMC - Government Aided College Sponsored by R.T.E.I. Society offering quality higher education in various disciplines",
  keywords = ["SVRMC", "Shri Velagapudi Ramakrishna Memorial College", "Government Aided College", "R.T.E.I. Society", "Higher Education", "Degree College", "Andhra Pradesh", "Guntur", "Academic Excellence"],
  image = "/lovable-uploads/bad84c75-df8e-4775-8183-f270b11757af.png",
  url = "https://svrmc.edu.in",
  type = "website",
  article
}: SEOProps) => {
  const fullTitle = title === "Shri Velagapudi Ramakrishna Memorial College" 
    ? title 
    : `${title} | Shri Velagapudi Ramakrishna Memorial College`;

  const keywordsString = keywords.join(", ");

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywordsString} />
      <link rel="canonical" href={url} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Shri Velagapudi Ramakrishna Memorial College" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@svrmc_official" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content="SVRMC Logo" />
      
      {/* Article specific meta tags */}
      {article && type === "article" && (
        <>
          <meta property="article:published_time" content={article.publishedTime} />
          <meta property="article:modified_time" content={article.modifiedTime} />
          <meta property="article:author" content={article.author} />
          <meta property="article:section" content={article.section} />
          {article.tags?.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="theme-color" content="#0a3d8f" />
    </Helmet>
  );
};

export default SEO;