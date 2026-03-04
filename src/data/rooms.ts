const ALL_IMAGES = [
    '/images/rooms/deluxe_room.JPG',
    '/images/rooms/twin_bed.jpeg',
    '/images/rooms/queen_bed.jpeg',
    '/images/rooms/junior_suite.JPG',
    '/images/rooms/permium_cottage.jpg',
    '/images/rooms/executive_cottage.jpeg',
    '/images/rooms/family_cottage.jpg'
];

export const rooms = [
    {
        id: 1,
        name: 'Deluxe Couple',
        description: 'Perfect for couples with comfortable amenities and a tranquil garden view.',
        longDescription: 'Step into an oasis of comfort and natural beauty. Our Deluxe Couple room is meticulously designed with a blend of contemporary aesthetics and native accents, offering an uninterrupted view of our carefully manicured gardens. The spacious interior features a plush queen-sized bed, a quiet reading nook, and an expansive en-suite bathroom lined with premium fixtures. It is the perfect escape for couples seeking intimacy, serenity, and a touch of absolute luxury.',
        price: '10,000',
        guests: 2,
        size: '35',
        image: '/images/rooms/deluxe_room.JPG',
        features: ['Queen Bed', 'Garden View', 'Room Service'],
        gallery: [ALL_IMAGES[0], ALL_IMAGES[2], ALL_IMAGES[4]]
    },
    {
        id: 2,
        name: 'Superior Twin',
        description: 'Spacious twin beds with superior amenities and refreshing garden vistas.',
        longDescription: 'Designed for friends or colleagues traveling together, the Superior Twin room offers an abundance of space without compromising on luxury. Featuring two comfortable twin beds wrapped in high-thread-count linens, this room guarantees a restful night. Wake up to the refreshing vistas of our tropical gardens, and enjoy early morning coffee on your semi-private balcony.',
        price: '11,000',
        guests: 2,
        size: '40',
        image: '/images/rooms/twin_bed.jpeg',
        features: ['Twin Beds', 'Superior Amenities', 'Garden View'],
        gallery: [ALL_IMAGES[1], ALL_IMAGES[3], ALL_IMAGES[5]]
    },
    {
        id: 3,
        name: 'Superior Queen',
        description: 'Queen size bed offering premium comfort with a sleek, modern design.',
        longDescription: 'The Superior Queen room brings an elevated standard of living, complete with a beautifully appointed queen-size bed. Every element in this room is curated to offer premium comfort, from the sleek modern furnishings to the ambient lighting system. Perfect for solo travelers or couples who appreciate fine details and a sophisticated environment.',
        price: '10,000',
        guests: 2,
        size: '40',
        image: '/images/rooms/queen_bed.jpeg',
        features: ['Queen Bed', 'Premium Comfort', 'Modern Design'],
        gallery: [ALL_IMAGES[2], ALL_IMAGES[0], ALL_IMAGES[6]]
    },
    {
        id: 4,
        name: 'Junior Suite',
        description: 'An expansive suite featuring a separate living area and exclusive premium amenities.',
        longDescription: 'Our Junior Suite is an expansive retreat that separates your sleeping quarters from a beautifully designed living area. Ideal for extended stays or guests who desire more room to unwind, this suite boasts exclusive premium amenities, a fully stocked minibar, and upgraded bath products. The large bay windows invite natural light, creating a bright and inviting atmosphere all day long.',
        price: '18,000',
        guests: 2,
        size: '55',
        image: '/images/rooms/junior_suite.JPG',
        features: ['Spacious Living Area', 'Premium Amenities', 'Separate Lounge'],
        gallery: [ALL_IMAGES[3], ALL_IMAGES[5], ALL_IMAGES[1]]
    },
    {
        id: 5,
        name: 'Premium Cottage',
        description: 'A secluded private cottage nestled in the garden with exclusive concierge services.',
        longDescription: 'For the ultimate in privacy and exclusivity, the Premium Cottage stands alone within our lush gardens. This secluded sanctuary offers a completely private experience with dedicated concierge services tailored to your every need. The cottage features natural wood finishes, a private outdoor seating area, and a luxurious oversized soaking tub, making it a haven of tranquility.',
        price: '13,000',
        guests: 2,
        size: '45',
        image: '/images/rooms/permium_cottage.jpg',
        features: ['Private Cottage', 'Garden View', 'Exclusive Amenities'],
        gallery: [ALL_IMAGES[4], ALL_IMAGES[6], ALL_IMAGES[0]]
    },
    {
        id: 6,
        name: 'Executive Cottage',
        description: 'Ultra-luxurious lake-view cottage with a private terrace and executive lounge access.',
        longDescription: 'Experience the pinnacle of luxury in our Executive Cottage. Positioned to offer breathtaking panoramic views of the lake, this ultra-luxurious accommodation features a vast private terrace where you can watch the sunset in absolute privacy. Guests of the Executive Cottage also enjoy exclusive access to our VIP lounge, personalized butler service, and complimentary evening hors doeuvres.',
        price: '14,000',
        guests: 2,
        size: '45',
        image: '/images/rooms/executive_cottage.jpeg',
        features: ['Lake View', 'Private Terrace', 'Executive Lounge'],
        gallery: [ALL_IMAGES[5], ALL_IMAGES[3], ALL_IMAGES[1]]
    },
    {
        id: 7,
        name: 'Family Cottage',
        description: 'The ultimate family retreat with multiple bedrooms and a generous communal living space.',
        longDescription: 'Created with families in mind, the Family Cottage is our most spacious offering. It features multiple bedrooms to ensure privacy for parents and fun for children, alongside a generous communal living area perfect for family game nights or movie marathons. The cottage is strategically located near our family-friendly resort facilities, ensuring entertainment is always just steps away.',
        price: '26,000',
        guests: 4,
        size: '80',
        image: '/images/rooms/family_cottage.jpg',
        features: ['Multiple Bedrooms', 'Living Area', 'Family-friendly'],
        gallery: [ALL_IMAGES[6], ALL_IMAGES[4], ALL_IMAGES[2]]
    }
]
