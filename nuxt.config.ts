// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'Nuxt Dojo',
            meta: [
                {name: 'description', content: 'Everything about Nuxt 3'}
            ],
            link: [
                {rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
            ],
            script: [
                {
                    src: "https://js.stripe.com/v3/pricing-table.js",
                    async: true,
                    crossorigin: "anonymous"
                }
            ]
        }
    }
})

