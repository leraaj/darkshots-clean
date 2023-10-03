import { useEffect, useRef, useState } from "react";
import CardsInnerText from "../../../components/collections/CardsInnerText";
const Team = ({ items, itemCenter, image, title, subTitle }) => {
  const [enableCenteredImage, setEnableCenteredImage] = useState([]);
  const [cardLists, setCardLists] = useState(items);

  useEffect(() => {
    const centeredValue = Math.floor(cardLists.length / 2);
    const cardIndexValue = cardLists.indexOf(itemCenter);

    const highlightItemHandler = (array, index1, index2) => {
      array[index1] = array.splice(index2, 1, array[index1])[0];

      setEnableCenteredImage(array);
    };

    highlightItemHandler(cardLists, centeredValue, cardIndexValue);

    // enableCenteredImage.find();
  });
  const fontShadow = {
    textShadow: "2px 2px  4px  #414141",
  };
  return (
    <div className="row mx-0 justify-content-center align-items-center gap-2 ">
      {enableCenteredImage.map((cardList, index) => {
        return (
          <CardsInnerText
            key={cardList.id}
            image={cardList.image}
            title={cardList.name}
            subTitle={cardList.position}
            style={fontShadow}></CardsInnerText>
        );
      })}
    </div>
  );
};
export default Team;
