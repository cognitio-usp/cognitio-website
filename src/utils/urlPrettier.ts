export default function urlPrettier(url: string) {
  return url ? url.replace(/^https|^http|:\/\/|www\.|\/$/g, '') : false;
}
