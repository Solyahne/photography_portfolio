import CategoriesPhotos from "../../components/categoriesphotos/categoriesphotos";
import photocover from "../../data/photocover.json";
import "./listecategories.css";

export default function Photographies(): JSX.Element {
    return (
        <main className="photographies_series_main">
            {/* <p className="photographies_introduction">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Duis eu mi viverra, elementum libero euismod, sagittis neque.
                In sit amet justo sodales, hendrerit ipsum et, imperdiet nunc. Etiam vel erat hendrerit, fermentum risus ac, interdum est. Praesent varius in magna a auctor. Aliquam erat volutpat. Nunc mattis aliquam magna eget elementum. Nunc non mi nec justo euismod condimentum. Integer posuere sed quam sed tristique.
            </p> */}
            <section className="photographies_cards_container">
                {photocover.map((element, index) => (
                    <CategoriesPhotos
                        key={index}
                        link={element.category}
                        cover={element.picture}
                        alt={element.alt}
                        description={element.description}
                    />
                ))}
            </section>
        </main>
    )
}