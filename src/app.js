import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  duration: 800, // アニメーションが完了するまでの時間（ミリ秒）
  once: false, // falseに設定すると、スクロールのたびにアニメーションが再生される
  offset: 100, // 画面の100px手前でアニメーションを開始
});
