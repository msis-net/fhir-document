/**
 * 2024-10-12 (c)msis,inc.tokyo-setagaya-ku
 * common.js
 * 
 */

//年齢計算
function getAge(birthday,tgtday){
    if(tgtday===null){
        tgtday = new Date();
    }
    var thisYearsBirthday = new Date(tgtday.getFullYear(), birthday.getMonth(), birthday.getDate());
    var age = tgtday.getFullYear() - birthday.getFullYear();
    if(tgtday < thisYearsBirthday){//今年まだ誕生日が来ていない
        age--;
    }
    return age;
}

//西暦＞和暦
function toJapaneseEra(date) {
    // Intl.DateTimeFormatを使用して和暦に変換
    const options = {
        year: 'numeric',
        era: 'short', // "narrow"で略称（例: 令和, 平成）、"short"でフル表記（例: 令和元年）に
        month: 'numeric',
        day: 'numeric',
        calendar: 'japanese'
    };
    //日付型でない場合は日付型に変換
    if( typeof date != 'object' ) date = new Date(date);
    // 和暦形式の文字列を取得 (例: "R6/11/6")
    const formattedDate =  new Intl.DateTimeFormat([], options).format(date);
    // スラッシュを年月日に置換
    const [eraYear, month, day] = formattedDate.split('/');
    
    return `${eraYear}年${month}月${day}日`
}
