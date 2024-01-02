import { __ } from "@wordpress/i18n";

import { useBlockProps, RichText, InnerBlocks } from "@wordpress/block-editor";
import { getBlockTypes } from "@wordpress/blocks";

import "./editor.scss";

export default function Edit(props) {
	// get block attributes/fields
	const { title, isOpen } = props.attributes;

	// get props helper methods
	const { setAttributes } = props;

	// get block properties (class, attributes etc)
	const blockProps = useBlockProps({
		className: `my-custom-class ${isOpen && "open"}`,
	});

	const headingProps = {
		allowedFormats: ["core/heading"],
		tagName: "h2",
		value: title,
		onChange: (newValue) => setAttributes({ title: newValue }),
		className: "collapsible-title",
		onReplace: () => {},
		onSplit: () => {},
		onClick: () => setAttributes({ isOpen: !isOpen }),
	};

	const contentProps = {
		className: "collapsible-content",
		style: { display: isOpen ? "block" : "none" },
	};

	const ALLOWED_BLOCKS = getBlockTypes()
		.map((block) => block.name)
		.filter((blockName) => [props.name].indexOf(blockName) === -1);

	return (
		<div {...blockProps}>
			<RichText {...headingProps} />

			<div {...contentProps}>
				<InnerBlocks allowedBlocks={ALLOWED_BLOCKS} />
			</div>
		</div>
	);
}
