import React from 'react'
import { Icon } from 'semantic-ui-react'
import '../css/PremiumBlocker.css'

const PremiumBlocker = () => {
  return (
    <>
      <div id="cover"></div>
      <div id="premium-blocker">
        <h4>This is a premium article</h4>
        <h4><Icon name="lock" /></h4>
        <h4>Sign in to view this article</h4>
      </div>
    </>
  )
}

export default PremiumBlocker
