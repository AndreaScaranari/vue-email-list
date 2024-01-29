const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail'


const app = Vue.createApp({
    data: () => ({
        mailList: [],
        mAddressQtity: null,
        mAddressQFlag: 0
        }
    ),
    methods: {
        // # per generare al caricamento della pagina
        // getRandomEmail(amount) {
        //     for (let i = 0; i < amount; i++) {
        //     axios.get(endpoint)
        //         .then(res => {
        //         this.mailList.push(res.data.response);
        //     })}
        // }
        
        // # metodo legato a click button
        getRandomEmail() {
            this.mailList = [];
            this.mAddressQFlag = this.mAddressQtity;
            this.mAddressQtity = "";

            if (isNaN(this.mAddressQFlag) || this.mAddressQFlag <= 0) {
                this.mAddressQFlag = 0 
                return
            }

            for (let i = 0; i < this.mAddressQFlag; i++) {
            axios.get(endpoint)
                .then(res => {
                this.mailList.push(res.data.response);
            })}

        }
    },
    created() {
        // # per generare al caricamento della pagina
        // this.getRandomEmail(10)
    }
});

app.mount("#root");
