import debounce from 'lodash/debounce';
import { useCallback, useState } from 'react';

export interface UseSearchArgs {
    onSearch: (value: string) => void;
    keywordMinLength?: number;
    debounceTimer?: number;
}

type UseSearch = (args: UseSearchArgs) => [string, (nextKeyword: string) => void, React.Dispatch<React.SetStateAction<string>>]; // prettier-ignore

export const useSearch: UseSearch = ({
    onSearch,
    keywordMinLength = 1,
    debounceTimer = 500,
}) => {
    const [keyword, setKeyword] = useState('');

    const debouncedOnSearchCallback = useCallback(
        debounce(onSearch, debounceTimer),
        [onSearch, debounceTimer],
    );

    const handleSearch = (nextKeyword: string) => {
        setKeyword(nextKeyword);

        if (
            nextKeyword.length >= keywordMinLength ||
            nextKeyword.length === 0
        ) {
            debouncedOnSearchCallback(nextKeyword);
        }
    };

    return [keyword, handleSearch, setKeyword];
};
