import React from 'react';
import { style, media } from 'typestyle';

const className = style({
    width: '100%',
    background: '#fff',
    borderRadius: '.2rem',
    border: 'solid 1px #d8d8d8',
    borderBottom: '.5rem solid #D8D8D8',
    marginBottom: '1.5rem',
    
    $nest: {
        '&:last-child': {
            marginBottom: '3rem',
        },
        'label': {
            fontSize: '.9rem',
        },
        'p': {
            fontSize: '1em',
            lineHeight: '1.25em',
            color: '#444',
        },
        '.provider-name': {
            margin: '0 0 1.5em',
            color: '#111111',
            fontWeight: 'bold',
        },
        'a': {
            fontSize: '1.25em',
            fontWeight: '700',
            lineHeight: '1.5rem',
            marginBottom: '.5rem',
            display: 'block',
            textDecoration: 'none',
        },
        'a h3': {
            fontSize: '1em !important',
            fontWeight: '700',
            lineHeight: '1.5rem',
            marginBottom: '.5rem',
            marginTop: 0,
            display: 'block',
            color: '#333',
        },
        'header > a': {
            position: 'relative',
            height: '180px',
            padding: '0',
            margin: '0',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        'header a > img': {
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
        },
        'section': {
            textAlign: 'center',
            padding: '1.5rem',
        },
        '.logo-wrapper': {
            position: 'absolute',
            width: '120px',
            height: '120px',
            background: '#fff',
            padding: '.8rem',
            zIndex: 2,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        '.logo-wrapper a': {
            marginBottom: '0',
        },
        '.logo-wrapper img': {
            width: '100%',
            height: 'auto',
        },
        '.filter': {
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            background: 'rgba(65,65,65,0.45)',
            zIndex: 1,
        },
        'footer a': {
            fontSize: '1em',
            marginBottom: '0',
            border: '1px solid rgb(31,179,212)',
            color: 'rgb(31,179,212)',
            textAlign: 'center',
            padding: '16px 32px',
            borderRadius: 3,
            textTransform: 'uppercase',
            fontWeight: 'bold',
        },
    },
},
media({ minWidth: '1200px' }, {
    display: 'grid',
    gridTemplateColumns: '23% 77%',
    $nest: {
        'header > a': {
            borderRadius: '.2rem 0 0 0',
            height: '100%',
        },
        'section': {
            textAlign: 'left',
            borderLeft: `solid 1px #d8d8d8`,
            padding: '2rem 1.5rem 1.5rem',
        },
        'footer': {
            borderTop: `solid 1px #d8d8d8`,
            paddingTop: '1.5rem',
            display: 'flex',
            flexDirection: 'row-reverse',
        },
    },
}));

const InsuracenAd = ( props ) => {
    const { title, provider, description, image, image_alt, logo, url, handleBannerClickThru} = props;

    return (
        <div className={className}>
            <header>
                <a onClick={() => props.handleBannerClickThru(props.data)} className=" gtm-ad-insurance-listing" href={url} target="_blank" rel="sponsored noopener">
                    <div className="logo-wrapper">
                        <img src={logo} alt={provider} />
                    </div>
                    <img src={image} alt={image_alt} />
                    <div className="filter"></div>
                </a>
            </header>
            <section>
                <a onClick={() => props.handleBannerClickThru(props.data)} className="gtm-ad-insurance-listing" href={url} target="_blank" rel="sponsored noopener" ><h3>{title}</h3></a>
                <p className="provider-name">{provider}</p>
                <p>{description}</p>
                <footer>
                    <a onClick={() => props.handleBannerClickThru(props.data)} href={url} target="_blank" rel="sponsored noopener" >Learn More</a>
                </footer>
            </section>
        </div>
    );
}

export default InsuracenAd;
