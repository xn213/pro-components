/**
 * 两个正则搞定数字增加千分符
 * @param {Number} num
 */
function addThousandSeparator(num) {
  return num.toString().replace(/^(-?)(\d+)(\.?\d*)$/, function(num, minus, integer, decimal) {
      return minus + integer.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + decimal
  })
}
