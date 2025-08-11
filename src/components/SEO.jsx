import { useEffect } from 'react';

/**
 * Simple SEO helper to set document title and meta description per route.
 * Usage: <SEO title="Page Title" description="Short description" />
 */
export default function SEO({ title, description }) {
  useEffect(() => {
    if (title) {
      document.title = title;
    }

    if (description) {
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = 'description';
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', description);
    }
  }, [title, description]);

  return null;
}
