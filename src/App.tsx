import './App.css'
import { useState } from 'react'
import logo from './LogoV2.svg'

function App() {
  const [text, setText] = useState('')
  const [result, setResult] = useState('')

  const thaiToEnglishMap: { [key: string]: string } = {
    ๅ: '1',
    '/': '2',
    '-': '3',
    ภ: '4',
    ถ: '5',
    'ุ': '6',
    'ึ': '7',
    ค: '8',
    ต: '9',
    จ: '0',
    ข: '-',
    ช: '=',
    ๆ: 'q',
    ไ: 'w',
    ำ: 'e',
    พ: 'r',
    ะ: 't',
    'ั': 'y',
    'ี': 'u',
    ร: 'i',
    น: 'o',
    ย: 'p',
    บ: '[',
    ล: ']',
    ฟ: 'a',
    ห: 's',
    ก: 'd',
    ด: 'f',
    เ: 'g',
    '้': 'h',
    '่': 'j',
    า: 'k',
    ส: 'l',
    ว: ';',
    ง: "'",
    ผ: 'z',
    ป: 'x',
    แ: 'c',
    อ: 'v',
    'ิ': 'b',
    'ื': 'n',
    ท: 'm',
    ม: ',',
    ใ: '.',
    ฝ: '/',
    '+': '!',
    '๑': '@',
    '๒': '#',
    '๓': '$',
    '๔': '%',
    'ู': '^',
    '฿': '&',
    '๕': '*',
    '๖': '(',
    '๗': ')',
    '๘': '_',
    '๙': '+',
    '๐': 'Q',
    '"': 'W',
    ฎ: 'E',
    ฑ: 'R',
    ธ: 'T',
    'ํ': 'Y',
    '๊': 'U',
    ณ: 'I',
    ฯ: 'O',
    ญ: 'P',
    ฐ: '{',
    ',': '}',
    ฤ: 'A',
    ฆ: 'S',
    ฏ: 'D',
    โ: 'F',
    ฌ: 'G',
    '็': 'H',
    '๋': 'J',
    ษ: 'K',
    ศ: 'L',
    ซ: ':',
    '.': '"',
    '(': 'Z',
    ')': 'X',
    ฉ: 'C',
    ฮ: 'V',
    'ฺ': 'B',
    '์': 'N',
    '?': 'M',
    ฒ: '<',
    ฬ: '>',
    ฦ: '?',
  }

  const englishToThaiMap: { [key: string]: string } = {
    '1': 'ๅ',
    '2': '/',
    '3': '-',
    '4': 'ภ',
    '5': 'ถ',
    '6': 'ุ',
    '7': 'ึ',
    '8': 'ค',
    '9': 'ต',
    '0': 'จ',
    '-': 'ข',
    '=': 'ช',
    q: 'ๆ',
    w: 'ไ',
    e: 'ำ',
    r: 'พ',
    t: 'ะ',
    y: 'ั',
    u: 'ี',
    i: 'ร',
    o: 'น',
    p: 'ย',
    '[': 'บ',
    ']': 'ล',
    a: 'ฟ',
    s: 'ห',
    d: 'ก',
    f: 'ด',
    g: 'เ',
    h: '้',
    j: '่',
    k: 'า',
    l: 'ส',
    ';': 'ว',
    "'": 'ง',
    z: 'ผ',
    x: 'ป',
    c: 'แ',
    v: 'อ',
    b: 'ิ',
    n: 'ื',
    m: 'ท',
    ',': 'ม',
    '.': 'ใ',
    '/': 'ฝ',
    '!': '+',
    '@': '๑',
    '#': '๒',
    $: '๓',
    '%': '๔',
    '^': 'ู',
    '&': '฿',
    '*': '๕',
    '(': '๖',
    ')': '๗',
    _: '๘',
    '+': '๙',
    Q: '๐',
    W: '"',
    E: 'ฎ',
    R: 'ฑ',
    T: 'ธ',
    Y: 'ํ',
    U: '๊',
    I: 'ณ',
    O: 'ฯ',
    P: 'ญ',
    '{': 'ฐ',
    '}': ',',
    A: 'ฤ',
    S: 'ฆ',
    D: 'ฏ',
    F: 'โ',
    G: 'ฌ',
    H: '็',
    J: '๋',
    K: 'ษ',
    L: 'ศ',
    ':': 'ซ',
    '"': '.',
    Z: '(',
    X: ')',
    C: 'ฉ',
    V: 'ฮ',
    B: 'ฺ',
    N: '์',
    M: '?',
    '<': 'ฒ',
    '>': 'ฬ',
    '?': 'ฦ',
  }

  const translate = (): void => {
    let temp = text
    let temp2 = ''
    let last = 'l'
    for (let char of temp) {
      let len = temp2.length
      if (char === ',') {
        if (
          englishToThaiMap[last] ||
          (last === ' ' && thaiToEnglishMap[temp2[len - 2]])
        ) {
          temp2 += 'ม'
        } else {
          temp2 += '}'
        }
      } else {
        if (thaiToEnglishMap[char]) {
          temp2 += thaiToEnglishMap[char]
        } else if (englishToThaiMap[char]) {
          temp2 += englishToThaiMap[char]
        } else {
          temp2 += char // If no translation exists, keep the original character
        }
      }
      last = char
    }

    setResult(temp2)
  }

  return (
    <div className="App bg-blue w-screen h-screen font-ibm-plex-sans-thai-looped font-normal">
      <div className="p-24">
        <div className="flex flex-col gap-12">
          <div className="flex basis-1/4 justify-between">
            <div className="flex flex-col items-start gap-2">
              <h1 className="text-white text-[64px] font-medium">
                เทรน Sa-lard
              </h1>
              <div className="flex flex-col gap-1 items-start">
                <p className="text-2xl text-purple font-medium">
                  คุณลืมเปลี่ยนภาษาก่อนกดพิมพ์ใช่ไหม?
                </p>
                <p className="text-2xl text-purple font-medium">
                  ให้เทรน Sa-lard เป็นตัวช่วยของคุณ
                </p>
              </div>
            </div>
            <div>
              <img src={logo} className="" alt="logo" />
            </div>
          </div>
          <div className="basis-3/4">
            <div className="flex flex-row gap-4 h-72">
              <div className="basis-2/5 w-full flex flex-col items-start">
                <label htmlFor="input" className="text-3xl text-white pb-2">
                  ข้อความก่อน debut
                </label>
                <textarea
                  name="input"
                  id="input"
                  placeholder="ใส่ข้อความของคุณที่นี่"
                  value={text}
                  onChange={(e) => {
                    setText(e.target.value)
                  }}
                  className="w-full p-4 text-blue text-lg h-full bg-white rounded placeholder:text-purple"
                />
              </div>
              <div className="basis-1/5 w-full flex flex-col gap-6 justify-center px-5">
                <button
                  onClick={translate}
                  className="bg-pink text-blue text-2xl rounded h-10"
                >
                  แปล
                </button>
                {text == '' ? (
                  <div className="text-pink text-sm">
                    กรุณาใส่ข้อความก่อนแปล
                  </div>
                ) : (
                  <>
                    <br />
                  </>
                )}
                <button
                  onClick={() => {
                    setText('')
                    setResult('')
                  }}
                  className="bg-purple text-blue text-2xl rounded h-10"
                >
                  ล้าง
                </button>
              </div>
              <div className="basis-2/5 flex flex-col items-start w-full">
                <label htmlFor="output" className="text-3xl text-white pb-2">
                  ข้อความหลัง debut
                </label>
                <textarea
                  name="output"
                  id="output"
                  placeholder="ผลลัพธ์"
                  value={result}
                  className="w-full p-4 text-lg placeholder:text-purple text-blue h-full bg-white rounded"
                  disabled
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
