import React from 'react';
import BannerMain from '../../assets/banner.jpg'

const BannerImg = () => {
  return (
    <>
        <div className="bannerImg">
              <figure>
              <img src={BannerMain} alt="" />
              </figure>
        </div>
    </>
  )
}

export default BannerImg;