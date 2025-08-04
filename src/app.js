import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  duration: 800, // アニメーションの時間
  once: true, // アニメーションを1回だけ実行
  offset: 100, // 表示領域の100px手前でアニメーションを開始
});

document.addEventListener('DOMContentLoaded', () => {
  // 音声再生機能を持つ要素(.audio-item)を探す
  const audioItem = document.querySelector('.audio-item');

  // もし対象の要素がページになければ、何もしないで処理を終了
  if (!audioItem) {
    return;
  }

  // 必要な部品（画像、音声ファイル、再生アイコン）を取得
  const imageWrapper = audioItem.querySelector('.work-image-wrapper');
  const audio = audioItem.querySelector('audio');
  const playIcon = audioItem.querySelector('.play-icon');

  // 画像がクリックされたときの処理
  imageWrapper.addEventListener('click', () => {
    // もし音声が停止中なら再生し、再生中なら停止する
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  });

  // 音声が再生を開始したときの処理
  audio.addEventListener('play', () => {
    // is-playingクラスを追加して、再生中であることを示す
    audioItem.classList.add('is-playing');
    // アイコンを停止マークに変更
    playIcon.textContent = '❚❚';
  });

  // 音声が停止したときの処理
  audio.addEventListener('pause', () => {
    // 再生位置を最初に戻す
    audio.currentTime = 0;
    // is-playingクラスを削除
    audioItem.classList.remove('is-playing');
    // アイコンを再生マークに戻す
    playIcon.textContent = '▶';
  });
});
