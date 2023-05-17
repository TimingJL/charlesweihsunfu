export const sizeNumber = {
  mobileMax: 575,
  smTabletMin: 576,
  smTabletMax: 767,
  tabletMin: 768,
  tabletMax: 991,
  desktopMin: 992,
  desktopMax: 1199,
  lgDesktopMin: 1200,
};

export const size = {
  mobileMax: `${sizeNumber.mobileMax}px`,
  smTabletMin: `${sizeNumber.smTabletMin}px`,
  smTabletMax: `${sizeNumber.smTabletMax}px`,
  tabletMin: `${sizeNumber.tabletMin}px`,
  tabletMax: `${sizeNumber.tabletMax}px`,
  desktopMin: `${sizeNumber.desktopMin}px`,
  desktopMax: `${sizeNumber.desktopMax}px`,
  lgDesktopMin: `${sizeNumber.lgDesktopMin}px`,
};

export const device = {
  mobile: `(max-width: ${size.mobileMax})`,
  smTablet: `(min-width: ${size.smTabletMin}) and (max-width: ${size.smTabletMax})`,
  tablet: `(min-width: ${size.tabletMin}) and (max-width: ${size.tabletMax})`,
  desktop: `(min-width: ${size.desktopMin}) and (max-width: ${size.desktopMax})`,
  lgDesktop: `(min-width: ${size.lgDesktopMin})`,
};
