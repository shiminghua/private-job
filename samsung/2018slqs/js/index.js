


/**
 * 判断图片全部加载完成
 * @param {array} imgArr 图片地址的数组
 * @param {function} callback 图片全部加载完成后的回调
 * 
 * @return undefined  无返回值
 */
function imagesIsAllLoaded(imgArr, callback) {
    let imgs = [];
    let len = imgArr.length;
    let flag = 0;

    for (let i = 0; i < len; i++) {
        imgs[i] = new Image();
        imgs[i].onload = function () {
            flag++;
            if (flag >= len) {
                callback && callback(imgs);
            }
        };
        imgs[i].src = imgArr[i];
    }
}
~function () {

    let imgArr = [];
    $('img').each((index, image) => {
        imgArr.push(image.src);
    });

    imgArr.push('images/bg.jpg', 'images/bg2.jpg');
    imagesIsAllLoaded(imgArr, (imgs) => {
        $("#loading").css("display", "none");
        First();
    });

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
        $("#arrow").css("display", "none")
        var myTest = $('#maseger'), pItems = myTest.find('.B');
        pItems.eq(0).animate({ height: "3rem" }, 2500, function () {
            $("#start").animate({ opacity: 1 }, 600);
            $("#button").on("click", function () {
                $("#box").css("display", "none")
                $("#Article").css("display", "none");
                $("#start").css("display", "none");
                $("#maseger").css({ "background-image": "url(./images/bg3.jpg)" });
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
$("#arrow").on("click", function () {
    $("#Home").css("display", "none");
    this.style.display = "none";
    var myTest = $('#maseger'), pItems = myTest.find('.B');
    pItems.eq(0).animate({ height: "3rem" }, 2500, function () {
        $("#start").animate({ opacity: 1 }, 600);
        $("#button").on("click", function () {
            $("#box").css("display", "none")
            $("#Article").css("display", "none");
            $("#start").css("display", "none");
            $("#maseger").css({ "background-image": "url(./images/bg3.jpg)" });
            $("#Answer").css("display", "block");
            var listLength = $("#Answer li").length;
            for (let i = 0; i < listLength; i++) {
                setInterval(() => {
                    $("#Answer li").eq(i).addClass("animated bounceInRight").css("display", "block")
                }, i * 300)
            }
        })
    });
})
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

$(".screenshot").click(function (e) {
    e.preventDefault()
    if (e.target.className == "screenshot") {

    }
})

touch.on(".screenshot", "tap", function () {
    this.style.display = "none";
    $(".Result").css("display", "none")
    $("#maseger").css({ "background-image": "url(./images/note6/bg5.jpg)" });
    $("#text").css("display", "block");
    $("#text>img").addClass("animated zoomInUp");
    $("#Jump").css("display", "block");
    $("#Jump").animate({ opacity: 1 }, 2000);
});


function chooseTopic(callback) {
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
    $("#arrow").css("display", "block")
    console.log('----', id, selected);
    $(id).show();
    $(id + '-img').show();
    $("#maseger").css({ "background-image": "url(./images/note5/bg4.jpg)" });
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
    setInterval(() => {
        $(".Result span").css("display", "block");
    }, 1000)
});