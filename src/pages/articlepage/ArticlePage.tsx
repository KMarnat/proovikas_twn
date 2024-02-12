import Image from "../../components/Image/Image";
import Loader from "../../assets/loader.svg";
import { useApiArticleData } from "../../hooks/useApiArticleData";
import Button from "../../components/Button/Button";
import { useParams } from "react-router";
import { PersonDetails } from "../../types/dataTypes";

export default function ArticlePage() {
  const { id } = useParams();
  const apiUrl = `https://midaiganes.irw.ee/api/list/${id}`;
  const { data, error } = useApiArticleData<PersonDetails>(apiUrl);

  if (error) return <p>{error}</p>;

  return (
    <div className="articlepage">
      <div className="main__buttons">
        <Button navigateBack={true} type="round" label="&larr;  Tagasi" />
      </div>
      {!data ? (
        <img src={Loader} alt="Loader" />
      ) : (
        <>
          <h1>{data?.title}</h1>
          <div
            className="articlepage__intro"
            dangerouslySetInnerHTML={{ __html: data?.intro }}
          ></div>
          <Image image={data?.image.medium} />
          <div dangerouslySetInnerHTML={{ __html: data?.body }}></div>
          <div className="main__buttons">
            {data?.tags.map((tag, i) => (
              <Button navigateBack={false} type="round" label={tag} key={i} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
