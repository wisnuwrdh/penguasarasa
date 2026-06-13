export const WA_NUMBER = process.env.NEXT_PUBLIC_WA_NUMBER || '62812XXXXXXXX'

export function waLink(text: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`
}
