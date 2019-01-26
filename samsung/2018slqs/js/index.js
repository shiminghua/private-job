
~function () {
    var $music = $('.icon-music-outer');
    var $forbid = $music.find('.forbid');
    var audio = document.getElementById('bgMusic');
    function audioAutoPlay(audio) {
        document.addEventListener("WeixinJSBridgeReady", function () {
            audio.play();
        }, false);
        document.addEventListener('YixinJSBridgeReady', function () {
            audio.play();
        }, false);
    }

    audioAutoPlay(audio);

    $music.on('click', function () {
        if ($forbid.hasClass('icon-music')) {
            $forbid.removeClass('icon-music').addClass('icon-forbidMusic');
        } else {
            $forbid.removeClass('icon-forbidMusic').addClass('icon-music');
        }

        if (audio.paused) {
            audio.play();
            return
        }
        audio.pause();
    });
}();

/**
 * 判断图片全部加载完成
 * @param {array} imgArr 图片地址的数组
 * @param {function} callback 图片全部加载完成后的回调
 * 
 * @return undefined  无返回值
 */
function imagesIsAllLoaded(imgArr, callback) {
    var imgs = [];
    var len = imgArr.length;
    var flag = 0;

    for (var i = 0; i < len; i++) {
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

    var imgArr = [];
    $('img').each((index, image) => {
        imgArr.push(image.src);
    });

    imgArr.push('images/bg.jpg', 'images/bg2.jpg');
    imagesIsAllLoaded(imgArr, (imgs) => {
        $("#loading").hide();
        First();
    });

}();
function First() {
    $("#home-title").addClass("animated bounceInLeft");
    $("#home-logo").addClass("animated bounceInRight");

    setTimeout(function () {
        $("#Home>.center").css("display", "block");
        $("#Home>.center>img").eq(0).addClass("animated zoomInDown");
        $("#Home>.center>img").eq(1).addClass("animated flip");
    }, 800);

    $("#arrow").css({ "top": "62%" }).show();
}

function showAnswers() {
    var $home = $('#Home');
    var $arrow = $('#arrow');
    var $articleBox = $('#article-box');
    var $start = $("#start");
    var $answer = $('#Answer');

    $home.on('click', function () {
        $home.hide();
        $arrow.hide();
        $articleBox.show();

        $('#article-ul').animate({ height: '3rem' }, 5000, function () {
            $start.animate({ opacity: 1 }, 600);
        });

    });

    $start.on('click', function () {
        $articleBox.hide();
        $answer.show();
        $answer.find('li').each(function (index, item) {
            setTimeout(function () {
                $(item).addClass("animated bounceInRight").css("display", "block")
            }, index * 300)
        });
    });

}

function answersAnimate() {
    var $answer = $('#Answer');
    var $TopicTwo = $('#TopicTwo');
    var $TopicSan = $('#TopicSan');
    var $TopicSi = $('#TopicSi');
    var $TopicFive = $('#TopicFive');

    $answer.find('li').on('click', function () {
        $answer.hide();
        $TopicTwo.show();
        $TopicTwo.find('li').each(function (index, item) {
            setTimeout(function () {
                $(item).addClass("animated bounceInRight").css("display", "block")
            }, index * 300)
        });
    });

    $TopicTwo.find('li').on('click', function () {
        $TopicTwo.hide();
        $TopicSan.show();
        $TopicSan.find('li').each(function (index, item) {
            setTimeout(function () {
                $(item).addClass("animated bounceInRight").css("display", "block")
            }, index * 300)
        });
    });

    $TopicSan.find('li').on('click', function () {
        $TopicSan.hide();
        $TopicSi.show();
        $TopicSi.find('li').each(function (index, item) {
            setTimeout(function () {
                $(item).addClass("animated bounceInRight").css("display", "block")
            }, index * 300)
        });
    });

    $TopicSi.find('li').on('click', function () {
        $TopicSi.hide();
        $TopicFive.show();
        $TopicFive.find('li').each(function (index, item) {
            setTimeout(function () {
                $(item).addClass("animated bounceInRight").css("display", "block")
            }, index * 300)
        });
    });

    $TopicFive.find('li').on('click', function () {
        $TopicFive.hide();
        // $('#Result5').show();
    });
}

$(document).ready(function () {
    showAnswers();
    answersAnimate();
    initWxSdk();
});

// $("#arrow").on("click", function () {
//     $("#Home").css("display", "none");
//     this.style.display = "none";
//     var myTest = $('#maseger'), pItems = myTest.find('.B');
//     pItems.eq(0).animate({ height: "3rem" }, 2500, function () {
//         $("#start").animate({ opacity: 1 }, 600);
//         $("#button").on("click", function () {
//             $("#box").css("display", "none")
//             $("#Article").css("display", "none");
//             $("#start").css("display", "none");
//             $("#maseger").css({ "background-image": "url(./images/bg3.jpg)" });
//             $("#Answer").css("display", "block");
//             var listLength = $("#Answer li").length;
//             console.length(listLength)
//             for (var i = 0; i < listLength; i++) {
//                 var item = listLength[i];
//                 setTimeout(function () {
//                     $("#Answer li").eq(i).addClass("animated bounceInRight").css("display", "block")
//                 }, i * 300)
//                 // debugger
//             }
//         })
//     });
// })
// $("#Answer li").on("click", function () {
//     $("#Answer").css({ "display": "none" });
//     $("#TopicTwo").css({ "display": "block" })
//     var listLength = $("#TopicTwo li").length;
//     for (var i = 0; i < listLength; i++) {
//         setTimeout(function () {
//             $("#TopicTwo li").eq(i).addClass("animated bounceInRight").css("display", "block")
//         }, i * 300)
//     }
// });

// $("#TopicTwo li").on("click", function () {
//     $("#TopicTwo").css({ "display": "none" });
//     $("#TopicSan").css({ "display": "block" })
//     var listLength = $("#TopicSan li").length;
//     for (var i = 0; i < listLength; i++) {
//         setTimeout(function () {
//             $("#TopicSan li").eq(i).addClass("animated bounceInRight").css("display", "block")
//         }, i * 300)
//     }
// });

// $("#TopicSan li").on("click", function () {
//     $("#TopicSan").css({ "display": "none" });
//     $("#TopicSi").css({ "display": "block" })
//     var listLength = $("#TopicSan li").length;
//     for (var i = 0; i < listLength; i++) {
//         setTimeout(function () {
//             $("#TopicSi li").eq(i).addClass("animated bounceInRight").css("display", "block")
//         }, i * 300)
//     }
// });

// $("#TopicSi li").on("click", function () {
//     $("#TopicSi").css({ "display": "none" });
//     $("#TopicFive").css({ "display": "block" })
//     var listLength = $("#TopicFive li").length;
//     for (var i = 0; i < listLength; i++) {
//         setTimeout(function () {
//             $("#TopicFive li").eq(i).addClass("animated bounceInRight").css("display", "block")
//         }, i * 300)
//     }
// });

// $("#TopicFive li").on("click", function () {
//     $("#TopicSi").css({ "display": "none" });
//     $("#TopicFive").css({ "display": "none" })
//     // $(".Result").css({ "display": "block" })

// });



touch.on(".screenshot", "tap", function () {
    this.style.display = "none";
    $(".Result").css("display", "none")
    $("#arrow").css("display", "none")
    $("#maseger").css({ "background-image": "url(./images/note6/bg5.jpg)" });
    $("#text").css("display", "block");
    $("#text>img").addClass("animated zoomInUp");
    $("#Jump").css("display", "block");
    $("#Jump").animate({ opacity: 1 }, 2000);
});


function chooseTopic(callback) {
    var selected = {
        a: 0,
        b: 0,
        c: 0,
        d: 0,
        e: 0,
    };
    var results = {
        a: '#Result1',
        b: '#Result2',
        c: '#Result3',
        d: '#Result4',
        e: '#Result5',
    };

    var liss = $('#Answer li, #TopicTwo li, #TopicSan li, #TopicSi li, #TopicFive li');

    liss.bind('click', (e) => {
        var node = $(e.target);
        if (node[0].nodeName === 'SPAN') {
            node = node.parent();
        }
        var checkedValue = node.attr('data-value');
        selected[checkedValue]++;
    });

    // 获取最大的数字
    function getMaxNumber(anwsers, results) {
        var result = 0;
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
        var result, len = ans.length;
        if (len <= 1) {
            result = ans[0];
        }
        else {
            var random = Math.floor(Math.random() * len);
            result = ans[random];
        }
        return results[result];
    }

    function getMyResult() {
        var num = getMaxNumber(selected);
        var ans = getAnwsers(selected, num);
        var result = getResult(ans);
        return result;
    }

    $('#TopicFive').bind('click', function () {
        var result = getMyResult();
        callback && callback(result, selected);
    });

}

chooseTopic(function (id, selected) {
    // $("#arrow").css("display", "block")
    console.log('----', id, selected);
    $('#TopicFive').hide();
    $(id).show();
    $(id + '-img').show();
    $("#arrow").css({ "top": "61%", "left": "79%" }).show();
    $(id).find('.title1').addClass('animated zoomInLeft').show();
    $(id).find('.title2').addClass('animated zoomInRight').show();
    // $("#Result1>.super").css("display", "block");
    $("#maseger").css({ "background-image": "url(./images/note5/bg4.jpg)" });

    var animate1 = $(id + ">.Template>img");
    var animateArr = ["animated bounceInLeft", "animated bounceInRight", "animated fadeInDown"];
    for (var i = 0, len = animate1.length; i < len; i++) {
        setTimeout(function () {
            animate1.eq(i).addClass(animateArr[i]).css("display", "block");
        }, i * 500);
    }
    var LeftLength = $(id + ">.aperture>.Left>img").length;
    for (var i = 0; i < LeftLength; i++) {
        setTimeout(function () {
            $(id + ">.aperture>.Left>img").eq(0).addClass("animated rotateInDownLeft").css("display", "block");
            $(id + ">.aperture>.Left>img").eq(1).addClass("animated rotateInDownRight").css("display", "block");
        }, i * 500)
    }
    var RightLength = $(id + ">.aperture>.Right>img").length;
    for (var i = 0; i < RightLength; i++) {
        setTimeout(function () {
            $(id + ">.aperture>.Right>img").eq(0).addClass("animated flip").css("display", "block");
            $(id + ">.aperture>.Right>img").eq(1).addClass("animated rotateInUpRight").css("display", "block");
        }, i * 500)
    }
    setTimeout(function () {
        $(".Result span").css("display", "block");
    }, 1000)
});

function initWxSdk() {
    var shareTitle = "寻找属于你的电竞星系";
    var shareUrl = window.location.href;
    var shareDesc = "你是哪一种电竞星系？";
    var shareImg = "http://www.h5app.com.cn/samsung/xlqs2018/images/1521544753295_.pic_hd.jpg";
    $.ajax({
        type: 'GET', //GET
        url: "//www.h5app.com.cn/wxapi/getInitInfo.php?reqUrl=" + encodeURIComponent(window.location.href),
        async: false,
        dataType: 'json',
        success: function (data, textStatus, jqXHR) {

            wx.config({
                debug: false,
                appId: data.appid,
                timestamp: data.timestamp,
                nonceStr: data.nonceStr,
                signature: data.signature,
                jsApiList: [
                    "onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo", "onMenuShareQZone"
                    // 所有要调用的 API 都要加到这个列表中
                ]
            });
            wx.ready(function () {
                //alert("wx ready ok");
                wx.onMenuShareTimeline({
                    title: shareTitle, // 分享标题
                    link: shareUrl, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                    imgUrl: shareImg, // 分享图标
                    success: function () {
                        // 用户确认分享后执行的回调函数
                    },
                    cancel: function () {
                        // 用户取消分享后执行的回调函数
                    }
                });
                wx.onMenuShareAppMessage({
                    title: shareTitle, // 分享标题
                    desc: shareDesc, // 分享描述
                    link: shareUrl, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                    imgUrl: shareImg, // 分享图标
                    type: 'link', // 分享类型,music、video或link，不填默认为link
                    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                    success: function () {
                        // 用户确认分享后执行的回调函数
                    },
                    cancel: function () {
                        // 用户取消分享后执行的回调函数
                    }
                });
                wx.onMenuShareQQ({
                    title: shareTitle, // 分享标题
                    desc: shareDesc, // 分享描述
                    link: shareUrl, // 分享链接
                    imgUrl: shareImg, // 分享图标
                    success: function () {
                        // 用户确认分享后执行的回调函数
                    },
                    cancel: function () {
                        // 用户取消分享后执行的回调函数
                    }
                });

                wx.onMenuShareWeibo({
                    title: shareTitle, // 分享标题
                    desc: shareDesc, // 分享描述
                    link: shareUrl, // 分享链接
                    imgUrl: shareImg, // 分享图标
                    success: function () {
                        // 用户确认分享后执行的回调函数
                    },
                    cancel: function () {
                        // 用户取消分享后执行的回调函数
                    }
                });

                wx.onMenuShareQZone({
                    title: shareTitle, // 分享标题
                    desc: shareDesc, // 分享描述
                    link: shareUrl, // 分享链接
                    imgUrl: shareImg, // 分享图标
                    success: function () {
                        // 用户确认分享后执行的回调函数
                    },
                    cancel: function () {
                        // 用户取消分享后执行的回调函数
                    }
                });
            });
        }
    });
}

