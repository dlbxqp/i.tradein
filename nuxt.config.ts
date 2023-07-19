// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath, URL } from 'node:url';

// eslint-disable-next-line no-undef
export default defineNuxtConfig({
    vite : {
        resolve : {
            alias : {
                '~' : fileURLToPath(new URL('./node_modules', import.meta.url)),
            },
        },
        css : {
            preprocessorOptions : {
                scss : {
                    additionalData : '@use "@/assets/styles/main.scss" as *;',
                },
            },
        },
    },
    modules : ['@pinia/nuxt'],
    imports : {
        autoImport : false,
    },
    css : [
        '@/assets/styles/blocks/visually-hidden.scss',
        '@/assets/styles/ds-system/ds-palette/ds-palette_root.scss',
        '@/assets/styles/root.scss',
        '~/@splidejs/vue-splide/dist/css/splide-core.min.css',
    ],
    devtools : { enabled: true },
    head     : {
        title     : 'Trade-in от Инград',
        htmlAttrs : {
            lang : 'ru',
        },

        meta : [
            { charset: 'utf-8' },
            {
                name    : 'viewport',
                content : 'width=device-width, initial-scale=1',
            },
            {
                name    : 'format-detection',
                content : 'telephone=no',
            },
        ],
        link : [
            {
                rel  : 'icon',
                type : 'image/x-icon',
                href : '/favicon.ico',
            },
        ],
    },

    // pages    : true,
});
