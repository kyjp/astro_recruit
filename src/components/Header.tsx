import { useEffect, useRef, useState } from 'react'
import styled from './Header.module.sass'

const Header = () => {
  const radiusStyled = { 'borderRadius': '50%' }
  const plusIconRef = useRef(null)
  const plusButtonRef = useRef(null)
  const [flg, setFlg] = useState(true)
  useEffect(() => {
    let timeId: number | undefined
    let intervalId: number | undefined
    timeId = setTimeout(() => {
      setFlg(false)
      intervalId = setInterval(() => {
        setFlg(old => !old)
      }, 2000)
    }, 2000)
    return () => {
      clearInterval(intervalId)
      clearTimeout(timeId)
    }
  }, [])

  return (
    <header className="w-full pr-12 pl-12 pt-6 pb-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div>
            <div className="relative">
              <button
                className="border border-2 border-black pt-4 pb-4 pr-6 pl-6 text-lg"
                style={radiusStyled}
              >
                採用情報
              </button>
              <div
                className={`absolute top-0 left-0 ${styled.header__plus} ${flg ? styled.stoped : ''}`}
                ref={plusButtonRef}
              >
                <div
                  className={`bg-black font-bold p-1 ${styled.header__plus} ${flg ? styled.stoped : ''}`}
                  style={radiusStyled}
                  ref={plusIconRef}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 stroke-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="text-2xl pl-10 tracking-widest">
            ekzm
          </div>
        </div>
        <div>
          <nav>
            <ul>
              <li>
                <a href="" className="font-bold">メッセージ</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}


<style>

</style>


export default Header
