//初期化　定義
let Timer;

const body   = document.querySelectorAll('body');
const script = document.querySelectorAll('script');
const list   = document.createElement('h3');
const child  = body[0].insertBefore(list, script[2]);

list.classList.add('count');
//処理
Timer = setInterval(function() {
    const diff     = moment( '2112-09-03' ).diff( moment());
    const duration = moment.duration( diff );
    const days     = Math.floor( duration.asDays() );
    const hours    = duration.hours();
    const minutes  = duration.minutes();
    const seconds  = duration.seconds();
    
    list.textContent = `ドラえもんが産まれるまで${days}日と${hours}時間${minutes}分${seconds}秒`;
}, 1000);