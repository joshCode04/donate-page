import DonatePage from "./Donate/DonatePage";
import Footer from "./Donate/Footer";
import Nav from "./Donate/Nav";

export default function App() {
  return (
    <section>
      <section>
        <Nav />
      </section>
      <section>
        <DonatePage />
      </section>
      <section>
        <Footer />
      </section>
    </section>
  );
}
