import { PostContextFn } from "./PostContext";
import Button from "./components/Button";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Archive from "./components/Archive";
function App() {
  return (
    <PostContextFn>
      <section>
        <Button />
        <Header />
        <Main />
        <Archive />
        <Footer />
      </section>
    </PostContextFn>
  );
}
export default App;
