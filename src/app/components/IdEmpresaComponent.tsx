import { useParams } from 'next/navigation';

export function IdBlog() {
  const params = useParams();
  return params.id;
}