<template>
<!-- TODO 选择当前日期样式 color 优化 -->
  <div class="x-date"
       v-click-outside>
    <input type="text"
           :value="formatDate">
    <div class="pannel"
         v-if="isVisible">
      <div class="pannel-nav">
        <span @click="prevYear">&lt;</span>
        <span @click="prevMonth">&lt;&lt;</span>
        <span>{{time.year}}年</span>
        <span>{{time.month + 1}}月</span>
        <span @click="nextMonth">&gt;&gt;</span>
        <span @click="nextYear">&gt;</span>
      </div>
      <div class="pannel-content">
        <div class="week">
          <span class="cell"
                v-for="week in weekDays"
                :key="week">
            {{ week }}
          </span>
        </div>
        <div class="days">
          <!-- 直接列出一个 6 * 7 列表 -->
          <div v-for="i in 6"
               :key="i">
            <!-- 是否当月 不是 变灰 -->
            <span class="cell cell-days"
                  @click="chooseDate(visibleDays[(i-1)*7+(j-1)])"
                  :class="[
                    {notCurrentMonth: !isCurrentMonth(visibleDays[(i-1)*7+(j-1)])},
                    {today: isToday(visibleDays[(i-1)*7+(j-1)])},
                    {select: isSelect(visibleDays[(i-1)*7+(j-1)])}
                  ]"
                  v-for="j in 7">
              {{ visibleDays[(i-1) * 7 + (j - 1)].getDate() }}
            </span>
          </div>
        </div>
      </div>
      <div class="pannel-footer">
        昨天 今天 明天
      </div>
    </div>
  </div>
</template>

<script>
import * as utils from "../../utils/date-range";
export default {
  name: "XDate",
  data() {
    let { year, month } = utils.getYearMonthDay(this.value);
    return {
      isVisible: false, // 日期面板显示控制
      weekDays: ["日", "一", "二", "三", "四", "五", "六"],
      time: { year, month },
    };
  },
  props: {
    value: {
      type: Date,
      default: new Date(),
    },
  },
  directives: {
    clickOutside: {
      // 指令的生命周期
      bind(el, bindings, vnode) {
        // context
        // console.log(bindings,vnode)

        // 把事件绑定给 document 上, 看一下点击的是否是当前元素的内部
        let handler = (e) => {
          if (el.contains(e.target)) {
            // 判断一下是否当前面板已经显示出来了
            if (!vnode.context.isVisible) {
              vnode.context.focus();
              // console.log("focus");
            }
          } else {
            if (vnode.context.isVisible) {
              vnode.context.blur();
              // console.log("blur");
            }
          }
          // console.log('e.target', e.target)
        };
        el.handler = handler;
        document.addEventListener("click", handler);
      },
      unbind(el) {
        document.removeEventListener("click", el.handler);
      },
    },
  },
  methods: {
    focus() {
      this.isVisible = true;
    },
    blur() {
      this.isVisible = false;
    },
    isCurrentMonth(date) {
      // date 她是不是当月 this.value 年和月 是否相等
      let { year, month } = utils.getYearMonthDay(utils.getDate(this.time.year, this.time.month, 1));
      let { year: y, month: m } = utils.getYearMonthDay(date);
      return year === y && month === m;
    },
    isToday(date) {
      let { year, month, day } = utils.getYearMonthDay(new Date());
      let { year: y, month: m, day: d } = utils.getYearMonthDay(date);
      return year === y && month === m && day === d;
    },
    chooseDate(date) {
      console.log("chooseDate", date);

      this.time = utils.getYearMonthDay(date);
      this.$emit("input", date);
      this.blur(); // 关闭 面板
    },
    isSelect(date) {
      let { year, month, day } = utils.getYearMonthDay(this.value);
      let { year: y, month: m, day: d } = utils.getYearMonthDay(date);
      return year === y && month === m && day === d;
    },
    prevYear() {
      let y = utils.getDate(this.time.year, this.time.month,1)
      y.setFullYear(y.getFullYear() - 1)
      this.time = utils.getYearMonthDay(y)
    },
    prevMonth() {
      let d = utils.getDate(this.time.year, this.time.month,1)
      d.setMonth(d.getMonth() - 1)
      this.time = utils.getYearMonthDay(d)
    },
    nextMonth(){
      let d = utils.getDate(this.time.year, this.time.month,1)
      d.setMonth(d.getMonth() + 1)
      this.time = utils.getYearMonthDay(d)
    },
    nextYear(){
      let y = utils.getDate(this.time.year, this.time.month,1)
      y.setFullYear(y.getFullYear() + 1)
      this.time = utils.getYearMonthDay(y)
    }
  },
  mounted() {
    // console.log(this.visibleDays);
  },
  computed: {
    visibleDays() {
      // 可见日期
      // 先获取当前周几
      let { year, month } = utils.getYearMonthDay(
        utils.getDate(this.time.year, this.time.month, 1)
      );
      // 获取当前月份的第一天
      let currentFirstDay = utils.getDate(year, month, 1);
      // 前面就移动几天
      let week = currentFirstDay.getDay();
      // 当前开始的天数
      let startDay = currentFirstDay - week * 60 * 60 * 1000 * 24;

      // 循环 42 天
      let arr = [];
      for (let i = 0; i < 42; i++) {
        arr.push(new Date(startDay + i * 60 * 60 * 1000 * 24));
      }
      return arr;
    },
    formatDate() {
      let { year, month, day } = utils.getYearMonthDay(this.value); // getFullYear getMonth getDate
      return `${year}-${month + 1}-${day}`;
    },
  },
};
</script>

<style lang="scss">
.x-date {
  margin-bottom: 21px;
  .pannel {
    box-sizing: border-box;
    padding: 5px;
    width: 32 * 7 + 12px;
    position: absolute;
    margin-top: 10px;
    background: #fff;
    border: 1px solid pink;
    &-nav {
      height: 30px;
      display: flex;
      justify-content: space-around;
      span {
        cursor: pointer;
        user-select: none;
        line-height: 30px;
      }
    }
    &-content {
      color: #000;
      .week {
        .cell:first-child,
        .cell:last-child {
          color: red;
        }
      }
      .cell {
        box-sizing: border-box;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 32px;
        height: 32px;
        font-weight: bold;
      }
      .cell-days:hover {
        border: 1px solid pink;
      }
      .notCurrentMonth {
        color: gray;
      }
      .today {
        background: red;
        color: #fff !important;
      }
      .select {
        color: red;
        border: 1px solid red;
      }
    }
  }
}
</style>
