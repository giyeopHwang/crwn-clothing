import { useNavigate } from 'react-router-dom';

import { Directory } from '../directory/directory.component';

import {
  DirectoryItemContainer,
  DirecotyItemBodyContainer,
  BackgroundImage,
} from './directory-item.styles';

export type DirectoryItemProps = {
  directory: Directory;
};

const DirectoryItem = ({ directory }: DirectoryItemProps) => {
  const { title, imageUrl, route } = directory;
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
