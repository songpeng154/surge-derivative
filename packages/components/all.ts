import type { Component, Plugin, App } from 'vue'
import { SchemaForm } from './schema-form'
import { SchemaForm2 } from './schema-form2'
import { INSTALLED_KEY } from '@surge/constants'

// 全部组件
const COMPONENTS: Component[] = [ SchemaForm, SchemaForm2 ]

const SurgeDerivative:Plugin = {
    install(app: App) {
        if (app[INSTALLED_KEY]) return
        app[INSTALLED_KEY] = true
        COMPONENTS.forEach(comp => app.component(comp.name!, comp))
    }
}

export default SurgeDerivative