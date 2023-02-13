import { Input, Button } from "antd";
import { useState } from "react";
const {Search} = Input;
const SearchCpm = (props) => {
	const {onSearch, searchWidth, placeholder } = props;
	const [value, setValue] = useState('');
    const onChange = (e) => {
		setValue(e);
	};
	return (
		<div>
			<Search
				value={value}
				size="large"
				placeholder={placeholder ?? ""}
				onChange={(e) => onChange(e.target.value)}
                onSearch={onSearch}
				style={{ width: `${searchWidth}px` }}
			/>
		</div>
	);
};
export default SearchCpm;
