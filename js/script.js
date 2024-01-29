const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail'


const app = Vue.createApp({
    data: () => ({
        mailList: [],
        }
    ),
    method: {
        // getRandomEmail(amount) {
        //     for (let i = 0; i < amount; i++) {
        //     axios.get(endpoint)
        //         .then(res => {
        //         this.mailList.push(res.data.response);
        //     })}
        // } 
    },
    created() {
        // this.getRandomEmail(10)
        for (let i = 0; i < 10; i++) {
            axios.get(endpoint)
                .then(res => {
                this.mailList.push(res.data.response);
            })}
    }
});

app.mount("#root");
