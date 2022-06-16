class LinkedList {
    constructor() {
     this.firstEl = null
     this.lastEl = null
    }
    append(data) {
        const node = {
            data: data,
            next: null
        }
        if (this.lastEl){
            this.lastEl.next = node
        }
        if (!this.firstEl){
            this.firstEl = node
        }
        this.lastEl = node
    }
    prepend(data){
        const node = {
            data: data,
            next: this.firstEl
        }
        this.firstEl = node
        if (!this.lastEl){
            this.lastEl = node
        }
    }
}

const list = new LinkedList()
list.prepend('abc')
list.append('hi')
list.append('bro')
console.log(list)

