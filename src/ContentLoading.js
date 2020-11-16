import React from "react";
import ContentLoader from "react-content-loader";

const ContentLoading = (props) => {
	return (
		<>
			<ContentLoader
				width={200}
				height={200}
				viewBox="0 0 200 200"
				{...props}
			>
				<rect x="0" y="160" rx="0" ry="0" width="25" height="40" />
				<rect x="30" y="145" rx="0" ry="0" width="25" height="55" />
				<rect x="60" y="126" rx="0" ry="0" width="25" height="74" />
				<rect x="90" y="80" rx="0" ry="0" width="25" height="120" />
				<rect x="120" y="142" rx="0" ry="0" width="25" height="58" />
			</ContentLoader>
			<ContentLoader
				width={200}
				height={200}
				viewBox="0 0 200 200"
				{...props}
			>
				<circle cx="31" cy="31" r="15" />
				<rect x="58" y="18" rx="2" ry="2" width="140" height="10" />
				<rect x="58" y="34" rx="2" ry="2" width="140" height="10" />
				<rect x="0" y="60" rx="2" ry="2" width="400" height="400" />
			</ContentLoader>
			<br />
			<br />
			<ContentLoader
				width={200}
				height={200}
				viewBox="0 0 200 200"
				{...props}
			>
				<rect x="48" y="8" width="88" height="6" rx="3" />
				<rect x="48" y="26" width="52" height="6" rx="3" />
				<rect x="0" y="56" width="410" height="6" rx="3" />
				<rect x="0" y="72" width="380" height="6" rx="3" />
				<rect x="0" y="88" width="178" height="6" rx="3" />
				<circle cx="20" cy="20" r="20" />
			</ContentLoader>
		</>
	);
};

export default ContentLoading;
