import { Box, Button, Grid, Group } from '@mantine/core';
import { isNotEmpty } from '@mantine/form';
import { useState } from 'react';
import { Item } from './Item';
import { ItemFormProvider, useItemForm } from './ItemContext';
import { LoseResult, WinResult } from './Result';
import { ProductComparer } from './productComparer';

export const Form = (): JSX.Element => {
  const [comparer, setComparer] = useState<ProductComparer | null>(null);
  const form = useItemForm({
    initialValues: {
      priceA: 2483,
      priceB: 4744,
      capacityA: 8,
      capacityB: 8,
      countA: 4,
      countB: 8,
      // priceA: 0,
      // priceB: 0,
      // capacityA: 0,
      // capacityB: 0,
      // countA: 0,
      // countB: 0,
      tankaA: 0,
      tankaB: 0
    },

    validate: {
      priceA: isNotEmpty(),
      priceB: isNotEmpty(),
      capacityA: isNotEmpty(),
      capacityB: isNotEmpty()
    }
  });

  const handleSubmit = (): void => {
    const productA = { price: form.values.priceA, quantity: form.values.capacityA, packs: form.values.countA };
    const productB = { price: form.values.priceB, quantity: form.values.capacityB, packs: form.values.countB };
    const newComparer = new ProductComparer(productA, productB);
    setComparer(newComparer);
    form.setValues({
      tankaA: newComparer.calcUnitPriceA(),
      tankaB: newComparer.calcUnitPriceB()
    });
  };

  const handleReset = (): void => {
    form.reset();
    form.clearErrors();
    setComparer(null);
  };

  return (
    <ItemFormProvider form={form}>
      <Box
        component='form'
        maw={400}
        mx='auto'
        onSubmit={form.onSubmit(() => {
          handleSubmit();
        })}
      >
        <Grid>
          <Grid.Col span={6}>
            <Item index='A' />
          </Grid.Col>
          <Grid.Col span={6}>
            <Item index='B' />
          </Grid.Col>
        </Grid>
        <Group>
          <Button type='submit'>計算!</Button>
          <Button type='button' color='gray' onClick={handleReset}>
            クリア
          </Button>
        </Group>
        <Grid>
          <Grid.Col span={6}>
            {comparer && comparer.determineCheaperProduct() === 'A' && (
              <WinResult diff={comparer.calcPriceDifference()} tanka={form.values.tankaA} />
            )}
            {comparer && comparer.determineCheaperProduct() === 'B' && (
              <LoseResult diff={comparer.calcPriceDifference()} tanka={form.values.tankaA} />
            )}
          </Grid.Col>
          <Grid.Col span={6}>
            {comparer && comparer.determineCheaperProduct() === 'B' && (
              <WinResult diff={comparer.calcPriceDifference()} tanka={form.values.tankaB} />
            )}
            {comparer && comparer.determineCheaperProduct() === 'A' && (
              <LoseResult diff={comparer.calcPriceDifference()} tanka={form.values.tankaB} />
            )}
          </Grid.Col>
        </Grid>
      </Box>
    </ItemFormProvider>
  );
};
