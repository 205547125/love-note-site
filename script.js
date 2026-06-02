const notes = [
  "我会把你的每一次小情绪都当成重要信号，因为你本来就值得被认真对待。",
  "你不用一直懂事，在我这里，你可以撒娇、可以委屈、也可以被偏爱。",
  "今天的坏心情到这里就下班吧，剩下的时间交给我来哄你。",
  "我喜欢你笑起来的样子，也喜欢你不开心时愿意让我靠近的样子。",
  "不是因为今天特别浪漫才想你，是因为想你，所以今天变得特别浪漫。",
  "你永远不是麻烦，你是我心甘情愿认真照顾的小朋友。"
];

const button = document.querySelector("#sweetBtn");
const note = document.querySelector("#sweetNote");
let noteIndex = 0;

button.addEventListener("click", () => {
  noteIndex = (noteIndex + 1) % notes.length;
  note.textContent = notes[noteIndex];
  note.classList.remove("pop");
  requestAnimationFrame(() => note.classList.add("pop"));
});
