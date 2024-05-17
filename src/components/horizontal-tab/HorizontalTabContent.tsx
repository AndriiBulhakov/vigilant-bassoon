import { title } from "process";

type HorizontalTabContentProps = {
  image: string;
  title: string;
  adittionalImage: string;
  adittionalTitle: string;
}

const HorizontalTabContent = ({
  image,
  title,
  adittionalImage,
  adittionalTitle,
}: HorizontalTabContentProps) => {
  return (
    <>
      <img
        src={image}
        alt={title}
      />
    </>
  )
}

export default HorizontalTabContent