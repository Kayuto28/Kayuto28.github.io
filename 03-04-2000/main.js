const onload = () => {
  const c = setTimeout(() => {
    document.getElementById("container").classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: false,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString('Dear chị <span style="color: #FFBCD9;">Mẫn Nhi</span> 🌸 ! <br/>')
  .pauseFor(2000)
  .typeString('Em làm này chơi cho vui thôi, chứ cũng không biết chúc chị cái gì trong này hết 😀')
  .pauseFor(4000)
  .deleteChars(82)
  .typeString('Đùa tí thôi, chứ <span style="color: #FFBCD9;">Birthday</span> là phải chúc mà, phải không?')
  .pauseFor(4000)
  .deleteChars(55)
  .typeString('<br/>Tặng chị 3 bông hoa virtual nè ...! <br/>')
  .callFunction(onload)
  .pauseFor(7000)
  .typeString('Đẹp không? <br/>')
  .pauseFor(4000)
  .typeString('Đẹp thì cười cái nào 😅')
  .pauseFor(3000)
  .deleteChars(35)
  .typeString('<br/>Hôm nay là ngày <span style="color: #FFBCD9;">03/04/2024</span>, ngày chị <span style="color: #FFBCD9;">Mẫn Nhi</span> 🌸 đã ra đời, và em có vài lời chúc dành cho chị:<br/><br/>')
  .pauseFor(3000)
  .typeString(' Chúc chị tuổi mới xinh đẹp.<br/>')
  .pauseFor(2000)
  .typeString(' Chúc chị tuổi mới tự tin, bớt tiêu cực.<br/>')
  .pauseFor(2000)
  .typeString(' Chúc chị nhiều sức khoẻ.<br/>')
  .pauseFor(2000)
  .typeString(' Chúc chị thành công với ước mơ của mình.<br/>')
  .pauseFor(2000)
  .typeString(' Chúc chị có được nhiều may mắn.<br/>')
  .pauseFor(2000)
  .typeString(' Chúc chị luôn vui vẻ.<br/>')
  .pauseFor(2000)
  .typeString(' Cuối cùng là ...<br/>')
  .pauseFor(2000)
  .typeString(' Chúc chị <span style="color: #FFBCD9;">Sinh Nhật</span> vui vẻ !<br/><br/>')
  .pauseFor(3000)
  .typeString(' <span style="color: #8fd3fe;">https://kayuto28.github.io/cute_gift/Nhi-Le.png</span><br/>')
  .typeString(' <span style="color: #8fd3fe;">https://kayuto28.github.io/cute_gift/Extra.png</span><br/>')
  .pauseFor(2000)
  .typeString('Người tặng,<br/> <span style="color: #2BDA8E;">Min Min Láo Cá. </span>')
  .pauseFor(1000)
  .stop()
  .start();