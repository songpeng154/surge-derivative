import type { Component, Plugin } from 'vue'
import { SchemaForm } from './schema-form'
import { SchemaForm2 } from './schema-form2'

// 是否已安装标识
const INSTALLED_KEY = Symbol('INSTALLED_KEY')

// 全部组件
const COMPONENTS:Component[] = [ SchemaForm, SchemaForm2 ]

export default {
    install(app) {
        if (app[INSTALLED_KEY]) return
        app[INSTALLED_KEY] = true
        COMPONENTS.forEach(comp => app.component(comp.name!, comp))
    }
} satisfies Plugin