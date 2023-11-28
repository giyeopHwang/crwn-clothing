import { useNavigate } from 'react-router-dom';

import {
  DirectoryItemContainer,
  DirecotyItemBodyContainer,
  BackgroundImage,
} from './directory-item.styles';

const DirectoryItem = ({ category }) => {
  const { title, imageUrl, route } = category;
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage $imageUrl={imageUrl} />
      <DirecotyItemBodyContainer>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </DirecotyItemBodyContainer>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
