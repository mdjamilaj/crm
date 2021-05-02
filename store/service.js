export const state = () => ({
    categories: [
        { id: 1, name: 'Software Development', comment: 'Develop any type of website or web application' },
        { id: 2, name: 'Design', comment: 'Develop any type of website or web application' },
        { id: 3, name: 'Marketing', comment: 'Develop any type of website or web application' },
        { id: 4, name: 'Project Maintenance', comment: 'Develop any type of website or web application' },
    ],
    selected_category: null,
    sub_categories: [
        { id: 1, name: 'Web Development', comment: 'Develop any type of website or web application..' },
        { id: 2, name: 'Mobile App', comment: 'Develop any type of mobile app..' },
        { id: 3, name: 'CMS/EMP/POS Development', comment: 'management software, Restaurant management, client management software, e-Commerce management etc..' },
        { id: 4, name: 'Others Web Development', comment: 'Develop any type of custom web application or web based software or website etc..' },
    ],
    selected_sub_category: null,
    sub_sub_categories: [
        { id: 1, name: 'Web Development', comment: 'Develop any type of website or web application..' },
        { id: 2, name: 'Mobile App', comment: 'Develop any type of mobile app..' },
        { id: 3, name: 'CMS/EMP/POS Development', comment: 'management software, Restaurant management, client management software, e-Commerce management etc..' },
        { id: 4, name: 'Others Web Development', comment: 'Develop any type of custom web application or web based software or website etc..' },
    ],
    selected_sub_sub_category: null,
    has_sub_sub_category: true,
    project_discretion: null,
})

export const mutations = {
    setCategories(state, payload) {
        state.categories = payload
    },
    setSelected_category(state, payload) {
        state.selected_category = payload
    },
    setSub_categories(state, payload) {
        state.sub_categories = payload
    },
    setSelected_sub_category(state, payload) {
        state.selected_sub_category = payload
    },
    setSub_sub_categories(state, payload) {
        state.sub_sub_categories = payload
    },
    setSelected_sub_sub_category(state, payload) {
        state.selected_sub_sub_category = payload
    },
    setHas_sub_sub_category(state, payload) {
        state.has_sub_sub_category = payload
    },
    setProject_discretion(state, payload) {
        state.project_discretion = payload
    },
}
