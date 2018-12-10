~function () {
    var t_img;
    var isLoad = true;
    isImgLoad(function () {
        $("#loading").css("display", "none");
        First();
    });
    function isImgLoad(callback) {
        $('img').each(function () {
            if (this.height === 0) {
                isLoad = false;
                return false;
            }
        });
        if (isLoad) {
            clearTimeout(t_img);
            setTimeout(function () {
                callback();
            }, 500);
        } else {
            isLoad = true;
            t_img = setTimeout(function () {
                isImgLoad(callback);
            }, 500);
        }
    }
}();
function First() {
    $("#Home>.header>.title>img").addClass("animated bounceInLeft");
    $("#Home>.header>.logo>img").addClass("animated bounceInRight");
    setTimeout(function () {
        $("#Home>.center").css("display", "block");
        $("#Home>.center>img").eq(0).addClass("animated zoomInDown");
        $("#Home>.center>img").eq(1).addClass("animated flip");
    }, 800);
    
}

$("#Home").on("click", function () {
    this.style.display = "none";
    var myTest = $('#maseger'), pItems = myTest.find('.a1');
    pItems.eq(0).animate({ width: "5rem" }, 1000, function () {
        pItems.eq(1).animate({ width: "5rem" }, 1000, function () {
            pItems.eq(2).animate({ width: "5rem" }, 1000, function () {
                $("#start").animate({ opacity: 1 }, 1000);
                $("#button").on("click", function () {
                    $("#box").css("display", "none")
                    $("#Article").css("display", "none");
                    $("#start").css("opacity", 0);
                    $("#maseger").css({ "background-image": "url(./images/bg3.png)" });
                    $("#Answer").css("display", "block");
                    var listLength = $("#Answer li").length;
                    for (let i = 0; i < listLength; i++) {
                        setInterval(() => {
                            $("#Answer li").eq(i).addClass("animated bounceInRight").css("display", "block")
                        }, i * 300)
                    }
                })
            });
        });
    });
});

$("#Answer li").on("click", function () {
    $("#Answer").css({ "display": "none" });
    $("#TopicTwo").css({ "display": "block" })
    var listLength = $("#TopicTwo li").length;
    for (let i = 0; i < listLength; i++) {
        setInterval(() => {
            $("#TopicTwo li").eq(i).addClass("animated bounceInRight").css("display", "block")
        }, i * 300)
    }
});

$("#TopicTwo li").on("click", function () {
    $("#TopicTwo").css({ "display": "none" });
    $("#TopicSan").css({ "display": "block" })
    var listLength = $("#TopicSan li").length;
    for (let i = 0; i < listLength; i++) {
        setInterval(() => {
            $("#TopicSan li").eq(i).addClass("animated bounceInRight").css("display", "block")
        }, i * 300)
    }
});

$("#TopicSan li").on("click", function () {
    $("#TopicSan").css({ "display": "none" });
    $("#TopicSi").css({ "display": "block" })
    var listLength = $("#TopicSan li").length;
    for (let i = 0; i < listLength; i++) {
        setInterval(() => {
            $("#TopicSi li").eq(i).addClass("animated bounceInRight").css("display", "block")
        }, i * 300)
    }
});

$("#TopicSi li").on("click", function () {
    $("#TopicSi").css({ "display": "none" });
    $("#TopicFive").css({ "display": "block" })
    var listLength = $("#TopicFive li").length;
    for (let i = 0; i < listLength; i++) {
        setInterval(() => {
            $("#TopicFive li").eq(i).addClass("animated bounceInRight").css("display", "block")
        }, i * 300)
    }
});

$("#TopicFive li").on("click", function () {
    $("#TopicSi").css({ "display": "none" });
    $("#TopicFive").css({ "display": "none" })
    // $(".Result").css({ "display": "block" })

});

$(".Result").on("click", function () {
    this.style.display = "none";
    $("#maseger").css({ "background-image": "url(./images/note6/bg5.png)" });
    $("#text").css("display", "block");
    $("#text>img").addClass("animated zoomInUp");
    $("#Jump").animate({ opacity: 1 }, 2000);
})

function chooseTopic(callback) {
    // 每个答案的选择次数
    let selected = {
        a: 0,
        b: 0,
        c: 0,
        d: 0,
        e: 0,
    };
    let results = {
        a: '#Result1',
        b: '#Result2',
        c: '#Result3',
        d: '#Result4',
        e: '#Result5',
    };

    let liss = $('#Answer li, #TopicTwo li, #TopicSan li, #TopicSi li, #TopicFive li');

    liss.bind('click', (e) => {
        let node = $(e.target);
        if (node[0].nodeName === 'SPAN') {
            node = node.parent();
        }
        let checkedValue = node.attr('data-value');
        selected[checkedValue]++;
    });

    // 获取最大的数字
    function getMaxNumber(anwsers, results) {
        let result = 0;
        Object.values(anwsers).forEach((value) => {
            if (value > result) {
                result = value;
            }
        });
        return result;
    }

    // 获取最大数字的选项
    function getAnwsers(anwsers, num) {
        return Object.keys(anwsers).filter((key) => {
            return anwsers[key] === num;
        });
    }

    // 获取结果
    function getResult(ans) {
        let result, len = ans.length;
        if (len <= 1) {
            result = ans[0];
        }
        else {
            let random = Math.floor(Math.random() * len);
            result = ans[random];
        }
        return results[result];
    }

    function getMyResult() {
        let num = getMaxNumber(selected);
        let ans = getAnwsers(selected, num);
        let result = getResult(ans);
        return result;
    }

    $('#TopicFive').bind('click', () => {
        let result = getMyResult();
        callback && callback(result, selected);
    });

}

chooseTopic(function (id, selected) {
    console.log('----', id, selected);
    $(id).show();
    $("#maseger").css({ "background-image": "url(./images/note5/bg4.png)" });
    let animate1 = $(id + ">.Template>img");
    let animateArr = ["animated bounceInLeft", "animated bounceInRight", "animated fadeInDown"];
    for (let i = 0, len = animate1.length; i < len; i++) {
        setInterval(() => {
            animate1.eq(i).addClass(animateArr[i]).css("display", "block");
        }, i * 500);
    }
    var LeftLength = $(id + ">.aperture>.Left>img").length;
    for (let i = 0; i < LeftLength; i++) {
        setInterval(() => {
            $(id + ">.aperture>.Left>img").eq(0).addClass("animated rotateInDownLeft").css("display", "block");
            $(id + ">.aperture>.Left>img").eq(1).addClass("animated rotateInDownRight").css("display", "block");
        }, i * 500)
    }
    var RightLength = $(id + ">.aperture>.Right>img").length;
    for (let i = 0; i < RightLength; i++) {
        setInterval(() => {
            $(id + ">.aperture>.Right>img").eq(0).addClass("animated flip").css("display", "block");
            $(id + ">.aperture>.Right>img").eq(1).addClass("animated rotateInUpRight").css("display", "block");
        }, i * 500)
    }
});