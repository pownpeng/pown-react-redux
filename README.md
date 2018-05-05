
#pown-react-redux

### pown-react-redux*是什么*？
##pown-react-redux**是一个配合redux使用的插件。    
####pown-react-redux与react-redux相比更加简洁，没有把组件分为展示组件和  容器组件。只有单纯的传递store的功能，在最外层通过<Provider></Provider>定义完store之后，在子组件可以通过connect访问store。 
  
  
####pown-react-redux和react-redux一样有两个Api，Provider和connect。

####在最外层使用<Provider store = { store } ></Provider>,在全局上下文中定义store

####如果组件中需要使用store，可以使用connect这个Api，connect(组件)将会返回一个新组件。