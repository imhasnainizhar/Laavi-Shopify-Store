export type IngredientDecsription = {
  name: string;
  description: string;
  imageUri: string;
};

export const ingredientsDescription: IngredientDecsription[] = [
  {
    name: "Collagen Peptides",
    description: `Helps promote a plumper, firmer look. Reduces the appearance of fine lines and wrinkles.
    Visibly smooths texture and enhances the appearance of elasticity.`,
    imageUri: "/images/ingredients/collagen-peptides.png"
  },
  {
    name: "Hyaluronic acid",
    description: `Helps soothe and replenish the skin. Plumps the skin, reducing 
    appearance of fine lines and wrinkles.`,
    imageUri: "/images/ingredients/hyaluronic-acid.png"
  },
  {
    name: "Retinol (Vitamin A)",
    description: `Known as the "gold standard" for anti-aging. It accelerates cell turnover and stimulates collagen production to deeply repair wrinkles and refine skin texture.`,
    imageUri: "/images/ingredients/vitamin-a.png"
  },
  {
    name: "Vitamin C (L-Ascorbic Acid)",
    description: `A powerful antioxidant that brightens skin tone and protects against environmental damage (like pollution and UV rays).`,
    imageUri: "/images/ingredients/vitamin-c.jpg"
  }
];
