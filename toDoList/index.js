const vm = new Vue({
    el: "#app",
    data: {
        underway: [],
        duplicate: [],
        alreadyCompleted: [],
        value: ''
    },
    methods: {
        add() {
            if (this.value == undefined || this.duplicate.indexOf(this.value) >= 0) {
                return;
            }
            this.duplicate.push(this.value)
            this.underway.push({
                title: this.value,
                id: Math.random()
            })
        },
        handleInput(e) {
            this.value = e.target.value
        },
        delivery(index, type) {
            if (type === 'need') {
                const item = this.underway.splice(index, 1)
                this.alreadyCompleted.push(...item)
            } else {
                const item = this.alreadyCompleted.splice(index, 1)
                this.underway.push(...item)
            }
        },
        delte(index, type) {
            if (type === 'need') {
                this.underway.splice(index, 1)
            } else {
                this.alreadyCompleted.splice(index, 1)
            }
        }
    }
})