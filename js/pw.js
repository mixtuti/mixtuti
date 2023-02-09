// JavaScript Document
function gate(){
   // ▼ユーザの入力を求める
   var UserInput = prompt("パスワードを入力して下さい:","");
   // ▼入力内容をチェック
   if( /\W+/g.test(UserInput) ) {
      // ▼半角英数字以外の文字が存在したらエラー
      alert("半角英数字のみを入力して下さい。");
   }
   // ▼キャンセルをチェック
   else if( UserInput != null ) {
      // ▼入力内容からファイル名を生成して移動
      location.href = UserInput + ".html";
   }
}