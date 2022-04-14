import Container from "../components/Container";
import Header from "../components/Header";
import List from "../components/List";
import styled from "styled-components";
import Footer from "../components/Footer";

export default () => {
    return <Container>
        <Header/>
        <main>
            <h1>점심은</h1>
            <br/>
            <h1>어디서 먹을까요?</h1>
            <div style={{height: 20}}/>
            <List/>
        </main>
        <Footer/>
    </Container>

}