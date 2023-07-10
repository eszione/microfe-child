import { useSearchParams } from "cosmos-components/dist/customHooks/index";
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";

import { listCustomers } from "../../../apis/customers.api";
import { customerActions } from "../actions/customers.action";

export const useCustomersSearch = () => {
  const localDispatch = useDispatch();
  const [paginationParams, setPaginationParams] = useSearchParams({
    page: 1,
    pageSize: 20,
    search: "",
  });
  const { page, pageSize, search } = paginationParams;

  const setSearchPagination = useCallback(
    (pageSelected: number, pageSizeSelected: number) => {
      setPaginationParams({
        page: pageSelected,
        pageSize: pageSizeSelected,
      });
    },
    [setPaginationParams]
  );

  const setSearchText = useCallback(
    (searchText: string) => {
      setPaginationParams({
        search: searchText,
      });
      setSearchPagination(1, pageSize);
    },
    [setPaginationParams]
  );

  const loadPageData = (
    loadPage: any,
    loadPageSize: number,
    loadSearch: string
  ) => {
    if (!loadPage || !loadPageSize) {
      return;
    }

    const fetchCustomers = async () => {
      return await listCustomers({
        ...(loadSearch && { text: loadSearch }),
        limit: pageSize,
        offset: pageSize * (page - 1),
      });
    };
  
    localDispatch(customerActions.triggered());

    fetchCustomers().then(resp => {
      localDispatch(customerActions.loaded(resp));
    });
  };

  const loadPageDataCallback = useCallback(loadPageData, [page, pageSize]);

  useEffect(() => {
    loadPageDataCallback(page, pageSize, search);
  }, [loadPageDataCallback, page, pageSize, search]);

  return [page, pageSize, search, setSearchPagination, setSearchText];
};
