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
var aside_code=document.getElementById("aside_code");
var aside_pss=document.getElementById("aside_pss");
var aside_memory=document.getElementById("aside_memory");

aside_code.addEventListener('click', change_bgc);
aside_pss.addEventListener('click', change_bgc);
aside_memory.addEventListener('click', change_bgc);

function change_bgc(event){

    var clickedButton = event.target;

    if(clickedButton ===aside_code){
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
var menu_code=document.getElementById("menu_code");
var menu_pss=document.getElementById("menu_pss");
var menu_memory=document.getElementById("menu_memory");

menu_code.addEventListener('click', change_bgc);
menu_pss.addEventListener('click', change_bgc);
menu_memory.addEventListener('click', change_bgc);

function change_bgc_menu(event){

    var clickedButton = event.target;

    if(clickedButton ===menu_code){
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

//剪刀石頭布
var user_gesture=document.getElementById('user_gesture');
var computer_gesture=document.getElementById('computer_gesture');
var computer_choices=[
    'https://2.bp.blogspot.com/-VhlO-Yfjy_E/Uab3z3RNJQI/AAAAAAAAUVg/fX8VnSVDlWs/s800/janken_gu.png',
    'https://4.bp.blogspot.com/-__yEIXe5SxU/Uab3zO7BB2I/AAAAAAAAUVI/MYg6TVeiv-Y/s800/janken_choki.png',
    'https://3.bp.blogspot.com/-qZtyoue9xKs/Uab30IG0Q5I/AAAAAAAAUVk/qnH8a2OgrvI/s800/janken_pa.png'
];

var result=document.getElementById('result_match');

var imageUrl;
function choice(clickedImage) {
    imageUrl = clickedImage.src;
    var userImage = document.createElement('img');
    userImage.src = imageUrl;

    user_gesture.innerHTML = '';
    user_gesture.appendChild(userImage);

    computer_random_choice(computer_choices);
    
}

function computer_random_choice(computer_choices){
    var computerIndex = (Math.floor(Math.random() * 3));
    var computerImage = document.createElement('img');
    computerImage.src = computer_choices[computerIndex];

    computer_gesture.innerHTML = '';
    computer_gesture.appendChild(computerImage);
    battle(imageUrl,computerImage);
}


var user_ratio=0;
var computer_ratio=0;
var ratio=document.getElementById('ratio');
ratio.innerText=user_ratio+':'+computer_ratio;

function battle(imageUrl, computerImage) {
    if (imageUrl === computerImage.src) {
        result.innerText='這一局，平手！';
        user_ratio++;
        computer_ratio++;
        ratio.innerText=computer_ratio+':'+user_ratio;

         // console.log('平手') ;
    } else if (
        (imageUrl === 'https://2.bp.blogspot.com/-VhlO-Yfjy_E/Uab3z3RNJQI/AAAAAAAAUVg/fX8VnSVDlWs/s800/janken_gu.png' && computerImage.src === 'https://4.bp.blogspot.com/-__yEIXe5SxU/Uab3zO7BB2I/AAAAAAAAUVI/MYg6TVeiv-Y/s800/janken_choki.png') ||
        (imageUrl === 'https://4.bp.blogspot.com/-__yEIXe5SxU/Uab3zO7BB2I/AAAAAAAAUVI/MYg6TVeiv-Y/s800/janken_choki.png' && computerImage.src === 'https://3.bp.blogspot.com/-qZtyoue9xKs/Uab30IG0Q5I/AAAAAAAAUVk/qnH8a2OgrvI/s800/janken_pa.png')||
        (imageUrl ==='https://3.bp.blogspot.com/-qZtyoue9xKs/Uab30IG0Q5I/AAAAAAAAUVk/qnH8a2OgrvI/s800/janken_pa.png' && computerImage.src==='https://2.bp.blogspot.com/-VhlO-Yfjy_E/Uab3z3RNJQI/AAAAAAAAUVg/fX8VnSVDlWs/s800/janken_gu.png')
    ) {
        result.innerText='這一局，你贏了！';
        user_ratio++;
        ratio.innerText=computer_ratio+':'+user_ratio;
        // console.log('你贏了') ;
    } else {
        result.innerText='這一局，你輸了！';
        computer_ratio++;
        ratio.innerText=computer_ratio+':'+user_ratio;
        // console.log('你輸了') ;
    }
}

function restart(){
    user_gesture.innerHTML='<img class="gesture_img" src="https://2.bp.blogspot.com/-VhlO-Yfjy_E/Uab3z3RNJQI/AAAAAAAAUVg/fX8VnSVDlWs/s800/janken_gu.png">';
    computer_gesture.innerHTML='<img class="gesture_img" src="https://2.bp.blogspot.com/-VhlO-Yfjy_E/Uab3z3RNJQI/AAAAAAAAUVg/fX8VnSVDlWs/s800/janken_gu.png">';
    user_ratio=0;
    computer_ratio=0;
    ratio.innerText=computer_ratio+':'+user_ratio;
}

// 記憶力大考驗
const pictures=[
    'https://1.bp.blogspot.com/-uoAUokNUGJc/XxU0v2S47gI/AAAAAAABaPs/1rFMl76-f6M7PuSG77mOWAwKrjmt0e5dACNcBGAsYHQ/s1600/yumekawa_bird1_red.png',
    'https://1.bp.blogspot.com/-uoAUokNUGJc/XxU0v2S47gI/AAAAAAABaPs/1rFMl76-f6M7PuSG77mOWAwKrjmt0e5dACNcBGAsYHQ/s1600/yumekawa_bird1_red.png',
    'https://1.bp.blogspot.com/-rbsE_u7VcbQ/XxU0wpaZZOI/AAAAAAABaP4/fWrtq1wo9QM7s1t4fyXpuza5f7LUqHpZQCNcBGAsYHQ/s1600/yumekawa_bird4_blue.png',
    'https://1.bp.blogspot.com/-rbsE_u7VcbQ/XxU0wpaZZOI/AAAAAAABaP4/fWrtq1wo9QM7s1t4fyXpuza5f7LUqHpZQCNcBGAsYHQ/s1600/yumekawa_bird4_blue.png',
    'https://1.bp.blogspot.com/-yMpJyA42TwY/XxU0xCLTNcI/AAAAAAABaP8/SuCP0NYBRnwmBxG44JxeujVYoEZ9s8oVgCNcBGAsYHQ/s1600/yumekawa_bird5_purple.png',
    'https://1.bp.blogspot.com/-yMpJyA42TwY/XxU0xCLTNcI/AAAAAAABaP8/SuCP0NYBRnwmBxG44JxeujVYoEZ9s8oVgCNcBGAsYHQ/s1600/yumekawa_bird5_purple.png',
    'https://1.bp.blogspot.com/-OgXsWbsTn9g/XxU0wA1LnGI/AAAAAAABaPw/QxfmUXAlwVkPo1tdOku4EZRJyioUzemKQCNcBGAsYHQ/s1600/yumekawa_bird2_white.png',
    'https://1.bp.blogspot.com/-OgXsWbsTn9g/XxU0wA1LnGI/AAAAAAABaPw/QxfmUXAlwVkPo1tdOku4EZRJyioUzemKQCNcBGAsYHQ/s1600/yumekawa_bird2_white.png',
    'https://1.bp.blogspot.com/-6KA4b6Yzqs4/XxU0wWckoII/AAAAAAABaP0/NL2sOUXPehc9-wGizN5CDwo4muGkvidCACNcBGAsYHQ/s1600/yumekawa_bird3_green.png',
    'https://1.bp.blogspot.com/-6KA4b6Yzqs4/XxU0wWckoII/AAAAAAABaP0/NL2sOUXPehc9-wGizN5CDwo4muGkvidCACNcBGAsYHQ/s1600/yumekawa_bird3_green.png',
    'https://1.bp.blogspot.com/-f0UimUR1SVc/XxU0xHkiHLI/AAAAAAABaQA/r3HwmWx-4pMU70JyraGyv1Hycd-BVF4RQCNcBGAsYHQ/s1600/yumekawa_bird6_yellow.png',
    'https://1.bp.blogspot.com/-f0UimUR1SVc/XxU0xHkiHLI/AAAAAAABaQA/r3HwmWx-4pMU70JyraGyv1Hycd-BVF4RQCNcBGAsYHQ/s1600/yumekawa_bird6_yellow.png',
    'https://1.bp.blogspot.com/-Jh6Y6hylvC4/XxU0x55zxPI/AAAAAAABaQI/Ku60i_RAJMcF7lyaAasjQ3vSEPgQGNKtACNcBGAsYHQ/s1600/yumekawa_bird8_gray.png',
    'https://1.bp.blogspot.com/-Jh6Y6hylvC4/XxU0x55zxPI/AAAAAAABaQI/Ku60i_RAJMcF7lyaAasjQ3vSEPgQGNKtACNcBGAsYHQ/s1600/yumekawa_bird8_gray.png',
    'https://1.bp.blogspot.com/-wZxFVGzr26c/XxU0xrRse6I/AAAAAAABaQE/OA3agR8Pk1k0vh2Q2Wd-V-8Ubbdd8y6tQCNcBGAsYHQ/s1600/yumekawa_bird7_orange.png',
    'https://1.bp.blogspot.com/-wZxFVGzr26c/XxU0xrRse6I/AAAAAAABaQE/OA3agR8Pk1k0vh2Q2Wd-V-8Ubbdd8y6tQCNcBGAsYHQ/s1600/yumekawa_bird7_orange.png',
    
];

var pic=pictures.sort(() => (Math.random() >.5) ? 2: -1);

for(i=0;i<pictures.length;i++){
    let box=document.createElement('div')
    box.className='item';

    const img = document.createElement('img');
    img.src = pic[i];
    box.appendChild(img);
    img.width = '60';
    img.height = '60';

    box.onclick=function(){
        this.classList.add('open')
        setTimeout(function(){

            if(document.querySelectorAll('.open').length >1){
                if(document.querySelectorAll('.open')[0].innerHTML==document.querySelectorAll('.open')[1].innerHTML){
                    
                }
            }

        },500)
    }

    document.querySelector('.game_board').appendChild(box);
}