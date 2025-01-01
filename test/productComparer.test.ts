import { describe, expect, it } from 'vitest';
import { ProductComparer } from '../src/productComparer';

describe('ProductComparer', () => {
  it('単価を正しく計算できること', () => {
    const productA = { price: 300, quantity: 300 };
    const productB = { price: 550, quantity: 1000 };
    const comparer = new ProductComparer(productA, productB);

    expect(comparer.calcUnitPriceA()).toBe(1);
    expect(comparer.calcUnitPriceB()).toBe(0.6);
  });

  it('単価を正しく計算できること(パックあり)', () => {
    const productA = { price: 600, quantity: 10, packs: 3 };
    const productB = { price: 1000, quantity: 100, packs: 2 };
    const comparer = new ProductComparer(productA, productB);

    expect(comparer.calcUnitPriceA()).toBe(20);
    expect(comparer.calcUnitPriceB()).toBe(5);
  });

  it('単価が同じ場合はSAMEが返されること', () => {
    const productA = { price: 200, quantity: 400 };
    const productB = { price: 100, quantity: 200 };
    const comparer = new ProductComparer(productA, productB);

    expect(comparer.calcUnitPriceA()).toBe(0.5);
    expect(comparer.calcUnitPriceB()).toBe(0.5);
    expect(comparer.determineCheaperProduct()).toBe('SAME');
  });

  it('単価が同じ場合はSAMEが返されること', () => {
    const productA = { price: 100, quantity: 10 };
    const productB = { price: 100, quantity: 10 };
    const comparer = new ProductComparer(productA, productB);

    expect(comparer.calcUnitPriceA()).toBe(10);
    expect(comparer.calcUnitPriceB()).toBe(10);
    expect(comparer.determineCheaperProduct()).toBe('SAME');
  });

  it('より安い商品が正しく判定されること', () => {
    const productA = { price: 300, quantity: 300 };
    const productB = { price: 550, quantity: 1000 };
    const comparer = new ProductComparer(productA, productB);

    expect(comparer.determineCheaperProduct()).toBe('B');
  });

  it('価格差を正しく計算できること', () => {
    const productA = { price: 300, quantity: 300 };
    const productB = { price: 550, quantity: 1000 };
    const comparer = new ProductComparer(productA, productB);
    expect(comparer.calcPriceDiff()).toBe(450);
  });
});
