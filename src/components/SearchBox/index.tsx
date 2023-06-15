import { debounce } from "lodash";
import React, { SyntheticEvent } from "react";

export interface ISearchBoxProps {
  onFilterUpdate: React.EventHandler<any>;
  value?: string;
  inputPlaceholder?: string;
  minLength?: number;
  delay?: number;
  style?: object;
  className?: string;
  hideIcon: boolean;
  onKeyUp?: React.EventHandler<SyntheticEvent>;
  onApplyFilter?: (input: string) => boolean;
}

export interface IQa {
  testId?: string;
}

class SearchBox extends React.PureComponent<ISearchBoxProps & IQa, any> {
  public static defaultProps = {
    minLength: 2,
    delay: 300,
    style: {},
    className: "",
    hideIcon: false,
  };

  private updateFn: (input: string) => void;

  constructor(props: any) {
    super(props);
    this.state = {
      searchFilter: props.value || "",
    };
    this.updateFn = debounce(props.onFilterUpdate, props.delay);
  }

  public componentWillReceiveProps(nextProps: any) {
    if (this.props.value !== nextProps.value) {
      this.setState({ searchFilter: nextProps.value || "" });
    }
  }

  public render() {
    const { testId } = this.props;
    return (
      <div
        data-test-id={testId}
        className={`searchbox ${this.props.className}`}
        style={this.props.style}
      >
        <input
          data-test-id={`${testId}-input`}
          value={this.state.searchFilter}
          placeholder={this.props.inputPlaceholder || "Search"}
          onChange={this.applyFilter}
          onKeyUp={this.props.onKeyUp}
        />
        {!this.props.hideIcon && <i className="fa fa-search" />}
      </div>
    );
  }

  private applyFilter = (e: any) => {
    const input = e.target.value;
    const { minLength, onFilterUpdate, onApplyFilter } = this.props;

    this.setState({ searchFilter: input });

    const shouldApplyFilter = onApplyFilter
      ? onApplyFilter(input)
      : input.length >= minLength || input === "";

    if (shouldApplyFilter && onFilterUpdate) {
      this.updateFn(input);
    }
  };
}

export default SearchBox;
