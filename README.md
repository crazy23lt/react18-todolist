```js
const [count, setCount] = useState(0);
/**
 * useEffect(setup,dependencies?)
 * 执行时机
 * 1. 初次渲染完成后
 * 2. 更新渲染完成后
 * dependencies 可接收 state props，特定数据数据发生更新再回执行 useEffect
 */
useEffect(() => {
    console.dir("useEffect Setup 函数");
    document.title = `You clicked ${count} times`;
    return () => {
        console.dir("清理函数逻辑");
        /* 清理函数逻辑 */
    };
}, [count]);
```
1.原始事件模型
2.

1.阻止冒泡 `event.stopPropagation()` 
2.阻止默认事件 `event.preventDefault()` 