import { useState } from 'react';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const characters = [
  {
    name: 'Мишка Тедди',
    description: 'Добрый и обаятельный медвежонок',
    emoji: '🧸',
    age: '3-8 лет',
    color: 'bg-amber-100'
  },
  {
    name: 'Единорожка Луна',
    description: 'Волшебная лошадка с рогом',
    emoji: '🦄',
    age: '4-10 лет',
    color: 'bg-purple-100'
  },
  {
    name: 'Зайка Пушок',
    description: 'Весёлый и активный зайчик',
    emoji: '🐰',
    age: '2-7 лет',
    color: 'bg-pink-100'
  },
  {
    name: 'Котик Мурзик',
    description: 'Игривый и ласковый котёнок',
    emoji: '🐱',
    age: '3-9 лет',
    color: 'bg-orange-100'
  }
];

const services = [
  {
    title: 'День рождения',
    description: 'Полная программа развлечений с играми и конкурсами',
    price: 'от 5000 ₽',
    duration: '1-2 часа',
    icon: 'Cake'
  },
  {
    title: 'Детский праздник',
    description: 'Выступление персонажей на школьных и садиковских праздниках',
    price: 'от 4000 ₽',
    duration: '1 час',
    icon: 'PartyPopper'
  },
  {
    title: 'Корпоратив',
    description: 'Развлечение детей на корпоративных мероприятиях',
    price: 'от 6000 ₽',
    duration: '1-3 часа',
    icon: 'Users'
  },
  {
    title: 'Фотосессия',
    description: 'Ростовая кукла для фото и видео',
    price: 'от 3000 ₽',
    duration: '30 минут',
    icon: 'Camera'
  }
];

const reviews = [
  {
    name: 'Анна Петрова',
    text: 'Заказывали Единорожку на день рождения дочки. Дети в восторге! Аниматор очень профессиональный, придумал столько интересных игр!',
    rating: 5,
    avatar: '👩'
  },
  {
    name: 'Михаил Сидоров',
    text: 'Мишка Тедди покорил сердце нашего сына! Весь праздник прошёл на ура. Спасибо команде ЛяЛя-БуБу!',
    rating: 5,
    avatar: '👨'
  },
  {
    name: 'Елена Кузнецова',
    text: 'Очень довольны качеством работы! Зайка Пушок был невероятно милым. Обязательно обратимся снова!',
    rating: 5,
    avatar: '👩‍🦰'
  }
];

const galleryImages = [
  'https://cdn.poehali.dev/projects/6d81855f-6506-447a-8722-8789a16ddfa9/files/df115368-fd0f-403d-8013-b858c96a8d46.jpg',
  'https://cdn.poehali.dev/projects/6d81855f-6506-447a-8722-8789a16ddfa9/files/8314a8c2-9141-47bd-bbec-e1b4b9a5ef41.jpg',
  'https://cdn.poehali.dev/projects/6d81855f-6506-447a-8722-8789a16ddfa9/files/12acd709-5946-485e-a7d7-bee853c91f54.jpg'
];

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <>
      <SEO />
      
      <div className="min-h-screen">
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border shadow-sm">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-4xl">🎪</span>
              <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                ЛяЛя-БуБу
              </h1>
            </div>
            <div className="hidden md:flex gap-6">
              <a href="#characters" className="hover:text-primary transition-colors font-medium">Персонажи</a>
              <a href="#services" className="hover:text-primary transition-colors font-medium">Услуги</a>
              <a href="#gallery" className="hover:text-primary transition-colors font-medium">Галерея</a>
              <a href="#reviews" className="hover:text-primary transition-colors font-medium">Отзывы</a>
              <a href="#contacts" className="hover:text-primary transition-colors font-medium">Контакты</a>
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full">
              Заказать
            </Button>
          </div>
        </nav>
      </header>

      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-yellow-50">
        <div className="absolute top-10 left-10 text-6xl animate-bounce">🎈</div>
        <div className="absolute top-20 right-20 text-5xl animate-bounce delay-100">🎉</div>
        <div className="absolute bottom-20 left-1/4 text-7xl animate-bounce delay-200">⭐</div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Волшебные праздники <br />
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              для ваших детей!
            </span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Ростовые куклы и профессиональные аниматоры сделают любое мероприятие незабываемым
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all">
              <Icon name="Phone" className="mr-2" size={20} />
              Позвонить нам
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all">
              Смотреть персонажей
            </Button>
          </div>
        </div>
      </section>

      <section id="characters" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Наши персонажи 🎭
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Выберите любимого героя для вашего праздника
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {characters.map((character, index) => (
              <Card 
                key={index} 
                className={`${character.color} border-none shadow-lg hover:shadow-2xl transition-all hover:scale-105 cursor-pointer`}
              >
                <CardHeader className="text-center pb-4">
                  <div className="text-8xl mb-4 animate-bounce">{character.emoji}</div>
                  <CardTitle className="text-2xl">{character.name}</CardTitle>
                  <CardDescription className="text-base">{character.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="inline-block bg-white/60 px-4 py-2 rounded-full">
                    <span className="text-sm font-medium">Возраст: {character.age}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Наши услуги 🎪
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Индивидуальный подход к каждому празднику
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all hover:shadow-xl">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-2xl">
                      <Icon name={service.icon as any} size={32} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold text-primary">{service.price}</div>
                    <div className="text-sm text-muted-foreground flex items-center gap-1">
                      <Icon name="Clock" size={16} />
                      {service.duration}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Галерея 📸
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Счастливые моменты наших праздников
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all group cursor-pointer"
              >
                <img 
                  src={image} 
                  alt={`Галерея ${index + 1}`} 
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Отзывы родителей 💬
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Что говорят о нас наши клиенты
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="border-none shadow-lg bg-white">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-4xl">{review.avatar}</div>
                    <div>
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <div className="flex gap-1 mt-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <span key={i} className="text-yellow-400">⭐</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">&ldquo;{review.text}&rdquo;</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-gradient-to-br from-purple-100 to-pink-100">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Свяжитесь с нами 📞
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Оставьте заявку, и мы подберём лучший праздник для вашего ребёнка
            </p>
            
            <Card className="border-none shadow-2xl bg-white">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя</label>
                    <Input 
                      placeholder="Как вас зовут?"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="rounded-xl border-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <Input 
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                      className="rounded-xl border-2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Сообщение</label>
                    <Textarea 
                      placeholder="Расскажите о вашем празднике..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={4}
                      className="rounded-xl border-2"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90 text-white text-lg py-6 rounded-full"
                  >
                    Отправить заявку 🎉
                  </Button>
                </form>

                <div className="mt-8 pt-8 border-t">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <Icon name="Phone" className="text-primary" size={24} />
                      <span className="font-medium">+7 (999) 123-45-67</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Icon name="Mail" className="text-primary" size={24} />
                      <span className="font-medium">info@lyalya-bubu.ru</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-primary to-accent text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-5xl">🎪</span>
            <h3 className="text-3xl font-bold">ЛяЛя-БуБу</h3>
          </div>
          <p className="text-lg mb-4">Аниматорское агенство для детских праздников</p>
          <p className="text-sm opacity-80">© 2024 ЛяЛя-БуБу. Все права защищены.</p>
        </div>
      </footer>
    </div>
    </>
  );
};

export default Index;