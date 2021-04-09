import { FC } from 'react'
import Container from '@material-ui/core/Container'

export interface LayoutProps {}

const Layout: FC<LayoutProps> = ({ children }) => {
  return <Container>{children}</Container>
}
export default Layout
