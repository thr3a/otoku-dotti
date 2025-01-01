import { createFormContext } from '@mantine/form';

type ItemFormProps = {
  priceA: number;
  priceB: number;
  capacityA: number;
  capacityB: number;
  countA: number;
  countB: number;
  tankaA: number;
  tankaB: number;
};

// You can give context variables any name
export const [ItemFormProvider, useItemFormContext, useItemForm] = createFormContext<ItemFormProps>();
