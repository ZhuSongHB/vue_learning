const vm = new Vue({
    el: '#app',
    data: {
        filterList: {},
        showFilter: false,
        goodsList: [
            {
                title: '上装',
                typeList: ['全部', '针织衫', '毛呢外套', 'T恤', '羽绒服', '棉衣', '卫衣', '风衣'],
                id: 1,
            },
            {
                title: '裤装',
                typeList: ['全部', '牛仔裤', '小脚/铅笔裤', '休闲裤', '打底裤', '哈伦裤'],
                id: 2,
            },
            {
                title: '裙装',
                typeList: ['全部', '连衣裙', '半身裙', '长袖连衣裙', '中长款连衣裙'],
                id: 3,
            }
        ]
    },
    methods: {
        handleClick(goods, typeIndex, type, goodsIndex) {
            goods.index = typeIndex
            if (typeIndex != 0) {
                this.showFilter = true
                vm.$set(this.filterList, goodsIndex, { type })
            } else {
                vm.$delete(this.filterList, goodsIndex, { type })
            }
            this.isNull()
        },
        del(indexFilter) {
            this.goodsList[indexFilter].index = 0
            vm.$delete(this.filterList, indexFilter)
            this.isNull()
        },
        isNull() {
            const arr = Object.keys(this.filterList)
            if (arr.length == 0) {
                this.showFilter = false
            }
        }
    }
})
vm.goodsList.forEach(item => vm.$set(item, 'index', 0))