$.ajax({
    url: "http://api.jisuapi.com/xiaohua/text?appkey=3503d1b15fac317b",
    data: {
        pagesize: 10
    },
    dataType: "jsonp",
    success: function (res) {
        let str = "";
        let data = res.result.list;
        $.each(data, function (i, v) {
            str += `
                <span class="addtime">${v.addtime}</span>
                <p class="text-content">
                    ${v.content}  
                </p>
            `;
        });
        $(".xiaohua").html(str);
    }
});
$(".lz").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    let index = $(this).index();
    $(this).parent().prev().find("ul").find("li").eq(index).addClass("active").siblings().removeClass("active");
});

$.ajax({
    url: "http://api.jisuapi.com/miyu/search?appkey=3503d1b15fac317b",
    data: {
        classid: 1,
        pagesize: 2,
        pagenum: 1,
    },
    dataType: "jsonp",
    success: function (res) {
        let str = "";
        let data = res.result.list;
        console.log(data);
        $.each(data, function (i, v) {
            str += `
                <p class="text-content">
                    ${v.content}
                </p>
                <span>
                    ${v.answer}
                </span>
            `;
        });
        $(".miyu").html(str);
    }
});