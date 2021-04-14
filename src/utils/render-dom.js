export default {
  name: 'RenderDom',
  functional: true,
  props: { // 可选
    render: Function,
  },
  // 为了弥补缺少的实例
  // 提供第二个参数作为上下文
  render: (h, ctx) => {
    return ctx.props.render(h)
  },
}
