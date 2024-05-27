import { Link, useParams } from "react-router-dom";
import { articlesdata } from "./ArticlesData";

export default function ReadArticle() {
  const { articleId } = useParams();
  const article = articlesdata.find(
    (article) => article.id === parseInt(articleId)
  );

  return (
    <div className="read-article container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <div className="text-center text-white py-2 px-2">
            <h2 className="display-8">{article.title}</h2>
          </div>
          <div className="d-flex justify-content-center">
            <img
              src={article.image}
              alt={article.title}
              className="img-fluid"
            />
          </div>
          <div>
            <div
              className="inner-container"
              style={{
                marginLeft: window.innerWidth <= 768 ? "0%" : "15%",
                marginRight: window.innerWidth <= 768 ? "0%" : "15%",
                backgroundColor: "rgba(0,0,0,0.7)",
              }}
            >
              <div className="text-white fs-5 fw-bold mt-4">
                <p style={{ textAlign: "justify" }}>{article.description}</p>
              </div>
              <div className="text-white fs-6">
                {article.content.map((paragraph, index) => (
                  <p
                    key={index}
                    style={{ textAlign: "justify", marginBottom: "1%" }}
                  >
                    {paragraph.paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="text-center py-3">
            <Link to="/articles" className="btn btn-success rounded-pill">
              Torna alla lista di articoli
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
