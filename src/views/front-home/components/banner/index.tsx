import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { BannerWrapper } from './styled'
import NavBar from '@/components/business-component/nav-bar'
import { Carousel } from '@arco-design/web-react'
import { useNavigate } from 'react-router-dom'
import { PAGE_COMMODITY_LIST } from '@/router/constant'
import NothingPage from '@/components/nothing-page'
import LazyImage from '@/components/lazy-image'

interface IProps {
  children?: ReactNode
  bannerList: any[]
}

const HomeBanner: FC<IProps> = (props) => {
  const { bannerList } = props
  const nav = useNavigate()
  return (
    <BannerWrapper>
      <NavBar
        isSticky={false}
        renderLeft={() => '特价商品'}
        renderRight={() => (
          <span
            onClick={() =>
              nav(PAGE_COMMODITY_LIST, {
                state: {
                  type: 'special'
                }
              })
            }
          >
            更多
          </span>
        )}
      />
      {bannerList.length ? (
        <Carousel
          indicatorType="line"
          indicatorPosition="bottom"
          showArrow="never"
          style={{ width: '100%', height: 160 }}
          animation="fade"
          autoPlay
          className={'carousel-wrap'}
        >
          {bannerList.map((src, index) => (
            <img src={src} key={index} className="item-img" />
          ))}
        </Carousel>
      ) : (
        <NothingPage />
      )}

      {/* <LazyImage
              width={'100%'}
              height={160}
              url={src}
              key={index}
              extraClassName="item-img"
            /> */}
    </BannerWrapper>
  )
}

export default memo(HomeBanner)
