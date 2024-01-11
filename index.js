// 按按鈕跳出指定div，其餘隱藏
function showDiv(divId) {
    hideDiv();

    // 顯示指定的 div
    var divToShow = document.getElementById('div' + divId);
    if (divToShow) {
        divToShow.style.display = 'grid';
    }
}

function hideDiv() {
    // 將所有的 div 隱藏
    var allDivs = document.querySelectorAll('.hidden');
    allDivs.forEach(function (div) {
        div.style.display = 'none';
    });
}
showDiv('_intro');


var start=$('#start');
var game_ooxx = $('#btn_ooxx');
var game_memory = $('#btn_memory');
var game_pss = $('#btn_pss');
var game_code = $('#btn_code');
var game_bricks = $('#btn_bricks');

// 初始情況下，設定所有按鈕的初始樣式
game_ooxx.add(game_memory).add(game_pss).add(game_code).add(game_bricks).css({
    'backgroundColor': '#faead3',
    'marginLeft': '0px',
    'borderRadius': '0px 15px 15px 0px',
});

function game_link(selectedGame) {

    hideDiv();
    // 重設所有按鈕的樣式
    game_ooxx.add(game_memory).add(game_pss).add(game_code).add(game_bricks).css({
        'backgroundColor': '#faead3',
        'marginLeft': '0px',
        'borderRadius': '0px 15px 15px 0px'
    });

    // 根據選中的按鈕設定樣式
    if (selectedGame.is(game_ooxx)) {
        $('body').css('backgroundColor', '#DBE2EC');
        $('#div_ooxx').css('display','block');
    } else if (selectedGame.is(game_bricks)) {
        $('body').css('backgroundColor', '#e0e5df');
        $('#div_bricks').css('display','block');
    } else if (selectedGame.is(game_memory)) {
        $('body').css('backgroundColor', '#ead0d1');
        $('#div_memory').css('display','block');
    } else if (selectedGame.is(game_pss)) {
        $('body').css('backgroundColor', '#e2cada');
        $('#div_pss').css('display','block');
    } else {
        $('body').css('backgroundColor', '#C6DEE0');
        $('#div_code').css('display','block');
    } 

    // 設定選中的按鈕的樣式
    selectedGame.css({
        'backgroundColor': '#b77e8d',
        'marginLeft': '20px',
        'borderRadius': '15px'
    });
}

function intro(){
    $('body').css('backgroundColor', '#EBC1A8');
}

// 點擊按鈕時執行的函數
game_ooxx.add(game_memory).add(game_pss).add(game_code).add(game_bricks).click(function() {
    game_link($(this));
});

// 初始情況下，會呼叫intro()，顯示預設背景顏色
intro(start);

// 終極密碼的js們
var small;
var large;
var ans;
var count = 0;

//讓終極密碼的答案為隨機數字
function randon(start,end){
    return Math.floor(Math.random()*(end-start+1))+start;
}

//level-1的資訊
function level_1(){
    small=1;
    large=100;
    ans=randon(small,large-1);
    document.getElementById("result").innerHTML="範圍："+small+"~"+large;
    document.getElementById("level_layout").style.display="none";
}

//level-2的資訊
function level_2(){
    small=1;
    large=1000;
    ans=randon(small,large-1);
    document.getElementById("result").innerHTML="範圍："+small+"~"+large;
    document.getElementById("level_layout").style.display="none";
}

//level-3的資訊
function level_3(){
    small=1;
    large=10000;
    ans=randon(small,large-1);
    document.getElementById("result").innerHTML="範圍："+small+"~"+large;
    document.getElementById("level_layout").style.display="none";
}
 
//比較使用者輸入的數字和終極密碼之大小，以顯示提示範圍
function compare() {
    var input_num = parseInt(document.getElementById('guess_num').value, 10);

    if (!isNaN(input_num) && input_num >= small && input_num <= large) {
        if (input_num < ans) {
            small = input_num;
            document.getElementById("result").innerHTML = "範圍：" + small + "~" + large;
        } else if (input_num > ans) {
            large = input_num;
            document.getElementById("result").innerHTML = "範圍：" + small + "~" + large;
        } else {
            document.getElementById("result").style.display="none";
            document.getElementById('count').innerText = "恭喜你答對了！猜測次數為：" + count+"次";
            document.getElementById('guess_num').style.display="none";
            document.getElementById('enter').style.display="none";
            document.getElementById('reset').innerText="再玩一次";
        }
    } else {
        alert("請輸入提示範圍內的有效數字！");
    }
}

//根據使用者選擇的關卡，顯示使用者選擇的關卡、輸入欄位、範圍提示以及重新出題按鈕
function show_level(button){
    var level=button.innerText;
    document.getElementById('show_level').innerText='你選擇的關卡是：'+level;
    document.getElementById('user').style.display="block";
    document.getElementById('result').style.display="block";
    document.getElementById('reset').style.display="block";
    document.getElementById('change').style.display="block";
    document.getElementById('info_layout').style.display="block";

}

// 更新猜測次數和範圍提示
function update_count() {
    var input_value = document.getElementById('guess_num').value;

    if (!isNaN(input_value) && input_value !== "") {
        if(input_value < large && input_value > small){
            count++;
            compare(); // 輸入有效數字時，同時更新範圍提示
        }
    }
}

// 重新出題
function restart(){
    count = 0;
    document.getElementById('count').innerText = "";
    document.getElementById('guess_num').value = "";
    document.getElementById('result').innerText = "";
    
    // 重新顯示元素
    document.getElementById('result').style.display = "block";
    document.getElementById('guess_num').style.display = "inline-block";
    document.getElementById('enter').style.display = "inline-block";
    document.getElementById('reset').innerText = "重新出題";
}

//我想換關卡
function change(){
    document.getElementById("level_layout").style.display="block";
    document.getElementById("info_layout").style.display="none";
}