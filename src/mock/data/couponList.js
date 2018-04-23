let dataList = []
const count = [1, 2, 3, 4, 5]
const validCoupons = ['SUMMER2016', 'WINTER2016', 'FALL2016', 'FALL2015', 'FALL2014']

for (var i in count) {
  dataList.push({
    id: (i - 0) - 0 + 1,
    validCoupons: validCoupons[i]
  })
}

export { dataList }
