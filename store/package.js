export const state = () => ({
    example_site_link: 1,
    link: null,
    example_website_project: false,
    website_project: null,
    proposal: null,
    extra_fast_2_days_delivery: false,
    additional_revision: false,
})

export const mutations = {
    setExample_site_link(state, payload) {
        state.example_site_link = payload
    },
    setLink(state, payload) {
        state.link = payload
    },
    setExample_website_project(state, payload) {
        state.example_website_project = payload
    },
    setWebsite_project(state, payload) {
        state.website_project = payload
    },
    setProposal(state, payload) {
        state.proposal = payload
    },
    setExtra_fast_2_days_delivery(state, payload) {
        state.extra_fast_2_days_delivery = payload
    },
    setAdditional_revision(state, payload) {
        state.additional_revision = payload
    },
}
