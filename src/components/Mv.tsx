import styled from './Mv.module.sass'

const Mv = () => {
  const aspectStyled = { 'aspectRatio': '100/67' }
  const aspectShortStyled = { 'aspectRatio': '100/68' }
  return (
    <>
      <div>
        <div className={`w-full overflow-hidden ${styled.mv}`}>
          <div className={`flex ${styled.mv__inner}`}>
            {[...Array(3)].map((_, index) => {
              let num = index == 0 ? 1 : 1 + (3 * (index))
              return (<div className="w-full flex min-w-full" key={index}>
                <div
                  className="w-8/12 overflow-hidden"
                  style={aspectStyled}
                >
                  <img
                    className={`object-fill w-full h-full ${styled.mv__image}`}
                    src={`https://www.tsi-holdings.com/assets/img/page/index/mv_0${num}.jpg`}
                    alt=""
                  />
                </div>
                <div className={`w-4/12 align-bottom ${styled.mv__column}`}>
                  <div
                    style={aspectShortStyled}
                    className={`inline-block w-full align-bottom ${styled.mv__besidecolumn}`}
                  >
                    <img
                      className={`object-fill w-full h-full ${styled.mv__image}`}
                      src={`https://www.tsi-holdings.com/assets/img/page/index/mv_0${num + 1}.jpg`}
                      alt=""
                    />
                  </div>
                  <div
                    style={aspectShortStyled}
                    className="inline-block w-full align-bottom"
                  >
                    <img
                      className={`object-fill w-full h-full ${styled.mv__image}`}
                      src={`https://www.tsi-holdings.com/assets/img/page/index/mv_0${num + 2}.jpg`}
                      alt=""
                    />
                  </div>
                </div>
              </div>)
            })}
            <div className="w-full flex min-w-full">
              <div
                className="w-8/12 overflow-hidden"
                style={aspectStyled}
              >
                <img
                  className={`object-fill w-full h-full ${styled.mv__image}`}
                  src={`https://www.tsi-holdings.com/assets/img/page/index/mv_01.jpg`}
                  alt=""
                />
              </div>
              <div className={`w-4/12 align-bottom ${styled.mv__column}`}>
                <div
                  style={aspectShortStyled}
                  className={`inline-block w-full align-bottom ${styled.mv__besidecolumn}`}
                >
                  <img
                    className={`object-fill w-full h-full ${styled.mv__image}`}
                    src={`https://www.tsi-holdings.com/assets/img/page/index/mv_02.jpg`}
                    alt=""
                  />
                </div>
                <div
                  style={aspectShortStyled}
                  className="inline-block w-full align-bottom"
                >
                  <img
                    className={`object-fill w-full h-full ${styled.mv__image}`}
                    src={`https://www.tsi-holdings.com/assets/img/page/index/mv_03.jpg`}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={`absolute ${styled.mv__button}`}>
            <div>
              <button>
                interview
              </button>
            </div>
          </div>
          <div className={`absolute ${styled.mv__textarea}`}>
            <p className="bg-white border border-1 border-black">
              <span className="inline-block whitespace-nowrap tracking-widest">
                DIGITAL MARKETING
              </span>
            </p>
            <p className="bg-white border border-1 border-black">
              <span className="inline-block whitespace-nowrap tracking-widest">
                for SUSTAINED GROWTH
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex">
        <ul>
          <li>
            <a href="">
              <img src="" alt="" />
            </a>
          </li>
          <li>
            <img src="" alt="" />
          </li>
          <li>
            <img src="" alt="" />
          </li>
          <li>
            <img src="" alt="" />
          </li>
        </ul>
      </div>
    </>
  )
}

export default Mv
