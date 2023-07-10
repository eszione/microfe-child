import { TagSelectDeprecated } from 'cosmos-components';
import { ComponentProps, FC } from 'react';
import { useSearch, UseSearchArgs } from './useSearch';

type TagSelectProps = ComponentProps<typeof TagSelectDeprecated>;
type SearchableTagSelectProps = TagSelectProps &
    UseSearchArgs & {
        isKeepingInputValue?: boolean;
        isKeepingActiveInputValue?: boolean;
    };
export const SearchableTagSelect: FC<SearchableTagSelectProps> = ({
    isMulti = true,
    isKeepingInputValue,
    isKeepingActiveInputValue,
    keywordMinLength,
    onSearch,
    value,
    ...props
}) => {
    const controlledProps = useControlledSearch({
        isKeepingInputValue,
        isKeepingActiveInputValue,
        keywordMinLength,
        onSearch,
    });

    const currentValue =
        (!isMulti &&
            value &&
            props.options?.find((option) => option?.value === value)) ||
        value;

    return (
        <TagSelectDeprecated
            {...props}
            value={currentValue}
            isSearchable
            isMulti={isMulti}
            onInputChange={controlledProps.handleInputChange}
            inputValue={controlledProps.keyword}
        />
    );
};

type UseControllerSearchArgs = Pick<
    SearchableTagSelectProps,
    | 'isKeepingInputValue'
    | 'keywordMinLength'
    | 'onSearch'
    | 'isKeepingActiveInputValue'
>;

const useControlledSearch = ({
    isKeepingInputValue,
    isKeepingActiveInputValue,
    keywordMinLength,
    onSearch,
}: UseControllerSearchArgs) => {
    if (!onSearch) {
        return {};
    }

    const [keyword, handleSearch, setKeyword] = useSearch({
        keywordMinLength,
        onSearch,
    });

    // Preventing clearing input value
    // https://github.com/JedWatson/react-select/issues/3210#issuecomment-566482487
    const handleInputChangeAndPreserve = (
        isKeepingAll: boolean,
    ): TagSelectProps['onInputChange'] => (inputValue, { action }) => {
        const clearingActions = isKeepingAll
            ? ['set-value', 'input-blur', 'menu-close']
            : ['set-value'];

        if (clearingActions.includes(action)) {
            return keyword;
        }

        handleSearch(inputValue);

        return inputValue;
    };

    const handleInputChange =
        isKeepingInputValue || isKeepingActiveInputValue
            ? handleInputChangeAndPreserve(isKeepingInputValue)
            : handleSearch;

    return { handleInputChange, keyword };
};
