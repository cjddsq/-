window.onload = function () {
    // 获取container
    var banner = document.getElementById("banner");
    var is = banner.getElementsByTagName("img");
    // 获取left
    var left = document.getElementById("left");
    // 获取right
    var right = document.getElementById("right");
    // 获取locate
    var locate = document.getElementById("locate");
    // 获取li
    var li = locate.getElementsByTagName("li");
    // 定义变量
    var num = 0;
    var time;
    // 默认第一个li为红色
    li[0].style.background = "red";
    li[0].style.display = "block";
    //  换图的函数
        time = setInterval(func, 3000); 
    function func() {
        ++num;
        num = num == li.length ? 0 : num;
        //  指向下一张图片
        // 通过for循环改变li的样式
        for (var temp = 0; temp < li.length; temp++) {
            is[temp].style.display = 'none';
            li[temp].style.background = "#fff";
        }
        //  给本张图片添加样式
        li[num].style.background = "red";
        is[num].style.display = 'block';
    }
        //  绑定点击span处理函数
        right.onclick = function () {
            ++num;
            num = num % (li.length - 1);
            if (num == 0) {
                num = 0;
                //   通过for循环清除所有样式
                for (var i = 0; i < li.length; i++) {
                    is[i].style.display = 'none';
                    li[i].style.background = "#fff";
                }
                //    给本张图添加样式                             
                is[num].style.display = 'block';
                li[num].style.background = "red"
            }
            else {
                //  通过for循环清除所有样式
                for (var i = 0; i < li.length; i++) {
                    is[i].style.display = 'none';
                    li[i].style.background = "#fff";
                }
                //  给本张图添加样式
                is[num].style.display = 'block';
                li[num].style.background = "red"
            }
        }
    // 绑定点击span处理函数
    left.onclick = function () {
        --num;
        if (num < 0) {
            num = (li.length - 1);
        }
        // 通过for循环清除所有样式
        for (var i = 0; i < li.length; i++) {
            is[i].style.display = "none";
            li[i].style.background = "#fff";
        }
        // 给本张图添加样式
        is[num].style.display = "block";
        li[num].style.background = "red";
    }
    //  给li绑定事件
    for (var i = 0; i < li.length; i++) {
        li[i].num = i;
        li[i].onclick = function () {
            num = this.num;
            // 通过for循环清除所有样式
            for (var temp = 0; temp < li.length; temp++) {
                is[temp].style.display = 'none';
                li[temp].style.background = "#fff";
            }
            //  给本张图添加样式
            is[num].style.display = "block";
            li[num].style.background = "red";
        }
    }
    banner.addEventListener("mouseover", func1, false);
    function func1() {
        //停止定时器
        clearInterval(time);
        //显示左右按钮
        left.style.display = "block";
        right.style.display = "block";
    }
    //鼠标移出
    banner.addEventListener("mouseout", func2, false);
    function func2() {
        //重启定时器
        time = setInterval(func, 3000);
        //隐藏左右按钮
        left.style.display = "none";
        right.style.display = "none";
    }
}