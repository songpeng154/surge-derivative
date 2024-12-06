import type { INSTALLED_KEY } from '@surge/constants'

declare module 'vue' {
    interface App {
        [INSTALLED_KEY]: boolean
    }
}