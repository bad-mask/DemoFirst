// pages/components/second_li.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  relations:{
    './second_ul':{
      type:'parent',//关联的目标节点应为父节点
      linked:function(target){
        //每次被插入到 custom_ul 时执行，target 是 custom_ul 节点实例对象，触发在 attached 生命周期之后
      },
      linkChanged:function(target){
        //每次被移除后执行，target 是 custom_ul 节点实例对象，触发在 moved 生命周期之后
      },
      unlinked:function(target){
        //每次被移除时执行，target 是 custom_ul 节点实例对象，触发在 detached 生命周期之后
      }
    }
  }
})
