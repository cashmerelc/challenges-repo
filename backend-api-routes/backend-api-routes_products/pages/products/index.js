import useSWR from "swr";
import React from "react";

export default function ProductsPage() {
  const fetcher = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
      const error = new Error("An error occurred while fetching the data.");
      error.info = await res.json();
      error.status = res.status;
      throw error;
    }

    return res.json();
  };
  const { data, error, isLoading } = useSWR(`/api/products`, fetcher);

  console.log("data", data);

  if (error) return <div>There was an error fetching the products...</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <ul>
      {data.map((product) => {
        return (
          <li key={product.id}>
            <a href={`/products/${product.id}`}>{product.name}</a>
            <p>{product.description}</p>
          </li>
        );
      })}
    </ul>
  );
}
