import Container from "../components/Container";
import Header from "../components/Header";
import List from "../components/List";
import Footer from "../components/Footer";
import FooterBody from '../components/Footer/Shop'

export default () => {
    return <Container>
        <Header subtitle="풀빛마루" back/>
        <main>
            <h2>풀빛마루</h2><h2 style={{marginLeft: 0, fontWeight: 400}}>에서 먹으려면</h2>
            <br/>
            <h2>30분</h2><h2 style={{marginLeft: 5, fontWeight: 400}}>기다려야 해요.</h2>
            <br/>
            <h1>뭐를 먹을까요?</h1>
            <div style={{height: 20}}/>
            <List/>
        </main>
        <Footer>
            <FooterBody/>
        </Footer>
    </Container>

}