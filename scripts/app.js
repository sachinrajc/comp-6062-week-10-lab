const app = Vue.createApp({
    data() {
        return {
            FirstName: '',
            LastName: '',
            quantity: 0,
            pricePerItem: 10,
        };
    },
    computed: {
        fullName() {
            return `${this.FirstName} ${this.LastName}`;
        },
        totalPrice() {
            return this.quantity * this.pricePerItem;
        }
    },
    methods: {
        clearFields() {
            this.FirstName = '';
            this.LastName = '';
            this.quantity = 0;
        },
        increase() {
            setTimeout(() => {
                this.myCounter++;
                if (this.myCounter === 10) {
                    this.decrease();
                } else {
                    this.increase();
                }
            }, 500);
        },
        decrease() {
            setTimeout(() => {
                this.myCounter--;
                if (this.myCounter !== 0) {
                    this.decrease();
                } else {
                    this.increase();
                }
            }, 500);
        }
    }
});

app.mount('#app');
