 export const projects = [
    {
      title: "Abonelik Takip",
      description:
        "Zustand ve TypeScript ile geliştirilmiş, kullanıcı dostu abonelik yönetim sistemi. Karanlık mod desteği ve dinamik kategori sistemi içerir.",
      longDescription:
        "SubTracker, kullanıcıların dijital aboneliklerini (Netflix, Spotify, iCloud vb.) tek bir noktadan yönetmelerini sağlayan modern bir mobil uygulamadır. Zustand ile global state yönetimi, TypeScript ile tip güvenliği ve Lucide Icons ile şık bir arayüz sunar.",
      tech: ["React Native", "Zustand", "TypeScript", "Lucide Icons"],
      features: [
        "Merkezi state yönetimi (Zustand)",
        "Dinamik Açık/Koyu tema geçişi",
        "Abonelik kategorizasyonu ve takibi",
        "Bütçe analizi ve harcama görselleştirme",
      ],
      github: "https://github.com/simayedik/sub-tracker", // Kendi repo linkinle değiştir!
      images: [
        "/images/abonelikTakip.png",
          "/images/abonelikTakip1.png",
      ], 
      category: "Mobil Uygulama",
    },
    {
      title: "Code Talks",
      description:
        "React Native ve Firebase ile geliştirilen, kullanıcıların odalar oluşturabildiği ve var olan odalara girip sohbet edebildiği gerçek zamanlı bir uygulama.",
      longDescription:
        "Code Talks, yazılımcıların farklı konularda odalar oluşturarak veya mevcut odalara katılarak gerçek zamanlı sohbet edebilecekleri bir platformdur. Firebase Realtime Database kullanılarak anlık mesajlaşma ve oda yönetimi sağlanmıştır.",
      tech: ["React Native", "Firebase"],
      features: [
        "Gerçek zamanlı mesajlaşma",
        "Kullanıcılar oda oluşturabilir",
        "Her oda için ayrı sohbet alanı",
      ],
      github: "https://github.com/simayedik/codeTalks",
      images: [
        "/images/codeTalks.png",
        "/images/codeTalks1.png",
      ],
      demo: "https://code-talks-demo.vercel.app",
      category: "Mobil Uygulama",
    },
    {
      title: "Hisse Tahmin App",
      description:
        "Hisselerin kapanış fiyatlarını tahmin eden ve sonuçları grafikler ile gösteren bir mobil uygulama.",
      longDescription:
        "Bu uygulama, finansal veri analizini kullanıcı dostu bir arayüzle buluşturur. Victory Native kütüphanesi ile hisse senedi fiyat tahminlerini ve geçmiş verileri etkileyici grafiklerle görselleştirir.",
      tech: ["React Native", "Firebase", "Victory Native"],
      features: [
        "Hisse senedi fiyat tahmini",
        "Veri görselleştirme (grafik)",
        "Kullanıcı dostu arayüz",
      ],
      github: "https://github.com/simayedik/Portfolyo",
      images: [
        "/images/hisseTahmin.png",
        "/images/hisseTahmin1.png",
      ],
      category: "Mobil Uygulama",
    },

  ];