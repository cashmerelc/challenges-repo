import { useRouter } from "next/router";
import useSWR from "swr";

export default function ProductDetailsPage() {
  const router = useRouter();
  const { id } = router.query;

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
  const { data, error, isLoading } = useSWR(`/api/products/${id}`, fetcher);

  console.log("data", data);

  if (error) return <div>There was an error fetching the products...</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <li key={data.id}>
      <a href={`/products/${data.id}`}>{data.name}</a>
      <p>{data.description}</p>
    </li>
  );
}
