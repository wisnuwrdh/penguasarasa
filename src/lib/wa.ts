export const WA_NUMBER = '6285717237647'

export function waLink(text: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`
}
