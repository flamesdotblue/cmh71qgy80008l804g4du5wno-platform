export const milestones = [
  { year: '1916', title: 'Founding', text: 'BMW (Bayerische Motoren Werke) is founded in Munich, initially focusing on aircraft engines.' },
  { year: '1923', title: 'First Motorcycle', text: 'BMW R 32 debuts, introducing the flat-twin boxer layout hallmark for BMW Motorrad.' },
  { year: '1928–29', title: 'Automobiles Begin', text: 'Acquires Fahrzeugfabrik Eisenach; launches Dixi/3/15—BMW’s entry into car production.' },
  { year: '1936–39', title: 'Early Icons', text: 'BMW 328 roadster dominates motorsport; lightweight innovations emerge.' },
  { year: '1955–59', title: 'Rebuilding Era', text: 'Isetta microcar and 507 roadster help stabilize finances post-war.' },
  { year: '1962–72', title: 'Neue Klasse', text: 'BMW 1500/1800/2000 and 2002 define the sport sedan formula; origin of modern BMW DNA.' },
  { year: '1972–86', title: 'Series Era + M Division', text: '3/5/7 Series naming introduced; BMW Motorsport GmbH (M) founded; mid-engined M1 debuts (1978).' },
  { year: '1999', title: 'X Models', text: 'X5 launches the Sports Activity Vehicle concept; expands into premium SUVs.' },
  { year: '2013–16', title: 'BMW i', text: 'i3 and i8 introduce CFRP-intensive construction and electrification at scale.' },
  { year: '2020s', title: 'Neue Klasse (Electric)', text: 'A new electric-first architecture announced; software-defined vehicles and sustainable production.' }
]

export const series = [
  { name: '1 Series', era: '2004–present', blurb: 'Compact premium hatch/sedan; rear-drive origins, later FWD for hatch (UKL platform).' },
  { name: '2 Series', era: '2014–present', blurb: 'Coupé/Cabrio/Gran Coupé line; driver-focused 2 Coupé remains RWD-based.' },
  { name: '3 Series', era: '1975–present', blurb: 'Benchmark sport sedan; numerous body styles and performance variants (M3).' },
  { name: '4 Series', era: '2013–present', blurb: 'Coupé/Gran Coupé derived from 3 Series with distinct styling; includes i4 EV.' },
  { name: '5 Series', era: '1972–present', blurb: 'Executive sedan/wagon; blends performance, tech, and comfort (M5 flagship).' },
  { name: '6 Series', era: '1976–2019', blurb: 'Grand tourer coupé/cabrio; later Gran Coupé; succeeded by 8 Series.' },
  { name: '7 Series', era: '1977–present', blurb: 'Flagship luxury sedan; showcases BMW’s latest tech; includes V12 heritage, now i7 EV.' },
  { name: '8 Series', era: '1989–1999; 2018–present', blurb: 'High-end grand tourer; advanced electronics in E31; modern G15/G16 revives nameplate.' },
  { name: 'X Models', era: '1999–present', blurb: 'SUV/SAV family (X1–X7, XM); performance M variants and PHEV/EV options.' },
  { name: 'Z Roadsters', era: '1989–present', blurb: 'Z1, Z3, Z4 open-top driver’s cars; lightweight and engaging dynamics.' },
  { name: 'M Division', era: '1972–present', blurb: 'Motorsport-bred performance: M1, M3, M5, M2, and more; chassis/engine upgrades.' },
  { name: 'BMW i', era: '2013–present', blurb: 'Electrified innovation: i3, i8 pioneers; i4, iX, i7 expand EV lineup.' },
]

