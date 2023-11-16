import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), VitePWA(manifestForPlugIn)],
});

const manifestForPlugIn = {
    registerType: "autoUpdate",
    includeAssests: ["favicon.ico", "apple-touc-icon.png", "masked-icon.svg"],
    manifest: {
        name: "Mangrove Carbon Calculator",
        short_name: "Macaca",
        description: "Macaca Apps",
        icons: [
            {
                src: "./src/assets/img/icon-macaca.png",
                sizes: "144px",
                type: "image/png",
                purpose: "favicon",
            },
        ],
        theme_color: "#171717",
        background_color: "#f0e7db",
        display: "standalone",
        scope: "/",
        start_url: "/",
        orientation: "portrait",
    },
};
