import { Box, Button, Center, Grid, Group } from '@mantine/core';
import { isNotEmpty } from '@mantine/form';
import { useState } from 'react';
import { Item } from './Item';
import { ItemFormProvider, useItemForm } from './ItemContext';
import { SameResult, Tanka, WinResult } from './Result';
import { ProductComparer } from './productComparer';

export const Form = (): JSX.Element => {
  const [comparer, setComparer] = useState<ProductComparer | null>(null);
  const form = useItemForm({
    initialValues: {
      // priceA: 2483,
      // priceB: 4744,
      // capacityA: 8,
      // capacityB: 8,
      // countA: 4,
      // countB: 8
      priceA: 0,
      priceB: 0,
      capacityA: 0,
      capacityB: 0,
      countA: 0,
      countB: 0
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
        <Center>
          <Group mt='xs' mb={'sm'}>
            <Button type='submit'>計算！</Button>
            <Button type='button' color='gray' onClick={handleReset}>
              クリア
            </Button>
          </Group>
        </Center>
        {comparer && (
          <Grid>
            <Grid.Col span={6}>
              <Tanka tanka={comparer.calcUnitPriceA()} />
              {comparer.determineCheaperProduct() === 'A' && <WinResult diff={comparer.calcPriceDiff()} />}
              {comparer.determineCheaperProduct() === 'SAME' && <SameResult />}
            </Grid.Col>
            <Grid.Col span={6}>
              <Tanka tanka={comparer.calcUnitPriceB()} />
              {comparer.determineCheaperProduct() === 'B' && <WinResult diff={comparer.calcPriceDiff()} />}
              {comparer.determineCheaperProduct() === 'SAME' && <SameResult />}
            </Grid.Col>
          </Grid>
        )}
      </Box>
    </ItemFormProvider>
  );
};
