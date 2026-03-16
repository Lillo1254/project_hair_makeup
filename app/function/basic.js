export async function fetchMedia(type) {
  try {
    const res = await fetch(`/api/media/${type}`);

    if (!res.ok) {
      console.error("Errore API:", await res.text());
      return [];
    }

    const data = await res.json();

    console.log(`📂 MEDIA (${type}):`, data);

    return data;
  } catch (err) {
    console.error("Errore fetch:", err);
    return [];
  }
}