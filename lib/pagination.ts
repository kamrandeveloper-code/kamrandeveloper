export const PAGE_SIZE = 10;

export function paginate<T>(items: T[], requestedPage: number) {
  const totalPages = Math.max(1, Math.ceil(items.length / PAGE_SIZE));
  const currentPage = Math.min(Math.max(1, requestedPage || 1), totalPages);
  const start = (currentPage - 1) * PAGE_SIZE;
  const pageItems = items.slice(start, start + PAGE_SIZE);
  return { pageItems, currentPage, totalPages };
}
