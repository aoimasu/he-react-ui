import React from "react";
import PropTypes from "prop-types";

export default function Settings(props) {
  const { className, ...restProps } = props;

  return (
    <svg
      className={className}
      {...restProps}
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(2.000000, 2.000000)">
        <path d="M16.8746589,13.3793038 L17.9757512,14.8119547 C18.2502281,15.1690816 18.2520775,15.6656332 17.9802684,16.0247947 C17.4218963,16.7626131 16.7648464,17.4200001 16.0283625,17.9771717 C15.6692539,18.2488478 15.1728599,18.2469991 14.8157848,17.9726559 L13.3835996,16.872298 C13.0884054,17.0180651 12.7837966,17.1446271 12.471378,17.2511128 L12.2369905,19.0420698 C12.1785447,19.4886548 11.8287675,19.8410608 11.3826327,19.9028488 C10.4465103,20.0324983 9.55436071,20.0322801 8.62117412,19.9028171 C8.17516999,19.8409419 7.82552512,19.4886175 7.76705667,19.042154 L7.53278815,17.2532858 C7.21948258,17.146815 6.91421393,17.0202769 6.61842021,16.8744549 L5.1850839,17.9758338 C4.82792327,18.2502769 4.3313636,18.25207 3.97223031,17.9802134 C3.23400018,17.4213883 2.56768825,16.7529174 2.02042014,16.0294412 C1.74873915,15.6702851 1.75064271,15.1738386 2.02506993,14.8167765 L3.12553784,13.3849379 C2.97908329,13.0883334 2.85206407,12.7822939 2.74529219,12.4682699 L0.9552605,12.2340065 C0.508502682,12.1755388 0.156019114,11.8255216 0.0944158624,11.3791853 C-0.0326243588,10.4587363 -0.0303662697,9.52359571 0.0944447565,8.62070566 C0.156131521,8.17446011 0.508580446,7.82455124 0.9552605,7.76609372 L2.74529219,7.53183027 C2.85206407,7.2178063 2.97908329,6.91176682 3.12553784,6.61516226 L2.02506993,5.18332374 C1.75056963,4.82616647 1.74874567,4.32956548 2.02061499,3.97040145 C2.5777876,3.23432593 3.24748474,2.56792748 3.97263388,2.01958145 C4.3316781,1.74807803 4.82787215,1.74993107 5.18487853,2.02410859 L6.61866532,3.1252433 C6.91445774,2.97960087 7.21963757,2.85318589 7.5327616,2.74680363 L7.76705116,0.957184687 C7.82554796,0.51035735 8.17568106,0.157857089 8.62210411,0.0963509405 C9.55563736,-0.0322670483 10.4474564,-0.0322670483 11.3826327,0.0972513495 C11.8287675,0.159039347 12.1785447,0.511445389 12.2369905,0.958030381 L12.4713753,2.74896657 C12.7836228,2.85536578 13.0881524,2.98180792 13.3833545,3.12740038 L14.8159902,2.02728651 C15.1730601,1.75309434 15.6693306,1.75131045 16.0283625,2.02292851 C16.7661105,2.58105644 17.4230139,3.23807222 17.9806195,3.97576979 C18.2520892,4.33491702 18.2500964,4.83119003 17.9757512,5.18814551 L16.8746589,6.62079638 C17.0197301,6.91543496 17.1457444,7.21932168 17.251865,7.5309679 L19.0423456,7.7652901 C19.4889872,7.82374258 19.841419,8.17359791 19.903147,8.61979862 C20.0329392,9.55800037 20.0316309,10.4494051 19.9031899,11.3799908 C19.841586,11.8263263 19.4891027,12.1763425 19.0423456,12.2348101 L17.251865,12.4691323 C17.1457444,12.7807785 17.0197301,13.0846652 16.8746589,13.3793038 Z M14.8909711,14.0803083 C14.6386887,13.7520592 14.6147566,13.3022946 14.8307805,12.9491267 C15.1375246,12.4476444 15.3641734,11.9025088 15.5025743,11.3280746 C15.5995453,10.9255955 15.9344948,10.6244835 16.3449906,10.5707614 L17.9917868,10.3552434 C18.0027089,10.1182289 18.0027617,9.8824687 17.9918407,9.64486389 L16.3449906,9.42933876 C15.9344948,9.37561672 15.5995453,9.07450473 15.5025743,8.6720256 C15.3641734,8.09759138 15.1375246,7.55245577 14.8307805,7.05097347 C14.6147566,6.6978056 14.6386887,6.24804098 14.8909711,5.91979187 L15.9032,4.60276268 C15.7431693,4.42787278 15.5754638,4.2601346 15.4005686,4.10002828 L14.0833372,5.1115237 C13.7548579,5.36376139 13.3048844,5.38741724 12.9517677,5.1710122 C12.4503271,4.86370796 11.904547,4.63649603 11.3303855,4.49820815 C10.9278717,4.40126195 10.6267232,4.06629859 10.5729969,3.65577527 L10.3573893,2.00831543 C10.1198615,1.99730507 9.88393602,1.99723247 9.64653926,2.00807356 L9.43103383,3.65421008 C9.37726679,4.0649092 9.07587177,4.39995248 8.67313165,4.49672575 C8.09684995,4.63519884 7.5511034,4.86183894 7.04933444,5.16892148 C6.69625751,5.38500451 6.24654393,5.36121054 5.91823999,5.10907622 L4.60057687,4.09712339 C4.42661917,4.25652593 4.25864891,4.42428426 4.09837201,4.59891787 L5.10985006,5.91497009 C5.36252769,6.24373349 5.38610308,6.694328 5.16911336,7.04766469 C4.86080368,7.54970286 4.63361181,8.09562499 4.49521882,8.67205132 C4.39850159,9.07489226 4.06340122,9.3763824 3.6526155,9.43014239 L2.00768706,9.64541602 C1.99743928,9.88088333 1.99739081,10.1177628 2.00771984,10.3546885 L3.6526155,10.5699578 C4.06340122,10.6237178 4.39850159,10.9252079 4.49521882,11.3280489 C4.63361181,11.9044752 4.86080368,12.4503973 5.16911336,12.9524355 C5.38610308,13.3057722 5.36252769,13.7563667 5.10985006,14.0851301 L4.09834179,15.4012216 C4.25767236,15.5747757 4.42553059,15.7425079 4.60048863,15.9027835 L5.91803462,14.8903781 C6.24663811,14.6378784 6.69693415,14.6142209 7.05018706,14.8308975 C7.55111377,15.1381535 8.09650995,15.3648197 8.67313165,15.5033744 C9.07585668,15.6001441 9.37724586,15.9351666 9.43102832,16.345848 L9.64658014,17.991796 C9.88388226,18.0027459 10.1197944,18.002738 10.3573933,17.9917536 L10.5729969,16.3443249 C10.6267232,15.9338016 10.9278717,15.5988382 11.3303855,15.501892 C11.9048869,15.3635223 12.4503194,15.1362833 12.9509148,14.8288076 C13.3042072,14.6118084 13.7547636,14.6353274 14.0835427,14.8879307 L15.4006143,15.899846 C15.5753115,15.7398327 15.7429628,15.5720899 15.903051,15.3971437 L14.8909711,14.0803083 Z M14,10.0003617 C14,12.2096989 12.2093183,14 10,14 C7.7911924,14 6,12.2094865 6,10.0003617 C6,7.79117355 7.79125588,6 10,6 C12.2092548,6 14,7.79096104 14,10.0003617 Z M12,10.0003617 C12,8.89547657 11.1046314,8 10,8 C8.8958048,8 8,8.89576363 8,10.0003617 C8,11.1047472 8.89559222,12 10,12 C11.1048439,12 12,11.1050342 12,10.0003617 Z" />
      </g>
    </svg>
  );
}

Settings.propTypes = {
  className: PropTypes.string
};
