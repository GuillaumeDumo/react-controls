import UpButtonGroup from './UpButtonGroup'

import {ThemedProps, IntentType} from '../../../Common/theming/types' 

export type Alignement = 'h' | 'v'

export interface UpButtonGroupProps {
  gutter?:number;
  align?:Alignement;
}
export interface UpButtonGroupStyledProps extends UpButtonGroupProps {
};


export default UpButtonGroup 
