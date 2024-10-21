import {SVGProps} from 'react';

export interface BenefitCardListProps {
  benefitItems: ItemType[];
}

export interface ItemType {
  Icon: React.ComponentType<SVGProps<SVGSVGElement>>;
  text: string;
}
