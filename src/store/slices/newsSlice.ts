import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface News {
  id: string;
  title: string;
  content: string;
  date: string;
  image?: string;
  type: 'news' | 'announcement';
  priority?: 'high' | 'medium' | 'low';
  location?: string;
  time?: string;
  contact?: string;
}

interface NewsState {
  news: News[];
  announcements: News[];
  loading: boolean;
  error: string | null;
}

const initialState: NewsState = {
  news: [
    {
      id: '1',
      title: 'Okulumuz TÜBİTAK Yarışmasında Birinci Oldu',
      content: 'Okulumuz öğrencileri TÜBİTAK 4006 Bilim Fuarı\'nda "Akıllı Sera Sistemleri" projesiyle birincilik ödülü kazandı. Proje ekibinde yer alan 8-A sınıfı öğrencilerimiz Ahmet Yılmaz, Ayşe Demir ve Mehmet Kaya\'yı tebrik ederiz. \n\nProje Detayları:\n- Sera içi sıcaklık ve nem kontrolü\n- Otomatik sulama sistemi\n- Mobil uygulama ile uzaktan kontrol\n- Enerji tasarruflu LED aydınlatma\n\nÖdül töreni 25 Mart 2024 tarihinde okul konferans salonunda yapılacaktır.',
      date: '2024-03-15',
      image: 'https://picsum.photos/800/400',
      type: 'news',
      priority: 'high',
      location: 'Konferans Salonu',
      time: '14:00',
      contact: 'Fen Bilgisi Öğretmeni Zeynep Hanım',
    },
    {
      id: '2',
      title: 'Bahar Şenliği Tarihi Açıklandı',
      content: 'Geleneksel bahar şenliğimiz 15 Nisan 2024 tarihinde okul bahçesinde gerçekleştirilecektir.\n\nEtkinlik Programı:\n09:00 - Açılış Konuşması\n09:30 - Öğrenci Gösterileri\n10:30 - Müzik Dinletisi\n11:30 - Spor Gösterileri\n12:30 - Öğle Arası\n13:30 - Bilim Sergisi\n14:30 - Yarışmalar\n15:30 - Ödül Töreni\n16:00 - Kapanış\n\nTüm velilerimiz davetlidir.',
      date: '2024-03-14',
      type: 'announcement',
      priority: 'medium',
      location: 'Okul Bahçesi',
      time: '09:00 - 16:00',
      contact: 'Müdür Yardımcısı Ali Bey',
    }
  ],
  announcements: [
    {
      id: '3',
      title: 'Veli Toplantısı Hakkında',
      content: '2024 Mart ayı veli toplantısı 20 Mart Çarşamba günü yapılacaktır.\n\nToplantı Programı:\n\n1. Sınıflar: 09:00 - 10:00\n2. Sınıflar: 10:00 - 11:00\n3. Sınıflar: 11:00 - 12:00\n4. Sınıflar: 13:00 - 14:00\n\nGörüşülecek Konular:\n- Öğrenci başarı durumları\n- Devam-devamsızlık bilgileri\n- Sınav takvimi\n- Ödev takibi\n- Sosyal etkinlikler\n\nKatılımınız önemle rica olunur.',
      date: '2024-03-12',
      type: 'announcement',
      priority: 'high',
      location: 'Sınıf Derslikleri',
      time: '09:00 - 14:00',
      contact: 'Sınıf Öğretmenleri',
    }
  ],
  loading: false,
  error: null,
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setNews: (state, action: PayloadAction<News[]>) => {
      state.news = action.payload;
    },
    setAnnouncements: (state, action: PayloadAction<News[]>) => {
      state.announcements = action.payload;
    },
    addNews: (state, action: PayloadAction<News>) => {
      if (action.payload.type === 'news') {
        state.news.unshift(action.payload);
      } else {
        state.announcements.unshift(action.payload);
      }
    },
  },
});

export const { setNews, setAnnouncements, addNews } = newsSlice.actions;
export default newsSlice.reducer; 