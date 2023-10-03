import { useEffect, useRef, useState } from "react";
import CardsInnerTexts from "./CardsInnerTexts";
const HierarchyCards = ({ items, itemCenter, image, title, subTitle }) => {
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
    <div className="row justify-content-center align-items-center gap-2 ">
      {enableCenteredImage.map((cardList, index) => {
        return (
          <CardsInnerTexts
            key={cardList.id}
            image={cardList.image}
            title={cardList.name}
            subTitle={cardList.position}
            style={fontShadow}
          ></CardsInnerTexts>
        );
      })}
    </div>
  );
};
export default HierarchyCards;
