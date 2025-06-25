import Image from "next/image";

type Product = {
  name: string;
  price: number;
  image: string;
};

export default function ProductCard({ name, price, image }: Product) {
  return (
    <div className="border p-4 rounded shadow-sm">
      <Image src={image} alt={name} width={300} height={200} />
      <h3 className="mt-2 text-lg font-semibold">{name}</h3>
      <p className="text-sm text-gray-600">${price}</p>
    </div>
  );
}
