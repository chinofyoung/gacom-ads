"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _typestyle = require("typestyle");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var className = (0, _typestyle.style)({
  width: '100%',
  background: '#fff',
  borderRadius: '.2rem',
  border: 'solid 1px #d8d8d8',
  borderBottom: '.5rem solid #D8D8D8',
  marginBottom: '1.5rem',
  $nest: {
    '&:last-child': {
      marginBottom: '3rem'
    },
    'label': {
      fontSize: '.9rem'
    },
    'p': {
      fontSize: '1em',
      lineHeight: '1.25em',
      color: '#444'
    },
    '.provider-name': {
      margin: '0 0 1.5em',
      color: '#111111',
      fontWeight: 'bold'
    },
    'a': {
      fontSize: '1.25em',
      fontWeight: '700',
      lineHeight: '1.5rem',
      marginBottom: '.5rem',
      display: 'block',
      textDecoration: 'none'
    },
    'a h3': {
      fontSize: '1em !important',
      fontWeight: '700',
      lineHeight: '1.5rem',
      marginBottom: '.5rem',
      marginTop: 0,
      display: 'block',
      color: '#333'
    },
    'header > a': {
      position: 'relative',
      height: '180px',
      padding: '0',
      margin: '0',
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    'header a > img': {
      position: 'absolute',
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    'section': {
      textAlign: 'center',
      padding: '1.5rem'
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
      alignItems: 'center'
    },
    '.logo-wrapper a': {
      marginBottom: '0'
    },
    '.logo-wrapper img': {
      width: '100%',
      height: 'auto'
    },
    '.filter': {
      position: 'absolute',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      background: 'rgba(65,65,65,0.45)',
      zIndex: 1
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
      fontWeight: 'bold'
    }
  }
}, (0, _typestyle.media)({
  minWidth: '1200px'
}, {
  display: 'grid',
  gridTemplateColumns: '23% 77%',
  $nest: {
    'header > a': {
      borderRadius: '.2rem 0 0 0',
      height: '100%'
    },
    'section': {
      textAlign: 'left',
      borderLeft: "solid 1px #d8d8d8",
      padding: '2rem 1.5rem 1.5rem'
    },
    'footer': {
      borderTop: "solid 1px #d8d8d8",
      paddingTop: '1.5rem',
      display: 'flex',
      flexDirection: 'row-reverse'
    }
  }
}));

var InsuracenAd = function InsuracenAd(props) {
  var title = props.title,
      provider = props.provider,
      description = props.description,
      image = props.image,
      image_alt = props.image_alt,
      logo = props.logo,
      url = props.url,
      handleBannerClickThru = props.handleBannerClickThru;
  return _react.default.createElement("div", {
    className: className
  }, _react.default.createElement("header", null, _react.default.createElement("a", {
    onClick: function onClick() {
      return props.handleBannerClickThru(props.data);
    },
    className: " gtm-ad-insurance-listing",
    href: url,
    target: "_blank",
    rel: "sponsored noopener"
  }, _react.default.createElement("div", {
    className: "logo-wrapper"
  }, _react.default.createElement("img", {
    src: logo,
    alt: provider
  })), _react.default.createElement("img", {
    src: image,
    alt: image_alt
  }), _react.default.createElement("div", {
    className: "filter"
  }))), _react.default.createElement("section", null, _react.default.createElement("a", {
    onClick: function onClick() {
      return props.handleBannerClickThru(props.data);
    },
    className: "gtm-ad-insurance-listing",
    href: url,
    target: "_blank",
    rel: "sponsored noopener"
  }, _react.default.createElement("h3", null, title)), _react.default.createElement("p", {
    className: "provider-name"
  }, provider), _react.default.createElement("p", null, description), _react.default.createElement("footer", null, _react.default.createElement("a", {
    onClick: function onClick() {
      return props.handleBannerClickThru(props.data);
    },
    href: url,
    target: "_blank",
    rel: "sponsored noopener"
  }, "Learn More"))));
};

var _default = InsuracenAd;
exports.default = _default;

//# sourceMappingURL=InsuranceAd.js.map