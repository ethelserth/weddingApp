import Header from './Header.js';

const Layout = ({children}) => {

    return (
        <>
            <Header/>
            <main>
                <section>{children}</section>      
            </main>
        </>
    )
}

export default Layout;