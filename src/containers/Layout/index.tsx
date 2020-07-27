import React, { FC, useEffect, useRef, useState } from 'react'

import { Container } from './styled'

export interface LayoutProps {}

const Layout: FC<LayoutProps> = ({ children, ...props }) => {
  return <Container>{children}</Container>
}
export default Layout
