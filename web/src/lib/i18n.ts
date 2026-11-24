export type Language = 'en' | 'cs' | 'pl'

export interface TranslationDictionary {
  nav: {
    sectors: string
    metallurgy: string
    commodities: string
    whyPartner: string
    careers: string
    contact: string
    quoteCta: string
    exploreSectors: string
  }
  hero: {
    eyebrow: string
    headline: string
    subheadline: string
    primaryCta: string
    secondaryCta: string
  }
  pillars: {
    trade: string
    tradeDesc: string
    energy: string
    energyDesc: string
    industry: string
    industryDesc: string
    westAfrica: string
    westAfricaDesc: string
  }
  metallurgy: {
    badge: string
    title: string
    subtitle: string
    ingotsTitle: string
    ingotsDesc: string
    ingotsSpecs: string[]
    forgingsTitle: string
    forgingsDesc: string
    forgingsSpecs: string[]
    castingsTitle: string
    castingsDesc: string
    castingsSpecs: string[]
    equipmentTitle: string
    equipmentDesc: string
    equipmentSpecs: string[]
    partnersTitle: string
    partnersSubtitle: string
    isoBadge: string
  }
  sectors: {
    badge: string
    title: string
    subtitle: string
    cta: string
    energyTitle: string
    energyDesc: string
    industrialTitle: string
    industrialDesc: string
    commoditiesTitle: string
    commoditiesDesc: string
  }
  commodities: {
    badge: string
    title: string
    subtitle: string
    allItems: string
    commoditiesTab: string
    energyTab: string
    industrialTab: string
    activeStock: string
    requestAllocation: string
  }
  trust: {
    badge: string
    title: string
    subtitle: string
    prop1Title: string
    prop1Desc: string
    prop1Badge: string
    prop2Title: string
    prop2Desc: string
    prop2Badge: string
    prop3Title: string
    prop3Desc: string
    prop3Badge: string
  }
  careers: {
    badge: string
    title: string
    subtitle: string
    generalCta: string
    applyNow: string
    channelLabel: string
  }
  quote: {
    badge: string
    title: string
    subtitle: string
    hqTitle: string
    parentTitle: string
    phoneLabel: string
    emailLabel: string
    formTitle: string
    formSubtitle: string
    fullName: string
    company: string
    email: string
    phone: string
    sector: string
    product: string
    volume: string
    destination: string
    notes: string
    submitButton: string
    successTitle: string
    successDesc: string
    anotherButton: string
  }
  footer: {
    aboutText: string
    registeredText: string
    parentLabel: string
    verticalsTitle: string
    headquartersTitle: string
    rightsReserved: string
    builtBy: string
  }
}

