import React from 'react';
import InsuranceAd from './Ads/InsuranceAd';
import { style } from 'typestyle';
import './App';

const app = style({
    display: 'flex',
    justifyContent: 'center',
    padding: 32,

    '.container': {
        width: '100%',
        maxWidth: 1200,
    }
});

const content = [
    {
        title: 'Top Insurances for European and Overseas travelers!',
        provider: 'Chapka Assurances',
        description: 'Discover our top insurances for Europeans traveling abroad as students, volunteers, Au Pairs or as simple travelers and for Overseas Visitors coming to Europe for a trip, for studies or for work.',
        image: 'https://www.goabroad.com/section_cloudinary/gaplabs/image/upload/c_fill,g_faces:auto,fl_progressive,g_faces:auto,fl_progressive,h_300,w_275/v1/images2/a/LF/fotolia-73816374-subscription-monthly-820-1000-1566372456.png',
        logo: 'https://www.goabroad.com/section_cloudinary/gaplabs/image/upload/c_pad,h_100,w_100/v1/images2/clients/logos/MAIN/chapka2-1567050694.jpeg',
    }
]

function App() {
    return (
        <div className={app}>
            {
                content.map((data, index) => {
                    return (
                        <div className='container'>
                            <InsuranceAd
                                url={data.url}
                                title={data.title}
                                provider={data.provider}
                                description={data.description}
                                image={data.image}
                                image_alt={data.image_alt}
                                logo={data.logo}
                            />
                        </div>
                    )
                })
            }
        </div>
    );
}

export default App;
