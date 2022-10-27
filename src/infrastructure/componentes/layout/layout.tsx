import { Header } from '../header/header';

export function Layout({ children }: { children: JSX.Element }) {
    return (
        <>
            <Header></Header>
            {children}
        </>
    );
}
