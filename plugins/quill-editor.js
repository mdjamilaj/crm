import Vue from 'vue'

let VueEditor
if (process.client) {
    VueEditor = require('vue2-editor').VueEditor
    Vue.use(VueEditor)
}