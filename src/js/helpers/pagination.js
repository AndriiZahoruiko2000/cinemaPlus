import { refs } from './refs';
import Pagination from 'tui-pagination';

export const instancePagination = new Pagination(refs.movieListPagination, {
  itemsPerPage: 20,
  totalItems: 0,
});