export const models = [
  // Early/Classic
  { name: 'BMW 3/15 (Dixi)', years: '1929–1932', series: 'Classic', type: 'Compact', body: '2-door sedan/roadster', engines: '0.7L I4', power: '15 hp', drivetrain: 'RWD', notes: 'BMW’s first production car (licensed Austin 7).' },
  { name: 'BMW 328', years: '1936–1940', series: 'Classic', type: 'Sports', body: 'Roadster', engines: '2.0L I6', power: '~80–100 hp', drivetrain: 'RWD', notes: 'Lightweight icon; significant motorsport success.' },
  { name: 'BMW 501/502', years: '1952–1962', series: 'Classic', type: 'Luxury', body: '4-door sedan', engines: 'I6, V8', power: '65–140+ hp', drivetrain: 'RWD', notes: 'Postwar luxury sedans; 502 introduced BMW V8.' },
  { name: 'BMW Isetta', years: '1955–1962', series: 'Classic', type: 'Microcar', body: 'Bubble microcar', engines: '0.25–0.3L single', power: '12–13 hp', drivetrain: 'RWD', notes: 'Front-opening door; economical city car.' },
  { name: 'BMW 507', years: '1956–1959', series: 'Classic', type: 'Sports', body: 'Roadster', engines: '3.2L V8', power: '150 hp', drivetrain: 'RWD', notes: 'Hand-built alloy-bodied icon; very low production.' },
  // Neue Klasse and 02
  { name: 'BMW 1500/1800/2000 (Neue Klasse)', years: '1962–1972', series: 'Neue Klasse', type: 'Sedan', body: '4-door', engines: '1.5–2.0L I4', power: '75–130 hp', drivetrain: 'RWD', notes: 'Revitalized BMW; modern sport sedan blueprint.' },
  { name: 'BMW 1602/2002', years: '1966–1977', series: '02 Series', type: 'Compact', body: '2-door sedan', engines: '1.6–2.0L I4 (incl. Turbo)', power: '85–170 hp', drivetrain: 'RWD', notes: 'Driver’s classic; 2002 Turbo was pioneering.' },
  // 3 Series
  { name: '3 Series E21', years: '1975–1983', series: '3 Series', type: 'Compact executive', body: '2-door sedan', engines: '1.6–2.3L I4/I6', power: '75–143 hp', drivetrain: 'RWD', notes: 'Debut 3 Series; driver-focused layout.' },
  { name: '3 Series E30', years: '1982–1994', series: '3 Series', type: 'Compact executive', body: '2/4-door, Touring, Cabrio', engines: 'I4/I6; diesel; M3 S14', power: '90–238 hp', drivetrain: 'RWD/AWD', notes: 'Introduced M3; first AWD 3 (325iX).' },
  { name: '3 Series E36', years: '1990–2000', series: '3 Series', type: 'Compact executive', body: 'Sedan, Coupé, Compact, Touring, Cabrio', engines: 'I4/I6; diesel; M3 S50', power: '95–321 hp', drivetrain: 'RWD', notes: 'Modern multilink rear; refined dynamics.' },
  { name: '3 Series E46', years: '1997–2006', series: '3 Series', type: 'Compact executive', body: 'Sedan, Coupé, Touring, Cabrio', engines: 'I4/I6; diesel; M3 S54', power: '105–360 hp', drivetrain: 'RWD/AWD', notes: 'Balance benchmark; famed M3 CSL.' },
  { name: '3 Series E90/E91/E92/E93', years: '2005–2013', series: '3 Series', type: 'Compact executive', body: 'Sedan, Touring, Coupé, Cabrio', engines: 'I4/I6; diesel; twin-turbo I6', power: '122–420 hp', drivetrain: 'RWD/AWD', notes: 'Turbo era begins; M3 V8 (S65).' },
  { name: '3 Series F30/F31/F34', years: '2011–2019', series: '3 Series', type: 'Compact executive', body: 'Sedan, Touring, Gran Turismo', engines: 'Turbo I3/I4/I6; diesel; hybrid', power: '136–431 hp', drivetrain: 'RWD/AWD', notes: 'Modularity and efficiency; 330e PHEV.' },
  { name: '3 Series G20/G21', years: '2018–present', series: '3 Series', type: 'Compact executive', body: 'Sedan, Touring', engines: 'Turbo I4/I6; diesel; PHEV', power: '150–543 hp (M3)', drivetrain: 'RWD/AWD', notes: 'Latest tech, driver assists; M3 xDrive option.' },
  // 5 Series
  { name: '5 Series E12', years: '1972–1981', series: '5 Series', type: 'Executive', body: 'Sedan', engines: 'I4/I6', power: '90–215 hp', drivetrain: 'RWD', notes: 'First 5; early M535i performance trim.' },
  { name: '5 Series E28', years: '1981–1988', series: '5 Series', type: 'Executive', body: 'Sedan', engines: 'I4/I6; diesel', power: '86–286 hp', drivetrain: 'RWD', notes: 'First M5 (hand-built) with M88/S38 I6.' },
  { name: '5 Series E34', years: '1988–1996', series: '5 Series', type: 'Executive', body: 'Sedan/Touring', engines: 'I4/I6/V8', power: '113–340 hp', drivetrain: 'RWD/AWD', notes: 'Chassis rigidity leap; V8 and Touring M5.' },
  { name: '5 Series E39', years: '1995–2003', series: '5 Series', type: 'Executive', body: 'Sedan/Touring', engines: 'I6/V8; diesel', power: '136–400 hp', drivetrain: 'RWD', notes: 'Benchmark chassis; M5 S62 V8 legend.' },
  { name: '5 Series E60/E61', years: '2003–2010', series: '5 Series', type: 'Executive', body: 'Sedan/Touring', engines: 'I4/I6/V8/V10; diesel', power: '163–507 hp', drivetrain: 'RWD/AWD', notes: 'M5 high-rev V10 (S85); iDrive era.' },
  { name: '5 Series F10/F11', years: '2010–2017', series: '5 Series', type: 'Executive', body: 'Sedan/Touring', engines: 'Turbo I4/I6/V8; diesel; hybrid', power: '143–575 hp', drivetrain: 'RWD/AWD', notes: 'Refinement surge; M5 twin-turbo V8.' },
  { name: '5 Series G30/G31', years: '2016–2023', series: '5 Series', type: 'Executive', body: 'Sedan/Touring', engines: 'Turbo I4/I6/V8; diesel; PHEV', power: '150–625 hp', drivetrain: 'RWD/AWD', notes: 'Lightweight CLAR; driver aids expand.' },
  { name: '5 Series G60/G61', years: '2023–present', series: '5 Series', type: 'Executive', body: 'Sedan/Touring', engines: 'Turbo I4/I6; PHEV; EV (i5)', power: '~200–601 hp', drivetrain: 'RWD/AWD', notes: 'Mixed ICE/PHEV/EV architecture; i5 M60 xDrive.' },
  // 7 Series
  { name: '7 Series E23', years: '1977–1986', series: '7 Series', type: 'Luxury', body: 'Sedan', engines: 'I6', power: '143–252 hp', drivetrain: 'RWD', notes: 'First 7; onboard computer and tech features.' },
  { name: '7 Series E38', years: '1994–2001', series: '7 Series', type: 'Luxury', body: 'Sedan (SWB/LWB)', engines: 'I6/V8/V12; diesel', power: '150–326 hp', drivetrain: 'RWD', notes: 'Timeless design; first side airbags; 750i V12.' },
  { name: '7 Series G70', years: '2022–present', series: '7 Series', type: 'Luxury', body: 'Sedan (LWB)', engines: 'Turbo I6/V8; PHEV; EV (i7)', power: '~255–650+ hp', drivetrain: 'RWD/AWD', notes: 'Theatre Screen, advanced ADAS; i7 flagship EV.' },
  // 8/6 Series Grand Tourers
  { name: '8 Series E31', years: '1989–1999', series: '8 Series', type: 'Grand tourer', body: 'Coupé', engines: 'V8/V12', power: '286–380+ hp', drivetrain: 'RWD', notes: 'Early drive-by-wire; pillarless GT; 850CSi icon.' },
  { name: '8 Series G15/G16', years: '2018–present', series: '8 Series', type: 'Grand tourer', body: 'Coupé/Convertible/Gran Coupé', engines: 'I6/V8', power: '320–617 hp', drivetrain: 'RWD/AWD', notes: 'Luxury GT revival; M8 range-toppers.' },
  // Z Roadsters/Coupés
  { name: 'Z1', years: '1989–1991', series: 'Z', type: 'Roadster', body: 'Roadster', engines: '2.5L I6', power: '168 hp', drivetrain: 'RWD', notes: 'Vertical sliding doors; thermoplastic panels.' },
  { name: 'Z3', years: '1995–2002', series: 'Z', type: 'Roadster/Coupé', body: 'Roadster/Coupé', engines: 'I4/I6', power: '114–325 hp', drivetrain: 'RWD', notes: 'M Coupé “clown shoe” cult classic.' },
  { name: 'Z4 (E85/E86/E89/G29)', years: '2002–present', series: 'Z', type: 'Roadster/Coupé', body: 'Roadster/Coupé', engines: 'I4/I6; turbo', power: '150–382 hp', drivetrain: 'RWD', notes: 'Shared platform with latest Supra (G29).' },
  // X Models (SUV/SAV)
  { name: 'X5 (E53)', years: '1999–2006', series: 'X', type: 'SAV', body: 'SUV', engines: 'I6/V8; diesel', power: '184–360 hp', drivetrain: 'AWD', notes: 'Launches BMW’s SUV era; car-like dynamics.' },
  { name: 'X3 (E83)', years: '2003–2010', series: 'X', type: 'SAV', body: 'SUV', engines: 'I4/I6; diesel', power: '143–272 hp', drivetrain: 'AWD', notes: 'Mid-size SAV; later performance M variants.' },
  { name: 'X6 (E71)', years: '2008–2014', series: 'X', type: 'SAC', body: 'SUV Coupé', engines: 'I6/V8; hybrid', power: '235–555 hp', drivetrain: 'AWD', notes: 'Coupe-roof SUV segment creator; X6 M.' },
  { name: 'X5 (G05)', years: '2018–present', series: 'X', type: 'SAV', body: 'SUV', engines: 'Turbo I6/V8; PHEV', power: '335–617 hp', drivetrain: 'AWD', notes: 'Latest tech; air suspension; M & 50e PHEV.' },
  // M Division
  { name: 'M1 (E26)', years: '1978–1981', series: 'M', type: 'Supercar', body: 'Mid-engine coupé', engines: '3.5L I6 (M88)', power: '273 hp (road)', drivetrain: 'RWD', notes: 'BMW’s only mid-engine road car; homologation.' },
  { name: 'M3 (E30)', years: '1986–1991', series: 'M', type: 'Performance', body: '2-door', engines: '2.3–2.5L I4 (S14)', power: '192–238 hp', drivetrain: 'RWD', notes: 'DTM legend; widened bodywork and aero.' },
  { name: 'M3 (E46)', years: '2000–2006', series: 'M', type: 'Performance', body: 'Coupé/Cabrio', engines: '3.2L I6 (S54)', power: '333–360 hp', drivetrain: 'RWD', notes: 'High-rev inline-six; CSL benchmark.' },
  { name: 'M3/M4 (G80/G82)', years: '2020–present', series: 'M', type: 'Performance', body: 'Sedan/Coupé', engines: '3.0L twin-turbo I6 (S58)', power: '473–543 hp', drivetrain: 'RWD/AWD', notes: 'xDrive optional; track-capable daily usability.' },
  { name: 'M5 (E39)', years: '1998–2003', series: 'M', type: 'Performance', body: 'Sedan', engines: '4.9L V8 (S62)', power: '394–400 hp', drivetrain: 'RWD', notes: 'Often cited as the ultimate sports sedan.' },
  { name: 'M5 (F90)', years: '2017–2023', series: 'M', type: 'Performance', body: 'Sedan', engines: '4.4L twin-turbo V8 (S63)', power: '591–627 hp', drivetrain: 'AWD (switchable)', notes: 'xDrive with RWD mode; ballistic pace.' },
  // Electrified BMW i
  { name: 'i3', years: '2013–2022', series: 'i', type: 'EV', body: 'Hatchback', engines: 'Electric (42 kWh max); REx option', power: '168–181 hp', drivetrain: 'RWD', notes: 'CFRP passenger cell; urban EV pioneer.' },
  { name: 'i8', years: '2014–2020', series: 'i', type: 'PHEV', body: '2+2 coupé/roadster', engines: '1.5L I3 + e-motor', power: '357–369 hp', drivetrain: 'AWD (through hybrid)', notes: 'Futuristic design; lightweight hybrid sports car.' },
  { name: 'i4', years: '2021–present', series: 'i', type: 'EV', body: 'Gran Coupé', engines: 'Electric (eDrive40/M50)', power: '335–536 hp', drivetrain: 'RWD/AWD', notes: 'EV based on 4 Series GC; strong performance.' },
  { name: 'iX', years: '2021–present', series: 'i', type: 'EV', body: 'SUV', engines: 'Electric (xDrive40/50/M60)', power: '322–610 hp', drivetrain: 'AWD', notes: 'Purpose-built EV SUV; tech-forward interior.' },
  { name: 'i7', years: '2022–present', series: 'i', type: 'EV', body: 'Luxury sedan', engines: 'Electric (xDrive60/M70)', power: '449–650 hp', drivetrain: 'AWD', notes: 'Flagship electric luxury; advanced infotainment.' },
]
