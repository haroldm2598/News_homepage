import { createSlice } from '@reduxjs/toolkit';
import img1 from '../../assets/images/image-retro-pcs.jpg';
import img2 from '../../assets/images/image-top-laptops.jpg';
import img3 from '../../assets/images/image-gaming-growth.jpg';

const initialState = {
	value: 0,
	navbarData: ['Home', 'New', 'Popular', 'Trending', 'Categories'],
	sidebarData: [
		{
			title: 'Hydrogen VS Electric Cars',
			description: 'Will hydrogen-fueled cars ever catch up to EVs?',
			hasHr: true
		},
		{
			title: 'The Downsides of AI Artistry',
			description:
				'What are the possible adverse effects of on-demand AI image generation?',
			hasHr: true
		},
		{
			title: 'Is VC Funding Drying Up?',
			description:
				'Private funding by VC firms is down 50% YOY. We take a look at what that means.',
			hasHr: false
		}
	],
	bottomData: [
		{
			image: img1,
			number: '01',
			title: 'Reviving Retro PCs',
			description: 'What happens when old PCs are given modern upgrades?'
		},
		{
			image: img2,
			number: '02',
			title: 'Top 10 Laptops of 2022',
			description: 'Our best picks for various needs and budgets.'
		},
		{
			image: img3,
			number: '03',
			title: 'The Growth of Gaming',
			description: 'How the pandemic has sparked fresh opportunities.'
		}
	]
};

const dataSlice = createSlice({
	name: 'dataSlice',
	initialState,
	reducers: {
		test: (state, action) => {
			state.value = action.payload;
		}
	}
});

export const { test } = dataSlice.actions;

export default dataSlice.reducer;
