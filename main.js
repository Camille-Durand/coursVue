Vue.createApp({
    data() {
        return {
            mesFilms: [],
            nomFilm: '',
        };
    },
    methods: {
        addMovie() {
            return this.mesFilms.push(this.nomFilm);
        }
    }
}).mount('#app');