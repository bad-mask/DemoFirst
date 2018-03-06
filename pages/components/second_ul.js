// pages/components/second.js
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
    _getAllLi:function(){
      //使用 getRelationNodes 可以获得 nodes 数据，包含所有已关联的 second，且是有序的
      var nodes = this.getRelationNodes('path/to/second_ul');
    }
  },
  relations:{
    './second_ul':{
      type:'child',//关联的目标节点应为子节点
      linked:function(target){
        //每次有 second 被插入时执行，target 是该节点实例对象，触发在该节点 attached 生命周期之后
      },
      linkChanged:function(target){
        //每次有 second 被移动后执行，target 是该节点实例对西那个，触发在该节点 moved 生命周期之后
      },
      unlinked:function(target){
        //每次有 second 被移除时执行，target 是该节点实例对象，触发在该节点 detached 生命周期之后
      }
    }
  },
  ready:function(){
    this._getAllLi();
  }
})
