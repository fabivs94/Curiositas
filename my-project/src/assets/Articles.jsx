import { Link } from "react-router-dom";
import './articles.css'

export default function Articles() {
  const articles = [
    {
      title: "Il vino… in Marocco?",
      image:
        "https://cdn2.picryl.com/photo/2011/10/31/kantara-vin-du-maroc-0e8e82-640.jpg",
      description: "Il Marocco vitivinicolo: le origini e il successo",
      link: "/articles/1",
      id: 1,
    },
    {
      title: "Il fermento delle vespe",
      image:
        "https://i.ibb.co/6t95cx7/wasp-eats-grapes-wasp-on-grapes-grape-food-drink-cda0c2.jpg",
      description: "Che ruolo hanno le vespe nella fermentazione dei vini?",
      link: "/articles/2",
      id: 2,
    },
    {
      title: "Vinvm Romanorvm",
      image: "https://i.ibb.co/4W00DWD/z018-019-b.jpg",
      description: "Vinvm: nvnc est bibendvm!",
      link: "/articles/3",
      id: 3,
    },
    {
      title: "Un vino… subacqueo!",
      image:
        "https://i.ibb.co/FmsRwLk/La-Cantina-Subacquea-di-Santa-Maria-La-Palma-770x578.jpg",
      description: "Il vino si affina in cantina? Sì, ma anche sott’acqua!",
      link: "/articles/4",
      id: 4,
    },
    {
      title: "Un Genio di vino",
      image:
        "https://i.ibb.co/V2YKrkQ/Cantina-di-Leonardo-edit-770x538.png",
      description: "Leonardo da Vinci e il suo vino 'excellente'",
      link: "/articles/5",
      id: 5,
    },
    {
      title: "E il vino in Giappone?",
      image:
        "https://i.ibb.co/NyJGP7z/DEC-4573-770x501.jpg",
      description: "Alla scoperta del Sol Levante vinicolo",
      link: "/articles/6",
      id: 6,
    },
  ];

  return (
    <div className="body">
      <h2 className="text-center bg-transparent text-white py-4">
        Curiosità sul mondo enologico
      </h2>
      <div
        className="d-flex flex-wrap justify-content-around"
      >
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
          {articles.map((article) => (
            <>
              <div key={article.id} className="col">
                <div className="card text-white bg-dark mb-2">
                  <div
                    className="card-img-top"
                    style={{ height: "200px", overflow: "hidden" }}
                  >
                    <img
                      src={article.image}
                      className="card-img-top img-fluid"
                      alt={article.title}
                    />
                  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title">{article.title}</h5>
                    <p className="card-text">{article.description}</p>
                    <Link
                      to={article.link}
                      className="btn btn-success rounded-pill"
                    >
                      Leggi l'articolo
                    </Link>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
        <div className="d-flex mx-auto m-4 justify-content-center">
          <Link to="/" className="btn btn-success rounded-pill">
            Ritorna alla pagina principale
          </Link>
        </div>
      </div>
    </div>
  );
}