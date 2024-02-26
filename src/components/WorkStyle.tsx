import { useEffect, useRef, useState } from 'react'
import styled from './WorkStyle.module.sass'

const Arrow = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
</svg>


const WorkStyle = () => {
  const secRef = useRef<HTMLDivElement>(null)
  const divRef = useRef<HTMLDivElement>(null)
  const workRef = useRef<HTMLDivElement>(null)
  const [flg, setFlg] = useState(false)
  useEffect(() => {
    if (secRef.current && divRef.current) {
      secRef.current.style.paddingTop = `${divRef.current.clientHeight}px`
    }
    window.addEventListener('scroll', () => {
      if (secRef.current && divRef.current && workRef.current) {
        let so = secRef.current.offsetTop
        let wsy = window.scrollY
        let pt = divRef.current.clientHeight
        if (so < wsy) {
          let persent = ((pt - (wsy - so)) / pt)
          divRef.current.style.width = `${persent * 0.3 * 100 + 60}%`
          secRef.current.style.paddingTop = `${divRef.current.clientHeight}px`
          if ((wsy - so) < pt) {
            divRef.current.style.visibility = 'visible'
          } else {
            divRef.current.style.visibility = 'hidden'
          }
          setFlg(true)
        } else {
          divRef.current.style.width = '100%'
          setFlg(false)
        }
      }
    })
  }, [])

  return (
    <section className={`relative ${styled.workstyle}`} ref={secRef}>
      <div className={`${styled.workstyle__mask} ${flg ? styled.workstyle__masksize : ''}`} ref={divRef}>
        <img src="https://www.tsi-holdings.com/assets/img/page/index/workstyle_background_pc.jpg" alt="" />
      </div>
      <div className={styled.workstyle__ws} ref={workRef}>
        <h2>Work Style</h2>
        <p>ekzmでの働き方</p>
        <p>エクザムでは、適切な評価制度とキャリアアップのための研修制度など、働きやすい環境づくりを推進しています。</p>
        <ul>
          <li><a href="">人材育成制度<Arrow /></a></li>
          <li><a href="">キャリア<Arrow /></a></li>
          <li><a href="">評価制度<Arrow /></a></li>
          <li><a href="">働く環境・福利厚生<Arrow /></a></li>
          <li><a href="">その他<Arrow /></a></li>
        </ul>
      </div>
    </section>
  )
}

export default WorkStyle
