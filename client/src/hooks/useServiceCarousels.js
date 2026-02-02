import { useQuery } from '@tanstack/react-query';
import { fetchServiceCarousels } from '../api';

export function useServiceCarousels() {
  return useQuery({
    queryKey: ['serviceCarousels'],
    queryFn: fetchServiceCarousels,
  });
}
