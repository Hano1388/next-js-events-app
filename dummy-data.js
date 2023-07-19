const DUMMY_EVENTS = [
  {
    id: '8db374e1-2211-4c69-817b-a2c2cec89c5e',
    title: 'Spring in a Small Town (Xiao cheng zhi chun)',
    description: 'strategize integrated metrics',
    location: '94 Cottonwood Way',
    date: '8/8/2022',
    image: 'images/berserk-arc.jpeg',
    isFeatured: true,
  },
  {
    id: '2aaf47b7-a486-40e3-9fbb-97dbe807f173',
    title: 'A Matter of Size',
    description: 'iterate B2B web services',
    location: '388 Gateway Avenue',
    date: '11/13/2022',
    image: 'image/berserk-rage.jpeg',
    isFeatured: true,
  },
  {
    id: '6d616879-84d6-47a6-8672-a23a598742c4',
    title: 'Stickup, The',
    description: 'leverage user-centric users',
    location: '74 Doe Crossing Terrace',
    date: '11/4/2022',
    image: 'image/berserk.jpg',
    isFeatured: false,
  },
  {
    id: 'c1e1a89b-ec45-4fe4-8533-1cccda664a2b',
    title: 'ZMD: Zombies of Mass Destruction',
    description: 'orchestrate mission-critical e-commerce',
    location: '28094 Logan Plaza',
    date: '6/28/2023',
    image: 'image/eclipse-time.jpeg',
    isFeatured: true,
  },
  {
    id: 'cf489d53-d7e8-47c9-b493-0d7b89ac44be',
    title:
      "Young and Prodigious T.S. Spivet, The (L'extravagant voyage du jeune et prodigieux T.S. Spivet)",
    description: 'recontextualize one-to-one niches',
    location: '7442 Hanover Circle',
    date: '12/10/2022',
    image: 'images/go-berserk.jpeg',
    isFeatured: false,
  },
  {
    id: 'a9e540d7-823b-466f-9f33-19f652f3fb0d',
    title: 'Mean Girls 2',
    description: 'engineer real-time architectures',
    location: '31 Bashford Alley',
    date: '5/13/2023',
    image: 'images/take-a-rest.jpeg',
    isFeatured: true,
  },
  {
    id: '774e9961-1585-4414-b00d-25172af55a2d',
    title: 'Rashomon (Rashômon)',
    description: 'unleash extensible infrastructures',
    location: '47645 3rd Circle',
    date: '2/4/2023',
    image: 'images/the-berserk.jpeg',
    isFeatured: true,
  },
];

export const getFeaturedEvents = () =>
  DUMMY_EVENTS.filter((event) => event.isFeatured);

export const getAllEvents = () => DUMMY_EVENTS;

export const getFilteredEvents = (dateFilter) => {
  const { year, month } = dateFilter;

  const filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
};

export const getEventById = (eventId) =>
  DUMMY_EVENTS.find((event) => event.id === eventId);