export const translations: Record<Language, TranslationDictionary> = {
  en: {
    nav: {
      sectors: 'Sectors',
      metallurgy: 'EU Metallurgy & Engineering',
      commodities: 'Trade Desk',
      whyPartner: 'Why Partner',
      careers: 'Careers',
      contact: 'Contact & RFQ',
      quoteCta: 'Request a Quote',
      exploreSectors: 'Explore Sectors',
    },
    hero: {
      eyebrow: 'A Subsidiary of Leseft International s.r.o. (Czech Republic)',
      headline: 'Bridging European Industrial Standards with West African Markets',
      subheadline:
        'Leseft Nigeria Limited delivers reliable import-export logistics, clean energy hardware, industrial machinery, EU-certified metallurgy, and high-grade agricultural commodities across Nigeria and West Africa.',
      primaryCta: 'Request a Quote',
      secondaryCta: 'Explore Sectors',
    },
    pillars: {
      trade: 'TRADE',
      tradeDesc: 'Bulk commodities, grain, cocoa, fertilizer & food supplies',
      energy: 'ENERGY',
      energyDesc: 'Commercial solar hardware, inverters & energy storage',
      industry: 'INDUSTRY',
      industryDesc: 'Czech metallurgy, steel ingots, forgings, castings & equipment',
      westAfrica: 'WEST AFRICA',
      westAfricaDesc: 'Abuja headquarters, regulatory clearance & regional delivery',
    },
    metallurgy: {
      badge: 'Parent Company Heritage (leseft.cz)',
      title: 'EU-Certified Metallurgy, Forgings & Industrial Equipment',
      subtitle:
        'Backed by Leseft International s.r.o. in Ostrava, we supply high-performance metallurgical products and heavy machinery direct from leading Czech manufacturers.',
      ingotsTitle: 'Steel Ingots',
      ingotsDesc:
        'Supply of forged and cast steel ingots with or without heat treatment, including thermal processing and custom ingot formulations built precisely to client engineering specifications.',
      ingotsSpecs: [
        'Un-treated and heat-treated structural grades',
        'Custom metallurgy formulations per client spec',
        'Certified chemical and mechanical test certificates (MTC)',
      ],
      forgingsTitle: 'Heavy Forgings & Stampings',
      forgingsDesc:
        'Production and supply of open-die forgings weighing from 20 kg to several tons, as well as precision bulk die stampings from 5 kg to multiple tons according to client engineering blueprints.',
      forgingsSpecs: [
        'Open-die forgings: 20 kg to several tons',
        'Precision stampings: 5 kg to multi-ton batches',
        'Strict dimensional tolerances and ultrasonic testing',
      ],
      castingsTitle: 'Industrial Castings',
      castingsDesc:
        'Supply of high-integrity industrial castings spanning from 200 kg up to 170 metric tons, accommodating maximum dimensions up to 14,000 × 6,500 × 3,800 mm for heavy infrastructure.',
      castingsSpecs: [
        'Weights: 200 kg up to 170 metric tons',
        'Max envelope: 14,000 × 6,500 × 3,800 mm',
        'Engineered for mining, power stations and marine vessels',
      ],
      equipmentTitle: 'Equipment & Energy Components',
      equipmentDesc:
        'Official international representative for top Czech industrial manufacturers providing certified machinery for mining, mineral processing, energy production, and nuclear engineering.',
      equipmentSpecs: [
        'Pumps, valves & flow management systems',
        'Industrial power transformers & reactors',
        'Metal forming presses & scrap processing machinery',
      ],
      partnersTitle: 'Direct Czech Industrial Partners',
      partnersSubtitle:
        'Procured in direct collaboration with premier Czech engineering enterprises:',
      isoBadge: 'ISO 9001:2009 Quality Management Certified Quality Protocols',
    },
    sectors: {
      badge: 'Core Business Pillars',
      title: 'Three Specialized Verticals Engineered for Scale',
      subtitle:
        'Combining Central European industrial manufacturing with licensed Nigerian import-export operations across Abuja, Lagos, and regional commercial centers.',
      cta: 'Request Sector Quotation',
      energyTitle: 'Energy & Solar Infrastructure',
      energyDesc:
        'Supplying commercial solar panels, power components, and scalable energy hardware engineered for reliability and long-term output.',
      industrialTitle: 'Industrial & Heavy Equipment',
      industrialDesc:
        'Leveraging Czech engineering roots to source EU-standard industrial machinery, steel products, and technical installations for growing enterprises.',
      commoditiesTitle: 'Import-Export & Commodities',
      commoditiesDesc:
        'End-to-end trade facilitation and quality-screened supply chains for essential commodities—including grain, cocoa, fertilizer, and powdered milk.',
    },
    commodities: {
      badge: 'Physical Trade Desk',
      title: 'Quality-Screened Hardware & Bulk Commodity Specifications',
      subtitle:
        'Every shipment is verified for international compliance, standardized grading, and transparent LC terms connecting Central European manufacturing hubs with West African distribution channels.',
      allItems: 'All Items',
      commoditiesTab: 'Commodities',
      energyTab: 'Solar & Energy',
      industrialTab: 'Metallurgy & Steel',
      activeStock: 'Active Stock',
      requestAllocation: 'Request Allocation & Pricing',
    },
    trust: {
      badge: 'Why Partner With Us',
      title: 'Institutional Trust, Compliance & Execution',
      subtitle:
        'Eliminating broker fragmentation in Nigerian cross-border commerce through verified corporate governance and direct European supply relationships.',
      prop1Title: 'European Backing, Local Execution',
      prop1Desc:
        'Direct procurement ties to European manufacturers in Ostrava and Central Europe, paired with on-the-ground regulatory, import clearance, and logistics expertise in Abuja and Lagos.',
      prop1Badge: 'Bilateral Presence',
      prop2Title: 'Strict Quality & Grade Screening',
      prop2Desc:
        'Every shipment—from industrial metallurgy and solar equipment to agricultural bulk like grain and cocoa—is vetted for international compliance, clear grading, and transparent LC payment terms.',
      prop2Badge: 'Zero Compromise',
      prop3Title: 'Built for Scale',
      prop3Desc:
        'Actively expanding technical supply chains across clean energy hardware, industrial machinery, and institutional trade to support West Africa’s accelerating infrastructure development.',
      prop3Badge: 'Enterprise Scale',
    },
    careers: {
      badge: 'Careers & Growth Banner',
      title: 'Build With a Fast-Moving Trade Team',
      subtitle:
        'We value sharp execution, market research rigor, and ownership over standard 8–4 routines. Explore analyst and operations roles in Abuja.',
      generalCta: 'Submit General Dossier (info@leseft.cz)',
      applyNow: 'Apply Now',
      channelLabel: 'Application channel',
    },
    quote: {
      badge: 'Direct Procurement Desk',
      title: 'Request a Trade Quote or Sector Allocation',
      subtitle:
        'Connect directly with our Abuja operations team and European procurement coordinators for equipment specs, bulk pricing, and delivery timelines.',
      hqTitle: 'Abuja Headquarters',
      parentTitle: 'European Parent Entity',
      phoneLabel: 'Direct Phone / WhatsApp',
      emailLabel: 'Official Email',
      formTitle: 'B2B Trade & Equipment RFQ',
      formSubtitle: 'Provide your organization details and volume requirements below.',
      fullName: 'Full Name *',
      company: 'Company / Organization *',
      email: 'Corporate Email Address *',
      phone: 'Phone / WhatsApp Number',
      sector: 'Target Sector *',
      product: 'Commodity or Equipment Spec',
      volume: 'Estimated Lot / Volume',
      destination: 'Destination Port / Hub',
      notes: 'Technical Notes & Terms',
      submitButton: 'Submit Request to Abuja Trade Operations',
      successTitle: 'Inquiry Received by Trade Desk',
      successDesc:
        'Thank you. A member of the Leseft Nigeria trade and procurement operations team in Abuja will review your technical specifications and respond promptly.',
      anotherButton: 'Submit Another Inquiry',
    },
    footer: {
      aboutText:
        'A licensed Nigerian trading, clean energy, and industrial portal delivering Central European engineering standards to West African commercial markets.',
      registeredText: 'Registered in Nigeria',
      parentLabel: 'Parent Company',
      verticalsTitle: 'Core Verticals',
      headquartersTitle: 'Headquarters',
      rightsReserved: 'All rights reserved.',
      builtBy: 'Built by Heritage Isaac',
    },
  },

  cs: {
    nav: {
      sectors: 'Sektory',
      metallurgy: 'EU Metalurgie a strojírenství',
      commodities: 'Obchodní stůl',
      whyPartner: 'Proč my',
      careers: 'Kariéra',
      contact: 'Kontakt a poptávka',
      quoteCta: 'Vyžádat nabídku',
      exploreSectors: 'Prozkoumat sektory',
    },
    hero: {
      eyebrow: 'Dceřiná společnost Leseft International s.r.o. (Česká republika)',
      headline: 'Propojení evropských průmyslových standardů se západoafrickými trhy',
      subheadline:
        'Leseft Nigeria Limited delivers reliable import-export logistics, clean energy hardware, industrial machinery, EU-certified metallurgy, and high-grade agricultural commodities across Nigeria and West Africa.',
      primaryCta: 'Vyžádat nabídku',
      secondaryCta: 'Prozkoumat sektory',
    },
    pillars: {
      trade: 'OBCHOD',
      tradeDesc: 'Hromadné komodity, obilí, kakao, hnojiva a potraviny',
      energy: 'ENERGETIKA',
      energyDesc: 'Komerční solární hardware, střídače a bateriová úložiště',
      industry: 'PRŮMYSL',
      industryDesc: 'Česká metalurgie, ocelové ingoty, výkovky, odlitky a zařízení',
      westAfrica: 'ZÁPADNÍ AFRIKA',
      westAfricaDesc: 'Centrála v Abuji, celní odbavení a regionální distribuce',
    },
    metallurgy: {
      badge: 'Dědictví mateřské společnosti (leseft.cz)',
      title: 'Certifikovaná metalurgie EU, výkovky a průmyslová zařízení',
      subtitle:
        'S podporou Leseft International s.r.o. v Ostravě dodáváme vysoce výkonné metalurgické výrobky a těžké stroje přímo od předních českých výrobců.',
      ingotsTitle: 'Ocelové ingoty',
      ingotsDesc:
        'Dodávky kovaných i litých ocelových ingotů s tepelným zpracováním nebo bez něj, včetně tepelného zpracování a výroby nových typů ingotů přesně podle požadavků zákazníka.',
      ingotsSpecs: [
        'Ingoty s tepelným zpracováním i bez zpracování',
        'Speciální chemické složení na zakázku klienta',
        'Certifikované zkušební protokoly hutních výrobků (MTC)',
      ],
      forgingsTitle: 'Výkovky a zápustkové výlisky',
      forgingsDesc:
        'Výroba a dodávky volně kovaných výkovků o hmotnosti od 20 kg do několika tun a objemových výlisků od 5 kg do několika tun podle výkresové dokumentace odběratele.',
      forgingsSpecs: [
        'Volně kované výkovky: 20 kg až několik tun',
        'Přesné zápustkové výlisky od 5 kg',
        'Přísné rozměrové tolerance a ultrazvuková kontrola',
      ],
      castingsTitle: 'Průmyslové odlitky',
      castingsDesc:
        'Dodávky vysoce spolehlivých průmyslových odlitků o celkové hmotnosti od 200 kg do 170 tun s maximálními rozměry do 14 000 × 6 500 × 3 800 mm pro náročnou infrastrukturu.',
      castingsSpecs: [
        'Hmotnost: 200 kg až 170 tun',
        'Max. rozměry: 14 000 × 6 500 × 3 800 mm',
        'Určeno pro těžební průmysl, energetiku a lodě',
      ],
      equipmentTitle: 'Zařízení a komponenty energetiky',
      equipmentDesc:
        'Oficiální mezinárodní zastoupení předních českých výrobců vysoce kvalitních zařízení pro těžební a úpravárenský průmysl, energetiku a jaderné strojírenství.',
      equipmentSpecs: [
        'Čerpací technika a průmyslové ventily',
        'Výkonové transformátory a speciální reaktory',
        'Tvářecí stroje a zařízení na zpracování šrotu',
      ],
      partnersTitle: 'Přední čeští průmysloví partneři',
      partnersSubtitle:
        'Realizováno v přímé spolupráci s významnými českými strojírenskými podniky:',
      isoBadge: 'Systém managementu kvality certifikován podle ISO 9001:2009',
    },
    sectors: {
      badge: 'Klíčové obchodní pilíře',
      title: 'Tři specializované vertikály připravené pro expanzi',
      subtitle:
        'Spojení středoevropské průmyslové výroby s licencovanými nigerijskými dovozními a vývozními operacemi v Abuji a Lagosu.',
      cta: 'Poptat sektorové dodávky',
      energyTitle: 'Energetika a solární infrastruktura',
      energyDesc:
        'Dodávky komerčních solárních panelů, energetických komponent a škálovatelného hardwaru navrženého pro dlouhodobý a spolehlivý výkon.',
      industrialTitle: 'Průmysl a těžké strojírenství',
      industrialDesc:
        'Využití českých strojírenských kořenů k zajištění průmyslových strojů, ocelových výrobků a technických instalací dle norem EU.',
      commoditiesTitle: 'Import-Export a komodity',
      commoditiesDesc:
        'Komplexní zprostředkování obchodu a prověřené dodavatelské řetězce základních komodit — včetně obilí, kakaa, hnojiv a sušeného mléka.',
    },
    commodities: {
      badge: 'Fyzický obchodní stůl',
      title: 'Kvalitně prověřený hardware a specifikace komodit',
      subtitle:
        'Každá zásilka je prověřena z hlediska mezinárodní shody, standardizované kvality a transparentních platebních podmínek LC.',
      allItems: 'Všechny položky',
      commoditiesTab: 'Komodity',
      energyTab: 'Solární energie',
      industrialTab: 'Ocel a metalurgie',
      activeStock: 'Aktivní sklad',
      requestAllocation: 'Poptat alokaci a cenu',
    },
    trust: {
      badge: 'Proč spolupracovat s námi',
      title: 'Institucionální důvěra, soulad s předpisy a realizace',
      subtitle:
        'Odstranění zprostředkovatelské roztříštěnosti v nigerijském přeshraničním obchodu prostřednictvím přímých evropských vazeb.',
      prop1Title: 'Evropské zázemí, místní realizace',
      prop1Desc:
        'Přímé vazby na výrobce v Ostravě a střední Evropě v kombinaci s místní znalostí regulace a celního řízení v Abuji a Lagosu.',
      prop1Badge: 'Bilaterální přítomnost',
      prop2Title: 'Přísná kontrola kvality a třídění',
      prop2Desc:
        'Každá dodávka — od oceli a solárního vybavení až po kakao a obilí — je přísně prověřena dle mezinárodních norem s transparentními podmínkami LC.',
      prop2Badge: 'Nekompromisní kvalita',
      prop3Title: 'Stavěno pro velký objem',
      prop3Desc:
        'Aktivní rozšiřování technických dodavatelských řetězců na podporu zrychlujícího se rozvoje infrastruktury západní Afriky.',
      prop3Badge: 'Podnikové měřítko',
    },
    careers: {
      badge: 'Kariérní růst',
      title: 'Budujte s dynamickým obchodním týmem',
      subtitle:
        'Oceňujeme precizní realizaci, tržní důslednost a zodpovědnost. Prozkoumejte analytické a provozní pozice v Abuji.',
      generalCta: 'Zaslat životopis (info@leseft.cz)',
      applyNow: 'Podat žádost',
      channelLabel: 'Kontaktní kanál',
    },
    quote: {
      badge: 'Přímé nákupní oddělení',
      title: 'Vyžádat cenovou nabídku nebo alokaci komodit',
      subtitle:
        'Spojte se přímo s naším operačním týmem v Abuji a evropskými koordinátory nákupu pro specifikace a termíny dodání.',
      hqTitle: 'Centrála v Abuji',
      parentTitle: 'Evropská mateřská společnost',
      phoneLabel: 'Telefon / WhatsApp',
      emailLabel: 'Oficiální e-mail',
      formTitle: 'Poptávka B2B obchodu a zařízení',
      formSubtitle: 'Uveďte níže údaje o vaší organizaci a požadované objemy.',
      fullName: 'Jméno a příjmení *',
      company: 'Společnost / Organizace *',
      email: 'Firemní e-mail *',
      phone: 'Telefon / WhatsApp',
      sector: 'Cílový sektor *',
      product: 'Specifikace komodity nebo zařízení',
      volume: 'Odhadovaný objem / Množství',
      destination: 'Cílový přístav / Sklad',
      notes: 'Technické poznámky a podmínky',
      submitButton: 'Odeslat poptávku týmu v Abuji',
      successTitle: 'Poptávka byla úspěšně přijata',
      successDesc:
        'Děkujeme. Člen týmu Leseft Nigeria prozkoumá vaše technické požadavky a bude vás neprodleně kontaktovat.',
      anotherButton: 'Odeslat další poptávku',
    },
    footer: {
      aboutText:
        'Licencovaný nigerijský obchodní a průmyslový portál přinášející středoevropské strojírenské standardy na západoafrické komerční trhy.',
      registeredText: 'Registrováno v Nigérii',
      parentLabel: 'Mateřská společnost',
      verticalsTitle: 'Klíčové vertikály',
      headquartersTitle: 'Sídlo společnosti',
      rightsReserved: 'Všechna práva vyhrazena.',
      builtBy: 'Built by Heritage Isaac',
    },
  },

  pl: {
    nav: {
      sectors: 'Sektory',
      metallurgy: 'Metalurgia i Inżynieria UE',
      commodities: 'Biuro Handlowe',
      whyPartner: 'Dlaczego my',
      careers: 'Kariera',
      contact: 'Kontakt i Zapytanie',
      quoteCta: 'Zapytaj o wycenę',
      exploreSectors: 'Poznaj sektory',
    },
    hero: {
      eyebrow: 'Spółka zależna Leseft International s.r.o. (Republika Czeska)',
      headline: 'Łączenie europejskich standardów przemysłowych z rynkami Afryki Zachodniej',
      subheadline:
        'Leseft Nigeria Limited delivers reliable import-export logistics, clean energy hardware, industrial machinery, EU-certified metallurgy, and high-grade agricultural commodities across Nigeria and West Africa.',
      primaryCta: 'Zapytaj o wycenę',
      secondaryCta: 'Poznaj sektory',
    },
    pillars: {
      trade: 'HANDEL',
      tradeDesc: 'Towary masowe, zboże, kakao, nawozy i dostawy żywności',
      energy: 'ENERGETYKA',
      energyDesc: 'Przemysłowy sprzęt solarny, falowniki i magazyny energii',
      industry: 'PRZEMYSŁ',
      industryDesc: 'Czeska metalurgia, wlewki stalowe, odkuwki, odlewy i sprzęt',
      westAfrica: 'AFRYKA ZACHODNIA',
      westAfricaDesc: 'Siedziba w Abudży, odprawa celna i dystrybucja regionalna',
    },
    metallurgy: {
      badge: 'Dziedzictwo spółki macierzystej (leseft.cz)',
      title: 'Certyfikowana metalurgia UE, odkuwki i urządzenia przemysłowe',
      subtitle:
        'Wspierani przez Leseft International s.r.o. w Ostrawie, dostarczamy wysokowydajne wyroby hutnicze i ciężkie maszyny bezpośrednio od wiodących czeskich producentów.',
      ingotsTitle: 'Wlewki stalowe (Ingoty)',
      ingotsDesc:
        'Dostawa wlewków stalowych kuty i lanych z obróbką cieplną lub bez, w tym obróbka termiczna i produkcja nowych gatunków stali ściśle według specyfikacji klienta.',
      ingotsSpecs: [
        'Wlewki z obróbką cieplną lub bez obróbki',
        'Skład chemiczny dostosowany do wymagań projektu',
        'Certyfikowane atesty hutnicze 3.1 (MTC)',
      ],
      forgingsTitle: 'Odkuwki swobodne i matrycowe',
      forgingsDesc:
        'Produkcja i dostawa odkuwek kute swobodnie o masie od 20 kg do kilkunastu ton oraz precyzyjnych wyprasek matrycowych od 5 kg według rysunków technicznych zamawiającego.',
      forgingsSpecs: [
        'Odkuwki swobodne: od 20 kg do kilkunastu ton',
        'Wypraski matrycowe: od 5 kg do partii wielotonowych',
        'Ścisłe tolerancje wymiarowe i badania ultradźwiękowe',
      ],
      castingsTitle: 'Odlewy przemysłowe',
      castingsDesc:
        'Dostawa odlewów przemysłowych o wysokiej integralności o masie jednostkowej od 200 kg do 170 ton metrycznych i gabarytach do 14 000 × 6 500 × 3 800 mm.',
      castingsSpecs: [
        'Masa jednostkowa: od 200 kg do 170 ton',
        'Maks. wymiary: 14 000 × 6 500 × 3 800 mm',
        'Dla sektora wydobywczego, energetyki i przemysłu morskiego',
      ],
      equipmentTitle: 'Urządzenia i komponenty energetyczne',
      equipmentDesc:
        'Oficjalne międzynarodowe przedstawicielstwo czołowych czeskich producentów certyfikowanych maszyn dla górnictwa, przetwórstwa, energetyki konwencjonalnej i jądrowej.',
      equipmentSpecs: [
        'Technika pompowa i przemysłowe zawory regulacyjne',
        'Transformatory mocy i reaktory specjalne',
        'Prasy kuźnicze i urządzenia do przerobu złomu',
      ],
      partnersTitle: 'Czescy partnerzy przemysłowi',
      partnersSubtitle:
        'Dostarczane w bezpośredniej współpracy z uznanymi czeskimi przedsiębiorstwami inżynieryjnymi:',
      isoBadge: 'Zarządzanie jakością certyfikowane zgodnie z normą ISO 9001:2009',
    },
    sectors: {
      badge: 'Kluczowe filary działalności',
      title: 'Trzy wyspecjalizowane wertykały gotowe do skalowania',
      subtitle:
        'Połączenie środkowoeuropejskiej produkcji przemysłowej z licencjonowanymi operacjami importowo-eksportowymi w Abudży, Lagosie i centrach regionalnych.',
      cta: 'Zamów wycenę sektora',
      energyTitle: 'Infrastruktura energetyczna i solarna',
      energyDesc:
        'Dostawy komercyjnych paneli fotowoltaicznych, komponentów zasilania i skalowalnego sprzętu zaprojektowanego z myślą o trwałości i wysokiej wydajności.',
      industrialTitle: 'Maszyny i urządzenia przemysłowe',
      industrialDesc:
        'Wykorzystanie czeskich korzeni inżynieryjnych do pozyskiwania maszyn przemysłowych, wyrobów stalowych i instalacji technicznych zgodnie z normami UE.',
      commoditiesTitle: 'Import-Eksport i towary rolne',
      commoditiesDesc:
        'Kompleksowa obsługa handlu i sprawdzone łańcuchy dostaw podstawowych surowców — w tym zboża, kakao, nawozów oraz mleka w proszku.',
    },
    commodities: {
      badge: 'Fizyczne biuro handlowe',
      title: 'Sprzęt o potwierdzonej jakości i specyfikacje towarów',
      subtitle:
        'Każda partia jest weryfikowana pod kątem międzynarodowej zgodności, standardów klasyfikacji i przejrzystych warunków akredytyw (LC).',
      allItems: 'Wszystkie pozycje',
      commoditiesTab: 'Towary',
      energyTab: 'Energia solarna',
      industrialTab: 'Stal i metalurgia',
      activeStock: 'Dostępne na stanie',
      requestAllocation: 'Zapytaj o alokację i cenę',
    },
    trust: {
      badge: 'Dlaczego warto z nami współpracować',
      title: 'Instytucjonalne zaufanie, zgodność prawna i wykonanie',
      subtitle:
        'Wyeliminowanie rozdrobnienia pośredników w nigeryjskim handlu transgranicznym dzięki bezpośrednim powiązaniom z Europą.',
      prop1Title: 'Europejskie zaplecze, lokalne wykonanie',
      prop1Desc:
        'Bezpośrednie relacje z producentami w Ostrawie i Europie Środkowej połączone ze znajomością przepisów celnych i logistyką w Abudży i Lagosie.',
      prop1Badge: 'Obecność bilateralna',
      prop2Title: 'Rygorystyczna kontrola jakości i klasyfikacji',
      prop2Desc:
        'Każda dostawa — od stali i sprzętu solarnego po ziarno kakao i zboże — spełnia międzynarodowe normy z przejrzystymi warunkami płatności.',
      prop2Badge: 'Bezkompromisowa jakość',
      prop3Title: 'Skala korporacyjna',
      prop3Desc:
        'Aktywny rozwój łańcuchów dostaw sprzętu czystej energii, maszyn przemysłowych i surowców na potrzeby dynamicznego rozwoju Afryki Zachodniej.',
      prop3Badge: 'Skala przedsiębiorstwa',
    },
    careers: {
      badge: 'Kariera i rozwój',
      title: 'Buduj przyszłość z dynamicznym zespołem handlowym',
      subtitle:
        'Cenimy dokładność operacyjną, rzetelność analityczną i samodzielność. Poznaj role analityczne i logistyczne w Abudży.',
      generalCta: 'Prześlij CV (info@leseft.cz)',
      applyNow: 'Aplikuj teraz',
      channelLabel: 'Kanał aplikacyjny',
    },
    quote: {
      badge: 'Dział bezpośrednich zakupów',
      title: 'Zapytaj o ofertę handlową lub alokację surowców',
      subtitle:
        'Skontaktuj się bezpośrednio z naszym zespołem operacyjnym w Abudży oraz europejskimi koordynatorami ds. specyfikacji i harmonogramu dostaw.',
      hqTitle: 'Siedziba w Abudży',
      parentTitle: 'Europejska spółka macierzysta',
      phoneLabel: 'Telefon / WhatsApp',
      emailLabel: 'Oficjalny e-mail',
      formTitle: 'Zapytanie ofertowe B2B (RFQ)',
      formSubtitle: 'Podaj poniżej dane swojej organizacji i wymagane ilości.',
      fullName: 'Imię i nazwisko *',
      company: 'Nazwa firmy / Organizacji *',
      email: 'Służbowy adres e-mail *',
      phone: 'Numer telefonu / WhatsApp',
      sector: 'Docelowy sektor *',
      product: 'Specyfikacja towaru lub maszyny',
      volume: 'Szacowana ilość / Wolumen',
      destination: 'Port docelowy / Magazyn',
      notes: 'Uwagi techniczne i warunki płatności',
      submitButton: 'Prześlij zapytanie do zespołu w Abudży',
      successTitle: 'Zapytanie zostało pomyślnie przyjęte',
      successDesc:
        'Dziękujemy. Członek zespołu handlowego Leseft Nigeria przeanalizuje specyfikację i skontaktuje się z Państwem niezwłocznie.',
      anotherButton: 'Złóż kolejne zapytanie',
    },
    footer: {
      aboutText:
        'Licencjonowany nigeryjski portal handlowy i przemysłowy, wdrażający środkowoeuropejskie standardy inżynieryjne na rynkach Afryki Zachodniej.',
      registeredText: 'Zarejestrowano w Nigerii',
      parentLabel: 'Spółka macierzysta',
      verticalsTitle: 'Kluczowe wertykały',
      headquartersTitle: 'Siedziba główna',
      rightsReserved: 'Wszelkie prawa zastrzeżone.',
      builtBy: 'Built by Heritage Isaac',
    },
  },
}
