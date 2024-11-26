import { QRCodeSVG } from 'qrcode.react';

const Generator = ({ data }) => {
	return (
		<QRCodeSVG
			value={data.destination}
			size={data.size}
			bgColor={data.bgColor}
			fgColor={data.fgColor}
			imageSettings={{
				src: data.imageSource,
				x: undefined,
				y: undefined,
				height: data.imageHeight,
				width: data.imageWidth,
				opacity: data.imageOpacity,
				excavate: true,
			}}
		/>
	);
};

export default Generator;
