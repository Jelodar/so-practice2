export async function ajax(url: string, isJson = true) {
  const res = await fetch(url);
  return await res[isJson ? 'json' : 'text']();
}
