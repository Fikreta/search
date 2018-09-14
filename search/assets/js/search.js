var app = new Vue({
    el:'#app',
    data:{
        term:'',
        results:[],
        noResults:false
    },
    methods:{
        search:function() {
            fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(this.term)}&key=AIzaSyBtA5tbqaTRB9J99QZF-bI91X7PZfl99Dg
`)
            .then(res => res.json())
            .then(res => {
                this.results = res.results;
                this.noResults = this.results.length === 0;
                
            });
        }
    }
});
