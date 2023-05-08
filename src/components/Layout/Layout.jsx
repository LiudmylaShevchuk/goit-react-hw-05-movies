import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { AppBar } from "components/AppBar/AppBar";
import { Container } from './Layout.styled';

export const Layout = () => { 
    return (
        <>
            <AppBar/>
            <main>
                <Container>
                    <Suspense fallback={null}>
                        <Outlet/>
                    </Suspense>
                </Container>        
            </main>
        </>
    );
};