export const env = {
    databaseUrl: process.env.DATABASE_URL!,
    veniceApiKey: process.env.VENICE_API_KEY || '',
    veniceApiBase: process.env.VENICE_API_BASE || 'https://api.venice.ai',
  };
  if (!env.databaseUrl) {
    console.warn('DATABASE_URL is not set.');
  }
  if (!env.veniceApiKey) {
    console.warn('VENICE_API_KEY is not set. Venice integration will fail until this is provided.');
  }