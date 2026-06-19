export default async function handler(req, res) {
  try {
    const response = await fetch("https://api.fanar.qa/v1/audio/voices", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.FANAR_API_KEY}`,  //http://localhost:3000/api/fanarAudio
      },
    });

    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch voices" });
  }
}