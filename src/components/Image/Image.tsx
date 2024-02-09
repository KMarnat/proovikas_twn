interface ImageProps {
  image: string;
}

const Image: React.FC<ImageProps> = ({ image }) => {
  return (
    <div className="image">
      <div className="image__effect">
        <div className="image__effect-bg" style={{ backgroundImage: `url(${image})` }}></div>
        <p className="image__info">Culpa ipsum tempor do laborum mollit.</p>
      </div>
      <img src={image} alt="very pretty image of something" />
    </div>
  );
};

export default Image;
