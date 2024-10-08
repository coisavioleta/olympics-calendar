import { NOC } from "./types";

const NOCS: Map<string, NOC> = new Map([
  ["AFG", { icon: "🇦🇫", name: "Afghanistan" }],
  ["ALB", { icon: "🇦🇱", name: "Albania" }],
  ["ALG", { icon: "🇩🇿", name: "Algeria" }],
  ["AIN", { icon: "🇦🇸", name: "American Samoa" }],
  ["AND", { icon: "🇦🇩", name: "Andorra" }],
  ["ANG", { icon: "🇦🇴", name: "Angola" }],
  ["ANT", { icon: "🇦🇬", name: "Antigua and Barbuda" }],
  ["ARG", { icon: "🇦🇷", name: "Argentina" }],
  ["ARM", { icon: "🇦🇲", name: "Armenia" }],
  ["ARU", { icon: "🇦🇼", name: "Aruba" }],
  ["ASA", { icon: "🇦🇸", name: "American Samoa" }],
  ["AUS", { icon: "🇦🇺", name: "Australia" }],
  ["AUT", { icon: "🇦🇹", name: "Austria" }],
  ["AZE", { icon: "🇦🇿", name: "Azerbaijan" }],
  ["BAH", { icon: "🇧🇸", name: "Bahamas" }],
  ["BAN", { icon: "🇧🇩", name: "Bangladesh" }],
  ["BAR", { icon: "🇧🇧", name: "Barbados" }],
  ["BDI", { icon: "🇧🇮", name: "Burundi" }],
  ["BEL", { icon: "🇧🇪", name: "Belgium" }],
  ["BEN", { icon: "🇧🇯", name: "Benin" }],
  ["BER", { icon: "🇧🇲", name: "Bermuda" }],
  ["BHU", { icon: "🇧🇹", name: "Bhutan" }],
  ["BIH", { icon: "🇧🇦", name: "Bosnia and Herzegovina" }],
  ["BIZ", { icon: "🇧🇿", name: "Belize" }],
  ["BOL", { icon: "🇧🇴", name: "Bolivia" }],
  ["BOT", { icon: "🇧🇼", name: "Botswana" }],
  ["BRA", { icon: "🇧🇷", name: "Brazil" }],
  ["BRN", { icon: "🇧🇭", name: "Bahrain" }],
  ["BRU", { icon: "🇧🇳", name: "Brunei" }],
  ["BUL", { icon: "🇧🇬", name: "Bulgaria" }],
  ["BUR", { icon: "🇧🇫", name: "Burkina Faso" }],
  ["CAF", { icon: "🇨🇫", name: "Central African Republic" }],
  ["CAM", { icon: "🇰🇭", name: "Cambodia" }],
  ["CAN", { icon: "🇨🇦", name: "Canada" }],
  ["CAY", { icon: "🇰🇾", name: "Cayman Islands" }],
  ["CGO", { icon: "🇨🇬", name: "Congo" }],
  ["CHA", { icon: "🇹🇩", name: "Chad" }],
  ["CHI", { icon: "🇨🇱", name: "Chile" }],
  ["CHN", { icon: "🇨🇳", name: "China" }],
  ["CIV", { icon: "🇨🇮", name: "Côte d'Ivoire" }],
  ["CMR", { icon: "🇨🇲", name: "Cameroon" }],
  ["COD", { icon: "🇨🇩", name: "Democratic Republic of the Congo" }],
  ["COK", { icon: "🇨🇰", name: "Cook Islands" }],
  ["COL", { icon: "🇨🇴", name: "Colombia" }],
  ["COM", { icon: "🇰🇲", name: "Comoros" }],
  ["CPV", { icon: "🇨🇻", name: "Cabo Verde" }],
  ["CRC", { icon: "🇨🇷", name: "Costa Rica" }],
  ["CRO", { icon: "🇭🇷", name: "Croatia" }],
  ["CUB", { icon: "🇨🇺", name: "Cuba" }],
  ["CYP", { icon: "🇨🇾", name: "Cyprus" }],
  ["CZE", { icon: "🇨🇿", name: "Czechia" }],
  ["DEN", { icon: "🇩🇰", name: "Denmark" }],
  ["DJI", { icon: "🇩🇯", name: "Djibouti" }],
  ["DMA", { icon: "🇩🇲", name: "Dominica" }],
  ["DOM", { icon: "🇩🇴", name: "Dominican Republic" }],
  ["ECU", { icon: "🇪🇨", name: "Ecuador" }],
  ["EGY", { icon: "🇪🇬", name: "Egypt" }],
  ["EOR", { icon: "🏳️", name: "Refugee Olympic Team" }],
  ["ERI", { icon: "🇪🇷", name: "Eritrea" }],
  ["ESA", { icon: "🇸🇻", name: "El Salvador" }],
  ["ESP", { icon: "🇪🇸", name: "Spain" }],
  ["EST", { icon: "🇪🇪", name: "Estonia" }],
  ["ETH", { icon: "🇪🇹", name: "Ethiopia" }],
  ["FIJ", { icon: "🇫🇯", name: "Fiji" }],
  ["FIN", { icon: "🇫🇮", name: "Finland" }],
  ["FRA", { icon: "🇫🇷", name: "France" }],
  ["FSM", { icon: "🇫🇲", name: "Federated States of Micronesia" }],
  ["GAB", { icon: "🇬🇦", name: "Gabon" }],
  ["GAM", { icon: "🇬🇲", name: "Gambia" }],
  ["GBR", { icon: "🇬🇧", name: "Great Britain" }],
  ["GBS", { icon: "🇬🇼", name: "Guinea-Bissau" }],
  ["GEO", { icon: "🇬🇪", name: "Georgia" }],
  ["GEQ", { icon: "🇬🇶", name: "Equatorial Guinea" }],
  ["GER", { icon: "🇩🇪", name: "Germany" }],
  ["GHA", { icon: "🇬🇭", name: "Ghana" }],
  ["GRE", { icon: "🇬🇷", name: "Greece" }],
  ["GRN", { icon: "🇬🇩", name: "Grenada" }],
  ["GUA", { icon: "🇬🇹", name: "Guatemala" }],
  ["GUI", { icon: "🇬🇳", name: "Guinea" }],
  ["GUM", { icon: "🇬🇺", name: "Guam" }],
  ["GUY", { icon: "🇬🇾", name: "Guyana" }],
  ["HAI", { icon: "🇭🇹", name: "Haiti" }],
  ["HKG", { icon: "🇭🇰", name: "Hong Kong" }],
  ["HON", { icon: "🇭🇳", name: "Honduras" }],
  ["HUN", { icon: "🇭🇺", name: "Hungary" }],
  ["INA", { icon: "🇮🇩", name: "Indonesia" }],
  ["IND", { icon: "🇮🇳", name: "India" }],
  ["IRI", { icon: "🇮🇷", name: "Iran" }],
  ["IRL", { icon: "🇮🇪", name: "Ireland" }],
  ["IRQ", { icon: "🇮🇶", name: "Iraq" }],
  ["ISL", { icon: "🇮🇸", name: "Iceland" }],
  ["ISR", { icon: "🇮🇱", name: "Israel" }],
  ["ISV", { icon: "🇻🇮", name: "U.S. Virgin Islands" }],
  ["ITA", { icon: "🇮🇹", name: "Italy" }],
  ["IVB", { icon: "🇻🇬", name: "British Virgin Islands" }],
  ["JAM", { icon: "🇯🇲", name: "Jamaica" }],
  ["JOR", { icon: "🇯🇴", name: "Jordan" }],
  ["JPN", { icon: "🇯🇵", name: "Japan" }],
  ["KAZ", { icon: "🇰🇿", name: "Kazakhstan" }],
  ["KEN", { icon: "🇰🇪", name: "Kenya" }],
  ["KGZ", { icon: "🇰🇬", name: "Kyrgyzstan" }],
  ["KIR", { icon: "🇰🇮", name: "Kiribati" }],
  ["KOR", { icon: "🇰🇷", name: "Korea" }],
  ["KOS", { icon: "🇽🇰", name: "Kosovo" }],
  ["KSA", { icon: "🇸🇦", name: "Saudi Arabia" }],
  ["KUW", { icon: "🇰🇼", name: "Kuwait" }],
  ["LAO", { icon: "🇱🇦", name: "Laos" }],
  ["LAT", { icon: "🇱🇻", name: "Latvia" }],
  ["LBA", { icon: "🇱🇾", name: "Libya" }],
  ["LBN", { icon: "🇱🇧", name: "Lebanon" }],
  ["LBR", { icon: "🇱🇷", name: "Liberia" }],
  ["LCA", { icon: "🇱🇨", name: "Saint Lucia" }],
  ["LES", { icon: "🇱🇸", name: "Lesotho" }],
  ["LIE", { icon: "🇱🇮", name: "Liechtenstein" }],
  ["LTU", { icon: "🇱🇹", name: "Lithuania" }],
  ["LUX", { icon: "🇱🇺", name: "Luxembourg" }],
  ["MAD", { icon: "🇲🇬", name: "Madagascar" }],
  ["MAR", { icon: "🇲🇦", name: "Morocco" }],
  ["MAS", { icon: "🇲🇾", name: "Malaysia" }],
  ["MAW", { icon: "🇲🇼", name: "Malawi" }],
  ["MDA", { icon: "🇲🇩", name: "Moldova" }],
  ["MDV", { icon: "🇲🇻", name: "Maldives" }],
  ["MEX", { icon: "🇲🇽", name: "Mexico" }],
  ["MGL", { icon: "🇲🇳", name: "Mongolia" }],
  ["MHL", { icon: "🇲🇭", name: "Marshall Islands" }],
  ["MKD", { icon: "🇲🇰", name: "North Macedonia" }],
  ["MLI", { icon: "🇲🇱", name: "Mali" }],
  ["MLT", { icon: "🇲🇹", name: "Malta" }],
  ["MNE", { icon: "🇲🇪", name: "Montenegro" }],
  ["MON", { icon: "🇲🇨", name: "Monaco" }],
  ["MOZ", { icon: "🇲🇿", name: "Mozambique" }],
  ["MRI", { icon: "🇲🇺", name: "Mauritius" }],
  ["MTN", { icon: "🇲🇷", name: "Mauritania" }],
  ["MYA", { icon: "🇲🇲", name: "Myanmar" }],
  ["NAM", { icon: "🇳🇦", name: "Namibia" }],
  ["NCA", { icon: "🇳🇮", name: "Nicaragua" }],
  ["NED", { icon: "🇳🇱", name: "Netherlands" }],
  ["NEP", { icon: "🇳🇵", name: "Nepal" }],
  ["NGR", { icon: "🇳🇬", name: "Nigeria" }],
  ["NIG", { icon: "🇳🇪", name: "Niger" }],
  ["NOR", { icon: "🇳🇴", name: "Norway" }],
  ["NRU", { icon: "🇳🇷", name: "Nauru" }],
  ["NZL", { icon: "🇳🇿", name: "New Zealand" }],
  ["OMA", { icon: "🇴🇲", name: "Oman" }],
  ["PAK", { icon: "🇵🇰", name: "Pakistan" }],
  ["PAN", { icon: "🇵🇦", name: "Panama" }],
  ["PAR", { icon: "🇵🇾", name: "Paraguay" }],
  ["PER", { icon: "🇵🇪", name: "Peru" }],
  ["PHI", { icon: "🇵🇭", name: "Philippines" }],
  ["PLE", { icon: "🇵🇸", name: "Palestine" }],
  ["PLW", { icon: "🇵🇼", name: "Palau" }],
  ["PNG", { icon: "🇵🇬", name: "Papua New Guinea" }],
  ["POL", { icon: "🇵🇱", name: "Poland" }],
  ["POR", { icon: "🇵🇹", name: "Portugal" }],
  ["PRK", { icon: "🇰🇵", name: "North Korea" }],
  ["PUR", { icon: "🇵🇷", name: "Puerto Rico" }],
  ["QAT", { icon: "🇶🇦", name: "Qatar" }],
  ["ROU", { icon: "🇷🇴", name: "Romania" }],
  ["RSA", { icon: "🇿🇦", name: "South Africa" }],
  ["RWA", { icon: "🇷🇼", name: "Rwanda" }],
  ["SAM", { icon: "🇼🇸", name: "Samoa" }],
  ["SEN", { icon: "🇸🇳", name: "Senegal" }],
  ["SEY", { icon: "🇸🇨", name: "Seychelles" }],
  ["SGP", { icon: "🇸🇬", name: "Singapore" }],
  ["SKN", { icon: "🇰🇳", name: "Saint Kitts and Nevis" }],
  ["SLE", { icon: "🇸🇱", name: "Sierra Leone" }],
  ["SLO", { icon: "🇸🇮", name: "Slovenia" }],
  ["SMR", { icon: "🇸🇲", name: "San Marino" }],
  ["SOL", { icon: "🇸🇧", name: "Solomon Islands" }],
  ["SOM", { icon: "🇸🇴", name: "Somalia" }],
  ["SRB", { icon: "🇷🇸", name: "Serbia" }],
  ["SRI", { icon: "🇱🇰", name: "Sri Lanka" }],
  ["SSD", { icon: "🇸🇸", name: "South Sudan" }],
  ["STP", { icon: "🇸🇹", name: "Sao Tome and Principe" }],
  ["SUD", { icon: "🇸🇩", name: "Sudan" }],
  ["SUI", { icon: "🇨🇭", name: "Switzerland" }],
  ["SUR", { icon: "🇸🇷", name: "Suriname" }],
  ["SVK", { icon: "🇸🇰", name: "Slovakia" }],
  ["SWE", { icon: "🇸🇪", name: "Sweden" }],
  ["SWZ", { icon: "🇸🇿", name: "Eswatini" }],
  ["SYR", { icon: "🇸🇾", name: "Syria" }],
  ["TAN", { icon: "🇹🇿", name: "Tanzania" }],
  ["TGA", { icon: "🇹🇴", name: "Tonga" }],
  ["THA", { icon: "🇹🇭", name: "Thailand" }],
  ["TJK", { icon: "🇹🇯", name: "Tajikistan" }],
  ["TKM", { icon: "🇹🇲", name: "Turkmenistan" }],
  ["TLS", { icon: "🇹🇱", name: "Timor-Leste" }],
  ["TOG", { icon: "🇹🇬", name: "Togo" }],
  ["TPE", { icon: "🇹🇼", name: "Chinese Taipei" }],
  ["TTO", { icon: "🇹🇹", name: "Trinidad and Tobago" }],
  ["TUN", { icon: "🇹🇳", name: "Tunisia" }],
  ["TUR", { icon: "🇹🇷", name: "Türkiye" }],
  ["TUV", { icon: "🇹🇻", name: "Tuvalu" }],
  ["UAE", { icon: "🇦🇪", name: "United Arab Emirates" }],
  ["UGA", { icon: "🇺🇬", name: "Uganda" }],
  ["UKR", { icon: "🇺🇦", name: "Ukraine" }],
  ["URU", { icon: "🇺🇾", name: "Uruguay" }],
  ["USA", { icon: "🇺🇸", name: "United States" }],
  ["UZB", { icon: "🇺🇿", name: "Uzbekistan" }],
  ["VAN", { icon: "🇻🇺", name: "Vanuatu" }],
  ["VEN", { icon: "🇻🇪", name: "Venezuela" }],
  ["VIE", { icon: "🇻🇳", name: "Vietnam" }],
  ["VIN", { icon: "🇻🇨", name: "Saint Vincent and the Grenadines" }],
  ["YEM", { icon: "🇾🇪", name: "Yemen" }],
  ["ZAM", { icon: "🇿🇲", name: "Zambia" }],
  ["ZIM", { icon: "🇿🇼", name: "Zimbabwe" }],
]);

/**
 * isValidNOC checks if the NOC code is in the NOCS list
 * @param {string} noc National Olympic Committee code
 * @returns {boolean}
 */
export const isValidNOC = (noc: string) => NOCS.has(noc);

/**
 * getNOC returns the NOC name and icon from the NOC code
 * @param {string} noc National Olympic Committee code
 * @returns {object}
 */
export const getNOC = (noc: string): NOC => {
  if (isValidNOC(noc)) {
    return NOCS.get(noc)!;
  }
  throw new Error(`NOC code ${noc} not found`);
};

/**
 * getNOCFlag returns the NOC icon from the NOC code
 * @param {string} noc National Olympic Committee code
 * @returns {string}
 */
export const getNOCFlag = (noc: string) => getNOC(noc).icon;

/**
 * getNOCName returns the NOC name from the NOC code
 * @param {string} noc National Olympic Committee code
 * @returns 
 */
export const getNOCName = (noc: string) => getNOC(noc).name;
