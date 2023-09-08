import { useLocation } from 'react-router-dom';

export const useQueryParams = () => {
    const url = new URLSearchParams(useLocation().search)
    url.set('saloj', 'valu')

    return new URLSearchParams(useLocation().search);
}