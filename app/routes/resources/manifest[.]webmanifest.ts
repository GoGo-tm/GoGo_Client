import { json } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";

export let loader: LoaderFunction = () => {
  return json(
    {
      short_name: "GoGo",
      name: "GoGo",
      start_url: "/",
      display: "standalone",
      background_color: "#d3d7dd",
      theme_color: "#c34138",
      shortcuts: [
        {
          name: "Homepage",
          url: "/",
          icons: [
            {
              src: "/icons/android-icon-96x96.png",
              sizes: "96x96",
              type: "image/png",
              purpose: "any monochrome",
            },
          ],
        },
      ],
      icons: [
        {
          src: "/icons/android-icon-36x36.png",
          sizes: "36x36",
          type: "image/png",
          density: "0.75",
        },
        {
          src: "/icons/android-icon-48x48.png",
          sizes: "48x48",
          type: "image/png",
          density: "1.0",
        },
        {
          src: "/icons/android-icon-72x72.png",
          sizes: "72x72",
          type: "image/png",
          density: "1.5",
        },
        {
          src: "/icons/android-icon-96x96.png",
          sizes: "96x96",
          type: "image/png",
          density: "2.0",
        },
        {
          src: "/icons/android-icon-144x144.png",
          sizes: "144x144",
          type: "image/png",
          density: "3.0",
        },
        {
          src: "/icons/android-icon-192x192.png",
          sizes: "192x192",
          type: "image/png",
          density: "4.0",
        },
        {
          src: "/icons/icon-48x48.png",
          sizes: "48x48",
          type: "image/png",
        },
        {
          src: "/icons/icon-72x72.png",
          sizes: "72x72",
          type: "image/png",
        },
        {
          src: "/icons/icon-96x96.png",
          sizes: "96x96",
          type: "image/png",
        },
        {
          src: "/icons/icon-144x144.png",
          sizes: "144x144",
          type: "image/png",
        },
        {
          src: "/icons/icon-192x192.png",
          sizes: "192x192",
          type: "image/png",
          purpose: "any maskable",
        },
        {
          src: "/icons/icon-256x256.png",
          sizes: "256x256",
          type: "image/png",
        },
        {
          src: "/icons/icon-384x384.png",
          sizes: "384x384",
          type: "image/png",
        },
        {
          src: "/icons/icon-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "any maskable",
        },
      ],
    },
    {
      headers: {
        "Cache-Control": "public, max-age=600",
        "Content-Type": "application/manifest+json",
      },
    }
  );
};
