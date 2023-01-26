var pagenow = 1;

function openpage(pageindex) {
    var oldpage = document.getElementById('page' + pagenow);
    var newpage = document.getElementById('page' + pageindex);
    oldpage.style.animation = 'fadeout 2s linear 0s 1 alternate';
    newpage.style.animation = 'fadein 2s linear 0s 1 alternate';

    if (pagenow == 2) {
        const element = document.getElementById("horrorVideo");
        element.remove();
    }

    if (pageindex == 4) {
        setTimeout(function() {
            new Audio('./sfx/tieng-mo-cua.mp3').play();
        }, 1000);
        setTimeout(function() {
            var audio = document.createElement("audio");
            audio.src = "./sfx/am-thanh-kinh-di.mp3";
            audio.loop = true;
            audio.play();
        }, 2100);
    } else if (pageindex == 2) {
        const element = document.getElementById("horrorVideo");
        element.src = "https://www.youtube.com/embed/NjGmJLIYWTQ?start=5231&autoplay=1&controls=0";
    }

    setTimeout(function() {
        oldpage.style.display = "none";
        newpage.style.display = "block";
        pagenow = pageindex;
    }, 1700);
}

function changetextpage2() {
    document.getElementById("loithoaipage2").innerHTML = "Bộ phim đáng sợ tới nỗi khiến 2 đứa sởn hết ra gà. Bỗng ở dưới tầng 1 phát ra tiếng động khá lớn, nghe như tiếng đập cửa.";
    document.getElementById("nextbtn2").style.display = "none";
    document.getElementById("selectdiv2").style.display = "block";
}