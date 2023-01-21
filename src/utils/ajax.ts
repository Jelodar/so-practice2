export async function ajax(url: string, isJson = true) {
  const res = await fetch(url);
  return await res[isJson ? 'json' : 'text']();
}

export function getCacheBustedUrl(url: string): string {
  if (!url) {
    throw new Error('URL is missing or invalid');
  }
  const urlObject = new URL(url);
  urlObject.searchParams.set('_', String(new Date().getTime()));
  return urlObject.href;
}
