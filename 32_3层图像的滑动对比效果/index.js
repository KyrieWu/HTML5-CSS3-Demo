let active = false;
let scroller_middle = document.querySelector('.scroller-middle')
let scroller_top = document.querySelector('.scroller-top')

// 绑定中间层的鼠标按下事件
scroller_middle.addEventListener('mousedown', () => {
    active = 'middle'
    scroller_middle.classList.add('scrolling')
})
// 为body绑定鼠标松开事件
document.body.addEventListener('mouseup', () => {
    active = false
    scroller_middle.classList.remove('scrolling')
})
// 为body绑定鼠标移出事件
document.body.addEventListener('mouseleave', () => {
    active = false
    scroller_middle.classList.remove('scrolling')
})

// 绑定最顶层的鼠标按下事件
scroller_top.addEventListener('mousedown', () => {
    active = 'top'
    scroller_top.classList.add('scrolling')
})
document.body.addEventListener('mouseup', () => {
    active = false
    scroller_top.classList.remove('scrolling')
})
// 为body绑定鼠标移出事件
document.body.addEventListener('mouseleave', () => {
    active = false
    scroller_top.classList.remove('scrolling')
})

// 在body上绑定鼠标移动事件
document.body.addEventListener('mousemove', (e) => {
    if (!active) return;

    let x = e.pageX;
    x -= document.querySelector('.container').getBoundingClientRect().left
    scrollIt(x)
})

function scrollIt(x) {
    // 计算滑动的距离
    let transform = Math.max(0, (Math.min(x, document.querySelector('.container').offsetWidth)));
    if (active === 'middle') {
        // 滑动中间层
        document.querySelector('.middle').style.width = transform + 'px'
        scroller_middle.style.left = transform - 25 + 'px'
        // 如果中间层滑块和最顶层滑块相交，根据中间层的滑动距离设置做顶层的滑动距离（一起滑动）
        if (scroller_top.getBoundingClientRect().left > scroller_middle.getBoundingClientRect().left - 5) {
            document.querySelector('.top').style.width = transform - 5 + 'px'
            scroller_top.style.left = transform - 30 + 'px'
        }
    }
    if (active === 'top') {
        // 滑动中间层
        document.querySelector('.top').style.width = transform + 'px'
        scroller_top.style.left = transform - 25 + 'px'
        // 如果中间层滑块和最顶层滑块相交，根据中间层的滑动距离设置做顶层的滑动距离（一起滑动）
        if (scroller_top.getBoundingClientRect().left > scroller_middle.getBoundingClientRect().left - 5) {
            document.querySelector('.middle').style.width = transform + 5 + 'px'
            scroller_middle.style.left = transform - 20 + 'px'
        }
    }
}

// 初始化
active = 'middle'
scrollIt(510)
active = 'top'
scrollIt(255)
active = false