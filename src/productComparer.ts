const ceilDecimal = (value: number, n: number): number => {
  return Math.ceil(value * 10 ** n) / 10 ** n;
};

export interface Product {
  price: number; // 価格
  quantity: number; // 量
  packs?: number; // パック数（任意）
}

export class ProductComparer {
  productA: Product;
  productB: Product;

  constructor(productA: Product, productB: Product) {
    this.productA = productA;
    this.productB = productB;
  }

  // 商品Aの単価を計算する
  calcUnitPriceA(): number {
    const totalQuantityA = this.productA.packs ? this.productA.quantity * this.productA.packs : this.productA.quantity;
    return ceilDecimal(this.productA.price / totalQuantityA, 1);
  }

  // 商品Bの単価を計算する
  calcUnitPriceB(): number {
    const totalQuantityB = this.productB.packs ? this.productB.quantity * this.productB.packs : this.productB.quantity;
    return ceilDecimal(this.productB.price / totalQuantityB, 1);
  }

  // どちらの商品が得かを判定する
  determineCheaperProduct(): 'A' | 'B' | 'SAME' {
    const unitPriceA = this.calcUnitPriceA();
    const unitPriceB = this.calcUnitPriceB();

    if (unitPriceA < unitPriceB) {
      return 'A';
    }
    if (unitPriceB < unitPriceA) {
      return 'B';
    }
    return 'SAME';
  }

  // どれくらい安いかを算出する
  calcPriceDifference(): number {
    const unitPriceA = this.calcUnitPriceA();
    const unitPriceB = this.calcUnitPriceB();
    const totalQuantityA = this.productA.packs ? this.productA.quantity * this.productA.packs : this.productA.quantity;
    const totalQuantityB = this.productB.packs ? this.productB.quantity * this.productB.packs : this.productB.quantity;

    if (unitPriceA === unitPriceB) {
      return 0;
    }

    if (unitPriceA < unitPriceB) {
      return ceilDecimal(unitPriceB * totalQuantityA - this.productA.price, 1);
    }

    return ceilDecimal(unitPriceA * totalQuantityB - this.productB.price, 1);
  }
}
