export function decodeToken(token) {
  try {
    if (!token) return null;
    const payload = token.split(".")[1];
    if (!payload) return null;
    const normalized = payload.replace(/-/g, "+").replace(/_/g, "/");
    const json = atob(normalized);
    return JSON.parse(json);
  } catch (error) {
    return null;
  }
}
