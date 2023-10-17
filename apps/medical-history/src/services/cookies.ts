function getExpiration(expireAfterDays: number) {
  const d = new Date();
  d.setTime(d.getTime() + (expireAfterDays * 24 * 60 * 60 * 1000));
  return "expires=" + d.toUTCString();
}

export function setCookie(title: string, record: Record<string, unknown>, expireAfterDays?: number) {
  const expires = expireAfterDays ? getExpiration(expireAfterDays) : ''
  document.cookie = `${title}=${JSON.stringify(record)};${expires ? expires + ';' : ''}path=/`;
}

export function getCookie(title: string) {
  const cookies = decodeURIComponent(document.cookie).split(';')
  const cookie = cookies.find(cookie => cookie.split('=')[0] === title)
  if (!cookie) return undefined
  const [, value] = cookie.split('=')
  return JSON.parse(value)
}