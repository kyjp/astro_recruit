import styled from './Message.module.sass'

const Meassage = () => {
  return (
    <div className={`${styled.message}`}>
      <div className={`flex`}>
        <div className={`w-1/3 ${styled.message__title}`}>
          <h2>
            <span>M</span>
            <span>e</span>
            <span>s</span>
            <span>s</span>
            <span>a</span>
            <span>g</span>
            <span>e</span>
          </h2>
        </div>
        <div className={`w-2/3 ${styled.message__content}`}>
          私たちは、デジタルマーケティングのプロフェッショナルとして、<br/>
          ウェブアプリケーション開発・インターネット広告・SNS・ログ分析・インフラ構築運用など総合的なサービス提供を行います。<br />
          多種多様な業種・業態での実績と長期間にわたる運用経験を基に、お客様のビジネスの持続的な成長をサポートします。
        </div>
      </div>
    </div>
  )
}

export default Meassage
