import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'

function App() {

  const [answer1, setAnswer1] = useState();
  const [answer2, setAnswer2] = useState();
  const [answer3, setAnswer3] = useState();
  const [answer4, setAnswer4] = useState();
  
  useEffect(() => {
    // Question 1
      const word = 'NEGIE12'; 
      const wordArr = word.split('');
      const numbers = wordArr.filter(Number);

      let buffer = wordArr.reverse().filter( function( el ) {
        return numbers.indexOf( el ) < 0;
      });
      // jawaban 1
      let answer1 = buffer.concat(numbers)
      setAnswer1(answer1.join(''))

    // Question 2
    const sentence = "Saya sangat senang mengerjakan soal algoritma"
    const sentenceArr = sentence.split(" ")
    let answer2 = {
      word : '',
      panjang : 0, 
    }
    sentenceArr.map((word)=> {
      if(word.length > answer2.panjang){
        answer2 = {
          word : word,
          panjang : word.length
        }
      }
    })
     // jawaban 2
    setAnswer2(answer2)

    // Question 3
    const INPUT = ['xc', 'dz', 'bbb', 'dz']  
    const QUERY = ['bbb', 'ac', 'dz']  

    let answer3 = []
    let test = QUERY.filter((el)=>{
      // punya 1 element yang diap dibandingkan 
      let jumlah = 0
      INPUT.map((check)=>{
        if(check == el) {
          jumlah += 1
        }
      })
      answer3.push(jumlah)
    })
    // Jawaban no 3
    setAnswer3(answer3.toString())

    // Question 4

    let Matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]]
    let diagonal1 = []; 
    let diagonal2 = []; 

    for (let i = 0; i < Matrix.length; ) {
      for( let j = Matrix.length; j > 0; j-- ){
        diagonal1.push(Matrix[i][j-1])
        diagonal2.push(Matrix[i][i])
        i++;
      }
    }
//
    let Answer4 =diagonal2.reduce( (total, num)=> total + num ) - diagonal1.reduce( (total, num)=> total + num )
    setAnswer4(Answer4)


  }, []);

  
  console.log(answer2)
  return (
    <div className="App">
      <h1>Jawaban saya</h1>
      <p>Berikut adalah jawaban dari algoritma yang telah diimplementasikan menjadi code</p>
      <ul>
        <li>{answer1}</li>
        <li>kata terpanjang : {answer2.word}, panjang : {answer2.panjang}</li>
        <li>{answer3}</li>
        <li>{answer4}</li>
      </ul>
    </div>
  );
}

export default App;
