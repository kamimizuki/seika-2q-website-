// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';
//1つ目
const swiper = new Swiper('.swiper-1', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  //scrollbar: {
  // el: '.swiper-scrollbar -1',
  //},
});

let titleElement = document.createTextNode(
  'スライド' + swiper.realIndex + 'を表示します。',
);
let titleContainer = document.getElementById('swiper-title');
titleContainer.appendChild(titleElement);

swiper.on('slideChange', function () {
  console.log('slide changed');

  console.log(swiper.realIndex);

  titleElement.remove();

  titleElement = document.createTextNode(
    'スライド' + swiper.realIndex + 'を表示しています。',
  );
  titleContainer.appendChild(titleElement);
});
const swiper2 = new Swiper('.swiper-2', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

// タイトル用のリストを準備
const titles = [
  'ぴえんのイラスト（男性）',
  '浮かれる人のイラスト（女性）',
  '怖くて腰が抜ける人のイラスト（女性）',
  '悔しくてハンカチを噛む人のイラスト（男性）',
];

let titleElement2 = document.createTextNode(titles[swiper2.realIndex]);

let titleContainer2 = document.getElementById('swiper-title-2');
titleContainer2.appendChild(titleElement2);

swiper2.on('slideChange', function () {
  // 先に表示していた要素を削除
  titleElement2.remove();

  // 新しいスライド番号のタイトルを表示
  titleElement2 = document.createTextNode(titles[swiper2.realIndex]);
  titleContainer2.appendChild(titleElement2);
});

import JustValidate from 'just-validate';
const validator = new JustValidate('#basic_form');

validator
  .addField('#basic_name', [
    {
      rule: 'required',
      errorMessage: '入力必須項目です。',
    },
    {
      rule: 'minLength',
      value: 3,
      errorMessage: '３文字以上入力してください',
    },
    {
      rule: 'maxLength',
      value: 15,
      errorMessage: '最大入力文字数は１５文字です。',
    },
  ])
  .addField('#basic_email', [
    {
      rule: 'required',
      errorMessage: '入力必須項目です。',
    },
    {
      rule: 'email',
      errorMessage: '形式が正しくありません',
    },
  ])
  .addField('#basic_password', [
    {
      rule: 'required',
      errorMessage: '入力必須項目です',
    },
    {
      rule: 'password',
      errorMessage: 'パスワードは8文字以上で数字を1字以上含めてください',
    },
  ])
  .addField('#basic_age', [
    {
      rule: 'required',
      errorMessage: '入力必須項目です',
    },
    {
      rule: 'number',
      errorMessage: '数字で入力してください',
    },
    {
      rule: 'minNumber',
      value: 18,
      errorMessage: '１８以上の数字を入力してください',
    },
    {
      rule: 'maxNumber',
      value: 150,
      errorMessage: '１５０以下の数字を入力してください',
    },
  ])
  .addField('#basic_address', [
    {
      rule: 'required',
      errorMessage: '入力必須項目です',
    },
  ])
  .onSuccess(function (event) {
    let formData = new FormData(event.target);
    console.log('name:', formData.get('name'));
    console.log('email:', formData.get('email'));
    console.log('password:', formData.get('password'));
    console.log('age:', formData.get('age'));
    console.log('address:', formData.get('address'));
  });
