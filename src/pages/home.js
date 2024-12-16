import React from 'react'
import Layout from '../components/layout';
import BannerMain from '../components/homeComponents/banner';

const home = () => {
  return (
    <>
      <Layout>
          <div className="homePage">
          <BannerMain/>
          </div>
      </Layout>
    </>

  )
}

export default home;