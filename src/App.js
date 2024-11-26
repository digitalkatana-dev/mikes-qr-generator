import {
	Button,
	Container,
	FormControl,
	Paper,
	TextField,
} from '@mui/material';
import { useState } from 'react';
import Generator from './components/Generator';
import './App.css';

function App() {
	const [showQR, setShowQR] = useState(false);
	const [destination, setDestination] = useState('');
	const [size, setSize] = useState(128);
	const [bgColor, setBgColor] = useState('white');
	const [fgColor, setFgColor] = useState('black');
	const [imageSource, setImageSource] = useState('');
	const [imageHeight, setImageHeight] = useState(24);
	const [imageWidth, setImageWidth] = useState(24);
	const [imageOpacity, setImageOpacity] = useState(1);
	const [qrCodeData, setQRCodeData] = useState(null);

	const handleChange = (input, value) => {
		const actionMap = {
			url: setDestination,
			size: setSize,
			bg: setBgColor,
			fg: setFgColor,
			img: setImageSource,
			imgH: setImageHeight,
			imgW: setImageWidth,
			imgO: setImageOpacity,
		};

		const action = actionMap[input];

		if (action) {
			action(value);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const data = {
			...(destination && { destination }),
			size,
			bgColor,
			fgColor,
			...(imageSource && { imageSource }),
			...(imageSource && { imageHeight }),
			...(imageSource && { imageWidth }),
			...(imageSource && { imageOpacity }),
		};

		setQRCodeData(data);
		setShowQR(true);
	};

	const handleClear = () => {
		setShowQR(false);
		setDestination('');
		setSize(128);
		setBgColor('white');
		setFgColor('black');
		setImageSource('');
		setImageHeight(24);
		setImageWidth(24);
		setImageOpacity(1);
		setQRCodeData(null);
	};

	return (
		<div className='App'>
			<Container maxWidth='xs'>
				<Paper className='surface' elevation={5}>
					{showQR ? (
						<Generator data={qrCodeData} />
					) : (
						<form onSubmit={handleSubmit}>
							<FormControl>
								<TextField
									label='QR Destination'
									value={destination}
									onChange={(e) => handleChange('url', e.target.value)}
								/>
							</FormControl>
							<FormControl>
								<TextField
									type='number'
									label='Enter Size'
									value={size}
									onChange={(e) => handleChange('size', e.target.value)}
								/>
							</FormControl>
							<FormControl>
								<TextField
									label='Background Color'
									value={bgColor}
									onChange={(e) => handleChange('bg', e.target.value)}
								/>
							</FormControl>
							<FormControl>
								<TextField
									label='Foreground Color'
									value={fgColor}
									onChange={(e) => handleChange('fg', e.target.value)}
								/>
							</FormControl>
							<FormControl>
								<TextField
									label='Image Source'
									value={imageSource}
									onChange={(e) => handleChange('img', e.target.value)}
								/>
							</FormControl>
							{imageSource && (
								<>
									<FormControl>
										<TextField
											type='number'
											label='Image Height'
											value={imageHeight}
											onChange={(e) => handleChange('imgH', e.target.value)}
										/>
									</FormControl>
									<FormControl>
										<TextField
											type='number'
											label='Image Width'
											value={imageWidth}
											onChange={(e) => handleChange('imgW', e.target.value)}
										/>
									</FormControl>
									<FormControl>
										<TextField
											type='number'
											label='Image Opacity'
											value={imageOpacity}
											onChange={(e) => handleChange('imgO', e.target.value)}
										/>
									</FormControl>
								</>
							)}
							<Button type='submit' variant='outlined'>
								Submit
							</Button>
						</form>
					)}
				</Paper>
				{showQR && (
					<Button variant='outlined' fullWidth onClick={handleClear}>
						Clear
					</Button>
				)}
			</Container>
		</div>
	);
}

export default App;
