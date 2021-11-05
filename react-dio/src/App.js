import Item from "./components/item/item";

const App = () => {
    return (
        <>
            <h1> Minha 'primeira' aplicação em React</h1>
            <ul>
                <Item>
                    Item 1
                </Item>
                <Item>
                    Item 2
                </Item>
                <Item>
                    Item 3
                </Item>
            </ul>
        </>
    );
}

export default App;