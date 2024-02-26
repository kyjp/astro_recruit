import styled from './LoopSlide.module.sass'

const list = [
  {
    'main': {
      'name': 'AVIREX',
      'image': 'https://www.tsi-holdings.com/brand/image/main_image_AVI.jpg',
    },
    'logo': {
      'name': 'AVIREX',
      'image': 'https://www.tsi-holdings.com/assets/img/page/index/message-brand-avi.png'
    }
  },
  {
    'main': {
      'name': "FREE'S MART",
      'image': 'https://www.tsi-holdings.com/brand/image/main_image_MEM.jpg',
    },
    'logo': {
      'name': "FREE'S MART",
      'image': 'https://www.tsi-holdings.com/assets/img/page/index/message-brand-fm.png'
    }
  },
  {
    'main': {
      'name': 'human woman',
      'image': 'https://www.tsi-holdings.com/brand/image/main_image_HW.jpg',
    },
    'logo': {
      'name': 'human woman',
      'image': 'https://www.tsi-holdings.com/assets/img/page/index/message-brand-hw.png'
    }
  },
  {
    'main': {
      'name': 'JILL STUART',
      'image': 'https://www.tsi-holdings.com/brand/image/main_image_JS.jpg',
    },
    'logo': {
      'name': 'JILL STUART',
      'image': 'https://www.tsi-holdings.com/assets/img/page/index/message-brand-js.png'
    }
  },
  {
    'main': {
      'name': 'JILL by JILL STUART',
      'image': 'https://www.tsi-holdings.com/brand/image/main_image_JJ.jpg',
    },
    'logo': {
      'name': 'JILL by JILL STUART',
      'image': 'https://www.tsi-holdings.com/assets/img/page/index/message-brand-jj.png'
    }
  },
  {
    'main': {
      'name': 'LE PHIL',
      'image': 'https://www.tsi-holdings.com/brand/image/main_image_PH.jpg',
    },
    'logo': {
      'name': 'LE PHIL',
      'image': 'https://www.tsi-holdings.com/assets/img/page/index/message-brand-ph.png'
    }
  },
  {
    'main': {
      'name': 'LHP',
      'image': 'https://www.tsi-holdings.com/brand/image/main_image_LHP.jpg',
    },
    'logo': {
      'name': 'LHP',
      'image': 'https://www.tsi-holdings.com/assets/img/page/index/message-brand-lhp.png'
    }
  },
  {
    'main': {
      'name': 'MARGARET HOWELL',
      'image': 'https://www.tsi-holdings.com/brand/image/main_image_MH_men.jpg',
    },
    'logo': {
      'name': 'MARGARET HOWELL',
      'image': 'https://www.tsi-holdings.com/assets/img/page/index/message-brand-mh.png'
    }
  },
  {
    'main': {
      'name': 'MHL,',
      'image': 'https://www.tsi-holdings.com/brand/image/main_image_MHL_women.jpg',
    },
    'logo': {
      'name': 'MHL,',
      'image': 'https://www.tsi-holdings.com/assets/img/page/index/message-brand-mhl.png'
    }
  },
  {
    'main': {
      'name': 'NANO universe',
      'image': 'https://www.tsi-holdings.com/brand/image/main_image_NU.jpg',
    },
    'logo': {
      'name': 'NANO universe',
      'image': 'https://www.tsi-holdings.com/assets/img/page/index/message-brand-nu.png'
    }
  },
  {
    'main': {
      'name': 'NATURAL BEAUTY BASIC',
      'image': 'https://www.tsi-holdings.com/brand/image/main_image_NBB.jpg',
    },
    'logo': {
      'name': 'NATURAL BEAUTY BASIC',
      'image': 'https://www.tsi-holdings.com/assets/img/page/index/message-brand-nbb.png'
    }
  },
  {
    'main': {
      'name': 'new balance golf',
      'image': 'https://www.tsi-holdings.com/brand/image/main_image_NBG.jpg',
    },
    'logo': {
      'name': 'new balance golf',
      'image': 'https://www.tsi-holdings.com/assets/img/page/index/message-brand-nbg.png'
    }
  },
]

const LoopSlide = () => {

  return (
    <div className="w-full overflow-x-hidden">
      <ul className={`flex min-w-full ${styled.loopslide}`}>
        {
          list.map((item, index) => (
            <li key={index} className={`w-1/5 ${styled.loopslide__column}`}>
              <div className={`${styled.loopslide__image}`}>
                <img src={item.main.image} alt={item.main.name} />
              </div>
              <div className={`${styled.loopslide__logo}`}>
                <img src={item.logo.image} alt={item.logo.name} />
              </div>
            </li>
          ))
        }
        {
          list.map((item, index) => {
            if(index < 4) {
              return (
                <li key={`sc-${index}`} className={`w-1/5 ${styled.loopslide__column}`}>
                  <div className={`${styled.loopslide__image}`}>
                    <img src={item.main.image} alt={item.main.name} />
                  </div>
                  <div className={`${styled.loopslide__logo}`}>
                    <img src={item.logo.image} alt={item.logo.name} />
                  </div>
                </li>
              )
            }else {
              return (<></>)
            }
          }
        )}
      </ul>
    </div>
  )
}

export default LoopSlide
