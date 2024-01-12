function scrollToSection(sectionId) {
    // 滾動到相應的位置
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
//在menu按下任意按鈕，除了跳轉到對應div外，也關閉overlay
var overlay = document.getElementById('show_overlay');

function close_overlay(){
    overlay.style.display='none';
}

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


//menu overlay
function showOverlay(){
    document.getElementById('show_overlay').style.display='block';
}
function offOverlay(){
    document.getElementById('show_overlay').style.display='none';
}

// 在螢幕大小變化時檢測並自動隱藏overlay
window.addEventListener('resize', function () {
    if (window.innerWidth >= 600) {
        offOverlay();
    }
});

//預設網頁背景顏色
document.addEventListener('DOMContentLoaded', function() {
    document.body.style.backgroundColor = '#EBC1A8'; 
  });

//按按鈕變換顏色（側邊欄按鈕）
var aside_ooxx=document.getElementById("aside_ooxx");
var aside_code=document.getElementById("aside_code");
var aside_pss=document.getElementById("aside_pss");
var aside_memory=document.getElementById("aside_memory");
var aside_bricks=document.getElementById("aside_bricks");

aside_ooxx.addEventListener('click', change_bgc);
aside_code.addEventListener('click', change_bgc);
aside_pss.addEventListener('click', change_bgc);
aside_memory.addEventListener('click', change_bgc);
aside_bricks.addEventListener('click', change_bgc);

function change_bgc(event){

    var clickedButton = event.target;

    if(clickedButton ===aside_ooxx){
        document.body.style.backgroundColor = '#DBE2EC';
    }
    else if(clickedButton ===aside_bricks){
        document.body.style.backgroundColor = '#e0e5df'; 
    }
    else if(clickedButton ===aside_code){
        document.body.style.backgroundColor = '#C6DEE0';
    }
    else if(clickedButton ===aside_memory){
        document.body.style.backgroundColor = '#ead0d1'; 
    }
    else if(clickedButton ===aside_pss){
        document.body.style.backgroundColor = '#e2cada';
    }
}

//按按鈕變換顏色（menu按鈕）
var menu_ooxx=document.getElementById("menu_ooxx");
var menu_code=document.getElementById("menu_code");
var menu_pss=document.getElementById("menu_pss");
var menu_memory=document.getElementById("menu_memory");
var menu_bricks=document.getElementById("menu_bricks");

menu_ooxx.addEventListener('click', change_bgc);
menu_code.addEventListener('click', change_bgc);
menu_pss.addEventListener('click', change_bgc);
menu_memory.addEventListener('click', change_bgc);
menu_bricks.addEventListener('click', change_bgc);

function change_bgc_menu(event){

    var clickedButton = event.target;

    if(clickedButton ===menu_ooxx){
        document.body.style.backgroundColor = '#DBE2EC';
    }
    else if(clickedButton ===menu_bricks){
        document.body.style.backgroundColor = '#e0e5df'; 
    }
    else if(clickedButton ===menu_code){
        document.body.style.backgroundColor = '#C6DEE0';
    }
    else if(clickedButton ===menu_memory){
        document.body.style.backgroundColor = '#ead0d1'; 
    }
    else if(clickedButton ===menu_pss){
        document.body.style.backgroundColor = '#e2cada';
    }
}

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