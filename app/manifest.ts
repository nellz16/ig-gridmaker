import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Auto Grid Slicer - Instagram Grid Maker",
    short_name: "Grid Slicer",
    description: "Tool gratis untuk membuat grid Instagram yang sempurna",
    start_url: "/",
    display: "standalone",
    background_color: "#0f172a",
    theme_color: "#7c3aed",
    icons: [
      {
        src: "/favicon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/favicon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}
