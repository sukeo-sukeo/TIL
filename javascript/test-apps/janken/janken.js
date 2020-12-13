'use strict';

//配列パターン
const btns = document.querySelectorAll('button');

const Message = {
  win: 'あなたの勝ちです',
  lose: 'あなたの負けです',
  draw: '引き分けです',
};

const random = (min, max) => Math.floor(Math.random() * max + 1 - min)  + min

const cpuHands = ['グー', 'チョキ', 'パー']

btns.forEach(btn => {
  btn.addEventListener('click', e => {
    const myHand = e.target.innerText
    const index = random(0, 2)
    const cpuHand = cpuHands[index]
    const result = (myhand, cpuhand) => {

      if (myhand === cpuhand) {
        return `わたし:${cpuhand}\nあなた:${myhand}\n${Message.draw}`
      } 
      
      if (myhand === 'グー' && cpuhand === 'チョキ' ||
          myhand === 'チョキ' && cpuhand === 'パー' ||
          myhand === 'パー' && cpuhand === 'グー' ) {
        return `わたし:${cpuhand}\nあなた:${myhand}\n${Message.win}`
      }
      
      if (myhand === 'グー' && cpuhand === 'パー' ||
          myhand === 'チョキ' && cpuhand === 'グー' ||
          myhand === 'パー' && cpuhand === 'チョキ' ) {
        return `わたし:${cpuhand}\nあなた:${myhand}\n${Message.lose}`
      }
    }

    console.log(result(myHand, cpuHand));

  })
})


