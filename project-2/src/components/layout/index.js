
import HeaderComponent from '../header/header';
import FooterComponent from '../footer/footer'

const Layout = ({children}) => {
    return (
        <>
            <HeaderComponent/>
            <div>{children}</div>
            <FooterComponent/>
        </>
    )
}
export default Layout;