'use strict';

//node.jsパターン

const Message = {
  win: 'あなたの勝ちです',
  lose: 'あなたの負けです',
  draw: '引き分けです',
};

const random = (min, max) => Math.floor(Math.random() * max + 1 - min)  + min

const hands = ['グー', 'チョキ', 'パー']

const playJanken = () => {
  const myHand = hands[random(0, 2)]
  const cpuHand = hands[random(0, 2)]
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
  
}
      
module.exports = playJanken


