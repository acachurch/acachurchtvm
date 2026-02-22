// Import placeholder image (Vite logo)
import placeholderImage from '../assets/react.svg';
import PastorImage from '../assets/images/pastor/pastor.webp';

export const churchInfo = {
  name: "Apostolic Christian Assembly Church, Tiruvannamalai",
  fullName: "Apostolic Christian Assembly Church",
  shortName: "ACA Church",
  address: "63WG+JVW, Avalurpettai Rd, Pallavan Nagar, Mathalangulam, Tiruvannamalai, Tamil Nadu 606601",
  phone: "+91 9443962034",
  email: "acachurchtvm@gmail.com",
  headChurchUrl: "https://www.acachurch.org",
  social: {
    facebook: "",
    youtube: "",
    instagram: ""
  },
  services: [
    { day: "Sunday", time: "09:00 AM - 11:00 AM", name: "Sunday Service" },
    { day: "Saturday", time: "10:00 AM - 01:00 PM", name: "Fasting Prayer" },
    { day: "Last Day of Month", time: "06:00 PM - 08:00 PM", name: "Month End Prayer" }
  ],
  events: [
    {
      id: 1,
      title: "Good Friday Service",
      date: "April 18, 2026",
      time: "09:00 AM - 11:00 AM",
      description: "Join us for a solemn service commemorating the crucifixion of Jesus Christ. A time of reflection, prayer, and worship.",
      category: "Special Service",
    },
    {
      id: 2,
      title: "Easter Sunday Celebration",
      date: "April 20, 2026",
      time: "09:00 AM - 11:00 AM",
      description: "Celebrate the resurrection of our Lord with special worship, praise, and fellowship. Easter breakfast will be served.",
      category: "Celebration",
    },
    {
      id: 3,
      title: "Independence Day Special Service",
      date: "August 15, 2026",
      time: "09:00 AM - 11:00 AM",
      description: "Special service with prayers for our nation and thanksgiving for God's blessings on India.",
      category: "Holiday Service",
    },
    {
      id: 4,
      title: "Suppose Christmas Celebration",
      date: "December 20, 2026",
      time: "09:00 AM - 12:30 PM",
      description: "Suppose Christmas Celebration Service, Children's Dance and Family Singing",
      category: "Christmas",
    },
    {
      id: 5,
      title: "Christmas Day Celebration",
      date: "December 25, 2026",
      time: "08:00 AM - 10:30 AM",
      description: "Special Christmas service with worship, drama, children's program, and fellowship. Celebrate the birth of our Savior!",
      category: "Christmas",
    },
    {
      id: 6,
      title: "New Year's Eve Prayer",
      date: "December 31, 2026",
      time: "10:00 PM - 01:30 AM",
      description: "End the year with thanksgiving and prayer. Welcome the new year seeking God's guidance and blessings.",
      category: "Special Prayer",
    }
  ],
  pastor: {
    name: "Pastor Solomon",
    title: "",
    image: PastorImage,
    bio: "Pastor Solomon has been serving our community for over 17 years with dedication and passion. His heart for ministry and love for people has transformed countless lives.",
    quote: "\"உங்களிடத்திலிருக்கிற தேவனுடைய மந்தையை மேய்த்து, கட்டாயமாய் அல்ல, மனப்பூர்வமாய், அசுத்த ஆதாயத்திற்காக அல்ல, உற்சாக உள்ளத்தோடு, கண்காணியுங்கள்.\" — 1 பேதுரு 5:2"
  },
  location: {
    lat: 12.225284,
    lng: 79.074699,
    mapUrl: "https://maps.app.goo.gl/example"
  },
  ministries: [
    {
      title: "Sunday School",
      description: "Nurturing young hearts with Biblical teachings and values every Sunday morning.",
      icon: "Sun",
      color: "#E76F51"
    },
    {
      title: "Youth Ministry",
      description: "Empowering the next generation through fellowship, worship, and spiritual growth.",
      icon: "Star",
      color: "#2A9D8F"
    },
    {
      title: "Bible Study",
      description: "Deep diving into God's Word to grow in knowledge and understanding.",
      icon: "BookOpen",
      color: "#2A475E"
    }
  ],
  gallery: [
    {
      id: 1,
      title: "Sunday Worship Service",
      category: "Worship",
      image: placeholderImage // Using Vite logo as placeholder
    },
    {
      id: 2,
      title: "Youth Fellowship",
      category: "Youth",
      image: placeholderImage
    },
    {
      id: 3,
      title: "Children's Ministry",
      category: "Children",
      image: placeholderImage
    },
    {
      id: 4,
      title: "Baptism Ceremony",
      category: "Events",
      image: placeholderImage
    },
    {
      id: 5,
      title: "Prayer Meeting",
      category: "Prayer",
      image: placeholderImage
    },
    {
      id: 6,
      title: "Community Outreach",
      category: "Outreach",
      image: placeholderImage
    },
    {
      id: 7,
      title: "Worship Team Practice",
      category: "Worship",
      image: placeholderImage
    },
    {
      id: 8,
      title: "Bible Study Group",
      category: "Study",
      image: placeholderImage
    }
  ]
};
