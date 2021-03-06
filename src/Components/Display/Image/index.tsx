import styled from '../../../Common/theming/themedComponents';
import { imageStyle } from './styles';
import { ThemeInterface } from "../../../Common/theming/types";

export type ImageSize = 'thumb' | 'xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'full';

export interface Props {
  imageSize?: ImageSize;
  src: string;
  alt: string;
}



const Image = styled.img`
  ${(props: Props) => imageStyle(props)}
`;

export default Image;
